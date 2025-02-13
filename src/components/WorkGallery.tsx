import { useEffect, useRef, useState } from "react";
import GalleryCard from "./GalleryCard";

interface GalleryData {
  org: string;
  title: string;
  tags: string[];
  year: string;
  description: string;
  image: string;
}

function WorkGallery() {
  const galleryCardData: GalleryData[] = [
    {
      org: "AnswersAi",
      title: "Webapp Revamp",
      tags: ["UX + UI", "React + Tailwind", "Shipped"],
      year: "2024",
      description:
        "A complete UI & UX overhaul of an AI webapp product, focused on creating a distinct & cohesive visual identity while improving usability and site hierarchy.",
      image: "/images/answers-ai-1.png",
    },
    {
      org: "AnswersAi",
      title: "Website Refresh",
      tags: ["UX + UI", "React + Tailwind", "Shipped"],
      year: "2024",
      description:
        "A brand new marketing site revamp, focusing on modern design principles and better performance.",
      image: "/images/answers-ai-2.png",
    },
    {
      org: "AnswersAi",
      title: "Another Project",
      tags: ["UX + UI", "React + Tailwind", "Shipped"],
      year: "2024",
      description:
        "Another webapp project revamp, focusing on enhancing user experience and aesthetics.",
      image: "/images/answers-ai-3.png",
    },
    {
        org: "AnswersAi",
        title: "Another Project",
        tags: ["UX + UI", "React + Tailwind", "Shipped"],
        year: "2024",
        description:
          "Another webapp project revamp, focusing on enhancing user experience and aesthetics.",
        image: "/images/answers-ai-3.png",
      },
      {
        org: "AnswersAi",
        title: "Another Project",
        tags: ["UX + UI", "React + Tailwind", "Shipped"],
        year: "2024",
        description:
          "Another webapp project revamp, focusing on enhancing user experience and aesthetics.",
        image: "/images/answers-ai-3.png",
      },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (listRef.current && cardRefs.current[activeIndex]) {
      const listContainer = listRef.current;
      const activeCard = cardRefs.current[activeIndex];

      // Scroll so the active card moves to the top
      listContainer.scrollTo({
        top: activeCard.offsetTop - listContainer.offsetTop,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  return (
    <section className="col-span-10 col-start-2 grid grid-cols-2 gap-5 max-h-screen font-neulisneue text-white ">
      {/* Left Column: Scrollable List of Cards */}
      <div ref={listRef} className="flex flex-col gap-4 h-[80vh] p-4 overflow-y-auto overflow-x-hidden custom-scrollbar">
        {galleryCardData.map((card, index) => {
          const isActive = index === activeIndex;
          return (
            <div key={index} ref={(el) => (cardRefs.current[index] = el)}>
              <GalleryCard
                org={card.org}
                title={card.title}
                tags={card.tags}
                year={card.year}
                description={card.description}
                image={card.image}
                isActive={isActive}
                onClick={() => setActiveIndex(index)}
                classname={isActive ? "scale-101 border-blue-500 bg-blue-800/20 snap-always" : "snap-mandatory"}
              />
            </div>
          );
        })}
      </div>

      {/* Right Column: Image of Active Card */}
      <div className="flex mt-1 p-4 items-center justify-center border border-white rounded-[20px]">
        <img
          src={galleryCardData[activeIndex].image}
          alt={galleryCardData[activeIndex].title}
          className="max-w-full max-h-[80vh] object-contain"
        />
      </div>
    </section>
  );
}

export default WorkGallery;
