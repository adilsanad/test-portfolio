import { act, useEffect, useRef, useState } from "react";
import GalleryCard from "./GalleryCard";
import WebsiteRevampCover from '../../assets/images/websiterevampcover.png';
import RedArrow from '../../assets/workarrow.svg';
import { Link } from "react-router-dom";

interface GalleryData {
  org: string;
  title: string;
  tags: string[];
  year: string;
  description: string;
  image: string;
  link: string;
}

function WorkGallery({id}: {id:string}) {
  const galleryCardData: GalleryData[] = [
    {
      org: "AnswersAi",
      title: "Webapp Revamp",
      tags: ["UX + UI", "React + Tailwind", "Shipped"],
      year: "2024",
      description:
        "A complete UI & UX overhaul of an AI webapp product, focused on creating a distinct & cohesive visual identity while improving usability and site hierarchy.",
      image: WebsiteRevampCover,
      link:'/aai-webapp-revamp'
    },
    {
      org: "AnswersAi",
      title: "Website Refresh",
      tags: ["UX + UI", "React + Tailwind", "Shipped"],
      year: "2024",
      description:
        "A brand new marketing site revamp, focusing on modern design principles and better performance.",
      image: "/images/answers-ai-2.png",
      link:'/aai-webapp-revamp'
    },
    {
      org: "AnswersAi",
      title: "Cyclo",
      tags: ["UX + UI", "React + Tailwind", "Shipped"],
      year: "2024",
      description:
        "Another webapp project revamp, focusing on enhancing user experience and aesthetics.",
      image: "/images/answers-ai-3.png",
      link:'/cyclo'
    },
    {
      org: "AnswersAi",
      title: "Another Project",
      tags: ["UX + UI", "React + Tailwind", "Shipped"],
      year: "2024",
      description:
        "Another webapp project revamp, focusing on enhancing user experience and aesthetics.",
      image: "/images/answers-ai-3.png",
      link:'/aai-webapp-revamp'
    },
    {
      org: "AnswersAi",
      title: "Another Project",
      tags: ["UX + UI", "React + Tailwind", "Shipped"],
      year: "2024",
      description:
        "Another webapp project revamp, focusing on enhancing user experience and aesthetics.",
      image: "/images/answers-ai-3.png",
      link:'/aai-webapp-revamp'
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
    <section id={id} className="relative col-span-14 col-start-2 grid grid-cols-14 gap-5 max-h-screen font-neulisneue text-white ">
      {/* Left Column: Scrollable List of Cards */}
      <div className="flex gap-4 absolute -top-24 right-12">
      <img className='h-20' src={RedArrow}/>
      <p className="font-light font-neuliscursive text-white/30 text-4xl rotate-4 pt-1">work samples</p>
      </div>
      <div ref={listRef} className="col-span-5 flex flex-col gap-4 h-[80vh] py-4 overflow-y-auto overflow-x-hidden custom-scrollbar snap-y snap-mandatory">
        {galleryCardData.map((card, index) => {
          const isActive = index === activeIndex;
          return (
            <div key={index} ref={(el) => (cardRefs.current[index] = el)} >
              <GalleryCard
                org={card.org}
                title={card.title}
                tags={card.tags}
                year={card.year}
                description={card.description}
                image={card.image}
                isActive={isActive}
                onClick={() => setActiveIndex(index)}
                className={`duration-500 ${isActive ? 'rotate-0' : index % 2 === 0 ? 'rotate-2' : '-rotate-2'}`}
              />
            </div>
          );
        })}
      </div>

      {/* Right Column: Image of Active Card */}
      <Link to={galleryCardData[activeIndex].link} className="col-span-9 p-[2px] mt-4 bg-gradient-to-tl from-white/30 to-white/5 rounded-[20px]">
        <div className="flex p-4 pb-0 items-end bg-[#0e0e0e] rounded-[18px] h-full w-full">
          <img
            src={galleryCardData[activeIndex].image}
            alt={galleryCardData[activeIndex].title}
            className="max-w-full max-h-[80vh] object-contain"
          />
        </div>
      </Link>
    </section>
  );
}

export default WorkGallery;
