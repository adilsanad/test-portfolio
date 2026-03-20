import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { TypingAnimation } from "../../ui/TypingAnimation";
import me from '/my face.png';

const phrases = [
    "product designer",
    "front-end dev",
    "pixel perfectionist",
    "maker of things",
    "ctrl+z enthusiast",
    "caffeine cultivator",
    "div whisperer",
    "will refactor for fun"
];

const Hero = ({ isMobile, className }: { isMobile: boolean, className?: string }) => {
    const { elementRef, animationClasses } = useScrollAnimation({
        threshold: 0.2,
        rootMargin: '0px',
        delay: 300,
    });

    return (
        <section
            ref={elementRef}
            className={`${className} ${animationClasses} w-full max-w-screen-2xl mx-auto px-6 md:px-24 py-16 pt-28 md:pt-56`}
        >
            <div className={`flex ${isMobile ? 'flex-col gap-10' : 'items-end justify-between gap-16'}`}>
                {/* Left column */}
                <div className="flex flex-col gap-2">
                    <h2 className="font-averia text-neutral-500 text-2xl md:text-4xl ">
                        Hi, I'm Adil Sanad.
                    </h2>
                    <h1 className="font-averia-serif font-bold text-neutral-900 text-[2.8rem] md:text-[5.5rem] leading-[1.1] min-h-[6.25rem] md:min-h-[6.1rem]">
                        <TypingAnimation
                            content={phrases}
                            typingSpeed={80}
                            deletingSpeed={40}
                            pauseBeforeDelete={1500}
                            pauseBeforeNext={500}
                            loop={true}
                            cursorChar="_"
                            cursorClassName="text-primary-500 font-light ml-1"
                        />
                    </h1>
                </div>

                {/* Right column */}
                <div className={`flex flex-col items-start gap-5 max-w-[320px]`}>
                    {/* Profile photo with star mask */}
                    <img src={me} alt="Adil Sanad" className="shrink-0 w-20 h-20 md:w-24 md:h-24 object-contain" />
                    <p className="font-albert text-neutral-500 md:text-lg ">
                        Product Designer who codes. I design and ship user-facing products end-to-end — from research to React.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;