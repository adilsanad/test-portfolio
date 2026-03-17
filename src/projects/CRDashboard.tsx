import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import DivAnimation from "../ui/DivAnimation";
import HiFiScroller from "../ui/HiFiScroller";
import ProjectHeader from "../ui/ProjectHeader";
import DesignBrief from "../ui/DesignBrief";
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
            <ProjectHeader
                isMobile={isMobile}
                org="Creatorain"
                subtitle="2024-25 · B2B SaaS (Marketing)"
                title="Client App"
                badges={[
                    { label: 'SaaS', color: 'blue' },
                    { label: 'B2B', color: 'purple' },
                    { label: 'Campaign Management', color: 'blue' },
                    { label: 'AI-Powered', color: 'purple' },
                ]}
                description="The CreatoRain Client Dashboard is the core B2B product — a campaign management platform that enables restaurant and hospitality brands to discover, manage, and collaborate with food & lifestyle influencers."
                details={[
                    { label: 'Role', value: 'Product Designer' },
                    { label: 'Tools', value: <p>Figma, Next.js, <br className="max-md:hidden" /> Tailwind CSS, CreatoRain DS</p> },
                    { label: 'Domain', value: <p>Influencer Marketing — <br className="max-md:hidden" /> Hospitality & F&B</p> },
                ]}
            />

            <DivAnimation className="col-span-full max-md:px-6 md:col-span-14 md:col-start-2 mx-4 md:mx-6 py-20 pb-0 rounded-[30px] bg-primary-200 flex justify-center gap-6 overflow-x-auto custom-scrollbar">
                <img className=" w-full max-w-screen-2xl object-contain " src={COVER_IMAGE} />
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
            <DesignBrief items={[
                { title: 'Research', description: 'User interviews with restaurant marketing managers revealed that campaign management tools felt intimidating. Teams relied on spreadsheets and WhatsApp to coordinate influencer collaborations.', hashLink: '#research' },
                { title: 'Design', description: 'The design system was built around simplicity — wizard-based flows, progressive disclosure, and clear visual states. Every screen was designed to be self-explanatory for non-technical users.', hashLink: '#design' },
                { title: 'Prototyping', description: 'Interactive prototypes were tested with real restaurant teams to validate the campaign creation flow, influencer selection process, and messaging workflows before development.', hashLink: '#prototyping' },
            ]} />

            {/* HiFi Screens */}
            <HiFiScroller
                id="design"
                sections={hifiSections}
                className="bg-primary-100"
                sectionBg="bg-white"
                imageContainerClassName="rounded-[10px] max-md:p-[24px_24px_0] md:p-[72px_72px_0]"
                imageContainerStyle={{ background: '#E8F1FF', border: '1px solid rgba(23, 45, 79, 0.1)' }}
            />

            {/* Footer */}
            <div className="col-span-full">
                <Footer isMobile={isMobile} id="contact" theme="light" />
            </div>
        </section>
    );
};

export default CRDashboard;
