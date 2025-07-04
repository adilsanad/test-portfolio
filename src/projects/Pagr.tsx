import Navbar from "../common/Navbar";
import COVER_IMAGE from '../assets/images/pagr/pagrcover.png';
import WIREFRAMES from '../assets/images/pagr/pagrwireframes.png';
import Branding from '../assets/images/pagr/branding.png';
import Home1 from '../assets/images/pagr/homensearch1.png';
import Home2 from '../assets/images/pagr/homensearch2.png';
import Home3 from '../assets/images/pagr/homensearch3.png';
import Home4 from '../assets/images/pagr/homensearch4.png';
import Map1 from '../assets/images/pagr/map1.png';
import Map2 from '../assets/images/pagr/map2.png';
import Map3 from '../assets/images/pagr/map3.png';
import Com1 from '../assets/images/pagr/community1.png';
import Com2 from '../assets/images/pagr/community2.png';
import Com3 from '../assets/images/pagr/community3.png';
import Filters from '../assets/images/pagr/filters.png';
import Profile1 from '../assets/images/pagr/profile1.png';
import Profile2 from '../assets/images/pagr/profile2.png';
import Profile3 from '../assets/images/pagr/profile3.png';
import pfp1 from '../assets/images/pagr/pfp1.png';
import pfp2 from '../assets/images/pagr/pfp2.png';
import pfp3 from '../assets/images/pagr/pfp3.png';
import PersonaScroll from "./PersonaScroll";
import { HashLink } from "react-router-hash-link";
import Marquee from "react-fast-marquee";
import DivAnimation from "../ui/DivAnimation";


const personaData = [
    {
        name: "Rahim Khan",
        age: 34,
        occupation: "Auto Electrician",
        location: "Sharjah, UAE",
        description: "Rahim moved to the UAE 8 years ago. He works long hours in an auto garage and uses mobile apps to find spare parts dealers, phone repair shops, and affordable services nearby. His phone is his primary tool for navigating the city.",
        profileImage: pfp1,
        insights: [
            "Uses a budget Android phone with limited data",
            "Prefers quick-loading apps that don’t waste time",
            "Relies on accurate business hours and direct-call buttons",
            "Navigates apps in English but prefers Urdu for conversations",
        ],
        painPoints: [
            "Outdated or fake listings waste his time",
            "No way to quickly compare nearby services",
            "Lack of offline access or save-for-later option",
        ],
        goals: [
            "Find verified nearby businesses with working numbers",
            "Call or copy contact details easily",
            "Bookmark important listings for repeated use",
        ],
        bgColor: "#FF0000"
    },
    {
        name: "Grace Nwosu",
        age: 29,
        occupation: "Fashion Boutique Owner",
        location: "Accra, Ghana",
        description: "Grace runs a small but growing boutique and uses mobile apps to discover suppliers, negotiate logistics, and keep her business lean. She depends on fast, dependable access to relevant vendor contacts.",
        profileImage: pfp2,
        insights: [
            "Shops around for deals across multiple vendors",
            "Uses WhatsApp to communicate with most suppliers",
            "Switches between personal and business accounts throughout the day",
            "Values user reviews, photos, and clear product categories",
        ],
        painPoints: [
            "Incomplete or duplicate listings",
            "No direct way to message vendors through the app",
            "Hard to distinguish trusted businesses from new or unreliable ones",
        ],
        goals: [
            "Filter suppliers by category, price, and delivery options",
            "Quickly contact vendors via WhatsApp or in-app messaging",
            "Organize saved vendors into collections by project type",
        ],
        bgColor: "#4260C6"
    },
    {
        name: "Humaid Al-Mazrouei",
        age: 38,
        occupation: "Entrepreneur",
        location: "Abu Dhabi, UAE",
        description: "Humaid runs a home services startup and is constantly scouting new vendors and partners. He’s tech-savvy and expects polished, trustworthy apps with real-time info and high usability.",
        profileImage: pfp3,
        insights: [
            "Switches between Arabic and English depending on use case",
            "Looks for professional, licensed service providers",
            "Relies heavily on search and filter features",
            "Shares business links with staff for procurement decisions",
        ],
        painPoints: [
            "Weak filtering/search for specialized services",
            "Unclear service coverage or availability",
            "Lack of verified badges or business credentials",
        ],
        goals: [
            "Use smart filters to find qualified vendors fast",
            "View credentials, ratings, and service areas clearly",
            "Save and share listings easily with his internal team",
        ],
        bgColor: "#FFB800"
    }
]

