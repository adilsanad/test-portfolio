import { useRef, useState, useEffect } from "react";
import rtarrow from "../assets/rtarrow.svg"; // Adjust path
import pfp from "../assets/images/user1.png"; // Adjust path

const PersonaScroll = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    setCanScrollLeft(activeIndex > 0);
    setCanScrollRight(activeIndex < 2);
  }, [activeIndex]);

  const CARD_WIDTH = 896 + 36; // 768px (3xl) + 36px (gap) to include margin

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      let newIndex = direction === "right" ? activeIndex + 1 : activeIndex - 1;
  
      // Ensure the index stays within bounds
      newIndex = Math.max(0, Math.min(newIndex, 2));
  
      // Update state and scroll the container
      setActiveIndex(newIndex);
      scrollContainerRef.current.scrollTo({
        left: newIndex * CARD_WIDTH,
        behavior: "smooth",
      });
    }
  };
  

  return (
    <div className="col-span-full grid grid-cols-16 gap-y-24">
      {/* Scroll Buttons */}
      <div className="col-span-3 flex gap-5 py-8 justify-center items-start w-full">
        <button
          className={`p-4 bg-white/10 rounded-full disabled:opacity-30`}
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
        >
          <img className="rotate-180" src={rtarrow} alt="Left" />
        </button>
        <button
          className={`p-4 bg-white/10 rounded-full disabled:opacity-30`}
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
        >
          <img src={rtarrow} alt="Right" />
        </button>
      </div>

      {/* Scrollable Persona Cards */}
      <div
        ref={scrollContainerRef}
        className="col-span-13 col-start-4 flex w-full gap-9 overflow-x-auto custom-scrollbar scroll-smooth"
      >
        {[1, 2, 3].map((_, index) => (
          <div key={index} className={`flex flex-col min-w-4xl w-full gap-5 ${
            index === 2 ? "mr-[calc(50vw-384px)]" : "" // Add extra right margin only to the last card
          }`}>
            {/* Profile Header */}
            <div className="flex items-center justify-between p-6 gap-12 w-full bg-black/30 rounded-[15px] border border-white/20">
              <div className="flex w-full items-center gap-6">
                <img src={pfp} alt="Profile" />
                <div className="flex flex-col w-fit gap-2">
                  <h1 className="text-3xl font-bold flex text-white">Mako Swann</h1>
                  <div className="flex flex-col gap-0 text-lg text-[#9D9D9D]">
                    <p className="flex w-fit text-nowrap">Aged 27 · Software Engineer</p>
                    <p>Dubai, UAE</p>
                  </div>
                </div>
              </div>
              <p className="text-[#9D9D9D]">Competitive, fitness-obsessed, early adopter of technology.</p>
            </div>

            {/* Insights, Pain Points, and Goals */}
            <div className="flex flex-col w-full rounded-[15px] border border-white/20">
              <div className="flex flex-col gap-4 p-10 w-full bg-black/30">
                <h3 className="text-[#4260C6] text-2xl font-bold">Insights</h3>
                <ul className="list-disc pl-8 text-[#9D9D9D]">
                  <li>Trains for triathlons year-round</li>
                  <li>Rides road, mountain, and indoor cycling</li>
                  <li>Prioritizes technology and lightweight components</li>
                  <li>Tracks performance data and uses cycling apps</li>
                </ul>
              </div>

              <div className="flex gap-4 p-12 w-full bg-[#4F78FF]/20">
                {/* Pain Points */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-[#4260C6] text-2xl font-bold">Pain Points</h3>
                  <ul className="flex flex-col gap-4 list-disc pl-8 text-[#CBCBCB]/80">
                    <li>Wants the latest and greatest technology to optimize performance</li>
                    <li>Dislikes traditional bike shops with limited selection and outdated technology</li>
                    <li>Seeks a curated selection of high-performance cycling components</li>
                    <li>Needs a store that caters to multi-discipline athletes</li>
                  </ul>
                </div>

                {/* Goals */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-[#4260C6] text-2xl font-bold">Goals</h3>
                  <ul className="flex flex-col gap-4 list-disc pl-8 text-[#CBCBCB]/80">
                    <li>Wants the latest and greatest technology to optimize performance</li>
                    <li>Dislikes traditional bike shops with limited selection and outdated technology</li>
                    <li>Seeks a curated selection of high-performance cycling components</li>
                    <li>Needs a store that caters to multi-discipline athletes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonaScroll;
