import { useNavigate } from "react-router-dom";

interface GalleryCardProps {
    org: string;
    title: string;
    year: string;
    description: string;
    image: string;
    link: string;
    accentColor: string;
    gradient?: string;
    thumbPadding?: string;
    objectFit?: string;
    isMobile: boolean;
    disabled?: boolean;
}

const GalleryCard = ({
    org,
    title,
    year,
    description,
    image,
    link,
    accentColor,
    gradient,
    thumbPadding = 'p-12 pb-0',
    objectFit = 'object-cover',
    isMobile,
    disabled = false,
}: GalleryCardProps) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => !disabled && navigate(link)}
            className={`flex flex-col gap-4 group ${disabled ? 'cursor-default' : 'cursor-pointer'}`}
        >
            {/* Colored thumbnail area */}
            <div
                className={`relative overflow-hidden flex items-end rounded-[12px] aspect-[16/9] ${thumbPadding} overflow-hidden transition-transform duration-300 ${disabled ? '' : 'group-hover:scale-[0.99]'} border-2 border-[#E2E1E0]`}
                style={{ background: gradient || accentColor }}
            >
                <div className={`flex h-full w-full  ${disabled ? 'transition-all duration-300 group-hover:blur-sm group-hover:scale-105' : ''}`}>
                    {image ? (
                        <img
                            src={image}
                            alt={title}
                            className={`w-full h-full ${isMobile ? 'max-h-[200px]' : ''} ${objectFit} object-top ${disabled ? '' : 'group-hover:translate-y-2'} transition-transform duration-300`}
                        />
                    ) : (
                        <div className={`w-full ${isMobile ? 'h-[200px]' : 'h-[240px]'} flex items-center justify-center bg-neutral-100/30`}>
                            <p className="font-albert text-neutral-500/40 text-lg font-medium">{title}</p>
                        </div>
                    )}
                </div>
                {disabled && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="py-3 px-8 border border-white/30 rounded-full bg-black/20 backdrop-blur-sm">
                            <p className="font-albert text-white text-base font-medium">coming soon</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Card info */}
            <div className="flex flex-col gap-2 p-4">
                <div className="flex items-baseline justify-between">
                    <h3 className="font-averia-serif font-semibold text-neutral-900 text-2xl">
                        {title}
                    </h3>
                    <span className="font-albert font-medium text-neutral-500 text-lg">
                        {org}{org && ' · '}{year}
                    </span>
                </div>
                <p className="font-albert text-neutral-500 leading-relaxed text-lg">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default GalleryCard;