import Navbar from "../common/Navbar";
import COVER_IMAGE from '../assets/images/website/websitecover.png';
import HERO_IMAGE1 from '../assets/images/website/websitehero1.png';
import HERO_IMAGE2 from '../assets/images/website/websitehero2.png';
import LANDING_PAGE from '../assets/images/website/websitecover.png';
import INSTITUTIONS from '../assets/images/website/institutions.png';
import SUBHOME from '../assets/images/website/snapshot.png';
import PREVPAGE from '../assets/images/website/oldsite.png';
import img1 from '../assets/images/website/lp1.png';
import { HashLink } from "react-router-hash-link";

const AAiWebsite = ({ isMobile }: { isMobile: boolean }) => {
    return (
        <section className='grid grid-cols-8 md:grid-cols-16 gap-y-24 w-full bg-linear-to-b from-[#151515] to-[#101010] text-[#C1C1C1] font-neulisneue font-light text-base md:text-xl'>
            <Navbar style="pinned" isMobile={isMobile} />
            <div className={` ${isMobile ? 'col-span-full px-6' : 'col-span-10 col-start-4 '} flex flex-col w-full gap-24`}>
                <div className="flex w-full justify-between border-b-2 border-white pb-5 text-white/40">
                    <p>AnswersAi</p>
                    <div className="flex gap-4 items-center">
                        <p>2024 · Shipped</p>
                        <a href="https://answersai.com/" target="_blank">
                            <svg className="h-4 mb-1 opacity-70 hover:scale-[1.1] hover:opacity-100 transition-all" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.3428 0.15686H9.84277C9.56663 0.15686 9.34277 0.380718 9.34277 0.65686C9.34277 0.933002 9.56663 1.15686 9.84277 1.15686L13.1357 1.15686L3.98922 10.3033L4.69633 11.0104L13.8428 1.86397L13.8428 5.15686C13.8428 5.433 14.0666 5.65686 14.3428 5.65686C14.6189 5.65686 14.8428 5.433 14.8428 5.15686L14.8428 0.65686C14.8428 0.380717 14.6189 0.15686 14.3428 0.15686Z" fill="white" />
                                <path d="M1.5 5C1.5 4.17157 2.17157 3.5 3 3.5H6.5V2.5H3C1.61929 2.5 0.5 3.61929 0.5 5V12C0.5 13.3807 1.61929 14.5 3 14.5H10C11.3807 14.5 12.5 13.3807 12.5 12V8.5H11.5V12C11.5 12.8284 10.8284 13.5 10 13.5H3C2.17157 13.5 1.5 12.8284 1.5 12V5Z" fill="white" />
                            </svg>
                        </a>
                    </div>

                </div>
                <div className="flex flex-col gap-12">
                    <div className={`${isMobile ? 'flex-col items-start' : ''} flex w-full items-center justify-between`}>
                        <h1 className="text-5xl text-white font-normal tracking-tight">Website Revamp</h1>
                        <div className="flex gap-2">
                            <div className="px-4 py-3 rounded-[5px] border border-[#4F78FF]/30 bg-[#4F78FF]/10 text-[#4F78FF]">UX + UI</div>
                            <div className="px-4 py-3 rounded-[5px] border bg-[#FF6246]/10 border-[#FF6246]/30 text-[#FF6246]">React</div>
                            <div className="px-4 py-3 rounded-[5px] border bg-[#5BFF8C]/10 border-[#5BFF8C]/30 text-[#5BFF8C]">Shipped</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-16 text-[#C1C1C1]">
                        <p>A project I contributed to as part of the product design team, where I worked on both the redesign of the product website, as well as the product design system. This was the first step in our broader plan of revamping the product along with its branding & identity.
                            <br /><br />
                            I also worked on developing the frontend in ReactJS + tailwind, with CSS for animations.
                        </p>
                        <div className="flex max-md:flex-col max-md:gap-5 justify-between">
                            <div className="flex md:flex-col gap-3">
                                <h3 className="font-bold text-[#4F78FF]">Role</h3>
                                <p>Product Engineer<br />(Design & Dev)</p>
                            </div>
                            <div className="flex md:flex-col gap-3">
                                <h3 className="font-bold text-[#4F78FF]">Tools</h3>
                                <p>Figma,<br></br> ReactJS + Tailwind</p>
                            </div>
                            <div className="flex md:flex-col gap-3">
                                <h3 className="font-bold text-[#4F78FF]">Areas of Study</h3>
                                <p>Design, Branding</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-full flex justify-center gap-6 overflow-hidden">
                <img className="rounded-[15px] max-w-[720px]" src={HERO_IMAGE1} />
                <img className="rounded-[15px] max-w-[720px]" src={COVER_IMAGE} />
                <img className="rounded-[15px] max-w-[720px]" src={HERO_IMAGE2} />
            </div>
            <div className="col-span-full max-md:px-6 md:col-span-10 md:col-start-4 flex flex-col gap-14">
                <div className="flex flex-col gap-5 p-6 md:p-9 border border-[#6268FF] rounded-[10px] bg-[#6268FF]/5">
                    <h1 className="font-neuliscursive text-[2em] text-[#6268FF]">Problem</h1>
                    <p>Due to poor usability and an outdated interface, the website had low user engagement and high drop-off rates. Visitors weren’t staying long or exploring deeper into the platform.</p>
                </div>
            </div>
            <div className="col-span-full md:col-span-12 md:col-start-3 flex flex-col gap-8 items-center">
                <p className="text-white/40 font-light text-xl">Original Landing Page</p>
                <div className="w-full flex p-4 mx-4 md:p-16 py-0 md:py-0 bg-black/30 border border-white/10 rounded-[15px]">
                    <img className="w-full" src={PREVPAGE}></img>
                </div>
            </div>
            <div className="col-span-full max-md:px-6 md:col-span-10 md:col-start-4 flex flex-col gap-14">
                <p>The previous website’s outdated design and poor usability made it difficult for users to navigate and interact with the platform. Key information was hard to find, and the lack of a visually engaging interface led to high bounce rates. As a result, users weren’t spending much time on the site or returning for future visits.
                    <br /><br />To address this, we redesigned the website with a structured component system, improved navigation, and a more modern, user-friendly interface. These changes led to increased engagement, better retention, and improved overall user experience.
                </p>
            </div>
            <div className="col-span-full flex flex-col gap-9 bg-[#181821] md:px-25 max-md:pb-0 py-12 max-md:rounded-[15px]">
                <h1 className="px-7 text-[2em] font-bold text-white/30">design brief</h1>
                <div className="flex max-md:flex-col gap-12 bg-black/30 rounded-[15px] p-10 md:p-16">
                    <div className="flex flex-col gap-6 w-full pb-9 border-b border-white/10">
                        <div className="flex flex-col w-full gap-5 md:gap-8">
                            <h2 className="font-thin text-white/50 text-[2em]">01</h2>
                            <div className="flex gap-4 ">
                                <h1 className="text-[2em] text-white">Pain Points</h1>
                            </div>
                        </div>
                        <p className="w-full">Visitors struggled with an outdated interface, making it difficult to navigate and find relevant content quickly. The lack of visual hierarchy and engaging design elements contributed to high bounce rates and low retention.</p>
                    </div>
                    <div className="flex flex-col gap-6 w-full pb-9 border-b border-white/10">
                        <div className="flex flex-col w-full gap-5 md:gap-8">
                            <h2 className="font-thin text-white/50 text-[2em]">02</h2>
                            <div className="flex gap-4 ">
                                <h1 className="text-[2em] text-white leading-12">Competitive Analysis</h1>
                            </div>
                        </div>
                        <p className="w-full">Competitors had cleaner UI, better content organization, and interactive elements that enhanced user engagement. These insights informed our redesign strategy to improve usability and accessibility.</p>
                    </div>
                    <div className="flex flex-col gap-6 w-full pb-9 border-b border-white/10">
                        <div className="flex flex-col w-full gap-5 md:gap-8">
                            <h2 className="font-thin text-white/50 text-[2em]">03</h2>
                            <HashLink to="#research" smooth className="flex gap-4 cursor-pointer ">
                                <h1 className="text-[2em] text-white">Iterations</h1>
                            </HashLink>
                        </div>
                        <p className="w-full">Multiple design and code iterations were conducted based on internal  feedback and engagement metrics. The improved layout, streamlined navigation, and enhanced aesthetics led to better user retention and increased traffic to key sections of the website.</p>
                    </div>
                </div>
            </div>
            <div className="col-span-full flex flex-col">
                <div className="relative col-span-full flex max-md:flex-col md:justify-center gap-24 md:py-36 md:pl-24 bg-black/30 border border-white/10 rounded-[30px_30px_0px_0px] custom-scrollbar">
                    <div className="flex flex-col gap-3 max-md:py-18 max-md:pb-20 max-md:p-10 max-w-md md:h-screen -top-12 md:top-16 sticky max-md:bg-gradient-to-b from-black to-black/0 via-90% via-black/95">
                        <h3 className="text-white/40">HiFi Screens</h3>
                        <div className="flex flex-col pt-5 md:pt-9 gap-4 md:gap-8 border-t border-white/20">
                            <h1 className="font-medium text-[1.5em] md:text-[2em] text-white">Landing Page</h1>
                            <p className="max-md:text-sm text-lg">
                                I was responsible for designing multiple components for the landing page as well as designing and building both static and animated assets (product demos, vector animations, lottie etc.)
                                <br /><br />
                                I also worked on the development of these pages in React + tailwind, and handled all animation and interaction design.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-4 custom-scrollbar max-md:overflow-hidden">
                        <img className="w-full rounded-[10px]" src={img1} />
                    </div>
                </div>
                <div className="relative col-span-full flex max-md:flex-col md:justify-center gap-24 md:py-36 md:pl-24 bg-black/30 border border-white/10 rounded-[30px_30px_0px_0px] custom-scrollbar">
                    <div className="flex flex-col gap-3 max-md:py-18 max-md:pb-20 max-md:p-10 max-w-md md:h-screen -top-12 md:top-16 sticky max-md:bg-gradient-to-b from-black to-black/0 via-90% via-black/95">
                        <h3 className="text-white/40">HiFi Screens</h3>
                        <div className="flex flex-col pt-5 md:pt-9 gap-4 md:gap-8 border-t border-white/20">
                            <h1 className="font-medium text-[1.5em] md:text-[2em] text-white">Institutions Page</h1>
                            <p className="max-md:text-sm text-lg">
                                I was responsible for designing and developing a b2b Institutions page from scratch, meant to cater towards school administrators with a new product vertical aimed at teaching professionals.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-4 custom-scrollbar max-md:overflow-hidden">
                        <img className="w-full rounded-[10px]" src={INSTITUTIONS} />

                    </div>
                </div>
                <div className="relative col-span-full flex max-md:flex-col md:justify-center gap-24 md:py-36 md:pl-24 bg-black/30 border border-white/10 rounded-[30px_30px_0px_0px] custom-scrollbar">
                    <div className="flex flex-col gap-3 max-md:py-18 max-md:pb-20 max-md:p-10 max-w-md md:h-screen -top-12 md:top-16 sticky max-md:bg-gradient-to-b from-black to-black/0 via-90% via-black/95">
                        <h3 className="text-white/40">HiFi Screens</h3>
                        <div className="flex flex-col pt-5 md:pt-9 gap-4 md:gap-8 border-t border-white/20">
                            <h1 className="font-medium text-[1.5em] md:text-[2em] text-white">Subscriber Home</h1>
                            <p className="max-md:text-sm text-lg">
                                The redesign also involved all subpages and other non-functional pages, such as the homepage for subscribed users, FAQ’s, T&C’s etc.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-4 custom-scrollbar max-md:overflow-hidden">
                        <img className="w-full rounded-[10px]" src={SUBHOME} />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AAiWebsite;