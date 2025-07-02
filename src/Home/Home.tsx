import Navbar from '../common/Navbar'
import Hero from './components/Hero'
import WorkGallery from './components/WorkGallery'
import AboutMe from './components/AboutMe'
import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from 'tsparticles-engine';
import bg1 from '../assets/images/blue1.png'
import bg2 from '../assets/images/blue2.png'


function Home({ isMobile }: { isMobile: boolean }) {
    const options = useMemo(() => ({
        fullScreen: { enable: false },
        particles: {
            number: { value: 30, density: { enable: true, area: 1200 } },
            size: { value: 2.5 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.3 },
            links: { enable: false },
            color: { value: "#4F78FF" },
        },
        interactivity: {
            events: {
                onHover: { enable: true, mode: "attract" },
            },
            modes: {
                attract: { distance: 300 },
            },
        },
    }), []);

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <section className='relative grid grid-cols-8 md:grid-cols-16 gap-y-24 w-full bg-[#151515] overflow-hidden'>
            {/* Background SVGs */}
            <div className="absolute inset-0 z-10 w-full">
                {/* First Background SVG */}
                <img src={bg1} className="absolute top-0 w-full h-auto" />

                {/* Second Background SVG */}
                <img src={bg2} className="absolute top-128 h-auto w-full" />

            </div>
            <Navbar style='floating' isMobile={isMobile} className='z-20' />
            <Particles className="absolute inset-0 z-0" init={particlesInit} options={options} />
            <Hero isMobile={isMobile} className='z-20' />
            <WorkGallery id='work' isMobile={isMobile} />
            <AboutMe id='aboutme' isMobile={isMobile} />
        </section>
    )
}

export default Home