import React from "react";

const Hero = () => {
    return (
        <section className="col-span-full col-start-2 flex flex-col gap-2 text-white font-neulisneue py-24 pt-64">
            <p className="text-4xl">Hi, I'm Adil Sanad.</p>
            <div className="flex gap-2 text-8xl">
                <h1>UX <span className="font-black">Designer</span></h1> · <h1>frontend dev</h1>
            </div>
        </section>
    );
}

export default Hero;