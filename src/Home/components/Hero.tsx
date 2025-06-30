import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { TypingAnimation } from "../../ui/TypingAnimation";

const Hero = ({ isMobile, className }: { isMobile: boolean, className?: string }) => {
    const { elementRef, isVisible, animationClasses } = useScrollAnimation({
        threshold: 0.2,
        rootMargin: '0px',
        delay: 500,
    });
    const phrases = [
        "front-end dev",
        "creative thinker",
        "problem solver"
    ];
    return (
        <section
            ref={elementRef}
            className={`${className} ${animationClasses} col-span-full max-md:px-8 md:col-start-2 flex flex-col gap-8 text-white font-neulisneue py-24 pt-24 md:pt-48 z-20`}
        >
            <p className="text-2xl md:text-4xl">Hi, I'm Adil Sanad.</p>
            <div className="flex max-md:flex-col h-max md:gap-6 text-[3.5rem] md:text-[5rem] leading-[3.5rem]">
                <p>Product <span className="font-bold">Designer</span></p> ·
                <TypingAnimation
                    content={phrases}
                    className="text-white/30"
                    typingSpeed={80}
                    deletingSpeed={40}
                    pauseBeforeDelete={1500}
                    pauseBeforeNext={500}
                    loop={true}
                />
            </div>
        </section>
    );
}

export default Hero;