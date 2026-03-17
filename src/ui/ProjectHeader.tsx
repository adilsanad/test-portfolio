import React from 'react';
import Badge, { BadgePalette } from './Badge';
import DivAnimation from './DivAnimation';

interface BadgeItem {
    label: string;
    color?: BadgePalette;
}

interface DetailItem {
    label: string;
    value: React.ReactNode;
}

interface ProjectHeaderProps {
    org: string;
    subtitle: string;
    title: string;
    badges: BadgeItem[];
    description: React.ReactNode;
    details: DetailItem[];
    liveLink?: string;
    isMobile: boolean;
}

const ProjectHeader = ({
    org,
    subtitle,
    title,
    badges,
    description,
    details,
    liveLink,
    isMobile,
}: ProjectHeaderProps) => {
    return (
        <DivAnimation className={`${isMobile ? 'col-span-full px-6' : 'col-span-10 col-start-4'} flex flex-col max-w-screen-xl w-full gap-24 pt-64`}>
            <div className="flex tracking-tight w-full justify-between border-b-2 border-[rgba(77,69,65,0.3)] pb-5 text-neutral-900/50">
                <p>{org}</p>
                <p>{subtitle}</p>
            </div>
            <div className="flex flex-col gap-12">
                <div className={`${isMobile ? 'flex-col items-start gap-8' : ''} flex w-full items-center justify-between`}>
                    <div className="flex-1 flex items-center gap-4">
                        <h1 className="font-averia-serif text-4xl md:text-6xl tracking-tight text-neutral-900">{title}</h1>
                        {liveLink && (
                            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all">
                                <svg className="h-4 md:h-5" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.3428 0.15686H9.84277C9.56663 0.15686 9.34277 0.380718 9.34277 0.65686C9.34277 0.933002 9.56663 1.15686 9.84277 1.15686L13.1357 1.15686L3.98922 10.3033L4.69633 11.0104L13.8428 1.86397L13.8428 5.15686C13.8428 5.433 14.0666 5.65686 14.3428 5.65686C14.6189 5.65686 14.8428 5.433 14.8428 5.15686L14.8428 0.65686C14.8428 0.380717 14.6189 0.15686 14.3428 0.15686Z" fill="#4d4541" />
                                    <path d="M1.5 5C1.5 4.17157 2.17157 3.5 3 3.5H6.5V2.5H3C1.61929 2.5 0.5 3.61929 0.5 5V12C0.5 13.3807 1.61929 14.5 3 14.5H10C11.3807 14.5 12.5 13.3807 12.5 12V8.5H11.5V12C11.5 12.8284 10.8284 13.5 10 13.5H3C2.17157 13.5 1.5 12.8284 1.5 12V5Z" fill="#4d4541" />
                                </svg>
                            </a>
                        )}
                    </div>
                    <div className="flex-1 flex gap-3 flex-wrap justify-end">
                        {badges.map((badge) => (
                            <Badge key={badge.label} label={badge.label} color={badge.color} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    {typeof description === 'string' ? <p>{description}</p> : description}
                    <div className="flex max-md:flex-col max-md:gap-5 justify-between">
                        {details.map((detail) => (
                            <div key={detail.label} className="flex md:flex-col gap-3">
                                <h3 className="font-averia-serif font-bold text-primary-500">{detail.label}</h3>
                                {typeof detail.value === 'string' ? <p>{detail.value}</p> : detail.value}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DivAnimation>
    );
};

export default ProjectHeader;
