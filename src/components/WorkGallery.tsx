import React from "react";
interface GalleryCardProps {
    org: string;
    title: string;
    tags: string[];
    year: string;
    description: string;
    classname?: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ org, title, tags, year, description, classname }) => (
    <div className={`flex flex-col gap-3 rounded-[15px] border p-10 ${classname}`}>
        <div className="flex justify-between">
            <h3>{org}</h3>
            <h3>{year}</h3>
        </div>
        <div className="flex flex-col gap-5 pt-9 border-t border-white">
            <div className="flex flex-col gap-3">
                <h1 className="text-4xl">{title}</h1>
                <div className="flex gap-2">
                    {tags.map((tag, index) => (
                        <div key={index} className="p-2 rounded-[10px] border">{tag}</div>
                    ))}
                </div>
            </div>
            <p>{description}</p>
        </div>
    </div>
);


function WorkGallery() {
    return (
        <section className="col-span-full col-start-2 col-end-16 grid-cols-14 max-h-screen overflow-y-clip font-neulisneue">
            <div className="col-span-6 flex w-full pb-48 gap-5">
                <div className="flex w-2/5 flex-col gap-8 text-white">
                    <GalleryCard
                        org="AnswersAi"
                        title="Webapp Revamp"
                        tags={['UX + UI', 'React + Tailwind', 'Shipped']}
                        year="2024"
                        description="A complete UI & UX overhaul of an AI webapp product, focused on creating a distinct & cohesive visual identity while improving usability and site hierarchy."
                    />
                    <GalleryCard
                        classname="rotate-4 -ml-8 mr-8"
                        org="AnswersAi"
                        title="Webapp Revamp"
                        tags={['UX + UI', 'React + Tailwind', 'Shipped']}
                        year="2024"
                        description="A complete UI & UX overhaul of an AI webapp product, focused on creating a distinct & cohesive visual identity while improving usability and site hierarchy."
                    />
                    <GalleryCard
                        classname="rotate-8 -ml-24 mr-24"
                        org="AnswersAi"
                        title="Webapp Revamp"
                        tags={['UX + UI', 'React + Tailwind', 'Shipped']}
                        year="2024"
                        description="A complete UI & UX overhaul of an AI webapp product, focused on creating a distinct & cohesive visual identity while improving usability and site hierarchy."
                    />
                </div>
                <div className="w-3/5 flex border border-white rounded-[20px]">
                    <img></img>
                </div>
            </div>
        </section>
    );
}

export default WorkGallery;