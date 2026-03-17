import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import DivAnimation from "../ui/DivAnimation";
import HiFiScroller from "../ui/HiFiScroller";
import ProjectHeader from "../ui/ProjectHeader";
import DesignBrief from "../ui/DesignBrief";

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
            <ProjectHeader
                isMobile={isMobile}
                org="Creatorain"
                subtitle="2024-25 · Mobile App"
                title="Creator App"
                badges={[
                    { label: 'B2C', color: 'blue' },
                    { label: 'Mobile-First', color: 'purple' },
                    { label: 'Creator Economy', color: 'blue' },
                    { label: 'Content Management', color: 'purple' },
                ]}
                description="The CreatoRain Creator App is the creator-facing side of the platform — a mobile-first experience where food and lifestyle influencers discover campaigns, submit content, and manage collaborations with restaurant brands."
                details={[
                    { label: 'Role', value: 'Product Designer' },
                    { label: 'Tools', value: <p>Figma, Next.js, <br className="max-md:hidden" /> Tailwind CSS, CreatoRain DS</p> },
                    { label: 'Domain', value: <p>Creator Economy — <br className="max-md:hidden" /> Influencer Marketing</p> },
                ]}
            />

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
            <DesignBrief items={[
                { title: 'Research', description: 'Creator interviews revealed fragmented workflows — campaigns tracked in Notes apps, communication split across Instagram DMs, email, and WhatsApp. Creators wanted a single source of truth for all brand collaborations.', hashLink: '#research' },
                { title: 'Design', description: 'Mobile-first design with thumb-friendly interactions, swipeable campaign cards, and a bottom navigation pattern. The UI emphasizes content previews and quick actions over dense data tables.', hashLink: '#design' },
                { title: 'Prototyping', description: 'High-fidelity prototypes tested with active food creators validated the onboarding flow, campaign application process, and content submission experience on both iOS and Android devices.', hashLink: '#prototyping' },
            ]} />

            {/* HiFi Screens */}
            <HiFiScroller
                id="design"
                sections={hifiSections}
                sectionBg="bg-white"
                imageContainerClassName="bg-primary-200 rounded-[10px] aspect-[9/16] flex items-center justify-center"
            />

            {/* Footer */}
            <div className="col-span-full">
                <Footer isMobile={isMobile} id="contact" theme="light" />
            </div>
        </section>
    );
};

export default CRCreatorApp;
