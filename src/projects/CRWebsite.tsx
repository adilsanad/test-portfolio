import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import DivAnimation from "../ui/DivAnimation";
import HiFiScroller from "../ui/HiFiScroller";
import ProjectHeader from "../ui/ProjectHeader";
import DesignBrief from "../ui/DesignBrief";

const websiteSections = [
    { id: 'hero', title: 'Hero & Navigation', description: 'Full-width hero section with animated product demo, clear value proposition, and intuitive navigation designed to hook restaurant operators within seconds.', image: '/CRWebsite/landingpg.png' },
    { id: 'features', title: 'Features Overview', description: 'A scroll-driven features walkthrough using alternating layouts, micro-animations, and real product screenshots to explain the platform without overwhelming visitors.', image: '/CRWebsite/platformpg.png' },
    { id: 'pricing', title: 'Social Proof & Pricing', description: 'Testimonials from real restaurant partners, ROI metrics, and a transparent pricing section designed to build trust and drive demo requests.', image: '/CRWebsite/pricingpg.png' },
    { id: 'blog', title: 'Blog', description: 'A content hub featuring industry insights, influencer marketing tips, and case studies — designed to drive organic traffic and establish CreatoRain as a thought leader in the hospitality marketing space.', image: '/CRWebsite/blogpg.png' },
];

const CRWebsite = ({ isMobile }: { isMobile: boolean }) => {
    return (
        <section className="grid grid-cols-8 md:grid-cols-16 gap-y-24 w-full bg-primary-100 text-neutral-500 font-albert font-normal text-base md:text-xl">
            <Navbar theme="light" style="pinned" isMobile={isMobile} />

            {/* Header */}
            <ProjectHeader
                isMobile={isMobile}
                org="Creatorain"
                subtitle="2024-25 · Marketing"
                title="Marketing Website"
                badges={[
                    { label: 'Landing Page', color: 'blue' },
                    { label: 'Marketing', color: 'purple' },
                    { label: 'B2B', color: 'blue' },
                    { label: 'Motion Design', color: 'purple' },
                    { label: 'Conversion-Focused', color: 'blue' },
                ]}
                description="CreatoRain needed a public-facing website that communicates a complex influencer marketing product to busy restaurant operators — clearly, quickly, and persuasively."
                details={[
                    { label: 'Role', value: 'Product Designer' },
                    { label: 'Tools', value: <p>Figma, React, Vite, <br className="max-md:hidden" /> Tailwind CSS, Framer Motion</p> },
                    { label: 'Domain', value: <p>Influencer Marketing — <br className="max-md:hidden" /> Hospitality & F&B</p> },
                ]}
            />

            {/* Cover Image */}
            <DivAnimation className="col-span-full max-md:px-6 md:col-span-14 md:col-start-2 mx-4 md:mx-6 py-20 pb-0 rounded-[30px] bg-primary-200 flex justify-center overflow-hidden">
                <img className="w-full max-w-screen-2xl max-h-[960px] object-cover object-top" src="/CRWebsite/landingpg.png" />
            </DivAnimation>

            {/* Problem card */}
            <DivAnimation className="col-span-full max-md:px-6 md:col-span-10 md:col-start-4 flex flex-col gap-14">
                <p>The marketing website serves as the first touchpoint for potential clients — restaurant and hospitality brands looking to leverage influencer marketing. The site needed to translate product complexity into simple, compelling narratives.</p>
                <div className="flex flex-col gap-5 p-6 md:p-9 border border-primary-500 rounded-[10px] bg-primary-200 text-primary-500">
                    <h1 className="font-averia-serif italic text-[2em]">Problem</h1>
                    <p>How can we communicate a complex B2B SaaS product to non-technical restaurant operators in a way that drives sign-ups and demo requests?</p>
                </div>
            </DivAnimation>

            {/* Design Brief */}
            <DesignBrief items={[
                { title: 'Research', description: 'Competitive analysis of hospitality SaaS landing pages and influencer marketing platforms to identify messaging patterns and conversion best practices.', hashLink: '#research' },
                { title: 'Design', description: 'Visual direction established with warm, approachable brand tones. Sections designed to walk visitors through the product story with clear CTAs and social proof.', hashLink: '#design' },
                { title: 'Implementation', description: 'Built with React, Vite, and Tailwind CSS. Framer Motion animations added for scroll-driven storytelling and micro-interactions throughout the page.', hashLink: '#implementation' },
            ]} />

            {/* HiFi Screens */}
            <HiFiScroller
                id="design"
                sections={websiteSections}
                className="bg-primary-100"
                sectionBg="bg-primary-100"
                imageContainerClassName="bg-primary-200 rounded-[16px]"
            />

            {/* Footer */}
            <div className="col-span-full">
                <Footer isMobile={isMobile} id="contact" theme="light" />
            </div>
        </section>
    );
};

export default CRWebsite;
