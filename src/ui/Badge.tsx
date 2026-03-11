const palettes = {
    orange: 'border-primary-500/30 bg-primary-500/10 text-primary-500',
    brown: 'border-primary-700/30 bg-primary-700/10 text-primary-700',
    red: 'border-red-500/30 bg-red-500/10 text-red-500',
    green: 'border-green-600/30 bg-green-600/10 text-green-600',
    blue: 'border-[#4F78FF]/30 bg-[#4F78FF]/10 text-[#4F78FF]',
    purple: 'border-[#A55BFF]/30 bg-[#A55BFF]/10 text-[#A55BFF]',
} as const;

export type BadgePalette = keyof typeof palettes;

interface BadgeProps {
    label: string;
    color?: BadgePalette;
    className?: string;
}

const Badge = ({ label, color = 'orange', className }: BadgeProps) => {
    return (
        <div className={`px-3 p-2 md:px-4 md:py-3 rounded-[5px] border transition-all ${palettes[color]} ${className ?? ''}`}>
            {label}
        </div>
    );
};

export default Badge;
