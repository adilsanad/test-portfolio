import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";

import PagrCover from '../../assets/images/pagr/pagrcover.png';
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

interface GalleryData {
  org: string;
  title: string;
  tags: string[];
  year: string;
  description: string;
  image: string;
  link: string;
  livelink?: string;
  accentColor: string;
  gradient?: string;
  thumbPadding?: string;
  objectFit?: string;
  disabled?: boolean;
}

function WorkGallery({ id, isMobile }: { id: string, isMobile: boolean }) {
  const { elementRef, isVisible, animationClasses } = useScrollAnimation({
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px',
    delay: 0,
    duration: 500,
  });

  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  const galleryCardData: GalleryData[] = [
    {
      org: "CreatoRain",
      title: "Client Dashboard",
      tags: ["SaaS", "B2B", "AI-Powered"],
      year: "2024-25",
      description:
        "A campaign management platform enabling restaurant brands to discover, manage, and collaborate with food & lifestyle influencers.",
      image: '/clientappthumb.png',
      link: '/creatorain-dashboard',
      accentColor: '#D1E0F2',
      gradient: 'linear-gradient(to bottom, #D1E0F2, #5083BD)',
      thumbPadding: 'p-8 pb-0 pr-0',
    },
    {
      org: "CreatoRain",
      title: "Marketing Website",
      tags: ["Landing Page", "Marketing", "B2B"],
      year: "2024-25",
      description:
        "A conversion-focused marketing site communicating a complex influencer marketing product to busy restaurant operators.",
      image: '/landingthumb.png',
      link: '/creatorain-website',
      accentColor: '#7085A7',
      gradient: 'linear-gradient(to bottom, #7085A7, #2C3441)',
      thumbPadding: 'p-8 pb-0',
    },
    {
      org: "CreatoRain",
      title: "Creator App",
      tags: ["B2C", "Mobile-First", "Creator Economy"],
      year: "2024-25",
      description:
        "A mobile-first app for food & lifestyle creators to discover campaigns, submit content, and manage brand collaborations.",
      image: '/creatorappthumb.png',
      link: '/creatorain-creator-app',
      accentColor: '#172D4F',
      gradient: 'linear-gradient(to bottom, #172D4F, #3567B5)',
      thumbPadding: 'p-8 pb-0 pr-0',
      objectFit: 'object-cover',
      disabled: true,
    },
    {
      org: "AnswersAi",
      title: "Website Refresh",
      tags: ["UX + UI", "React", "Shipped"],
      year: "2024",
      description:
        "A brand new marketing site revamp, focusing on modern design principles and better performance.",
      image: '/aaiwebsitethumb.png',
      link: '/aai-website-refresh',
      livelink: 'https://answersai.com',
      accentColor: '#E8DEF8',
      gradient: 'linear-gradient(to bottom, #E6DBFB, #B697EF)',
      thumbPadding: 'p-8 pt-8 pb-0',
      objectFit: 'object-cover object-top',
    },
    {
      org: "AnswersAi",
      title: "Webapp Revamp",
      tags: ["UX + UI", "React", "Shipped"],
      year: "2024-25",
      description:
        "A complete UI & UX overhaul of an AI webapp product, focused on creating a distinct & cohesive visual identity while improving usability and site hierarchy.",
      image: '/aaiweappthumb.png',
      link: '/aai-webapp-revamp',
      livelink: 'https://answersai.com',
      accentColor: '#D5CCF0',
      thumbPadding: 'p-8 pt-12 pb-0',
      objectFit: 'object-cover object-top',
      gradient: 'linear-gradient(to bottom, #E6DBFB, #B697EF)',
    },
    {
      org: "KIOXIA Hackcellence Fest",
      title: "Pagr",
      tags: ["UX + UI", "Mobile App", "Hackathon"],
      year: "2023",
      description:
        "A project submission for KIOXIA Toshiba's Hackcellence Fest where I worked with my team to design a connected, user-centric Business Directory application for the MEA region.",
      image: PagrCover,
      link: '/pagr',
      accentColor: '#F8E0DE',
      gradient: 'linear-gradient(to bottom, #FBDDDB, #EF9797)',
      objectFit: 'object-contain',
      thumbPadding: 'p-8 pb-4',
    }
  ];

  // Stagger card animations
  useEffect(() => {
    if (isVisible) {
      galleryCardData.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, index]);
        }, 200 + (index * 150));
      });
    }
  }, [isVisible, galleryCardData.length]);

  return (
    <section
      ref={elementRef}
      id={id}
      className={`${animationClasses} flex flex-col gap-8 w-full max-w-screen-2xl mx-auto px-6 md:px-24 py-12 md:py-20 font-albert`}
    >
      {/* Section heading */}
      <h2 className="font-averia-serif font-bold text-neutral-500 text-3xl md:text-4xl p-4 ">
        Selected Work
      </h2>

      {/* 2-column card grid */}
      <div className={`grid ${isMobile ? 'grid-cols-1 gap-8' : 'grid-cols-2 gap-[36px]'}`}>
        {galleryCardData.map((card, index) => {
          const isCardVisible = visibleCards.includes(index);
          return (
            <div
              key={`card-${index}`}
              className={`transform transition-all duration-700 ease-out ${
                isCardVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <GalleryCard
                org={card.org}
                title={card.title}
                year={card.year}
                description={card.description}
                image={card.image}
                link={card.link}
                accentColor={card.accentColor}
                gradient={card.gradient}
                thumbPadding={card.thumbPadding}
                objectFit={card.objectFit}
                isMobile={isMobile}
                disabled={card.disabled}
              />
            </div>
          );
        })}
      </div>

      {/* End message */}
      <div className="mt-14 md:mt-20 flex justify-center">
        <div className="w-full max-w-[480px] py-4 border-2 border-[#F0C4A8] bg-[#FBEFE7] rounded-full text-center">
          <p className="font-albert text-primary-500 text-base md:text-xl">that's the end of the line!</p>
        </div>
      </div>
    </section>
  );
}

export default WorkGallery;