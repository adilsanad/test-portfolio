import React from "react";

interface GalleryCardProps {
    org: string;
    title: string;
    tags: string[];
    year: string;
    description: string;
    image: string;           // new: path or URL to the image
    className?: string;
    isActive?: boolean;      // optional: to highlight the active card
    onClick?: () => void;    // optional: click handler to set active index
    link?: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
    org,
    title,
    tags,
    year,
    description,
    image,
    className,
    isActive,
    onClick,
    link
}) => {
    return (
        <div
            onClick={onClick}
            className={`
                flex flex-col gap-3 rounded-[15px] p-[2px] cursor-pointer mt-1 bg-black/30
                transition-all snap-mandatory
                ${isActive ? " bg-gradient-to-tr from-white/30 to-white/6 opacity-100" : "opacity-40"} 
                ${className}
            `}
        >
            <div className={`flex flex-col gap-3 p-9 bg-[#0e0e0e] w-full h-full rounded-[12px] cursor-pointer`}>
                <div className="flex justify-between">
                    <h3>{org}</h3>
                    <h3>{year}</h3>
                </div>
                <div className="flex flex-col gap-5 pt-9 border-t border-white">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-4xl">{title}</h1>
                        <div className="flex gap-2">
                            {tags.map((tag, index) => (
                                <div key={index} className={`p-2 rounded-[10px] border
                                ${tag === 'UX + UI' ? 'bg-[#4F78FF]/10 border-[#4F78FF]/30 text-[#4F78FF]' :
                                        tag === 'React + Tailwind' ? 'bg-[#FF6246]/10 border-[#FF6246]/30 text-[#FF6246]' :
                                            tag === 'Shipped' ? 'bg-[#5BFF8C]/10 border-[#5BFF8C]/30 text-[#5BFF8C]' :
                                                tag === 'Case Study' ? 'bg-[#A55BFF]/10 border-[#A55BFF]/30 text-[#A55BFF]' :
                                                    'bg-[#4F78FF]/10 border-[#4F78FF]/30 text-[#4F78FF]'
                                    }`}

                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="opacity-50">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default GalleryCard;
