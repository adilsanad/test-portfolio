import React from 'react';
import DivAnimation from './DivAnimation';

export interface HiFiSection {
    id?: string;
    title: string;
    description: React.ReactNode;
    image?: string;
}

interface HiFiScrollerProps {
    id?: string;
    sections: HiFiSection[];
    sectionBg?: string;
    className?: string;
    titleClassName?: string;
    label?: string;
    imageContainerClassName?: string;
    imageContainerStyle?: React.CSSProperties;
    renderImage?: (section: HiFiSection, index: number) => React.ReactNode;
}

const HiFiScroller = ({
    id,
    sections,
    sectionBg = 'bg-white',
    className,
    titleClassName = 'font-averia-serif font-medium',
    label = 'HiFi Screens',
    imageContainerClassName,
    imageContainerStyle,
    renderImage,
}: HiFiScrollerProps) => {
    return (
        <div id={id} className={`col-span-full flex flex-col ${className ?? ''}`}>
            {sections.map((section, index) => (
                <DivAnimation
                    key={section.id ?? section.title}
                    className={`relative col-span-full flex max-md:flex-col gap-24 md:py-36 md:px-24 ${sectionBg} border border-neutral-100 custom-scrollbar ${
                        index === 0 ? 'rounded-[30px_30px_0px_0px]' : ''
                    } ${
                        index === sections.length - 1 ? 'rounded-[0px_0px_30px_30px]' : ''
                    }`}
                >
                    {/* Left sticky text panel — 1/3 width */}
                    <div className="flex flex-col gap-3 max-md:py-18 max-md:pb-12 max-md:p-10 md:flex-[1] md:h-screen -top-8 md:top-32 sticky max-md:bg-primary-100">
                        <h3 className="font-albert text-neutral-500">{label}</h3>
                        <div className="flex flex-col pt-5 md:pt-9 gap-4 md:gap-8 border-t border-neutral-100">
                            <h1 className={`${titleClassName} tracking-tight text-[1.5em] md:text-[2em] text-neutral-900`}>
                                {section.title}
                            </h1>
                            <div className="font-albert max-md:text-sm text-lg">{typeof section.description === 'string' ? <p>{section.description}</p> : section.description}</div>
                        </div>
                    </div>

                    {/* Right image area — 2/3 width */}
                    <div className="flex flex-col md:flex-[2] gap-4 custom-scrollbar max-md:overflow-hidden">
                        {renderImage ? (
                            renderImage(section, index)
                        ) : (
                            <div
                                className={`w-full overflow-hidden ${imageContainerClassName ?? ''}`}
                                style={imageContainerStyle}
                            >
                                {section.image ? (
                                    <img src={section.image} alt={section.title} className="w-full object-contain" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <p className="text-neutral-500/40 text-lg">{section.title}</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </DivAnimation>
            ))}
        </div>
    );
};

export default HiFiScroller;
