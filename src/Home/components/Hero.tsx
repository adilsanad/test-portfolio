import React from "react";

const Hero = ({ isMobile, className }: { isMobile: boolean, className?: string }) => {
    return (
        <section className={`${className} col-span-full max-md:px-8 md:col-start-2 flex flex-col gap-6 text-white font-neulisneue py-24 pt-24 md:pt-48 z-20`}>
            <p className="text-2xl md:text-4xl">Hi, I'm Adil Sanad.</p>
            <div className="flex max-md:flex-col md:gap-6 text-[3.5rem] md:text-[5.5rem] leading-[3.5rem]">
                <h1>UX <span className="font-black">Designer</span></h1>
                <span className="max-md:hidden">·</span>
                <div className="md:flex gap-2 max-md:text-[3rem] opacity-10">
                    <h1>frontend dev</h1>
                </div>
            </div>
        </section>
    );
}

export default Hero;