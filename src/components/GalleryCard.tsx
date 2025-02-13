import React from "react";

interface GalleryCardProps {
    org: string;
    title: string;
    tags: string[];
    year: string;
    description: string;
    image: string;           // new: path or URL to the image
    classname?: string;
    isActive?: boolean;      // optional: to highlight the active card
    onClick?: () => void;    // optional: click handler to set active index
}

const GalleryCard: React.FC<GalleryCardProps> = ({
    org,
    title,
    tags,
    year,
    description,
    image,
    classname,
    isActive,
    onClick,
}) => {
    return (
        <div
            onClick={onClick}
            className={`
        flex flex-col gap-3 rounded-[15px] border p-10 cursor-pointer mt-1
        transition-all snap-mandatory
        ${isActive ? "border-blue-500 bg-blue-800/20 opacity-100" : "border-white opacity-60"} 
        ${classname}
      `}
        >
            <div className="flex justify-between">
                <h3>{org}</h3>
                <h3>{year}</h3>
            </div>
            <div className="flex flex-col gap-5 pt-9 border-t border-white">
                <div className="flex flex-col gap-3">
                    <h1 className="text-4xl">{title}</h1>
                    <div className="flex gap-2">
                        {tags.map((tag, index) => (
                            <div key={index} className="p-2 rounded-[10px] border">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default GalleryCard;
