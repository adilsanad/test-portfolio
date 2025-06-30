import Navbar from '../common/Navbar'
import Hero from './components/Hero'
import WorkGallery from './components/WorkGallery'
import AboutMe from './components/AboutMe'
import React, { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from 'tsparticles-engine';

function Home({ isMobile }: { isMobile: boolean }) {
    const options = useMemo(() => ({
        fullScreen: { enable: false },
        particles: {
            number: { value: 30, density: { enable: true, area: 1000 }},
            size: { value: 2.5 },
            move: { enable: true, speed: 1 },
            opacity: { value: 0.3 },
            links: { enable: false},
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
                <svg 
                    className="absolute top-0 h-auto" 
                    viewBox="0 0 1440 904" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMin slice"
                >
                    <g filter="url(#filter0_f_664_237)">
                        <path d="M1240 -1.00034C1408.63 -199.699 1731.82 255.524 1812.1 375.809C1821.28 389.558 1813.79 407.853 1797.71 411.678C1681.32 439.363 1287.03 536.991 1137.01 623.165C1053.03 671.407 1021.64 737.714 926.113 753.654C830.582 769.593 445.539 817.652 350.5 799C213.846 772.182 -73.266 753.453 -228.331 744.844C-253.8 743.43 -260.145 708.074 -236.742 697.927C-145.714 658.458 -1.76628 595.659 143.5 530.722C337.412 444.04 533.672 353.55 609.544 309.66C693.379 261.163 1046.5 226.998 1240 -1.00034Z" fill="url(#paint0_linear_664_237)"/>
                    </g>
                    <defs>
                        <filter id="filter0_f_664_237" x="-351.277" y="-150.537" width="2267.36" height="1053.77" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_664_237"/>
                        </filter>
                        <linearGradient id="paint0_linear_664_237" x1="643.183" y1="202.17" x2="716.862" y2="672.176" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4F78FF"/>
                            <stop offset="0.829073" stopColor="#0F1833" stopOpacity="0.65"/>
                        </linearGradient>
                    </defs>
                </svg>

                {/* Second Background SVG */}
                <svg 
                    className="absolute top-96 h-auto" 
                    viewBox="0 0 1440 1063" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMin slice"
                >
                    <g filter="url(#filter0_f_664_239)">
                        <path d="M614.714 644.546C1080.75 549.555 1644.5 1394 1832.5 661.001C2020.5 -71.9974 1684.33 589.152 1584.7 555.41C1072.14 381.819 283.193 674.382 203 661.001C122.807 647.621 19 100.501 19 100.501L-177.742 453.938C-177.742 453.938 -73.5 799.003 160 736.001C393.5 673 447.687 678.591 614.714 644.546Z" fill="url(#paint0_linear_664_239)"/>
                    </g>
                    <defs>
                        <filter id="filter0_f_664_239" x="-277.743" y="0.501953" width="2266.38" height="1062.4" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_664_239"/>
                        </filter>
                        <linearGradient id="paint0_linear_664_239" x1="37.2541" y1="760.147" x2="99.1035" y2="365.606" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#4F78FF"/>
                            <stop offset="0.829073" stopColor="#0F1833" stopOpacity="0.65"/>
                        </linearGradient>
                    </defs>
                </svg>
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