const Pagr = ({ isMobile }: { isMobile: boolean }) => {
    return (
        <section className={` grid grid-cols-8 md:grid-cols-16 gap-y-20 md:gap-y-24 w-full bg-linear-to-b from-[#151515] to-[#101010] text-[#C1C1C1] font-neulisneue font-light text-base md:text-xl`}>
            <Navbar style="pinned" isMobile={isMobile} />
            {/*<div className="col-span-12 col-start-3 p-20 pb-12 bg-black/30 rounded-[15px] items-center justify-center flex">
                <img src={COVER_IMAGE}></img>
            </div>*/}
            <DivAnimation className={` ${isMobile ? 'col-span-full px-6' : 'col-span-10 col-start-4 '} flex flex-col w-full gap-24 pt-64`}>
                <div className="flex w-full justify-between border-b-2 border-white pb-5 text-white/40">
                    <p>Pagr</p>
                    <p>2023 · Case Studies</p>
                </div>
                <div className="flex flex-col gap-12">
                    <div className={`${isMobile ? 'flex-col items-start gap-8' : ''} flex w-full items-center justify-between`}>
                        <h1 className="text-[64px] font-bold">pagr</h1>
                        <div className="flex gap-3">
                            <div className="px-3 p-2 md:px-4 md:py-3 rounded-[5px] border border-[#4F78FF]/30 bg-[#4F78FF]/10 text-[#4F78FF]">UX + UI</div>
                            <div className="px-3 p-2 md:px-4 md:py-3 rounded-[5px] border border-[#4F78FF]/30 bg-[#4F78FF]/10 text-[#4F78FF]">Mobile App</div>
                            <div className="px-3 p-2 md:px-4 md:py-3 rounded-[5px] border border-[#A55BFF]/30 bg-[#A55BFF]/10 text-[#A55BFF]">Hackathon</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 text-[#C1C1C1]">
                        <p>Pagr was a project submission for KIOXIA Toshiba’s Hackcellence Fest ‘21 where I worked with my team to design a connected, user-centric  Business Directory application, tailored for the Middle-East & Africa market.</p>
                        <div className="flex max-md:flex-col max-md:gap-5 justify-between">
                            <div className="flex md:flex-col gap-3">
                                <h3 className="font-bold text-[#4F78FF]">Role</h3>
                                <p>Product Designer</p>
                            </div>
                            <div className="flex md:flex-col gap-3">
                                <h3 className="font-bold text-[#4F78FF]">Tools</h3>
                                <p>Figma, Miro, <br className="max-md:hidden" /> Adobe CC</p>
                            </div>
                            <div className="flex md:flex-col gap-3">
                                <h3 className="font-bold text-[#4F78FF]">Areas of Study</h3>
                                <p>Visual Design, Branding, <br className="max-md:hidden" /> User Research, Mobile Design</p>
                            </div>
                        </div>
                    </div>
                </div>
            </DivAnimation>
            <DivAnimation className="col-span-full mx-4 md:mx-6 py-20 max-md:px-4 rounded-[30px] bg-[#2C2C2C] flex justify-center gap-6 overflow-x-auto custom-scrollbar">
                <img className="md:rounded-[71px] w-full max-w-[960px] object-contain shadow-[0_24px_24px_rgba(0,0,0,0.4)]" src={COVER_IMAGE} />
            </DivAnimation>
            <DivAnimation className="col-span-full max-md:px-6 md:col-span-10 md:col-start-4 flex flex-col gap-14">
                <p>People are often unaware of services and businesses available in their localities, and small businesses have a difficult time making their presence known. Most SME’s rely on word of mouth and advertising to market themselves, which can be a slow and expensive process.
                    <br /><br />Our design aims to create a modern user-centric interface that allows users to effortlessly find any service/business, and has business features aimed at increasing reach.
                </p>
                <div className="flex flex-col gap-5 p-6 md:p-9 border border-[#6268FF] rounded-[10px] bg-[#6268FF]/5">
                    <h1 className="font-neuliscursive text-[2em] text-[#6268FF]">Problem</h1>
                    <p>How can we streamline the discovery process between users and new businesses?</p>
                </div>
            </DivAnimation>
            <DivAnimation className="col-span-full flex flex-col gap-9 bg-[#181821] md:px-25 max-md:pb-0 py-12 max-md:rounded-[15px]">
                <h1 className="px-7 text-[2em] font-bold text-white/30">design brief</h1>
                <div className="flex max-md:flex-col gap-12 bg-black/30 rounded-[15px] p-10 md:p-16">
                    <DivAnimation className="flex flex-col gap-6 w-full pb-9 border-b border-white/10">
                        <div className="flex flex-col w-full gap-5 md:gap-8">
                            <h2 className="font-thin text-white/50 text-[2em]">01</h2>
                            <HashLink to="#research" smooth className="flex gap-4 cursor-pointer">
                                <h1 className="text-[2em] text-white hover:text-white/70 transition-all">Research</h1>
                                <svg className="hover:opacity-70 transition-all" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                        <path d="M15.4422 0H10.4223C10.1142 0 9.86448 0.249717 9.86448 0.557758C9.86448 0.865799 10.1142 1.11552 10.4223 1.11552H14.0957L3.89237 11.3185L4.68118 12.1073L14.8845 1.90431V5.57758C14.8845 5.88562 15.1341 6.13534 15.4422 6.13534C15.7502 6.13534 16 5.88562 16 5.57758V0.557758C16 0.249716 15.7502 0 15.4422 0Z" fill="white" />
                                        <path d="M1.11554 5.4026C1.11554 4.47847 1.86471 3.72933 2.78886 3.72933H6.69325V2.61381H2.78886C1.24862 2.61381 0 3.8624 0 5.4026V13.2112C0 14.7514 1.24862 16 2.78886 16H10.5977C12.1379 16 13.3865 14.7514 13.3865 13.2112V9.3069H12.271V13.2112C12.271 14.1353 11.5218 14.8845 10.5977 14.8845H2.78886C1.86471 14.8845 1.11554 14.1353 1.11554 13.2112V5.4026Z" fill="white" />
                                    </g>
                                </svg>
                            </HashLink>
                        </div>
                        <p className="w-full">We explored and compared multiple competitor products, such as Yelp, Yellow Pages, etc. and found all the current offerings to be unintuitive, dated and missing comprehensive features like social features, navigation integration, etc.</p>
                    </DivAnimation>
                    <DivAnimation className="flex flex-col gap-6 w-full pb-9 border-b border-white/10">
                        <div className="flex flex-col w-full gap-5 md:gap-8">
                            <h2 className="font-thin text-white/50 text-[2em]">02</h2>
                            <HashLink to="#wireframing" smooth className="flex gap-4 cursor-pointer">
                                <h1 className="text-[2em] text-white hover:text-white/70 transition-all">Design</h1>
                                <svg className="hover:opacity-70 transition-all" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                        <path d="M15.4422 0H10.4223C10.1142 0 9.86448 0.249717 9.86448 0.557758C9.86448 0.865799 10.1142 1.11552 10.4223 1.11552H14.0957L3.89237 11.3185L4.68118 12.1073L14.8845 1.90431V5.57758C14.8845 5.88562 15.1341 6.13534 15.4422 6.13534C15.7502 6.13534 16 5.88562 16 5.57758V0.557758C16 0.249716 15.7502 0 15.4422 0Z" fill="white" />
                                        <path d="M1.11554 5.4026C1.11554 4.47847 1.86471 3.72933 2.78886 3.72933H6.69325V2.61381H2.78886C1.24862 2.61381 0 3.8624 0 5.4026V13.2112C0 14.7514 1.24862 16 2.78886 16H10.5977C12.1379 16 13.3865 14.7514 13.3865 13.2112V9.3069H12.271V13.2112C12.271 14.1353 11.5218 14.8845 10.5977 14.8845H2.78886C1.86471 14.8845 1.11554 14.1353 1.11554 13.2112V5.4026Z" fill="white" />
                                    </g>
                                </svg>
                            </HashLink>
                        </div>
                        <p className="w-full">Through the invaluable advice provided by our mentors, we designed comprehensive wireframes for the app,  which we turned into Hi-Fi screen through multiple rounds of iteration based on mentor feedback.</p>
                    </DivAnimation>
                    <DivAnimation className="flex flex-col gap-6 w-full pb-9 border-b border-white/10">
                        <div className="flex flex-col w-full gap-5 md:gap-8">
                            <h2 className="font-thin text-white/50 text-[2em]">03</h2>
                            <HashLink to="#finalscreens" smooth className="flex gap-4 cursor-pointer">
                                <h1 className="text-[2em] text-white hover:text-white/70 transition-all">Prototyping</h1>
                                <svg className="hover:opacity-70 transition-all" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                        <path d="M15.4422 0H10.4223C10.1142 0 9.86448 0.249717 9.86448 0.557758C9.86448 0.865799 10.1142 1.11552 10.4223 1.11552H14.0957L3.89237 11.3185L4.68118 12.1073L14.8845 1.90431V5.57758C14.8845 5.88562 15.1341 6.13534 15.4422 6.13534C15.7502 6.13534 16 5.88562 16 5.57758V0.557758C16 0.249716 15.7502 0 15.4422 0Z" fill="white" />
                                        <path d="M1.11554 5.4026C1.11554 4.47847 1.86471 3.72933 2.78886 3.72933H6.69325V2.61381H2.78886C1.24862 2.61381 0 3.8624 0 5.4026V13.2112C0 14.7514 1.24862 16 2.78886 16H10.5977C12.1379 16 13.3865 14.7514 13.3865 13.2112V9.3069H12.271V13.2112C12.271 14.1353 11.5218 14.8845 10.5977 14.8845H2.78886C1.86471 14.8845 1.11554 14.1353 1.11554 13.2112V5.4026Z" fill="white" />
                                    </g>
                                </svg>
                            </HashLink>
                        </div>
                        <p className="w-full">After several iterations of design feedback and reworks, the prototype was ready for the final stages of the hackathon.</p>
                    </DivAnimation>
                </div>
            </DivAnimation>
            <DivAnimation id="research" className="col-span-full max-md:px-6 md:col-span-10 md:col-start-4 flex flex-col gap-10 pt-20 border-t border-white/10">
                <h1 className="font-bold text-[2em]">User Profiles</h1>
                <p>Considering the market we were designing for, we created appropriate user personas to best represent the variety of potential users and their unique needs and wants. This helped us set realistic objectives and work on the pain points faced by a diverse set of users.</p>
            </DivAnimation>
            <DivAnimation className="col-span-full">
                <PersonaScroll isMobile={isMobile} personas={personaData} />
            </DivAnimation>
            <DivAnimation id="wireframing" className="col-span-full max-md:px-6 md:col-span-10 md:col-start-4 flex flex-col gap-10 pt-20 border-t border-white/10">
                <h1 className="font-bold text-[2em]">Wireframing</h1>
                <p>Wireframes helped us quickly iterate and establish the app’s core structure. With feedback from our mentors, we finalized the core features, user flows, visual hierarchy, and overall information architecture.</p>
            </DivAnimation>
            <DivAnimation className="col-span-full mx-6 px-4 md:px-42 rounded-[30px] bg-[#2C2C2C] flex justify-center gap-6 overflow-x-auto custom-scrollbar">
                <img className="w-full" src={WIREFRAMES}></img>
            </DivAnimation>
            <DivAnimation className="col-span-full max-md:px-6 md:col-span-10 md:col-start-4 flex flex-col gap-10 pt-20 border-t border-white/10">
                <h1 className="font-bold text-[2em]">Styling</h1>
                <p>The style guidelines were set to reflect a sleek, high-performance, bold and innovative visual identity, appealing to both casual and competitive riders. A user-friendly experience was priority so finally I ended up with a sufficiently high contrast, yet neutral palette.</p>
                <img src={Branding} className="rounded-[15px] px-2 md:px-8 py-8"></img>
            </DivAnimation>
            <DivAnimation className="col-span-full flex flex-col gap-32 md:items-center">
                {isMobile ?
                    <svg viewBox="0 0 516 474" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H210.246C240.325 0 263.596 26.3658 259.859 56.2117L243.927 183.454C240.169 213.475 214.647 236 184.392 236H0V0Z" fill="#F8F8F8" />
                        <path d="M76.2055 111.336C72.7615 111.336 70.4935 109.488 70.4935 106.8H73.6855C73.6855 107.892 74.7215 108.62 76.2335 108.62C77.6335 108.62 78.5575 107.976 78.5575 107.08C78.5575 104.504 70.7175 105.932 70.7175 100.864C70.7175 98.092 72.9295 96.384 76.0935 96.384C79.3415 96.384 81.5255 98.148 81.5255 100.724H78.3335C78.3335 99.744 77.4095 99.072 76.0655 99.072C74.7495 99.072 73.8815 99.66 73.8815 100.528C73.8815 103.02 81.7495 101.648 81.7495 106.744C81.7495 109.516 79.5375 111.336 76.2055 111.336ZM91.3738 111.336C86.9498 111.336 83.6738 108.116 83.6738 103.86C83.6738 99.604 86.9498 96.384 91.2898 96.384C95.6578 96.384 98.9338 99.604 98.9338 103.888C98.9338 104.28 98.9058 104.7 98.8498 105.064H87.0338C87.5098 107.136 89.1898 108.508 91.4298 108.508C93.0818 108.508 94.5098 107.78 95.2378 106.688H98.7098C97.5618 109.46 94.7618 111.336 91.3738 111.336ZM91.2898 99.212C89.2178 99.212 87.5658 100.5 87.0618 102.488H95.5738C95.0978 100.528 93.4178 99.212 91.2898 99.212ZM107.902 111.336C103.87 111.336 100.874 108.116 100.874 103.86C100.874 99.604 103.87 96.384 107.902 96.384C110.002 96.384 111.738 97.28 112.914 98.764V96.72H116.05V106.66C116.05 107.472 116.526 107.976 117.366 107.976H117.618V111H116.722C114.762 111 113.53 110.216 113.11 108.732C111.906 110.356 110.086 111.336 107.902 111.336ZM108.518 108.312C111.038 108.312 112.914 106.38 112.914 103.86C112.914 101.34 111.038 99.408 108.518 99.408C105.97 99.408 104.094 101.34 104.094 103.86C104.094 106.38 105.97 108.312 108.518 108.312ZM131.385 111.336C127.941 111.336 125.673 109.488 125.673 106.8H128.865C128.865 107.892 129.901 108.62 131.413 108.62C132.813 108.62 133.737 107.976 133.737 107.08C133.737 104.504 125.897 105.932 125.897 100.864C125.897 98.092 128.109 96.384 131.273 96.384C134.521 96.384 136.705 98.148 136.705 100.724H133.513C133.513 99.744 132.589 99.072 131.245 99.072C129.929 99.072 129.061 99.66 129.061 100.528C129.061 103.02 136.929 101.648 136.929 106.744C136.929 109.516 134.717 111.336 131.385 111.336ZM145.938 111.336C141.906 111.336 138.91 108.116 138.91 103.86C138.91 99.604 141.906 96.384 145.938 96.384C148.038 96.384 149.774 97.28 150.95 98.764V96.72H154.086V106.66C154.086 107.472 154.562 107.976 155.402 107.976H155.654V111H154.758C152.798 111 151.566 110.216 151.146 108.732C149.942 110.356 148.122 111.336 145.938 111.336ZM146.554 108.312C149.074 108.312 150.95 106.38 150.95 103.86C150.95 101.34 149.074 99.408 146.554 99.408C144.006 99.408 142.13 101.34 142.13 103.86C142.13 106.38 144.006 108.312 146.554 108.312ZM162.629 111C159.773 111 158.261 109.6 158.261 107.024V90.84H161.397V106.324C161.397 107.36 162.041 107.976 163.077 107.976H163.945V111H162.629ZM171.471 111C168.755 111 166.935 109.348 166.935 106.856V99.576H164.527V96.72H165.983C166.711 96.72 167.103 96.328 167.103 95.6V92.856H170.071V96.72H174.747V99.576H170.071V106.548C170.071 107.5 170.715 108.116 171.695 108.116C172.675 108.116 173.319 107.444 173.319 106.324H176.119C176.119 109.18 174.327 111 171.471 111Z" fill="#343539" />
                        <path d="M75.9125 144L77.3285 139.2H74.3525V137.976H77.6885L79.0085 133.464H75.6245V132.24H79.3685L80.7605 127.44H82.0805L80.6885 132.24H86.1125L87.5285 127.44H88.8485L87.4325 132.24H90.4085V133.464H87.0965L85.7525 137.976H89.1605V139.2H85.4165L84.0005 144H82.6805L84.0965 139.2H78.6485L77.2565 144H75.9125ZM79.0085 137.976H84.4565L85.7765 133.464H80.3285L79.0085 137.976ZM93.6931 144V127.44H103.749V128.832H95.1571V135.12H102.717V136.512H95.1571V144H93.6931ZM111.74 144.288C108.428 144.288 105.932 142.32 105.932 139.632C105.932 137.688 107.252 136.128 109.22 135.408C107.492 134.712 106.364 133.296 106.364 131.52C106.364 129 108.692 127.152 111.74 127.152C114.836 127.152 117.14 129 117.14 131.52C117.14 133.296 116.012 134.712 114.284 135.408C116.276 136.128 117.572 137.688 117.572 139.632C117.572 142.32 115.1 144.288 111.74 144.288ZM111.74 134.784C113.924 134.784 115.628 133.44 115.628 131.664C115.628 129.888 113.924 128.592 111.74 128.592C109.604 128.592 107.9 129.888 107.9 131.664C107.9 133.44 109.604 134.784 111.74 134.784ZM111.74 142.848C114.188 142.848 116.036 141.432 116.036 139.488C116.036 137.544 114.188 136.104 111.74 136.104C109.34 136.104 107.468 137.544 107.468 139.488C107.468 141.432 109.34 142.848 111.74 142.848ZM121.021 144V127.44H131.077V128.832H122.485V135.12H130.045V136.512H122.485V144H121.021ZM139.068 144.288C135.756 144.288 133.26 142.32 133.26 139.632C133.26 137.688 134.58 136.128 136.548 135.408C134.82 134.712 133.692 133.296 133.692 131.52C133.692 129 136.02 127.152 139.068 127.152C142.164 127.152 144.468 129 144.468 131.52C144.468 133.296 143.34 134.712 141.612 135.408C143.604 136.128 144.9 137.688 144.9 139.632C144.9 142.32 142.428 144.288 139.068 144.288ZM139.068 134.784C141.252 134.784 142.956 133.44 142.956 131.664C142.956 129.888 141.252 128.592 139.068 128.592C136.932 128.592 135.228 129.888 135.228 131.664C135.228 133.44 136.932 134.784 139.068 134.784ZM139.068 142.848C141.516 142.848 143.364 141.432 143.364 139.488C143.364 137.544 141.516 136.104 139.068 136.104C136.668 136.104 134.796 137.544 134.796 139.488C134.796 141.432 136.668 142.848 139.068 142.848ZM148.349 144V127.44H158.405V128.832H149.813V135.12H157.373V136.512H149.813V144H148.349ZM166.396 144.288C163.084 144.288 160.588 142.32 160.588 139.632C160.588 137.688 161.908 136.128 163.876 135.408C162.148 134.712 161.02 133.296 161.02 131.52C161.02 129 163.348 127.152 166.396 127.152C169.492 127.152 171.796 129 171.796 131.52C171.796 133.296 170.668 134.712 168.94 135.408C170.932 136.128 172.228 137.688 172.228 139.632C172.228 142.32 169.756 144.288 166.396 144.288ZM166.396 134.784C168.58 134.784 170.284 133.44 170.284 131.664C170.284 129.888 168.58 128.592 166.396 128.592C164.26 128.592 162.556 129.888 162.556 131.664C162.556 133.44 164.26 134.784 166.396 134.784ZM166.396 142.848C168.844 142.848 170.692 141.432 170.692 139.488C170.692 137.544 168.844 136.104 166.396 136.104C163.996 136.104 162.124 137.544 162.124 139.488C162.124 141.432 163.996 142.848 166.396 142.848Z" fill="#343539" />
                        <path d="M262.421 52.5459L247.898 168.546C243.413 204.361 271.338 236 307.433 236H445.988C482.771 236 510.895 203.205 505.286 166.852L487.39 50.8516C482.876 21.5931 457.696 0 428.092 0H321.957C291.702 0 266.18 22.5255 262.421 52.5459Z" fill="#F6D1D1" />
                        <path d="M329.812 111C327.096 111 325.276 109.348 325.276 106.856V99.576H322.868V96.72H324.324C325.052 96.72 325.444 96.328 325.444 95.6V92.856H328.412V96.72H333.088V99.576H328.412V106.548C328.412 107.5 329.056 108.116 330.036 108.116C331.016 108.116 331.66 107.444 331.66 106.324H334.46C334.46 109.18 332.668 111 329.812 111ZM343.203 111.336C338.779 111.336 335.503 108.116 335.503 103.86C335.503 99.604 338.779 96.384 343.119 96.384C347.487 96.384 350.763 99.604 350.763 103.888C350.763 104.28 350.735 104.7 350.679 105.064H338.863C339.339 107.136 341.019 108.508 343.259 108.508C344.911 108.508 346.339 107.78 347.067 106.688H350.539C349.391 109.46 346.591 111.336 343.203 111.336ZM343.119 99.212C341.047 99.212 339.395 100.5 338.891 102.488H347.403C346.927 100.528 345.247 99.212 343.119 99.212ZM359.732 111.336C355.7 111.336 352.704 108.116 352.704 103.86C352.704 99.604 355.7 96.384 359.732 96.384C361.832 96.384 363.568 97.28 364.744 98.764V96.72H367.88V106.66C367.88 107.472 368.356 107.976 369.196 107.976H369.448V111H368.552C366.592 111 365.36 110.216 364.94 108.732C363.736 110.356 361.916 111.336 359.732 111.336ZM360.348 108.312C362.868 108.312 364.744 106.38 364.744 103.86C364.744 101.34 362.868 99.408 360.348 99.408C357.8 99.408 355.924 101.34 355.924 103.86C355.924 106.38 357.8 108.312 360.348 108.312ZM378.399 111V96.72H381.535V99.1C382.655 97.476 384.307 96.496 386.323 96.496H386.827V99.716H386.323C383.299 99.716 381.535 101.424 381.535 104.056V111H378.399ZM395.292 111.336C390.924 111.336 387.648 108.116 387.648 103.86C387.648 99.604 390.924 96.384 395.292 96.384C399.632 96.384 402.936 99.604 402.936 103.86C402.936 108.116 399.632 111.336 395.292 111.336ZM395.292 108.312C397.812 108.312 399.688 106.38 399.688 103.86C399.688 101.34 397.812 99.408 395.292 99.408C392.772 99.408 390.868 101.34 390.868 103.86C390.868 106.38 392.772 108.312 395.292 108.312ZM410.586 111.336C407.142 111.336 404.874 109.488 404.874 106.8H408.066C408.066 107.892 409.102 108.62 410.614 108.62C412.014 108.62 412.938 107.976 412.938 107.08C412.938 104.504 405.098 105.932 405.098 100.864C405.098 98.092 407.31 96.384 410.474 96.384C413.722 96.384 415.906 98.148 415.906 100.724H412.714C412.714 99.744 411.79 99.072 410.446 99.072C409.13 99.072 408.262 99.66 408.262 100.528C408.262 103.02 416.13 101.648 416.13 106.744C416.13 109.516 413.918 111.336 410.586 111.336ZM425.754 111.336C421.33 111.336 418.054 108.116 418.054 103.86C418.054 99.604 421.33 96.384 425.67 96.384C430.038 96.384 433.314 99.604 433.314 103.888C433.314 104.28 433.286 104.7 433.23 105.064H421.414C421.89 107.136 423.57 108.508 425.81 108.508C427.462 108.508 428.89 107.78 429.618 106.688H433.09C431.942 109.46 429.142 111.336 425.754 111.336ZM425.67 99.212C423.598 99.212 421.946 100.5 421.442 102.488H429.954C429.478 100.528 427.798 99.212 425.67 99.212Z" fill="#343539" />
                        <path d="M332.848 144L334.264 139.2H331.288V137.976H334.624L335.944 133.464H332.56V132.24H336.304L337.696 127.44H339.016L337.624 132.24H343.048L344.464 127.44H345.784L344.368 132.24H347.344V133.464H344.032L342.688 137.976H346.096V139.2H342.352L340.936 144H339.616L341.032 139.2H335.584L334.192 144H332.848ZM335.944 137.976H341.392L342.712 133.464H337.264L335.944 137.976ZM350.628 144V127.44H360.684V128.832H352.092V135.12H359.652V136.512H352.092V144H350.628ZM368.351 144.288C364.895 144.288 362.351 141.576 362.351 137.088C362.351 131.688 366.047 127.344 371.279 127.344H371.759V128.736H371.279C367.295 128.736 364.319 132.024 364.031 136.056C364.895 134.64 366.743 133.704 368.663 133.704C371.711 133.704 374.039 135.936 374.039 138.912C374.039 141.984 371.543 144.288 368.351 144.288ZM368.279 142.848C370.559 142.848 372.503 141.216 372.503 138.936C372.503 136.704 370.631 135.072 368.327 135.072C366.119 135.072 364.055 136.656 364.055 138.384C364.055 140.232 365.519 142.848 368.279 142.848ZM376.902 144V127.44H383.214C387.966 127.44 391.542 130.992 391.542 135.72C391.542 140.448 387.966 144 383.214 144H376.902ZM383.19 128.832H378.366V142.608H383.19C387.102 142.608 390.03 139.656 390.03 135.72C390.03 131.784 387.102 128.832 383.19 128.832ZM397.379 144V129.48C396.395 130.512 394.835 131.208 393.443 131.208V129.816C395.027 129.816 396.755 128.88 397.811 127.44H398.843V144H397.379ZM403.269 144V127.44H409.581C414.333 127.44 417.909 130.992 417.909 135.72C417.909 140.448 414.333 144 409.581 144H403.269ZM409.557 128.832H404.733V142.608H409.557C413.469 142.608 416.397 139.656 416.397 135.72C416.397 131.784 413.469 128.832 409.557 128.832ZM423.746 144V129.48C422.762 130.512 421.202 131.208 419.81 131.208V129.816C421.394 129.816 423.122 128.88 424.178 127.44H425.21V144H423.746Z" fill="#343539" />
                        <path d="M21.081 306.727L38.134 422.727C42.4634 452.177 67.7296 474 97.496 474H194.043C224.298 474 249.82 451.475 253.578 421.454L268.102 305.454C272.586 269.639 244.662 238 208.567 238H80.443C43.8317 238 15.756 270.505 21.081 306.727Z" fill="#FF0000" />
                        <path d="M122.89 349V334.72H126.026V337.1C127.146 335.476 128.798 334.496 130.814 334.496H131.318V337.716H130.814C127.79 337.716 126.026 339.424 126.026 342.056V349H122.89ZM139.839 349.336C135.415 349.336 132.139 346.116 132.139 341.86C132.139 337.604 135.415 334.384 139.755 334.384C144.123 334.384 147.399 337.604 147.399 341.888C147.399 342.28 147.371 342.7 147.315 343.064H135.499C135.975 345.136 137.655 346.508 139.895 346.508C141.547 346.508 142.975 345.78 143.703 344.688H147.175C146.027 347.46 143.227 349.336 139.839 349.336ZM139.755 337.212C137.683 337.212 136.031 338.5 135.527 340.488H144.039C143.563 338.528 141.883 337.212 139.755 337.212ZM156.367 349.336C152.335 349.336 149.339 346.116 149.339 341.86C149.339 337.604 152.335 334.384 156.367 334.384C158.467 334.384 160.203 335.28 161.379 336.764V328.84H164.515V344.66C164.515 345.472 164.991 345.976 165.831 345.976H166.083V349H165.187C163.227 349 161.995 348.216 161.575 346.732C160.371 348.356 158.551 349.336 156.367 349.336ZM156.983 346.312C159.503 346.312 161.379 344.38 161.379 341.86C161.379 339.34 159.503 337.408 156.983 337.408C154.435 337.408 152.559 339.34 152.559 341.86C152.559 344.38 154.435 346.312 156.983 346.312Z" fill="white" />
                        <path d="M93.6547 382L95.0707 377.2H92.0947V375.976H95.4307L96.7507 371.464H93.3667V370.24H97.1107L98.5027 365.44H99.8227L98.4307 370.24H103.855L105.271 365.44H106.591L105.175 370.24H108.151V371.464H104.839L103.495 375.976H106.903V377.2H103.159L101.743 382H100.423L101.839 377.2H96.3907L94.9987 382H93.6547ZM96.7507 375.976H102.199L103.519 371.464H98.0707L96.7507 375.976ZM111.435 382V365.44H121.491V366.832H112.899V373.12H120.459V374.512H112.899V382H111.435ZM124.607 382V365.44H134.663V366.832H126.071V373.12H133.631V374.512H126.071V382H124.607ZM142.974 382.288C139.278 382.288 136.686 378.784 136.686 373.72C136.686 368.656 139.278 365.152 142.974 365.152C146.694 365.152 149.286 368.656 149.286 373.72C149.286 378.784 146.694 382.288 142.974 382.288ZM142.974 380.848C145.782 380.848 147.75 377.92 147.75 373.72C147.75 369.52 145.782 366.592 142.974 366.592C140.19 366.592 138.222 369.52 138.222 373.72C138.222 377.92 140.19 380.848 142.974 380.848ZM158.56 382.288C154.864 382.288 152.272 378.784 152.272 373.72C152.272 368.656 154.864 365.152 158.56 365.152C162.28 365.152 164.872 368.656 164.872 373.72C164.872 378.784 162.28 382.288 158.56 382.288ZM158.56 380.848C161.368 380.848 163.336 377.92 163.336 373.72C163.336 369.52 161.368 366.592 158.56 366.592C155.776 366.592 153.808 369.52 153.808 373.72C153.808 377.92 155.776 380.848 158.56 380.848ZM174.146 382.288C170.45 382.288 167.858 378.784 167.858 373.72C167.858 368.656 170.45 365.152 174.146 365.152C177.866 365.152 180.458 368.656 180.458 373.72C180.458 378.784 177.866 382.288 174.146 382.288ZM174.146 380.848C176.954 380.848 178.922 377.92 178.922 373.72C178.922 369.52 176.954 366.592 174.146 366.592C171.362 366.592 169.394 369.52 169.394 373.72C169.394 377.92 171.362 380.848 174.146 380.848ZM189.732 382.288C186.036 382.288 183.444 378.784 183.444 373.72C183.444 368.656 186.036 365.152 189.732 365.152C193.452 365.152 196.044 368.656 196.044 373.72C196.044 378.784 193.452 382.288 189.732 382.288ZM189.732 380.848C192.54 380.848 194.508 377.92 194.508 373.72C194.508 369.52 192.54 366.592 189.732 366.592C186.948 366.592 184.98 369.52 184.98 373.72C184.98 377.92 186.948 380.848 189.732 380.848Z" fill="white" />
                        <path d="M272.073 290.546L256.141 417.788C252.405 447.634 275.675 474 305.754 474H516L516 238H331.608C301.353 238 275.832 260.525 272.073 290.546Z" fill="#391419" />
                        <path d="M318.946 349V328.84H322.082V336.764C323.286 335.28 325.022 334.384 327.122 334.384C331.126 334.384 334.15 337.604 334.15 341.86C334.15 346.116 331.126 349.336 327.122 349.336C325.022 349.336 323.286 348.44 322.082 346.956V349H318.946ZM326.506 346.312C329.026 346.312 330.902 344.38 330.902 341.86C330.902 339.34 329.026 337.408 326.506 337.408C323.986 337.408 322.082 339.34 322.082 341.86C322.082 344.38 323.986 346.312 326.506 346.312ZM341.386 349C338.53 349 337.018 347.6 337.018 345.024V328.84H340.154V344.324C340.154 345.36 340.798 345.976 341.834 345.976H342.702V349H341.386ZM350.945 349.336C346.913 349.336 343.917 346.116 343.917 341.86C343.917 337.604 346.913 334.384 350.945 334.384C353.045 334.384 354.781 335.28 355.957 336.764V334.72H359.093V344.66C359.093 345.472 359.569 345.976 360.409 345.976H360.661V349H359.765C357.805 349 356.573 348.216 356.153 346.732C354.949 348.356 353.129 349.336 350.945 349.336ZM351.561 346.312C354.081 346.312 355.957 344.38 355.957 341.86C355.957 339.34 354.081 337.408 351.561 337.408C349.013 337.408 347.137 339.34 347.137 341.86C347.137 344.38 349.013 346.312 351.561 346.312ZM369.853 349.336C365.485 349.336 362.209 346.116 362.209 341.86C362.209 337.604 365.485 334.384 369.853 334.384C373.577 334.384 376.517 336.736 377.105 340.096H373.773C373.269 338.5 371.729 337.408 369.853 337.408C367.333 337.408 365.429 339.34 365.429 341.86C365.429 344.38 367.333 346.312 369.853 346.312C371.729 346.312 373.269 345.22 373.773 343.624H377.105C376.517 346.984 373.577 349.336 369.853 349.336ZM379.949 349V328.84H383.085V341.272L389.329 334.72H393.305L387.173 341.076L393.529 349H389.497L384.989 343.372L383.085 345.36V349H379.949ZM401.852 349V328.84H404.988V336.764C406.192 335.28 407.928 334.384 410.028 334.384C414.032 334.384 417.056 337.604 417.056 341.86C417.056 346.116 414.032 349.336 410.028 349.336C407.928 349.336 406.192 348.44 404.988 346.956V349H401.852ZM409.412 346.312C411.932 346.312 413.808 344.38 413.808 341.86C413.808 339.34 411.932 337.408 409.412 337.408C406.892 337.408 404.988 339.34 404.988 341.86C404.988 344.38 406.892 346.312 409.412 346.312ZM426.784 349.336C422.36 349.336 419.084 346.116 419.084 341.86C419.084 337.604 422.36 334.384 426.7 334.384C431.068 334.384 434.344 337.604 434.344 341.888C434.344 342.28 434.316 342.7 434.26 343.064H422.444C422.92 345.136 424.6 346.508 426.84 346.508C428.492 346.508 429.92 345.78 430.648 344.688H434.12C432.972 347.46 430.172 349.336 426.784 349.336ZM426.7 337.212C424.628 337.212 422.976 338.5 422.472 340.488H430.984C430.508 338.528 428.828 337.212 426.7 337.212ZM443.313 349.336C439.281 349.336 436.285 346.116 436.285 341.86C436.285 337.604 439.281 334.384 443.313 334.384C445.413 334.384 447.149 335.28 448.325 336.764V334.72H451.461V344.66C451.461 345.472 451.937 345.976 452.777 345.976H453.029V349H452.133C450.173 349 448.941 348.216 448.521 346.732C447.317 348.356 445.497 349.336 443.313 349.336ZM443.929 346.312C446.449 346.312 448.325 344.38 448.325 341.86C448.325 339.34 446.449 337.408 443.929 337.408C441.381 337.408 439.505 339.34 439.505 341.86C439.505 344.38 441.381 346.312 443.929 346.312ZM455.362 349V334.72H458.498V336.54C459.646 335.14 461.298 334.384 463.314 334.384C466.702 334.384 468.97 336.624 468.97 340.012V344.66C468.97 345.472 469.446 345.976 470.258 345.976H470.538V349H469.642C467.15 349 465.834 347.74 465.834 345.36V341.048C465.834 338.864 464.434 337.408 462.278 337.408C460.01 337.408 458.498 338.892 458.498 341.104V349H455.362Z" fill="#FFFBF2" />
                        <path d="M351.866 382L353.282 377.2H350.306V375.976H353.642L354.962 371.464H351.578V370.24H355.322L356.714 365.44H358.034L356.642 370.24H362.066L363.482 365.44H364.802L363.386 370.24H366.362V371.464H363.05L361.706 375.976H365.114V377.2H361.37L359.954 382H358.634L360.05 377.2H354.602L353.21 382H351.866ZM354.962 375.976H360.41L361.73 371.464H356.282L354.962 375.976ZM374.302 382.288C371.158 382.288 368.758 380.224 368.758 377.512H370.27C370.27 379.432 372.046 380.848 374.302 380.848C376.534 380.848 378.31 379.408 378.31 377.392C378.31 375.496 376.726 374.056 374.542 374.056H372.334V372.832H374.542C376.462 372.832 377.926 371.512 377.926 369.76C377.926 367.912 376.318 366.592 374.302 366.592C372.262 366.592 370.654 367.888 370.654 369.664H369.142C369.142 367.096 371.374 365.152 374.302 365.152C377.182 365.152 379.462 367.072 379.462 369.616C379.462 371.344 378.358 372.784 376.75 373.408C378.646 374.032 379.846 375.664 379.846 377.56C379.846 380.248 377.398 382.288 374.302 382.288ZM384.681 382.096H383.721V380.704H384.681C388.377 380.704 391.521 377.752 391.809 373.384C390.921 374.8 389.073 375.736 387.153 375.736C384.105 375.736 381.777 373.504 381.777 370.528C381.777 367.456 384.273 365.152 387.465 365.152C390.945 365.152 393.465 367.864 393.465 372.352C393.465 378.112 389.649 382.096 384.681 382.096ZM387.513 374.368C389.697 374.368 391.761 372.784 391.761 371.056C391.761 369.208 390.297 366.592 387.537 366.592C385.281 366.592 383.313 368.224 383.313 370.504C383.313 372.736 385.209 374.368 387.513 374.368ZM399.616 382V367.48C398.632 368.512 397.072 369.208 395.68 369.208V367.816C397.264 367.816 398.992 366.88 400.048 365.44H401.08V382H399.616ZM404.258 377.944V376.768C407.45 372.928 409.274 369.16 409.73 365.44H411.266C410.834 369.088 409.13 372.784 406.178 376.552H412.754V371.128H414.17V376.552H416.57V377.944H414.17V382H412.682V377.944H404.258ZM421.577 382V367.48C420.593 368.512 419.033 369.208 417.641 369.208V367.816C419.225 367.816 420.953 366.88 422.009 365.44H423.041V382H421.577ZM428.955 382.096H427.995V380.704H428.955C432.651 380.704 435.795 377.752 436.083 373.384C435.195 374.8 433.347 375.736 431.427 375.736C428.379 375.736 426.051 373.504 426.051 370.528C426.051 367.456 428.547 365.152 431.739 365.152C435.219 365.152 437.739 367.864 437.739 372.352C437.739 378.112 433.923 382.096 428.955 382.096ZM431.787 374.368C433.971 374.368 436.035 372.784 436.035 371.056C436.035 369.208 434.571 366.592 431.811 366.592C429.555 366.592 427.587 368.224 427.587 370.504C427.587 372.736 429.483 374.368 431.787 374.368Z" fill="#FFFBF2" />
                    </svg>
                    :
                    <svg viewBox="0 0 1440 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0H329.05C360.258 0 383.84 28.2747 378.238 58.976L354.917 186.771C349.714 215.283 324.874 236 295.892 236H0V0Z" fill="#F8F8F8" />
                        <rect width="210" height="73" transform="translate(67 81)" fill="#F8F8F8" />
                        <path d="M118.616 112.384C114.68 112.384 112.088 110.272 112.088 107.2H115.736C115.736 108.448 116.92 109.28 118.648 109.28C120.248 109.28 121.304 108.544 121.304 107.52C121.304 104.576 112.344 106.208 112.344 100.416C112.344 97.248 114.872 95.296 118.488 95.296C122.2 95.296 124.696 97.312 124.696 100.256H121.048C121.048 99.136 119.992 98.368 118.456 98.368C116.952 98.368 115.96 99.04 115.96 100.032C115.96 102.88 124.952 101.312 124.952 107.136C124.952 110.304 122.424 112.384 118.616 112.384ZM135.951 112.384C130.895 112.384 127.151 108.704 127.151 103.84C127.151 98.976 130.895 95.296 135.855 95.296C140.847 95.296 144.591 98.976 144.591 103.872C144.591 104.32 144.559 104.8 144.495 105.216H130.991C131.535 107.584 133.455 109.152 136.015 109.152C137.903 109.152 139.535 108.32 140.367 107.072H144.335C143.023 110.24 139.823 112.384 135.951 112.384ZM135.855 98.528C133.487 98.528 131.599 100 131.023 102.272H140.751C140.207 100.032 138.287 98.528 135.855 98.528ZM154.841 112.384C150.233 112.384 146.809 108.704 146.809 103.84C146.809 98.976 150.233 95.296 154.841 95.296C157.241 95.296 159.225 96.32 160.569 98.016V95.68H164.153V107.04C164.153 107.968 164.697 108.544 165.657 108.544H165.945V112H164.921C162.681 112 161.273 111.104 160.793 109.408C159.417 111.264 157.337 112.384 154.841 112.384ZM155.545 108.928C158.425 108.928 160.569 106.72 160.569 103.84C160.569 100.96 158.425 98.752 155.545 98.752C152.633 98.752 150.489 100.96 150.489 103.84C150.489 106.72 152.633 108.928 155.545 108.928ZM181.679 112.384C177.743 112.384 175.151 110.272 175.151 107.2H178.799C178.799 108.448 179.983 109.28 181.711 109.28C183.311 109.28 184.367 108.544 184.367 107.52C184.367 104.576 175.407 106.208 175.407 100.416C175.407 97.248 177.935 95.296 181.551 95.296C185.263 95.296 187.759 97.312 187.759 100.256H184.111C184.111 99.136 183.055 98.368 181.519 98.368C180.015 98.368 179.023 99.04 179.023 100.032C179.023 102.88 188.015 101.312 188.015 107.136C188.015 110.304 185.487 112.384 181.679 112.384ZM198.31 112.384C193.702 112.384 190.278 108.704 190.278 103.84C190.278 98.976 193.702 95.296 198.31 95.296C200.71 95.296 202.694 96.32 204.038 98.016V95.68H207.622V107.04C207.622 107.968 208.166 108.544 209.126 108.544H209.414V112H208.39C206.15 112 204.742 111.104 204.262 109.408C202.886 111.264 200.806 112.384 198.31 112.384ZM199.014 108.928C201.894 108.928 204.038 106.72 204.038 103.84C204.038 100.96 201.894 98.752 199.014 98.752C196.102 98.752 193.958 100.96 193.958 103.84C193.958 106.72 196.102 108.928 199.014 108.928ZM217.385 112C214.121 112 212.393 110.4 212.393 107.456V88.96H215.977V106.656C215.977 107.84 216.713 108.544 217.897 108.544H218.889V112H217.385ZM227.491 112C224.387 112 222.307 110.112 222.307 107.264V98.944H219.555V95.68H221.219C222.051 95.68 222.499 95.232 222.499 94.4V91.264H225.891V95.68H231.235V98.944H225.891V106.912C225.891 108 226.627 108.704 227.747 108.704C228.867 108.704 229.603 107.936 229.603 106.656H232.803C232.803 109.92 230.755 112 227.491 112Z" fill="#343539" />
                        <path d="M124.871 146L126.287 141.2H123.311V139.976H126.647L127.967 135.464H124.583V134.24H128.327L129.719 129.44H131.039L129.647 134.24H135.071L136.487 129.44H137.807L136.391 134.24H139.367V135.464H136.055L134.711 139.976H138.119V141.2H134.375L132.959 146H131.639L133.055 141.2H127.607L126.215 146H124.871ZM127.967 139.976H133.415L134.735 135.464H129.287L127.967 139.976ZM142.652 146V129.44H152.708V130.832H144.116V137.12H151.676V138.512H144.116V146H142.652ZM160.698 146.288C157.386 146.288 154.89 144.32 154.89 141.632C154.89 139.688 156.21 138.128 158.178 137.408C156.45 136.712 155.322 135.296 155.322 133.52C155.322 131 157.65 129.152 160.698 129.152C163.794 129.152 166.098 131 166.098 133.52C166.098 135.296 164.97 136.712 163.242 137.408C165.234 138.128 166.53 139.688 166.53 141.632C166.53 144.32 164.058 146.288 160.698 146.288ZM160.698 136.784C162.882 136.784 164.586 135.44 164.586 133.664C164.586 131.888 162.882 130.592 160.698 130.592C158.562 130.592 156.858 131.888 156.858 133.664C156.858 135.44 158.562 136.784 160.698 136.784ZM160.698 144.848C163.146 144.848 164.994 143.432 164.994 141.488C164.994 139.544 163.146 138.104 160.698 138.104C158.298 138.104 156.426 139.544 156.426 141.488C156.426 143.432 158.298 144.848 160.698 144.848ZM169.98 146V129.44H180.036V130.832H171.444V137.12H179.004V138.512H171.444V146H169.98ZM188.026 146.288C184.714 146.288 182.218 144.32 182.218 141.632C182.218 139.688 183.538 138.128 185.506 137.408C183.778 136.712 182.65 135.296 182.65 133.52C182.65 131 184.978 129.152 188.026 129.152C191.122 129.152 193.426 131 193.426 133.52C193.426 135.296 192.298 136.712 190.57 137.408C192.562 138.128 193.858 139.688 193.858 141.632C193.858 144.32 191.386 146.288 188.026 146.288ZM188.026 136.784C190.21 136.784 191.914 135.44 191.914 133.664C191.914 131.888 190.21 130.592 188.026 130.592C185.89 130.592 184.186 131.888 184.186 133.664C184.186 135.44 185.89 136.784 188.026 136.784ZM188.026 144.848C190.474 144.848 192.322 143.432 192.322 141.488C192.322 139.544 190.474 138.104 188.026 138.104C185.626 138.104 183.754 139.544 183.754 141.488C183.754 143.432 185.626 144.848 188.026 144.848ZM197.308 146V129.44H207.364V130.832H198.772V137.12H206.332V138.512H198.772V146H197.308ZM215.355 146.288C212.043 146.288 209.547 144.32 209.547 141.632C209.547 139.688 210.867 138.128 212.835 137.408C211.107 136.712 209.979 135.296 209.979 133.52C209.979 131 212.307 129.152 215.355 129.152C218.451 129.152 220.755 131 220.755 133.52C220.755 135.296 219.627 136.712 217.899 137.408C219.891 138.128 221.187 139.688 221.187 141.632C221.187 144.32 218.715 146.288 215.355 146.288ZM215.355 136.784C217.539 136.784 219.243 135.44 219.243 133.664C219.243 131.888 217.539 130.592 215.355 130.592C213.219 130.592 211.515 131.888 211.515 133.664C211.515 135.44 213.219 136.784 215.355 136.784ZM215.355 144.848C217.803 144.848 219.651 143.432 219.651 141.488C219.651 139.544 217.803 138.104 215.355 138.104C212.955 138.104 211.083 139.544 211.083 141.488C211.083 143.432 212.955 144.848 215.355 144.848Z" fill="#343539" />
                        <path d="M383.083 49.2288L361.915 165.229C355.192 202.07 383.49 236 420.94 236H677.01C715.457 236 743.983 200.347 735.549 162.837L709.465 46.8372C703.308 19.4554 678.992 0 650.927 0H442.108C413.126 0 388.286 20.717 383.083 49.2288Z" fill="#F6D1D1" />
                        <rect width="210" height="73" transform="translate(441 81)" fill="#F6D1D1" />
                        <path d="M490.428 112C487.324 112 485.244 110.112 485.244 107.264V98.944H482.492V95.68H484.156C484.988 95.68 485.436 95.232 485.436 94.4V91.264H488.828V95.68H494.172V98.944H488.828V106.912C488.828 108 489.564 108.704 490.684 108.704C491.804 108.704 492.54 107.936 492.54 106.656H495.74C495.74 109.92 493.692 112 490.428 112ZM505.733 112.384C500.677 112.384 496.933 108.704 496.933 103.84C496.933 98.976 500.677 95.296 505.637 95.296C510.629 95.296 514.373 98.976 514.373 103.872C514.373 104.32 514.341 104.8 514.277 105.216H500.773C501.317 107.584 503.237 109.152 505.797 109.152C507.685 109.152 509.317 108.32 510.149 107.072H514.117C512.805 110.24 509.605 112.384 505.733 112.384ZM505.637 98.528C503.269 98.528 501.381 100 500.805 102.272H510.533C509.989 100.032 508.069 98.528 505.637 98.528ZM524.622 112.384C520.014 112.384 516.59 108.704 516.59 103.84C516.59 98.976 520.014 95.296 524.622 95.296C527.022 95.296 529.006 96.32 530.35 98.016V95.68H533.934V107.04C533.934 107.968 534.478 108.544 535.438 108.544H535.726V112H534.702C532.462 112 531.054 111.104 530.574 109.408C529.198 111.264 527.118 112.384 524.622 112.384ZM525.326 108.928C528.206 108.928 530.35 106.72 530.35 103.84C530.35 100.96 528.206 98.752 525.326 98.752C522.414 98.752 520.27 100.96 520.27 103.84C520.27 106.72 522.414 108.928 525.326 108.928ZM545.956 112V95.68H549.54V98.4C550.82 96.544 552.708 95.424 555.012 95.424H555.588V99.104H555.012C551.556 99.104 549.54 101.056 549.54 104.064V112H545.956ZM565.262 112.384C560.27 112.384 556.526 108.704 556.526 103.84C556.526 98.976 560.27 95.296 565.262 95.296C570.222 95.296 573.998 98.976 573.998 103.84C573.998 108.704 570.222 112.384 565.262 112.384ZM565.262 108.928C568.142 108.928 570.286 106.72 570.286 103.84C570.286 100.96 568.142 98.752 565.262 98.752C562.382 98.752 560.206 100.96 560.206 103.84C560.206 106.72 562.382 108.928 565.262 108.928ZM582.741 112.384C578.805 112.384 576.213 110.272 576.213 107.2H579.861C579.861 108.448 581.045 109.28 582.773 109.28C584.373 109.28 585.429 108.544 585.429 107.52C585.429 104.576 576.469 106.208 576.469 100.416C576.469 97.248 578.997 95.296 582.613 95.296C586.325 95.296 588.821 97.312 588.821 100.256H585.173C585.173 99.136 584.117 98.368 582.581 98.368C581.077 98.368 580.085 99.04 580.085 100.032C580.085 102.88 589.077 101.312 589.077 107.136C589.077 110.304 586.549 112.384 582.741 112.384ZM600.076 112.384C595.02 112.384 591.276 108.704 591.276 103.84C591.276 98.976 595.02 95.296 599.98 95.296C604.972 95.296 608.716 98.976 608.716 103.872C608.716 104.32 608.684 104.8 608.62 105.216H595.116C595.66 107.584 597.58 109.152 600.14 109.152C602.028 109.152 603.66 108.32 604.492 107.072H608.46C607.148 110.24 603.948 112.384 600.076 112.384ZM599.98 98.528C597.612 98.528 595.724 100 595.148 102.272H604.876C604.332 100.032 602.412 98.528 599.98 98.528Z" fill="#343539" />
                        <path d="M500.348 146L501.764 141.2H498.788V139.976H502.124L503.444 135.464H500.06V134.24H503.804L505.196 129.44H506.516L505.124 134.24H510.548L511.964 129.44H513.284L511.868 134.24H514.844V135.464H511.532L510.188 139.976H513.596V141.2H509.852L508.436 146H507.116L508.532 141.2H503.084L501.692 146H500.348ZM503.444 139.976H508.892L510.212 135.464H504.764L503.444 139.976ZM518.128 146V129.44H528.184V130.832H519.592V137.12H527.152V138.512H519.592V146H518.128ZM535.851 146.288C532.395 146.288 529.851 143.576 529.851 139.088C529.851 133.688 533.547 129.344 538.779 129.344H539.259V130.736H538.779C534.795 130.736 531.819 134.024 531.531 138.056C532.395 136.64 534.243 135.704 536.163 135.704C539.211 135.704 541.539 137.936 541.539 140.912C541.539 143.984 539.043 146.288 535.851 146.288ZM535.779 144.848C538.059 144.848 540.003 143.216 540.003 140.936C540.003 138.704 538.131 137.072 535.827 137.072C533.619 137.072 531.555 138.656 531.555 140.384C531.555 142.232 533.019 144.848 535.779 144.848ZM544.402 146V129.44H550.714C555.466 129.44 559.042 132.992 559.042 137.72C559.042 142.448 555.466 146 550.714 146H544.402ZM550.69 130.832H545.866V144.608H550.69C554.602 144.608 557.53 141.656 557.53 137.72C557.53 133.784 554.602 130.832 550.69 130.832ZM564.879 146V131.48C563.895 132.512 562.335 133.208 560.943 133.208V131.816C562.527 131.816 564.255 130.88 565.311 129.44H566.343V146H564.879ZM570.769 146V129.44H577.081C581.833 129.44 585.409 132.992 585.409 137.72C585.409 142.448 581.833 146 577.081 146H570.769ZM577.057 130.832H572.233V144.608H577.057C580.969 144.608 583.897 141.656 583.897 137.72C583.897 133.784 580.969 130.832 577.057 130.832ZM591.246 146V131.48C590.262 132.512 588.702 133.208 587.31 133.208V131.816C588.894 131.816 590.622 130.88 591.678 129.44H592.71V146H591.246Z" fill="#343539" />
                        <path d="M719.483 72.5706L744.338 188.571C750.265 216.235 774.713 236 803.006 236H997.892C1026.87 236 1051.71 215.283 1056.92 186.771L1078.09 70.7712C1084.81 33.9296 1056.51 0 1019.06 0H778.151C739.953 0 711.48 35.2202 719.483 72.5706Z" fill="#FF0000" />
                        <rect width="210" height="73" transform="translate(790 81)" fill="#FF0000" />
                        <path d="M870.612 112V95.68H874.196V98.4C875.476 96.544 877.364 95.424 879.668 95.424H880.244V99.104H879.668C876.212 99.104 874.196 101.056 874.196 104.064V112H870.612ZM889.983 112.384C884.927 112.384 881.183 108.704 881.183 103.84C881.183 98.976 884.927 95.296 889.887 95.296C894.879 95.296 898.623 98.976 898.623 103.872C898.623 104.32 898.591 104.8 898.527 105.216H885.023C885.567 107.584 887.487 109.152 890.047 109.152C891.935 109.152 893.567 108.32 894.399 107.072H898.367C897.055 110.24 893.855 112.384 889.983 112.384ZM889.887 98.528C887.519 98.528 885.631 100 885.055 102.272H894.783C894.239 100.032 892.319 98.528 889.887 98.528ZM908.872 112.384C904.264 112.384 900.84 108.704 900.84 103.84C900.84 98.976 904.264 95.296 908.872 95.296C911.272 95.296 913.256 96.32 914.6 98.016V88.96H918.184V107.04C918.184 107.968 918.728 108.544 919.688 108.544H919.976V112H918.952C916.712 112 915.304 111.104 914.824 109.408C913.448 111.264 911.368 112.384 908.872 112.384ZM909.576 108.928C912.456 108.928 914.6 106.72 914.6 103.84C914.6 100.96 912.456 98.752 909.576 98.752C906.664 98.752 904.52 100.96 904.52 103.84C904.52 106.72 906.664 108.928 909.576 108.928Z" fill="white" />
                        <path d="M844.613 146L846.029 141.2H843.053V139.976H846.389L847.709 135.464H844.325V134.24H848.069L849.461 129.44H850.781L849.389 134.24H854.813L856.229 129.44H857.549L856.133 134.24H859.109V135.464H855.797L854.453 139.976H857.861V141.2H854.117L852.701 146H851.381L852.797 141.2H847.349L845.957 146H844.613ZM847.709 139.976H853.157L854.477 135.464H849.029L847.709 139.976ZM862.394 146V129.44H872.45V130.832H863.858V137.12H871.418V138.512H863.858V146H862.394ZM875.566 146V129.44H885.622V130.832H877.03V137.12H884.59V138.512H877.03V146H875.566ZM893.932 146.288C890.236 146.288 887.644 142.784 887.644 137.72C887.644 132.656 890.236 129.152 893.932 129.152C897.652 129.152 900.244 132.656 900.244 137.72C900.244 142.784 897.652 146.288 893.932 146.288ZM893.932 144.848C896.74 144.848 898.708 141.92 898.708 137.72C898.708 133.52 896.74 130.592 893.932 130.592C891.148 130.592 889.18 133.52 889.18 137.72C889.18 141.92 891.148 144.848 893.932 144.848ZM909.518 146.288C905.822 146.288 903.23 142.784 903.23 137.72C903.23 132.656 905.822 129.152 909.518 129.152C913.238 129.152 915.83 132.656 915.83 137.72C915.83 142.784 913.238 146.288 909.518 146.288ZM909.518 144.848C912.326 144.848 914.294 141.92 914.294 137.72C914.294 133.52 912.326 130.592 909.518 130.592C906.734 130.592 904.766 133.52 904.766 137.72C904.766 141.92 906.734 144.848 909.518 144.848ZM925.104 146.288C921.408 146.288 918.816 142.784 918.816 137.72C918.816 132.656 921.408 129.152 925.104 129.152C928.824 129.152 931.416 132.656 931.416 137.72C931.416 142.784 928.824 146.288 925.104 146.288ZM925.104 144.848C927.912 144.848 929.88 141.92 929.88 137.72C929.88 133.52 927.912 130.592 925.104 130.592C922.32 130.592 920.352 133.52 920.352 137.72C920.352 141.92 922.32 144.848 925.104 144.848ZM940.69 146.288C936.994 146.288 934.402 142.784 934.402 137.72C934.402 132.656 936.994 129.152 940.69 129.152C944.41 129.152 947.002 132.656 947.002 137.72C947.002 142.784 944.41 146.288 940.69 146.288ZM940.69 144.848C943.498 144.848 945.466 141.92 945.466 137.72C945.466 133.52 943.498 130.592 940.69 130.592C937.906 130.592 935.938 133.52 935.938 137.72C935.938 141.92 937.906 144.848 940.69 144.848Z" fill="white" />
                        <path d="M1085.08 49.2288L1061.76 177.024C1056.16 207.725 1079.74 236 1110.95 236H1440L1440 0H1144.11C1115.13 0 1090.29 20.717 1085.08 49.2288Z" fill="#391419" />
                        <rect width="210" height="73" transform="translate(1163 81)" fill="#391419" />
                        <path d="M1182.18 112V88.96H1185.76V98.016C1187.14 96.32 1189.12 95.296 1191.52 95.296C1196.1 95.296 1199.55 98.976 1199.55 103.84C1199.55 108.704 1196.1 112.384 1191.52 112.384C1189.12 112.384 1187.14 111.36 1185.76 109.664V112H1182.18ZM1190.82 108.928C1193.7 108.928 1195.84 106.72 1195.84 103.84C1195.84 100.96 1193.7 98.752 1190.82 98.752C1187.94 98.752 1185.76 100.96 1185.76 103.84C1185.76 106.72 1187.94 108.928 1190.82 108.928ZM1207.82 112C1204.56 112 1202.83 110.4 1202.83 107.456V88.96H1206.41V106.656C1206.41 107.84 1207.15 108.544 1208.33 108.544H1209.33V112H1207.82ZM1218.75 112.384C1214.14 112.384 1210.72 108.704 1210.72 103.84C1210.72 98.976 1214.14 95.296 1218.75 95.296C1221.15 95.296 1223.13 96.32 1224.48 98.016V95.68H1228.06V107.04C1228.06 107.968 1228.6 108.544 1229.56 108.544H1229.85V112H1228.83C1226.59 112 1225.18 111.104 1224.7 109.408C1223.32 111.264 1221.24 112.384 1218.75 112.384ZM1219.45 108.928C1222.33 108.928 1224.48 106.72 1224.48 103.84C1224.48 100.96 1222.33 98.752 1219.45 98.752C1216.54 98.752 1214.4 100.96 1214.4 103.84C1214.4 106.72 1216.54 108.928 1219.45 108.928ZM1240.36 112.384C1235.36 112.384 1231.62 108.704 1231.62 103.84C1231.62 98.976 1235.36 95.296 1240.36 95.296C1244.61 95.296 1247.97 97.984 1248.64 101.824H1244.84C1244.26 100 1242.5 98.752 1240.36 98.752C1237.48 98.752 1235.3 100.96 1235.3 103.84C1235.3 106.72 1237.48 108.928 1240.36 108.928C1242.5 108.928 1244.26 107.68 1244.84 105.856H1248.64C1247.97 109.696 1244.61 112.384 1240.36 112.384ZM1251.89 112V88.96H1255.48V103.168L1262.61 95.68H1267.16L1260.15 102.944L1267.41 112H1262.81L1257.65 105.568L1255.48 107.84V112H1251.89ZM1276.93 112V88.96H1280.51V98.016C1281.89 96.32 1283.87 95.296 1286.27 95.296C1290.85 95.296 1294.3 98.976 1294.3 103.84C1294.3 108.704 1290.85 112.384 1286.27 112.384C1283.87 112.384 1281.89 111.36 1280.51 109.664V112H1276.93ZM1285.57 108.928C1288.45 108.928 1290.59 106.72 1290.59 103.84C1290.59 100.96 1288.45 98.752 1285.57 98.752C1282.69 98.752 1280.51 100.96 1280.51 103.84C1280.51 106.72 1282.69 108.928 1285.57 108.928ZM1305.42 112.384C1300.36 112.384 1296.62 108.704 1296.62 103.84C1296.62 98.976 1300.36 95.296 1305.32 95.296C1310.32 95.296 1314.06 98.976 1314.06 103.872C1314.06 104.32 1314.03 104.8 1313.96 105.216H1300.46C1301 107.584 1302.92 109.152 1305.48 109.152C1307.37 109.152 1309 108.32 1309.84 107.072H1313.8C1312.49 110.24 1309.29 112.384 1305.42 112.384ZM1305.32 98.528C1302.96 98.528 1301.07 100 1300.49 102.272H1310.22C1309.68 100.032 1307.76 98.528 1305.32 98.528ZM1324.31 112.384C1319.7 112.384 1316.28 108.704 1316.28 103.84C1316.28 98.976 1319.7 95.296 1324.31 95.296C1326.71 95.296 1328.69 96.32 1330.04 98.016V95.68H1333.62V107.04C1333.62 107.968 1334.17 108.544 1335.13 108.544H1335.41V112H1334.39C1332.15 112 1330.74 111.104 1330.26 109.408C1328.89 111.264 1326.81 112.384 1324.31 112.384ZM1325.01 108.928C1327.89 108.928 1330.04 106.72 1330.04 103.84C1330.04 100.96 1327.89 98.752 1325.01 98.752C1322.1 98.752 1319.96 100.96 1319.96 103.84C1319.96 106.72 1322.1 108.928 1325.01 108.928ZM1338.08 112V95.68H1341.66V97.76C1342.98 96.16 1344.86 95.296 1347.17 95.296C1351.04 95.296 1353.63 97.856 1353.63 101.728V107.04C1353.63 107.968 1354.18 108.544 1355.1 108.544H1355.42V112H1354.4C1351.55 112 1350.05 110.56 1350.05 107.84V102.912C1350.05 100.416 1348.45 98.752 1345.98 98.752C1343.39 98.752 1341.66 100.448 1341.66 102.976V112H1338.08Z" fill="#FFFBF2" />
                        <path d="M1225.82 146L1227.24 141.2H1224.26V139.976H1227.6L1228.92 135.464H1225.54V134.24H1229.28L1230.67 129.44H1231.99L1230.6 134.24H1236.02L1237.44 129.44H1238.76L1237.34 134.24H1240.32V135.464H1237.01L1235.66 139.976H1239.07V141.2H1235.33L1233.91 146H1232.59L1234.01 141.2H1228.56L1227.17 146H1225.82ZM1228.92 139.976H1234.37L1235.69 135.464H1230.24L1228.92 139.976ZM1248.26 146.288C1245.12 146.288 1242.72 144.224 1242.72 141.512H1244.23C1244.23 143.432 1246 144.848 1248.26 144.848C1250.49 144.848 1252.27 143.408 1252.27 141.392C1252.27 139.496 1250.68 138.056 1248.5 138.056H1246.29V136.832H1248.5C1250.42 136.832 1251.88 135.512 1251.88 133.76C1251.88 131.912 1250.28 130.592 1248.26 130.592C1246.22 130.592 1244.61 131.888 1244.61 133.664H1243.1C1243.1 131.096 1245.33 129.152 1248.26 129.152C1251.14 129.152 1253.42 131.072 1253.42 133.616C1253.42 135.344 1252.32 136.784 1250.71 137.408C1252.6 138.032 1253.8 139.664 1253.8 141.56C1253.8 144.248 1251.36 146.288 1248.26 146.288ZM1258.64 146.096H1257.68V144.704H1258.64C1262.34 144.704 1265.48 141.752 1265.77 137.384C1264.88 138.8 1263.03 139.736 1261.11 139.736C1258.06 139.736 1255.74 137.504 1255.74 134.528C1255.74 131.456 1258.23 129.152 1261.42 129.152C1264.9 129.152 1267.42 131.864 1267.42 136.352C1267.42 142.112 1263.61 146.096 1258.64 146.096ZM1261.47 138.368C1263.66 138.368 1265.72 136.784 1265.72 135.056C1265.72 133.208 1264.26 130.592 1261.5 130.592C1259.24 130.592 1257.27 132.224 1257.27 134.504C1257.27 136.736 1259.17 138.368 1261.47 138.368ZM1273.57 146V131.48C1272.59 132.512 1271.03 133.208 1269.64 133.208V131.816C1271.22 131.816 1272.95 130.88 1274.01 129.44H1275.04V146H1273.57ZM1278.22 141.944V140.768C1281.41 136.928 1283.23 133.16 1283.69 129.44H1285.22C1284.79 133.088 1283.09 136.784 1280.14 140.552H1286.71V135.128H1288.13V140.552H1290.53V141.944H1288.13V146H1286.64V141.944H1278.22ZM1295.54 146V131.48C1294.55 132.512 1292.99 133.208 1291.6 133.208V131.816C1293.18 131.816 1294.91 130.88 1295.97 129.44H1297V146H1295.54ZM1302.91 146.096H1301.95V144.704H1302.91C1306.61 144.704 1309.75 141.752 1310.04 137.384C1309.15 138.8 1307.31 139.736 1305.39 139.736C1302.34 139.736 1300.01 137.504 1300.01 134.528C1300.01 131.456 1302.51 129.152 1305.7 129.152C1309.18 129.152 1311.7 131.864 1311.7 136.352C1311.7 142.112 1307.88 146.096 1302.91 146.096ZM1305.75 138.368C1307.93 138.368 1309.99 136.784 1309.99 135.056C1309.99 133.208 1308.53 130.592 1305.77 130.592C1303.51 130.592 1301.55 132.224 1301.55 134.504C1301.55 136.736 1303.44 138.368 1305.75 138.368Z" fill="#FFFBF2" />
                    </svg>

                }
                <div className="flex max-md:flex-col max-md:p-6 gap-9 md:gap-11 md:items-center max-md:text-5xl text-[3rem]">
                    <h1 className="text-[#FF0000]">typography</h1>
                    <div className="flex max-md:flex-col md:items-center max-md:text-4xl gap-6 md:gap-9 font-light">
                        <p>Red Hat Display</p>
                        <div className="max-md:hidden w-3 h-3 rounded-full bg-gray-300" />
                        <p className="text-white/40">Red Hat Text</p>
                    </div>
                </div>
            </DivAnimation>
            <div id="finalscreens" className="col-span-full grid grid-cols-4 md:grid-cols-16 max-md:gap-y-8 flex-col bg-[#0B0B0B] ">
                <div className="relative col-span-full flex flex-col md:justify-center max-md:items-center pag-12 md:gap-28 md:py-36 bg-black/30 border border-white/10 rounded-[30px_30px_0px_0px] custom-scrollbar">
                    <div className="flex flex-col gap-3 max-md:py-18 md:px-24 max-md:pb-12 max-md:p-10 max-md:bg-black/80 backdrop-blur-3xl rounded-[30px_30px_0px_0px]">
                        <h3 className="text-white/40">HiFi Screens</h3>
                        <div className="flex max-md:flex-col pt-5 md:pt-9 gap-4 md:gap-2 border-t border-white/20">
                            <h1 className="font-medium leading-8 md:leading-12 text-[1.5em] md:text-[2em] md:min-w-xl pr-8">Home Page, Search & Business Pages</h1>
                            <p className="max-md:text-base">Pagr’s user-centric app streamlines business searches, allowing you to find new and popular establishments with purpose-built features and design choices, delivering a seamless and efficient experience.</p>
                        </div>
                    </div>
                    <Marquee
                        autoFill={true}
                        className="flex overflow-x-auto custom-scrollbar max-md:overflow-hidden z-20"
                    >
                        <img src={Home1} alt="Home Page 1" className="max-h-128 md:max-h-256 object-contain mx-3" />
                        <img src={Home2} alt="Home Page 1" className="max-h-128 md:max-h-256 object-contain mx-3" />
                        <img src={Home3} alt="Home Page 1" className="max-h-128 md:max-h-256 object-contain mx-3" />
                        <img src={Home4} alt="Home Page 1" className="max-h-128 md:max-h-256 object-contain mx-3" />
                    </Marquee>
                </div>
                <div className="relative col-span-full flex max-md:flex-col md:justify-center md:gap-0 md:py-36  bg-black/30 border border-white/10 custom-scrollbar overflow-hidden">
                    <div className="flex flex-col w-full md:h-full md:justify-between md:py-12 max-md:pb-5 items-end">
                        <div className="flex flex-col gap-3 max-md:py-18 md:px-24 max-md:pb-12 max-md:p-10  max-md:bg-black/80 backdrop-blur-3xl">
                            <h3 className="text-white/40">HiFi Screens</h3>
                            <div className="flex flex-col pt-5 md:pt-9 gap-4 md:gap-8 border-t border-white/20">
                                <h1 className="font-medium text-[1.5em] md:text-[2em]">Map View</h1>
                                <p className="max-md:text-base">
                                    Map view is an intuitive and efficient method of looking up POI’s in your locality. It features search, filters, business details, ratings, and contact information that allows you to find and connect with what you need.
                                </p>
                            </div>
                        </div>
                        <DivAnimation className="md:mr-12 max-md:items-start flex max-md:w-full">
                            <img src={Map3} alt="Home Page 1" className="max-h-56 md:max-h-256 object-contain " />
                        </DivAnimation>
                    </div>
                    <DivAnimation delay={300} className="flex w-full gap-2 md:gap-x-5 md:pr-24 custom-scrollbar max-md:overflow-hidden">
                        <img src={Map1} alt="Home Page 1" className="max-h-128 md:max-h-256 object-contain" />
                        <img src={Map2} alt="Home Page 1" className="max-h-128 md:max-h-256 object-contain" />
                    </DivAnimation>
                </div>
                <div className="relative col-span-full flex flex-col md:justify-center max-md:items-center gap-28 md:py-36 bg-black/30 border border-white/10 rounded-[30px_30px_0px_0px] custom-scrollbar">
                    <div className="flex flex-col gap-3 max-md:py-18 md:px-24 max-md:pb-12 max-md:p-10 max-md:bg-black/80 backdrop-blur-3xl rounded-[30px_30px_0px_0px]">
                        <h3 className="text-white/40">HiFi Screens</h3>
                        <div className="flex max-md:flex-col pt-5 md:pt-9 gap-4 md:gap-0 border-t border-white/20">
                            <h1 className="font-medium leading-12 text-[1.5em] md:text-[2em] md:min-w-lg pr-8">Community Features</h1>
                            <p className="max-md:text-base">Feature-rich community spaces were added to the app to help foster user-made communities and allow them to communicate and share in the app.</p>
                        </div>
                    </div>
                    <DivAnimation
                        className="flex md:ml-24 overflow-x-hidden gap-5 simple-scrollbar max-md:overflow-x-auto z-20"
                    >
                        <img src={Com1} alt="Home Page 1" className="max-h-128 md:max-h-256 object-contain" />
                        <img src={Com2} alt="Home Page 1" className="max-h-128 md:max-h-256 object-contain" />
                        <img src={Com3} alt="Home Page 1" className="max-h-128 md:max-h-256 object-contain" />
                    </DivAnimation>
                </div>
                <div className="relative col-span-full flex max-md:flex-col md:justify-center gap-24 md:py-36 md:pl-24 bg-black/30 border border-white/10 custom-scrollbar">
                    <div className="flex flex-col gap-3 max-md:py-18 max-md:pb-12 max-md:p-10 max-w-md md:h-screen -top-8 md:top-32 md:sticky max-md:bg-black/80 backdrop-blur-3xl">
                        <h3 className="text-white/40">HiFi Screens</h3>
                        <div className="flex flex-col pt-5 md:pt-9 gap-4 md:gap-8 border-t border-white/20">
                            <h1 className="font-medium text-[1.5em] md:text-[2em]">Filters</h1>
                            <p className="max-md:text-base">The app offers advanced filters for a tailored experience, allowing you to find exactly what you’re looking for every time you open the app.
                                <br /><br />
                                The filters change dynamically based on the context of the search, allowing for control over budgets, distance, ratings, , cuisine, verification, etc.</p>
                        </div>
                    </div>
                    <DivAnimation className="flex flex-col w-full gap-y-4 custom-scrollbar max-md:overflow-hidden">
                        <img src={Filters} alt="Filters Page" className="max-h-128 md:max-h-256 object-contain" />
                    </DivAnimation>
                </div>
                <div className="relative col-span-full flex flex-col md:justify-center max-md:items-center gap-24 md:py-36 bg-black/30 border border-white/10 rounded-[30px_30px_0px_0px] custom-scrollbar">
                    <div className="flex flex-col gap-3 max-md:py-18 md:px-24 max-md:pb-12 max-md:p-10 max-md:bg-black/80 backdrop-blur-3xl rounded-[30px_30px_0px_0px]">
                        <h3 className="text-white/40">HiFi Screens</h3>
                        <div className="flex max-md:flex-col pt-5 md:pt-9 gap-4 md:gap-0 border-t border-white/20">
                            <h1 className="font-medium leading-12 text-[1.5em] md:text-[2em] md:min-w-lg pr-8">Community Features</h1>
                            <p className="max-md:text-base">Feature-rich community spaces were added to the app to help foster user-made communities and allow them to communicate and share in the app.</p>
                        </div>
                    </div>
                    {!isMobile ? (
                        <DivAnimation className="flex flex-wrap justify-center items-start gap-6 z-20">
                            <img src={Profile1} alt="1" className="w-full max-w-md object-contain" />

                            <img src={Profile2} alt="1" className="mt-48 w-full max-w-md object-contain" />

                            <img src={Profile3} alt="1" className="w-full max-w-md object-contain" />
                        </DivAnimation>
                    ) : (
                        <Marquee
                            autoFill={true}
                            className="flex md:flex-wrap justify-center items-start z-20"
                        >
                            <img src={Profile1} alt="1" className="w-full max-h-128 md:max-w-md object-contain mx-3" />
                            <img src={Profile2} alt="2" className=" md:mt-48 w-full max-h-128 md:max-w-md object-contain mx-3" />
                            <img src={Profile3} alt="3" className="w-full max-h-128 md:max-w-md object-contain mx-3" />
                        </Marquee>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Pagr;