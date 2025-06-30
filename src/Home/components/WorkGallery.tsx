import { useEffect, useRef, useState } from "react";
import GalleryCard from "./GalleryCard";
import WebsiteRevampCover from '../../assets/images/website/lp1.png';
import WebappRevampCover from '../../assets/images/webapp/subscriberhome.png'
import CycloCover from '../../assets/images/cyclo/cyclocover.png';
import RedArrow from '../../assets/workarrow.svg';
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { usePulseAnimation } from "../../hooks/usePulseAnimation";
import { TypingAnimation } from "../../ui/TypingAnimation";

interface GalleryData {
  org: string;
  title: string;
  tags: string[];
  year: string;
  description: string;
  image: string;
  link: string;
  livelink?: string;
}

function WorkGallery({ id, isMobile }: { id: string, isMobile: boolean }) {
  const { elementRef, isVisible, animationClasses } = useScrollAnimation({
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });
  
  const { containerStyle, pulseStyle, PulseKeyframes } = usePulseAnimation({
    pulseColor: '#ff4444',
    pulseDirection: 'left',
    pulseOpacity: 0.7,
    duration: 1000,
    delay: 2000,
    enabled: isVisible 
  });

  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const galleryCardData: GalleryData[] = [
    {
      org: "AnswersAi",
      title: "Website Refresh",
      tags: ["UX + UI", "React", "Shipped"],
      year: "2024",
      description:
        "A brand new marketing site revamp, focusing on modern design principles and better performance.",
      image: WebsiteRevampCover,
      link: '/aai-website-refresh',
      livelink: 'https://answersai.com'
    },
    {
      org: "AnswersAi",
      title: "Webapp Revamp",
      tags: ["UX + UI", "React", "Shipped"],
      year: "2024-25",
      description:
        "A complete UI & UX overhaul of an AI webapp product, focused on creating a distinct & cohesive visual identity while improving usability and site hierarchy.",
      image: WebappRevampCover,
      link: '/aai-webapp-revamp',
      livelink: 'https://answersai.com'
    },
    {
      org: "",
      title: "Cyclo",
      tags: ["UX + UI", "Case Study"],
      year: "2023",
      description:
        "A case study I took on to design an online webstore for a premium cycling gear company.",
      image: CycloCover,
      link: '/cyclo'
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleCardClick = (newIndex: number) => {
    if (newIndex !== activeIndex && !isMobile) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex(newIndex);
        setIsTransitioning(false);
      }, 150);
    } else {
      setActiveIndex(newIndex);
    }
  };

  // Stagger card animations
  useEffect(() => {
    if (isVisible) {
      const parentAnimationDelay = 500;
      galleryCardData.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, index]);
        }, parentAnimationDelay + (index * 500));
      });
    }
  }, [isVisible, galleryCardData.length]);

  // Smooth scroll to active card
  useEffect(() => {
    if (listRef.current && cardRefs.current[activeIndex] && !isMobile) {
      const listContainer = listRef.current;
      const activeCard = cardRefs.current[activeIndex];
      const containerHeight = listContainer.clientHeight;

      const targetScrollTop = activeCard.offsetTop - listContainer.offsetTop - 20;
      const maxScrollTop = listContainer.scrollHeight - containerHeight;
      const finalScrollTop = Math.min(targetScrollTop, maxScrollTop);

      listContainer.scrollTo({
        top: Math.max(0, finalScrollTop),
        behavior: "smooth",
      });
    }
  }, [activeIndex, isMobile]);

  return (
    <section
      ref={elementRef}
      id={id}
      className={`${animationClasses} ${
        isMobile
          ? 'col-span-full p-4 gap-5'
          : 'col-span-14 col-start-2 grid grid-cols-14 gap-5 max-h-screen'
      } relative font-neulisneue text-white z-20`}
    >
      {/* Decorative Header */}
      <div className={`${
        isMobile ? '-top-16 right-8' : '-top-24 right-12'
      } flex gap-4 absolute z-20`}>
        <PulseKeyframes />
        <div 
          style={containerStyle}
          className={`relative ${isMobile ? 'order-2' : 'order-1'}`}
        >
          {/* Base arrow */}
          <img
            className={`${
              isMobile ? 'scale-x-[-1] h-16' : 'h-20'
            } opacity-80`}
            src={RedArrow}
            alt=""
          />
          {/* Pulse overlay */}
          <img
            className={`${
              isMobile ? 'scale-x-[-1] h-16' : 'h-20'
            }`}
            style={pulseStyle}
            src={RedArrow}
            alt=""
          />
        </div>

        <p className={`${
          isMobile 
            ? "order-1 -rotate-4 text-nowrap text-3xl" 
            : "text-4xl order-2 rotate-4"
          } font-light font-neuliscursive text-white/30 pt-1`}
        >
          <TypingAnimation
            content="work samples"
            typingSpeed={60}
            cursorVisible={false}
            startDelay={500}
            isVisible={isVisible}
            className="text-white/30"
          />
        </p>
      </div>

      {/* Left Column: Gallery Cards */}
      <div className="relative col-span-full md:col-span-5 md:pt-4">
        <div
          ref={listRef}
          className={`${
            isMobile
              ? 'col-span-full gap-6'
              : 'col-span-5 gap-4 h-[80vh] overflow-y-auto overflow-x-hidden custom-scrollbar'
          } relative flex flex-col`}
          style={{
            maskImage: isMobile ? 'none' : 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
            WebkitMaskImage: isMobile ? 'none' : 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)'
          }}
        >
          {galleryCardData.map((card, index) => {
            const isActive = index === activeIndex;
            const isCardVisible = visibleCards.includes(index);

            return (
              <div
                key={`card-${index}`}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`transform transition-all duration-700 ease-out ${
                  isCardVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <GalleryCard
                  org={card.org}
                  title={card.title}
                  tags={card.tags}
                  year={card.year}
                  description={card.description}
                  image={card.image}
                  isActive={isActive}
                  onClick={() => handleCardClick(index)}
                  isMobile={isMobile}
                  className={`${
                    !isMobile
                      ? `duration-500 ${
                          isActive
                            ? 'rotate-0'
                            : index % 2 === 0 ? 'rotate-2' : '-rotate-2'
                        }`
                      : ''
                  }`}
                  link={card.link}
                  livelink={card.livelink}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: Active Card Preview */}
      {!isMobile && (
        <Link
          to={galleryCardData[activeIndex].link}
          className={`col-span-9 p-[2px] mt-4 md:mb-12 bg-gradient-to-tl from-white/30 to-white/5 rounded-[20px] overflow-hidden transform transition-all duration-1000 ease-out delay-[500ms] ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex p-12 pb-0 items-end bg-[#0e0e0e] rounded-[18px] h-full w-full relative overflow-hidden group">
            {galleryCardData.map((card, index) => (
              <div
                key={`preview-${index}`}
                className={`absolute inset-8 -bottom-4 flex items-end p-4 pb-0 transition-all duration-400 ease-in-out ${
                  index === activeIndex
                    ? isTransitioning
                      ? 'opacity-0 scale-95'
                      : 'opacity-100 scale-100'
                    : 'opacity-0 scale-95 pointer-events-none'
                }`}
                style={{
                  transitionDelay: index === activeIndex
                    ? (isTransitioning ? '0ms' : '200ms')
                    : '0ms'
                }}
              >
                <div className="flex p-4 h-fit w-full border border-white/15 bg-white/10 rounded-[25px_25px_0px_0px] shadow-[0px_4px_60px_0px_rgba(255,255,255,0.20)] group-hover:shadow-[0px_4px_75px_4px_rgba(255,255,255,0.30)] group-hover:translate-y-2 transition-all duration-400 ease-out">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full max-h-[60vh] object-cover object-top rounded-[10px_10px_0px_0px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </Link>
      )}
    </section>
  );
}

export default WorkGallery;