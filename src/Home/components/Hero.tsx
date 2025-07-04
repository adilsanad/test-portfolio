import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { TypingAnimation } from "../../ui/TypingAnimation";

const Hero = ({ isMobile, className }: { isMobile: boolean, className?: string }) => {
    const { elementRef, isVisible, animationClasses } = useScrollAnimation({
        threshold: 0.2,
        rootMargin: '0px',
        delay: 500,
    });
    const phrases = [
        "front-end dev",
        "creative thinker",
        "comp-sci grad",
    ];
    return (
        <section
            ref={elementRef}
            className={`${className} ${animationClasses} col-span-full max-md:px-8 md:col-start-2 flex flex-col gap-6 md:gap-5 text-white font-neulisneue py-24 pt-24 md:pt-48 z-20`}
        >
            <p className="text-2xl md:text-4xl">Hi, I'm Adil Sanad.</p>
            <div className={`flex max-md:flex-col h-max md:gap-6 text-[3.5rem] md:text-[5rem] leading-[3.5rem] tracking-tighter ${isMobile ? "min-h-32" : "text-left"} `}>
                {!isMobile && <p className="font-light bg-gradient-to-tr from-[#4F78FF] to-[#D1D1D1] to-65% bg-clip-text text-transparent py-3 ">Product <span className="font-black mr-4">Designer</span>·</p>}
                <TypingAnimation
                    content={!isMobile ? phrases : ["Product Designer", ...phrases]}
                    className= {isMobile ? "font-medium text-white/90" : " text-white/30"}
                    typingSpeed={60}
                    deletingSpeed={40}
                    pauseBeforeDelete={1500}
                    pauseBeforeNext={500}
                    loop={true}
                    cursorVisible={isMobile ? false : true}
                />
            </div>
        </section>
    );
}

export default Hero;