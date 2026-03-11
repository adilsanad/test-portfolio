import Navbar from "../common/Navbar";
import Badge from "../ui/Badge";
import Footer from "../common/Footer";
import DivAnimation from "../ui/DivAnimation";
import { HashLink } from "react-router-hash-link";
import COVER_IMAGE from "../../public/CRClient/campaigns.png"

const hifiSections = [
    {
        id: 'campaign-wizard',
        label: '01',
        title: 'Campaign Creation Wizard',
        description: 'A step-by-step guided flow that walks restaurant marketing teams through campaign setup — from selecting objectives and budgets to choosing influencer criteria and content requirements.',
        image: '/CRClient/wizard.png',
    },
    {
        id: 'influencer-discovery',
        label: '02',
        title: 'Influencer Discovery & Selection',
        description: 'A filterable, searchable directory of creators with audience insights, engagement metrics, and content previews — designed for non-technical users to find the right influencers quickly.',
        image: '/CRClient/inflsearch.png',
    },
    {
        id: 'campaign-inbox',
        label: '03',
        title: 'Campaign Inbox',
        description: 'A centralized messaging hub where brand teams can communicate with influencers, review content submissions, and manage campaign-related conversations in one place.',
        image: '/CRClient/inbox.png',
    },
    {
        id: 'campaign-dashboard',
        label: '04',
        title: 'Campaign Dashboard',
        description: 'A real-time overview of active campaigns with status tracking, performance metrics, content calendars, and at-a-glance insights for busy marketing teams.',
        image: '/CRClient/dashboard.png',
    },
    {
        id: 'influencer-management',
        label: '05',
        title: 'Influencer Management Table',
        description: 'A comprehensive table view for managing influencer relationships — tracking statuses, payment history, past collaborations, and performance ratings across campaigns.',
        image: '/CRClient/infltable.png',
    },
];

