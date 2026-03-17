import Navbar from "../common/Navbar";
import ProjectHeader from "../ui/ProjectHeader";
import HiFiScroller from "../ui/HiFiScroller";
import COVER_IMAGE from '../assets/images/website/websitecover.png';
import HERO_IMAGE1 from '../assets/images/website/websitehero1.png';
import HERO_IMAGE2 from '../assets/images/website/websitehero2.png';
import INSTITUTIONS from '../assets/images/website/institutions.png';
import SUBHOME from '../assets/images/website/snapshot.png';
import PREVPAGE from '../assets/images/website/oldsite.png';
import img1 from '../assets/images/website/lp1.png';
import DivAnimation from "../ui/DivAnimation";
import DesignBrief from "../ui/DesignBrief";

const hifiSections = [
    {
        id: 'landing',
        title: 'Landing Page',
        description: <p>I was responsible for designing multiple components for the landing page as well as designing and building both static and animated assets (product demos, vector animations, lottie etc.)<br /><br />I also worked on the development of these pages in React + tailwind, and handled all animation and interaction design.</p>,
        image: img1,
    },
    {
        id: 'institutions',
        title: 'Institutions Page',
        description: 'I was responsible for designing and developing a b2b Institutions page from scratch, meant to cater towards school administrators with a new product vertical aimed at teaching professionals.',
        image: INSTITUTIONS,
    },
    {
        id: 'subscriber',
        title: 'Subscriber Home',
        description: "The redesign also involved all subpages and other non-functional pages, such as the homepage for subscribed users, FAQ's, T&C's etc.",
        image: SUBHOME,
    },
];

const AAiWebsite = ({ isMobile }: { isMobile: boolean }) => {
    return (
        <section className='grid grid-cols-8 md:grid-cols-16 gap-y-0 w-full bg-primary-100 text-neutral-500 font-albert font-normal text-base md:text-xl'>
            <Navbar style="pinned" isMobile={isMobile} theme="light" />
            <div className=" col-span-full grid grid-cols-8 md:grid-cols-16 gap-y-24">

                <ProjectHeader
                    isMobile={isMobile}
                    org="AnswersAi"
                    subtitle="2024 · Shipped"
                    title="Website Revamp"
                    liveLink="https://answersai.com"
                    badges={[
                        { label: 'UX + UI', color: 'orange' },
                        { label: 'React', color: 'red' },
                        { label: 'Shipped', color: 'green' },
                    ]}
                    description={<p>A project I contributed to as part of the product design team, where I worked on both the redesign of the product website, as well as the product design system. This was the first step in our broader plan of revamping the product along with its branding & identity.<br /><br />I also worked on developing the frontend in ReactJS + tailwind, with CSS for animations.</p>}
                    details={[
                        { label: 'Role', value: 'Product Engineer (Design & Dev)' },
                        { label: 'Tools', value: 'Figma, ReactJS + Tailwind, CSS' },
                    ]}
                />
                <DivAnimation className="col-span-full flex justify-center gap-6 overflow-x-auto custom-scrollbar">
                    <img className="rounded-[16px] border-2 border-neutral-100 w-full max-w-[720px] object-contain" src={HERO_IMAGE1} />
                    <img className="rounded-[16px] border-2 border-neutral-100 w-full max-w-[720px] object-contain" src={COVER_IMAGE} />
                    <img className="rounded-[16px] border-2 border-neutral-100 w-full max-w-[720px] object-contain" src={HERO_IMAGE2} />
                </DivAnimation>
                <DivAnimation className="col-span-full max-md:px-6 md:col-span-10 md:col-start-4 flex flex-col gap-14">
                    <div className="flex flex-col gap-5 p-6 md:p-9 border border-primary-500 rounded-[12px] bg-primary-500/5">
                        <h1 className="font-averia-serif italic text-[2em] text-primary-500">Problem</h1>
                        <p>Due to poor usability and an outdated interface, the website had low user engagement and high drop-off rates. Visitors weren’t staying long or exploring deeper into the platform.</p>
                    </div>
                </DivAnimation>
                <DivAnimation className="col-span-full md:col-span-12 md:col-start-3 flex flex-col gap-8 items-center">
                    <p className="text-neutral-500 font-light text-xl">Original Landing Page</p>
                    <div className="w-full flex p-4 mx-4 md:p-16 py-0 md:py-0 bg-primary-200 border border-neutral-100 rounded-[15px]">
                        <img className="w-full" src={PREVPAGE}></img>
                    </div>
                </DivAnimation>
                <DivAnimation className="col-span-full max-md:px-6 md:col-span-10 md:col-start-4 flex flex-col gap-14">
                    <p>The previous website’s outdated design and poor usability made it difficult for users to navigate and interact with the platform. Key information was hard to find, and the lack of a visually engaging interface led to high bounce rates. As a result, users weren’t spending much time on the site or returning for future visits.
                        <br /><br />To address this, we redesigned the website with a structured component system, improved navigation, and a more modern, user-friendly interface. These changes led to increased engagement, better retention, and improved overall user experience.
                    </p>
                </DivAnimation>
                <DesignBrief items={[
                    { title: 'Pain Points', description: 'Visitors struggled with an outdated interface, making it difficult to navigate and find relevant content quickly. The lack of visual hierarchy and engaging design elements contributed to high bounce rates and low retention.' },
                    { title: 'Competitive Analysis', description: 'Competitors had cleaner UI, better content organization, and interactive elements that enhanced user engagement. These insights informed our redesign strategy to improve usability and accessibility.' },
                    { title: 'Iterations', description: 'Multiple design and code iterations were conducted based on internal feedback and engagement metrics. The improved layout, streamlined navigation, and enhanced aesthetics led to better user retention and increased traffic to key sections of the website.', hashLink: '#research' },
                ]} />
            </div>
            
            <HiFiScroller
                sections={hifiSections}
                sectionBg="bg-primary-100"
                imageContainerClassName="border-2 border-neutral-100 rounded-[16px]"
            />
        </section>
    )
}

export default AAiWebsite;