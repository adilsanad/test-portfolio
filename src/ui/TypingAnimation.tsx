import { useEffect, useState, useRef, ReactNode } from 'react';
import React from 'react';

interface TypingAnimationProps {
    content: string | string[] | ReactNode | ReactNode[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseBeforeDelete?: number;
    pauseBeforeNext?: number;
    cursorVisible?: boolean;
    cursorChar?: string;
    cursorBlinkSpeed?: number;
    loop?: boolean;
    startDelay?: number;
    onComplete?: () => void;
    className?: string;
    cursorClassName?: string;
    isVisible?: boolean;
}

interface TextPath {
    text: string;
    path: number[];
}

function extractTextPaths(node: ReactNode, path: number[] = []): TextPath[] {
    if (typeof node === 'string' || typeof node === 'number') {
        return [{ text: String(node), path }];
    }

    if (Array.isArray(node)) {
        return node.flatMap((child, index) =>
            extractTextPaths(child, [...path, index])
        );
    }

    if (React.isValidElement(node)) {
        return extractTextPaths(node.props.children, path);
    }

    return [];
}

function rebuildJSX(
    node: ReactNode,
    currentCharIndex: number,
    charCount: { count: number }
): ReactNode {
    if (typeof node === 'string' || typeof node === 'number') {
        const text = String(node);
        const charsToShow = Math.max(0, currentCharIndex - charCount.count);
        const visible = text.slice(0, charsToShow);
        charCount.count += text.length;
        return visible;
    }

    if (Array.isArray(node)) {
        return node.map((child, index) =>
            rebuildJSX(child, currentCharIndex, charCount)
        );
    }

    if (React.isValidElement(node)) {
        const children = rebuildJSX(node.props.children, currentCharIndex, charCount);
        return React.cloneElement(node, { ...node.props, children });
    }

    return null;
}

export function TypingAnimation({
    content,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseBeforeDelete = 2000,
    pauseBeforeNext = 500,
    cursorVisible = true,
    cursorChar = '|',
    cursorBlinkSpeed = 530,
    loop = true,
    startDelay = 0,
    onComplete,
    className = '',
    cursorClassName = '',
    isVisible = true
}: TypingAnimationProps) {
    const [displayContent, setDisplayContent] = useState<ReactNode>('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(cursorVisible);
    const [isComplete, setIsComplete] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    const contentArray = Array.isArray(content) ? content : [content];
    const isMultipleContent = contentArray.length > 1;
    const shouldLoop = isMultipleContent && loop;

    // Handle cursor blinking
    useEffect(() => {
        if (!cursorVisible || !hasStarted) {
            setShowCursor(false);
            return;
        }

        const interval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, cursorBlinkSpeed);

        return () => clearInterval(interval);
    }, [cursorVisible, cursorBlinkSpeed, hasStarted]);

    // Reset when visibility changes
    useEffect(() => {
        if (!isVisible) {
            // Reset all states when component becomes invisible
            setDisplayContent('');
            setCurrentIndex(0);
            setIsDeleting(false);
            setCharIndex(0);
            setIsComplete(false);
            setHasStarted(false);
        }
    }, [isVisible]);

    // Handle start delay
    useEffect(() => {
        if (!hasStarted && isVisible) {
            const startTimeout = setTimeout(() => {
                setHasStarted(true);
            }, startDelay);
            return () => clearTimeout(startTimeout);
        }
    }, [hasStarted, isVisible, startDelay]);

    // Main animation effect
    useEffect(() => {
        // Early return if not ready to animate
        if (!hasStarted || !isVisible) return;

        const currentItem = contentArray[currentIndex];
        const isJSX = React.isValidElement(currentItem) || Array.isArray(currentItem);

        let timeout: number;

        if (typeof currentItem === 'string' || typeof currentItem === 'number') {
            const str = String(currentItem);

            if (!isDeleting) {
                if (charIndex < str.length) {
                    timeout = setTimeout(() => {
                        setDisplayContent(str.slice(0, charIndex + 1));
                        setCharIndex(charIndex + 1);
                    }, typingSpeed);
                } else {
                    if (!isMultipleContent) {
                        setIsComplete(true);
                        onComplete?.();
                    } else {
                        timeout = setTimeout(() => {
                            setIsDeleting(true);
                        }, pauseBeforeDelete);
                    }
                }
            } else {
                if (charIndex > 0) {
                    timeout = setTimeout(() => {
                        setDisplayContent(str.slice(0, charIndex - 1));
                        setCharIndex(charIndex - 1);
                    }, deletingSpeed);
                } else {
                    timeout = setTimeout(() => {
                        const nextIndex = (currentIndex + 1) % contentArray.length;
                        if (nextIndex === 0 && !shouldLoop) {
                            setIsComplete(true);
                            onComplete?.();
                        } else {
                            setCurrentIndex(nextIndex);
                            setIsDeleting(false);
                        }
                    }, pauseBeforeNext);
                }
            }
        } else if (isJSX) {
            const allTextPaths = extractTextPaths(currentItem);
            const fullTextLength = allTextPaths.reduce((sum, t) => sum + t.text.length, 0);

            if (!isDeleting) {
                if (charIndex < fullTextLength) {
                    timeout = setTimeout(() => {
                        const charCount = { count: 0 };
                        const partial = rebuildJSX(currentItem, charIndex + 1, charCount);
                        setDisplayContent(partial);
                        setCharIndex(charIndex + 1);
                    }, typingSpeed);
                } else {
                    if (!isMultipleContent) {
                        setIsComplete(true);
                        onComplete?.();
                    } else {
                        timeout = setTimeout(() => {
                            setIsDeleting(true);
                        }, pauseBeforeDelete);
                    }
                }
            } else {
                if (charIndex > 0) {
                    timeout = setTimeout(() => {
                        const charCount = { count: 0 };
                        const partial = rebuildJSX(currentItem, charIndex - 1, charCount);
                        setDisplayContent(partial);
                        setCharIndex(charIndex - 1);
                    }, deletingSpeed);
                } else {
                    timeout = setTimeout(() => {
                        const nextIndex = (currentIndex + 1) % contentArray.length;
                        if (nextIndex === 0 && !shouldLoop) {
                            setIsComplete(true);
                            onComplete?.();
                        } else {
                            setCurrentIndex(nextIndex);
                            setIsDeleting(false);
                        }
                    }, pauseBeforeNext);
                }
            }
        }

        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }, [
        hasStarted,
        isVisible,
        charIndex,
        currentIndex,
        isDeleting,
        contentArray,
        typingSpeed,
        deletingSpeed,
        pauseBeforeDelete,
        pauseBeforeNext,
        isMultipleContent,
        shouldLoop,
        onComplete
    ]);

    return (
        <span className={`flex justify-between`}>
            <div className={`flex items-center ${className}`}>
                {displayContent}
                {showCursor && !isComplete && (
                    <span className={cursorClassName}>{cursorChar}</span>
                )}
            </div>
            <span className={`${className} opacity-0`}> </span>
        </span>
    );
}