const CRDashboard = ({ isMobile }: { isMobile: boolean }) => {
    return (
        <section className="grid grid-cols-8 md:grid-cols-16 gap-y-24 w-full bg-primary-100 text-neutral-500 font-albert font-normal text-base md:text-xl">
            <Navbar theme="light" style="pinned" isMobile={isMobile} />

            {/* Header */}
            <DivAnimation className={`${isMobile ? 'col-span-full px-6' : 'col-span-10 col-start-4'} flex flex-col w-full gap-24 pt-64`}>
                <div className="flex tracking-tight w-full justify-between border-b-2 border-[rgba(77,69,65,0.3)] pb-5 text-neutral-900/50">
                    <p>Creatorain</p>
                    <p>2024-25 · B2B SaaS (Marketing)</p>
                </div>
                <div className="flex flex-col gap-12">
                    <div className={`${isMobile ? 'flex-col items-start gap-8' : ''} flex w-full items-center justify-between`}>
                        <h1 className="flex-1 font-averia-serif text-6xl tracking-tight text-neutral-900">Client App</h1>
                        <div className="flex-1 flex gap-3 flex-wrap justify-end">
                            <Badge label="SaaS" color="blue" />
                            <Badge label="B2B" color="purple" />
                            <Badge label="Campaign Management" color="blue" />
                            <Badge label="AI-Powered" color="purple" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <p>The CreatoRain Client Dashboard is the core B2B product — a campaign management platform that enables restaurant and hospitality brands to discover, manage, and collaborate with food & lifestyle influencers.</p>
                        <div className="flex max-md:flex-col max-md:gap-5 justify-between">
                            <div className="flex md:flex-col gap-3">
                                <h3 className="font-bold text-primary-500">Role</h3>
                                <p>Product Designer</p>
                            </div>
                            <div className="flex md:flex-col gap-3">
                                <h3 className="font-bold text-primary-500">Tools</h3>
                                <p>Figma, Next.js, <br className="max-md:hidden" /> Tailwind CSS, CreatoRain DS</p>
                            </div>
                            <div className="flex md:flex-col gap-3">
                                <h3 className="font-bold text-primary-500">Domain</h3>
                                <p>Influencer Marketing — <br className="max-md:hidden" /> Hospitality & F&B</p>
                            </div>
                        </div>
                    </div>
                </div>
            </DivAnimation>

            <DivAnimation className="col-span-full max-md:px-6 md:col-span-14 md:col-start-2 mx-4 md:mx-6 py-20 max-md:px-4 rounded-[30px] bg-primary-200 flex justify-center gap-6 overflow-x-auto custom-scrollbar">
                <img className=" w-full max-w-[960px] object-contain " src={COVER_IMAGE} />
            </DivAnimation>

            {/* Problem card */}
            <DivAnimation className="col-span-full max-md:px-6 md:col-span-10 md:col-start-4 flex flex-col gap-14">
                <p>Restaurant marketing teams need to run influencer campaigns but existing tools assume technical fluency. The dashboard bridges this gap with guided workflows, clear visual hierarchy, and natural language throughout.</p>
                <div className="flex flex-col gap-5 p-6 md:p-9 border border-primary-500 rounded-[10px] bg-primary-200 text-primary-500">
                    <h1 className="font-averia-serif italic text-[2em]">Problem</h1>
                    <p>How can we empower non-technical restaurant marketing teams to independently run end-to-end influencer campaigns without dedicated support?</p>
                </div>
            </DivAnimation>

            {/* Design Brief */}
            <DivAnimation className="col-span-full flex flex-col gap-9 bg-primary-200 md:px-25 max-md:pb-0 py-12 max-md:rounded-[15px]">
                <h1 className="px-7 text-[2em] font-bold text-primary-500">design brief</h1>
                <div className="flex max-md:flex-col gap-12 bg-primary-200 rounded-[15px] p-10 md:p-16">
                    <DivAnimation className="flex flex-col gap-6 w-full pb-9 border-b border-neutral-100">
                        <div className="flex flex-col w-full gap-5 md:gap-8">
                            <h2 className="font-thin text-neutral-900/50 text-[2em]">01</h2>
                            <HashLink to="#research" smooth className="flex gap-4 cursor-pointer">
                                <h1 className="text-[2em] text-neutral-900 hover:text-neutral-900/70 transition-all">Research</h1>
                                <svg className="hover:opacity-70 transition-all" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                        <path d="M15.4422 0H10.4223C10.1142 0 9.86448 0.249717 9.86448 0.557758C9.86448 0.865799 10.1142 1.11552 10.4223 1.11552H14.0957L3.89237 11.3185L4.68118 12.1073L14.8845 1.90431V5.57758C14.8845 5.88562 15.1341 6.13534 15.4422 6.13534C15.7502 6.13534 16 5.88562 16 5.57758V0.557758C16 0.249716 15.7502 0 15.4422 0Z" fill="#4d4541" />
                                        <path d="M1.11554 5.4026C1.11554 4.47847 1.86471 3.72933 2.78886 3.72933H6.69325V2.61381H2.78886C1.24862 2.61381 0 3.8624 0 5.4026V13.2112C0 14.7514 1.24862 16 2.78886 16H10.5977C12.1379 16 13.3865 14.7514 13.3865 13.2112V9.3069H12.271V13.2112C12.271 14.1353 11.5218 14.8845 10.5977 14.8845H2.78886C1.86471 14.8845 1.11554 14.1353 1.11554 13.2112V5.4026Z" fill="#4d4541" />
                                    </g>
                                </svg>
                            </HashLink>
                        </div>
                        <p className="w-full">User interviews with restaurant marketing managers revealed that campaign management tools felt intimidating. Teams relied on spreadsheets and WhatsApp to coordinate influencer collaborations.</p>
                    </DivAnimation>
                    <DivAnimation className="flex flex-col gap-6 w-full pb-9 border-b border-neutral-100">
                        <div className="flex flex-col w-full gap-5 md:gap-8">
                            <h2 className="font-thin text-neutral-900/50 text-[2em]">02</h2>
                            <HashLink to="#design" smooth className="flex gap-4 cursor-pointer">
                                <h1 className="text-[2em] text-neutral-900 hover:text-neutral-900/70 transition-all">Design</h1>
                                <svg className="hover:opacity-70 transition-all" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                        <path d="M15.4422 0H10.4223C10.1142 0 9.86448 0.249717 9.86448 0.557758C9.86448 0.865799 10.1142 1.11552 10.4223 1.11552H14.0957L3.89237 11.3185L4.68118 12.1073L14.8845 1.90431V5.57758C14.8845 5.88562 15.1341 6.13534 15.4422 6.13534C15.7502 6.13534 16 5.88562 16 5.57758V0.557758C16 0.249716 15.7502 0 15.4422 0Z" fill="#4d4541" />
                                        <path d="M1.11554 5.4026C1.11554 4.47847 1.86471 3.72933 2.78886 3.72933H6.69325V2.61381H2.78886C1.24862 2.61381 0 3.8624 0 5.4026V13.2112C0 14.7514 1.24862 16 2.78886 16H10.5977C12.1379 16 13.3865 14.7514 13.3865 13.2112V9.3069H12.271V13.2112C12.271 14.1353 11.5218 14.8845 10.5977 14.8845H2.78886C1.86471 14.8845 1.11554 14.1353 1.11554 13.2112V5.4026Z" fill="#4d4541" />
                                    </g>
                                </svg>
                            </HashLink>
                        </div>
                        <p className="w-full">The design system was built around simplicity — wizard-based flows, progressive disclosure, and clear visual states. Every screen was designed to be self-explanatory for non-technical users.</p>
                    </DivAnimation>
                    <DivAnimation className="flex flex-col gap-6 w-full pb-9 border-b border-neutral-100">
                        <div className="flex flex-col w-full gap-5 md:gap-8">
                            <h2 className="font-thin text-neutral-900/50 text-[2em]">03</h2>
                            <HashLink to="#prototyping" smooth className="flex gap-4 cursor-pointer">
                                <h1 className="text-[2em] text-neutral-900 hover:text-neutral-900/70 transition-all">Prototyping</h1>
                                <svg className="hover:opacity-70 transition-all" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.6">
                                        <path d="M15.4422 0H10.4223C10.1142 0 9.86448 0.249717 9.86448 0.557758C9.86448 0.865799 10.1142 1.11552 10.4223 1.11552H14.0957L3.89237 11.3185L4.68118 12.1073L14.8845 1.90431V5.57758C14.8845 5.88562 15.1341 6.13534 15.4422 6.13534C15.7502 6.13534 16 5.88562 16 5.57758V0.557758C16 0.249716 15.7502 0 15.4422 0Z" fill="#4d4541" />
                                        <path d="M1.11554 5.4026C1.11554 4.47847 1.86471 3.72933 2.78886 3.72933H6.69325V2.61381H2.78886C1.24862 2.61381 0 3.8624 0 5.4026V13.2112C0 14.7514 1.24862 16 2.78886 16H10.5977C12.1379 16 13.3865 14.7514 13.3865 13.2112V9.3069H12.271V13.2112C12.271 14.1353 11.5218 14.8845 10.5977 14.8845H2.78886C1.86471 14.8845 1.11554 14.1353 1.11554 13.2112V5.4026Z" fill="#4d4541" />
                                    </g>
                                </svg>
                            </HashLink>
                        </div>
                        <p className="w-full">Interactive prototypes were tested with real restaurant teams to validate the campaign creation flow, influencer selection process, and messaging workflows before development.</p>
                    </DivAnimation>
                </div>
            </DivAnimation>

            {/* HiFi Screens */}
            <div id="design" className="col-span-full flex flex-col bg-primary-100">
                {hifiSections.map((section, index) => (
                    <DivAnimation
                        key={section.id}
                        className={`relative col-span-full flex max-md:flex-col md:justify-center gap-24 md:py-36 md:pl-24 bg-white border border-neutral-100 custom-scrollbar ${index === 0 ? 'rounded-[30px_30px_0px_0px]' : ''} ${index === hifiSections.length - 1 ? 'rounded-[0px_0px_30px_30px]' : ''}`}
                    >
                        <div className="flex flex-col gap-3 max-md:py-18 max-md:pb-12 max-md:p-10 max-w-md md:h-screen -top-8 md:top-32 sticky max-md:bg-primary-100">
                            <h3 className="text-neutral-500">HiFi Screens</h3>
                            <div className="flex flex-col pt-5 md:pt-9 gap-4 md:gap-8 border-t border-neutral-100">
                                <h1 className="font-averia-serif tracking-tight font-medium text-[1.5em] md:text-[2em] text-neutral-900">{section.title}</h1>
                                <p className="max-md:text-sm text-lg">{section.description}</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-4 custom-scrollbar max-md:overflow-hidden">
                            <div className="w-full rounded-[10px] overflow-hidden max-md:p-[24px_24px_0] md:p-[72px_72px_0]" style={{ background: '#E8F1FF', border: '1px solid rgba(23, 45, 79, 0.1)' }}>
                                <img src={section.image} alt={section.title} className="w-full object-contain" />
                            </div>
                        </div>
                    </DivAnimation>
                ))}
            </div>

            {/* Footer */}
            <div className="col-span-full">
                <Footer isMobile={isMobile} id="contact" theme="light" />
            </div>
        </section>
    );
};

export default CRDashboard;
