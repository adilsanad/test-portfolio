import React from "react";

const AboutMe = () => {
    return (
        <section className="col-span-full grid grid-cols-14 col-start-2 col-end-16 gap-9 text-white font-neulisneue">
            <div className="col-span-full flex gap-4">
                <p>who i am</p>
                <img></img>
            </div>
            <div className="col-span-6 flex">
                <img className="bg-gray-500 w-full h-full"></img>
            </div>
            <div className="col-span-8 flex flex-col gap-4">
                <div className="flex flex-col gap-6 p-12 border rounded-[15px]">
                    <h1>Hi!</h1>
                    <p>I’m Adil Sanad, a Product Designer based out of Bangalore, India. </p>
                    <p>I graduated in Computer Science and Engineering at NIT Jalandhar, Punjab. As both a designer and front-end web dev, I am able to coordinate much more closely between both design and dev teams and get into the nitty gritty.</p>
                </div>
                <div className="flex flex-col gap-3 px-12 py-9 border rounded-[15px]">
                    <div className="flex gap-8 w-full">
                        <h3>Skills</h3>
                        <div className="flex gap-4">
                            <p>HTML/CSS</p>
                            <p>Javascript</p>
                            <p>C++/C</p>
                        </div>
                    </div>
                    <div className="flex gap-8 w-full">
                        <h3>Software</h3>
                        <div className="flex gap-4">
                            <p>Figma</p>
                            <p>Adobe CC</p>
                            <p>Miro</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3 px-12 pt-11 pb-5 border rounded-[15px]">
                    <h3>some stuff I've done</h3>
                    <div className="flex gap-4 py-6">
                        <h3>01</h3>
                        <div className="flex flex-col gap-2">
                            <div className="flex w-full justify-between">
                                <h3>KIOXIA Hackcellence Fest '21</h3>
                                <p>Middle East, Africa, South Asia</p>
                            </div>
                            <p>Designed and prototyped a mobile app to enable users to discover new businesses</p>
                        </div>
                    </div>
                    <div className="flex gap-4 py-6 border-top ">
                        <h3>02</h3>
                        <div className="flex flex-col gap-2">
                            <div className="flex w-full justify-between">
                                <h3>KIOXIA Hackcellence Fest '21</h3>
                                <p>Middle East, Africa, South Asia</p>
                            </div>
                            <p>Designed and prototyped a mobile app to enable users to discover new businesses</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;