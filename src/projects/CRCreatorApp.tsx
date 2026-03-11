import Navbar from "../common/Navbar";
import Badge from "../ui/Badge";
import Footer from "../common/Footer";
import DivAnimation from "../ui/DivAnimation";
import { HashLink } from "react-router-hash-link";

const hifiSections = [
    {
        id: 'magic-link',
        label: '01',
        title: 'Magic Link Onboarding',
        description: 'A frictionless onboarding experience where creators receive a magic link invitation, set up their profile, and connect their social accounts — all in under two minutes.',
    },
    {
        id: 'platform-connection',
        label: '02',
        title: 'Platform Connection Dashboard',
        description: 'A central hub for creators to link and manage their social media accounts. Real-time sync status, audience metrics, and content performance pulled from connected platforms.',
    },
    {
        id: 'campaign-discovery',
        label: '03',
        title: 'Campaign Discovery',
        description: 'A curated feed of available campaigns matched to the creator\'s niche, audience, and location. Filter by compensation type, content format, and restaurant category.',
    },
    {
        id: 'campaign-detail',
        label: '04',
        title: 'Campaign Detail & Content Submission',
        description: 'Detailed campaign briefs with requirements, deadlines, and deliverables. Creators can submit content drafts, track revision requests, and manage approvals in one flow.',
    },
    {
        id: 'appointment-scheduler',
        label: '05',
        title: 'Appointment Scheduler',
        description: 'An integrated scheduling tool for creators to book restaurant visits, coordinate content creation sessions, and manage their campaign calendar alongside personal commitments.',
    },
    {
        id: 'creator-inbox',
        label: '06',
        title: 'Creator Inbox',
        description: 'A unified messaging center for campaign communications, brand collaboration requests, and platform notifications — replacing the scattered DMs and emails creators typically manage.',
    },
];

const CRCreatorApp = ({ isMobile }: { isMobile: boolean }) => {
    return (
        <section className="grid grid-cols-8 md:grid-cols-16 gap-y-24 w-full bg-primary-100 text-neutral-500 font-albert font-normal text-base md:text-xl">
            <Navbar theme="light" style="pinned" isMobile={isMobile} />

            {/* Header */}
            <DivAnimation className={`${isMobile ? 'col-span-full px-6' : 'col-span-10 col-start-4'} flex flex-col w-full gap-24 pt-64`}>
                <div className="flex w-full justify-between border-b-2 border-[rgba(77,69,65,0.3)] pb-5 text-neutral-900/50">
                    <p>CREATORAIN</p>
                    <p>2024-25 · Mobile App</p>
                </div>
                <div className="flex flex-col gap-12">
                    <div className={`${isMobile ? 'flex-col items-start gap-8' : ''} flex w-full items-center justify-between`}>
                        <h1 className="text-4xl md:text-[64px] font-black text-neutral-900">Creator App</h1>
                        <div className="flex gap-3 flex-wrap">
                            <Badge label="B2C" color="blue" />
                            <Badge label="Mobile-First" color="purple" />
                            <Badge label="Creator Economy" color="blue" />
                            <Badge label="Content Management" color="purple" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-10">
                        <p>The CreatoRain Creator App is the creator-facing side of the platform — a mobile-first experience where food and lifestyle influencers discover campaigns, submit content, and manage collaborations with restaurant brands.</p>
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
                                <p>Creator Economy — <br className="max-md:hidden" /> Influencer Marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </DivAnimation>

            {/* Cover placeholder */}
            <DivAnimation className="col-span-full flex justify-center px-4 md:px-16">
                <div className="w-full max-w-[1100px] bg-neutral-100 rounded-[30px] aspect-[16/9] flex items-center justify-center">
                    <p className="text-neutral-500/40 text-2xl font-medium">Cover Image</p>
                </div>
            </DivAnimation>

            {/* Problem card */}
            <DivAnimation className="col-span-full max-md:px-6 md:col-span-10 md:col-start-4 flex flex-col gap-14">
                <p>Creators juggle campaign opportunities across DMs, emails, and WhatsApp with no centralized way to manage collaborations. The Creator App consolidates everything into one mobile-first experience designed for on-the-go content creators.</p>
                <div className="flex flex-col gap-5 p-6 md:p-9 border border-primary-500 rounded-[10px] bg-primary-200 text-primary-500">
                    <h1 className="font-averia-serif italic text-[2em]">Problem</h1>
                    <p>How can we give creators a single, mobile-friendly hub to discover campaigns, submit content, and manage brand relationships without the chaos of scattered communication channels?</p>
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
                        <p className="w-full">Creator interviews revealed fragmented workflows — campaigns tracked in Notes apps, communication split across Instagram DMs, email, and WhatsApp. Creators wanted a single source of truth for all brand collaborations.</p>
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
                        <p className="w-full">Mobile-first design with thumb-friendly interactions, swipeable campaign cards, and a bottom navigation pattern. The UI emphasizes content previews and quick actions over dense data tables.</p>
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
                        <p className="w-full">High-fidelity prototypes tested with active food creators validated the onboarding flow, campaign application process, and content submission experience on both iOS and Android devices.</p>
                    </DivAnimation>
                </div>
            </DivAnimation>

            {/* HiFi Screens */}
            <div id="design" className="col-span-full flex flex-col">
                {hifiSections.map((section, index) => (
                    <DivAnimation
                        key={section.id}
                        className={`relative col-span-full flex max-md:flex-col md:justify-center gap-24 md:py-36 md:pl-24 bg-white border border-neutral-100 custom-scrollbar ${index === 0 ? 'rounded-[30px_30px_0px_0px]' : ''} ${index === hifiSections.length - 1 ? 'rounded-[0px_0px_30px_30px]' : ''}`}
                    >
                        <div className="flex flex-col gap-3 max-md:py-18 max-md:pb-12 max-md:p-10 max-w-md md:h-screen -top-8 md:top-32 sticky max-md:bg-primary-100">
                            <h3 className="text-neutral-500">HiFi Screens</h3>
                            <div className="flex flex-col pt-5 md:pt-9 gap-4 md:gap-8 border-t border-neutral-100">
                                <h1 className="font-medium text-[1.5em] md:text-[2em] text-neutral-900">{section.title}</h1>
                                <p className="max-md:text-sm text-lg">{section.description}</p>
                            </div>
                        </div>
                        <div className="flex flex-col w-full gap-4 custom-scrollbar max-md:overflow-hidden">
                            <div className="w-full bg-primary-200 rounded-[10px] aspect-[9/16] flex items-center justify-center">
                                <p className="text-neutral-500/40 text-lg">{section.title}</p>
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

export default CRCreatorApp;
