import React from "react";
import me from '../../assets/images/me.jpg';

const AboutMe = ({id}: {id:string}) => {
    return (
        <section id={id} className="col-span-14 grid grid-cols-14 col-start-2 gap-9 px-8 text-white font-neulisneue">
            <div className="col-span-full flex gap-4">
                <p>who i am</p>
                <img></img>
            </div>
            <div className="col-span-6 flex">
                <img src={me} className=" w-full rounded-[15px]"></img>
            </div>
            <div className="col-span-8 flex flex-col gap-6 text-[#A7A7A7] tracking-[0.01em]">
                <div className={`flex rounded-[15px] p-[2px] bg-gradient-to-bl from-white/30 to-white/6 rotate-1 hover:rotate-0 transition-all duration-500`}>
                    <div className={`flex flex-col gap-6  pt-20 p-12 bg-[#0e0e0e] w-full h-full rounded-[12px] `}>
                        <h1 className="font-neuliscursive font-bold text-white text-6xl">Hi!</h1>
                        <p>I’m Adil Sanad, a Product Designer based out of Bangalore, India. </p>
                        <p>I graduated in Computer Science and Engineering at NIT Jalandhar, Punjab. As both a designer and front-end web dev, I am able to coordinate much more closely between both design and dev teams and get into the nitty gritty.</p>
                    </div>
                </div>
                <div className={`flex rounded-[15px] p-[2px] bg-gradient-to-l from-white/30 to-white/6 -rotate-1 hover:rotate-0 transition-all duration-500`}>
                    <div className={`flex flex-col gap-3 px-12 py-9 bg-[#0e0e0e] w-full h-full rounded-[12px] `}>
                        <div className="flex gap-8 w-full">
                            <h3 className="font-bold text-white">Skills</h3>
                            <div className="flex gap-4 items-center">
                                <p>HTML/CSS</p><div className="w-[6px] h-[6px] bg-[#4F78FF] rounded-full" />
                                <p>Javascript</p><div className="w-[6px] h-[6px] bg-[#4F78FF] rounded-full" />
                                <p>ReactJS</p><div className="w-[6px] h-[6px] bg-[#4F78FF] rounded-full" />
                                <p>TailwindCSS</p>
                            </div>
                        </div>
                        <div className="flex gap-8 w-full">
                            <h3 className="font-bold text-white">Software</h3>
                            <div className="flex gap-4 items-center">
                                <p>Figma</p><div className="w-[6px] h-[6px] bg-[#4F78FF] rounded-full" />
                                <p>Adobe CC</p><div className="w-[6px] h-[6px] bg-[#4F78FF] rounded-full" />
                                <p>Miro</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`flex rounded-[15px] p-[2px] bg-gradient-to-tl from-white/30 to-white/6 rotate-1 hover:rotate-0 transition-all duration-500`}>
                    <div className={`flex flex-col px-12 pt-11 pb-5 bg-[#0e0e0e] w-full h-full rounded-[12px] text-[#A7A7A7}`}>
                        <h3 className="font-bold text-lg text-[#4F78FF]">some stuff I've done</h3>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-4 py-6 text-lg">
                                <h3>01</h3>
                                <div className="flex flex-col gap-2">
                                    <div className="flex w-full justify-between">
                                        <h3 className="text-white">KIOXIA Hackcellence Fest '21</h3>
                                        <p className="text-base opacity-60">Middle East, Africa, South Asia</p>
                                    </div>
                                    <p className=" leading-[1.3em]">Designed and prototyped a mobile app to enable users to discover new businesses</p>
                                </div>
                            </div>
                            <div className="flex gap-4 py-6 border-t border-white/10 text-lg">
                                <h3>02</h3>
                                <div className="flex flex-col gap-2">
                                    <div className="flex w-full justify-between">
                                        <h3 className="text-white">HackMol 2.0</h3>
                                        <p className="text-base opacity-60">NITJ, Punjab</p>
                                    </div>
                                    <p className="font-light leading-[1.3em]">Hackathon organized by NITJ Google Dev Club. Finished 3rd place with a marketplace mobile app. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;