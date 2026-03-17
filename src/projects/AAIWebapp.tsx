import Navbar from "../common/Navbar";
import ProjectHeader from "../ui/ProjectHeader";
import HiFiScroller from "../ui/HiFiScroller";
import COVER_IMAGE from '../assets/images/webapp/webappcover.png';
import HERO_IMAGE1 from '../assets/images/webapp/webapphero1.png';
import HERO_IMAGE2 from '../assets/images/webapp/webapphero2.png';
import LANDING_PAGE from '../assets/images/webapp/subscriberhome.png';
import img1 from '../assets/images/webapp/quiz.png';
import img2 from '../assets/images/webapp/flashcards.png';
import img3 from '../assets/images/webapp/notedexpanded.png';
import img4 from '../assets/images/webapp/compact home.png';
import DivAnimation from "../ui/DivAnimation";
import DesignBrief from "../ui/DesignBrief";

const hifiSections = [
    {
        id: 'finished',
        title: 'Finished Pages',
        description: <p>We consolidated all separate features into one UI called 'Lecture Mode', and utilized a clean, minimal design with full-screen bento layouts for expanded views.<br /><br />Ease of access/usage and functional hierarchy were our priorities, and we used prompts to encourage users to explore all the features available.<br /><br />Overall, the webapp overhaul succeeded in its initial goal of simplifying the user experience and increasing active webapp users.<br /><br />Feel free to contact me if you want more details on this project!</p>,
    },
];

const AAiWebapp = ({ isMobile }: { isMobile: boolean }) => {
    return (
        <section className='grid grid-cols-8 md:grid-cols-16 gap-y-0 w-full bg-primary-100 text-neutral-500 font-albert font-normal text-base md:text-xl'>
            <Navbar style="pinned" isMobile={isMobile} theme="light" />
            <div className=" col-span-full grid grid-cols-8 md:grid-cols-16 gap-y-24">
                <ProjectHeader
                    isMobile={isMobile}
                    org="AnswersAi"
                    subtitle="2025 · Shipped"
                    title="Webapp Overhaul"
                    liveLink="https://answersai.com"
                    badges={[
                        { label: 'UX + UI', color: 'orange' },
                        { label: 'React', color: 'red' },
                        { label: 'Shipped', color: 'green' },
                    ]}
                    description={<p>A SaaS project I contributed to as part of the product design team, where I was responsible for designing and developing component systems for the webapp overhaul, in line with the product design system.<br /><br />Additionally, I worked on building the frontend in ReactJS. Through multiple iterations, we cut down on redundant features and consolidated all functionality into a unified UI that was clean, simple and prioritized usability.</p>}
                    details={[
                        { label: 'Role', value: <p>Product Engineer<br className="max-md:hidden" />(Design & Dev)</p> },
                        { label: 'Tools', value: <p>Figma, Adobe CC, <br className="max-md:hidden" /> React + tailwind</p> },
                        { label: 'Areas of Study', value: <p>Design Systems, Web Dev, <br />User Research</p> },
                    ]}
                />
                <DivAnimation className="col-span-full flex justify-center gap-6 overflow-x-auto custom-scrollbar">
                    <img className="rounded-[15px] w-full max-w-[720px] object-cover" src={HERO_IMAGE1} />
                    <img className="rounded-[15px] w-full max-w-[720px] object-cover" src={COVER_IMAGE} />
                    <img className="rounded-[15px] w-full max-w-[720px] object-cover" src={HERO_IMAGE2} />
                </DivAnimation>
                <DivAnimation className="col-span-full max-md:px-6 md:col-span-10 md:col-start-4 flex flex-col gap-14">
                    <div className="flex flex-col gap-5 p-6 md:p-9 border border-primary-500 rounded-[10px] bg-primary-500/5">
                        <h1 className="font-averia-serif italic text-[2em] text-primary-500">Problem</h1>
                        <p>A fragmented UI experience and poor site organization led to difficulty in navigation, and inconsistent UI’s across features made for a far from ideal user experience and the app’s usability suffered for it. </p>
                    </div>
                    <p>The existing web application faced usability and design inconsistencies that hindered user engagement and retention. The lack of cohesion across component systems led to inefficiencies in utilization and a fragmented user experience. Additionally, performance bottlenecks in the frontend resulted in suboptimal user interactions.
                        <br /><br />To address these challenges, the overhaul aimed to redesign and develop a scalable component system, following company guidelines and industry standards.
                    </p>
                </DivAnimation>
                <DesignBrief items={[
                    { title: 'Pain Points', description: 'Users struggled with a fragmented UI experience, lack of visual hierarchy, and redundant features in multiple pages. A large part of the app\'s functionality was underutilized, and inconsistent design across systems was affecting usability.' },
                    { title: 'Competitive Analysis', description: 'Product in similar domains had cleaner UI, better content organization, and interactive elements that enhanced user engagement. Most used a unified workspace UI, and had nested systems for file management, etc.' },
                    { title: 'Final Screens', description: 'Multiple design and code iterations were conducted based on internal feedback and engagement metrics. We cut out all underutilized features and created a unified UI, in adherence to design guidelines. The redesign directly led to increase in user intake and subscriptions.', hashLink: '#research' },
                ]} />
            </div>
            <HiFiScroller
                sections={hifiSections}
                sectionBg="bg-white"
                renderImage={() => (
                    <>
                        <img className="w-full rounded-[10px]" src={LANDING_PAGE} />
                        <img className="w-full rounded-[10px]" src={img1} />
                        <img className="w-full rounded-[10px]" src={img2} />
                        <img className="w-full rounded-[10px]" src={img3} />
                        <img className="w-full rounded-[10px]" src={img4} />
                    </>
                )}
            />
        </section>
    )
}

export default AAiWebapp;