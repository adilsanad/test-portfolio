import Navbar from "../common/Navbar";
import COVER_IMAGE from '../assets/images/webapp/webappcover.png';
import HERO_IMAGE1 from '../assets/images/webapp/webapphero1.png';
import HERO_IMAGE2 from '../assets/images/webapp/webapphero2.png';
import LANDING_PAGE from '../assets/images/webapp/subscriberhome.png';
import img1 from '../assets/images/webapp/quiz.png';
import img2 from '../assets/images/webapp/flashcards.png';
import img3 from '../assets/images/webapp/notedexpanded.png';
import img4 from '../assets/images/webapp/compact home.png';
import { HashLink } from "react-router-hash-link";
import DivAnimation from "../ui/DivAnimation";

const AAiWebapp = ({ isMobile }: { isMobile: boolean }) => {
    return (
        <section className='grid grid-cols-8 md:grid-cols-16 gap-y-0 w-full bg-linear-to-b from-[#151515] to-[#101010] text-[#C1C1C1] font-neulisneue font-light text-base md:text-xl'>
            <Navbar style="pinned" isMobile={isMobile} />
            <div className=" col-span-full grid grid-cols-8 md:grid-cols-16 gap-y-24 pt-64">
                <DivAnimation className={`${isMobile ? 'col-span-full px-6' : 'col-span-10 col-start-4 '} flex flex-col w-full gap-24`}>
                    <div className="flex w-full justify-between border-b-2 border-white pb-5 text-white/40">
                        <p>AnswersAi</p>
                        <p>2025 · Shipped</p>
                    </div>
                    <div className="flex flex-col gap-12">
                        <div className={`${isMobile ? 'flex-col gap-8 items-start' : ''} flex w-full items-center justify-between`}>
                            <div className="flex md:flex-row md:gap-4 flex-col justify-start">
                                <h1 className="text-5xl text-white font-normal tracking-tight">Webapp Overhaul</h1>
                                <a className="flex gap-2 items-center md:items-start max-md:py-2" href="https://answersai.com" target="_blank">
                                    <p className="md:hidden">link to site</p>
                                    <svg className="h-4 md:h-5 mb-1 opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.3428 0.15686H9.84277C9.56663 0.15686 9.34277 0.380718 9.34277 0.65686C9.34277 0.933002 9.56663 1.15686 9.84277 1.15686L13.1357 1.15686L3.98922 10.3033L4.69633 11.0104L13.8428 1.86397L13.8428 5.15686C13.8428 5.433 14.0666 5.65686 14.3428 5.65686C14.6189 5.65686 14.8428 5.433 14.8428 5.15686L14.8428 0.65686C14.8428 0.380717 14.6189 0.15686 14.3428 0.15686Z" fill="white" />
                                        <path d="M1.5 5C1.5 4.17157 2.17157 3.5 3 3.5H6.5V2.5H3C1.61929 2.5 0.5 3.61929 0.5 5V12C0.5 13.3807 1.61929 14.5 3 14.5H10C11.3807 14.5 12.5 13.3807 12.5 12V8.5H11.5V12C11.5 12.8284 10.8284 13.5 10 13.5H3C2.17157 13.5 1.5 12.8284 1.5 12V5Z" fill="white" />
                                    </svg>
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <div className="px-3 p-2 md:px-4 md:py-3 transition-all active:bg-[#4F78FF]/30 rounded-[5px] border border-[#4F78FF]/30 bg-[#4F78FF]/10 text-[#4F78FF]">UX + UI</div>
                                <div className="px-3 p-2 md:px-4 md:py-3 transition-all active:bg-[#FF6246]/30 rounded-[5px] border bg-[#FF6246]/10 border-[#FF6246]/30 text-[#FF6246]">React</div>
                                <div className="px-3 p-2 md:px-4 md:py-3 transition-all active:bg-[#5BFF8C]/30 rounded-[5px] border bg-[#5BFF8C]/10 border-[#5BFF8C]/30 text-[#5BFF8C]">Shipped</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-16 text-[#C1C1C1]">
                            <p>A SaaS project I contributed to as part of the product design team, where I was responsible for designing and developing component systems for the webapp overhaul, in line with the product design system.
                                <br /><br />
                                Additionally, I worked on building the frontend in ReactJS. Through multiple iterations, we cut down on redundant features and consolidated all functionality into a unified UI that was clean, simple and prioritized usability.
                            </p>
                            <div className="flex max-md:flex-col max-md:gap-5 justify-between">
                                <div className="flex md:flex-col gap-3">
                                    <h3 className="font-bold text-[#4F78FF]">Role</h3>
                                    <p>Product Engineer<br className="max-md:hidden" />(Design & Dev)</p>
                                </div>
                                <div className="flex md:flex-col gap-3">
                                    <h3 className="font-bold text-[#4F78FF]">Tools</h3>
                                    <p>Figma, Adobe CC, <br className="max-md:hidden"  /> React + tailwind</p>
                                </div>
                                <div className="flex md:flex-col gap-3">
                                    <h3 className="font-bold text-[#4F78FF]">Areas of Study</h3>
                                    <p>Design Systems, Web Dev, <br />User Research </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </DivAnimation>
                <DivAnimation className="col-span-full flex justify-center gap-6 overflow-x-auto custom-scrollbar">
                    <img className="rounded-[15px] w-full max-w-[720px] object-cover" src={HERO_IMAGE1} />
                    <img className="rounded-[15px] w-full max-w-[720px] object-cover" src={COVER_IMAGE} />
                    <img className="rounded-[15px] w-full max-w-[720px] object-cover" src={HERO_IMAGE2} />
                </DivAnimation>
                <DivAnimation className="col-span-full max-md:px-6 md:col-span-10 md:col-start-4 flex flex-col gap-14">
                    <div className="flex flex-col gap-5 p-6 md:p-9 border border-[#6268FF] rounded-[10px] bg-[#6268FF]/5">
                        <h1 className="font-neuliscursive text-[2em] text-[#6268FF]">Problem</h1>
                        <p>A fragmented UI experience and poor site organization led to difficulty in navigation, and inconsistent UI’s across features made for a far from ideal user experience and the app’s usability suffered for it. </p>
                    </div>
                    <p>The existing web application faced usability and design inconsistencies that hindered user engagement and retention. The lack of cohesion across component systems led to inefficiencies in utilization and a fragmented user experience. Additionally, performance bottlenecks in the frontend resulted in suboptimal user interactions.
                        <br /><br />To address these challenges, the overhaul aimed to redesign and develop a scalable component system, following company guidelines and industry standards.
                    </p>
                </DivAnimation>
                <DivAnimation className="col-span-full flex flex-col gap-9 bg-[#181821] md:px-25 max-md:pb-0 py-12 pb-20 max-md:rounded-[15px]">
                    <h1 className="px-7 text-[2em] font-bold text-white/30">design brief</h1>
                    <div className="flex max-md:flex-col gap-12 bg-black/30 rounded-[15px] p-10 md:p-16">
                        <DivAnimation className="flex flex-col gap-6 w-full pb-9 border-b border-white/10">
                            <div className="flex flex-col w-full gap-5 md:gap-8">
                                <h2 className="font-thin text-white/50 text-[2em]">01</h2>
                                <div className="flex gap-4 ">
                                    <h1 className="text-[2em] text-white">Pain Points</h1>
                                </div>
                            </div>
                            <p className="w-full">Users struggled with an fragmented UI experience, lack of visual hierarchy, and redundant features in multiple pages. A large part of the app's functionality was underutilized, and inconsistent design across systems was affecting usability. </p>
                        </DivAnimation>
                        <DivAnimation className="flex flex-col gap-6 w-full pb-9 border-b border-white/10">
                            <div className="flex flex-col w-full gap-5 md:gap-8">
                                <h2 className="font-thin text-white/50 text-[2em]">02</h2>
                                <div className="flex gap-4 ">
                                    <h1 className="text-[2em] text-white leading-12">Competitive Analysis</h1>
                                </div>
                            </div>
                            <p className="w-full">Product in similar domains had cleaner UI, better content organization, and interactive elements that enhanced user engagement. Most used a unified workspace UI, and had nested systems for file management, etc.</p>
                        </DivAnimation>
                        <DivAnimation className="flex flex-col gap-6 w-full pb-9 border-b border-white/10">
                            <div className="flex flex-col w-full gap-5 md:gap-8">
                                <h2 className="font-thin text-white/50 text-[2em]">03</h2>
                                <HashLink to="#research" smooth className="flex gap-4 cursor-pointer ">
                                    <h1 className="text-[2em] text-white">Final Screens</h1>
                                </HashLink>
                            </div>
                            <p className="w-full">Multiple design and code iterations were conducted based on internal  feedback and engagement metrics. We cut out all underutilized features and created a unified UI, in adherence to design guidelines. The redesign directly led to increase in user intake and subscriptions.</p>
                        </DivAnimation>
                    </div>
                </DivAnimation>
            </div>
            <DivAnimation className="col-span-full flex flex-col">
                <div className="relative col-span-full flex max-md:flex-col md:justify-center gap-24 md:py-36 md:pl-24 bg-black/30 border border-white/10 rounded-[30px_30px_0px_0px] custom-scrollbar">
                    <div className="flex flex-col gap-3 max-md:py-18 max-md:pb-12 max-md:p-10 max-w-md md:h-screen -top-12 md:top-16 md:sticky">
                        <h3 className="text-white/40">HiFi Screens</h3>
                        <div className="flex flex-col pt-5 md:pt-9 gap-4 md:gap-8 border-t border-white/20">
                            <h1 className="font-medium text-[1.5em] md:text-[2em]">Finished Pages</h1>
                            <p className="max-md:text-sm text-lg">
                                We consolidated all separate features into one UI called ‘Lecture Mode’, and utilized a clean, minimal design with full-screen bento layouts for expanded views.
                                <br /><br />
                                Ease of access/usage and functional hierarchy were our priorities, and we used prompts to encourage users to explore all the features available.
                                <br /><br />
                                Overall, the webapp overhaul succeeded in its initial goal of simplifying the user experience and increasing active webapp users.
                                <br /><br />
                                Feel free to contact me if you want more details on this project!
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-4 custom-scrollbar max-md:overflow-hidden">
                        <img className="w-full rounded-[10px]" src={LANDING_PAGE} />
                        <img className="w-full rounded-[10px]" src={img1} />
                        <img className="w-full rounded-[10px]" src={img2} />
                        <img className="w-full rounded-[10px]" src={img3} />
                        <img className="w-full rounded-[10px]" src={img4} />
                    </div>
                </div>
            </DivAnimation>
        </section>
    )
}

export default AAiWebapp;