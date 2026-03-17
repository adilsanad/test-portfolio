import Navbar from '../common/Navbar';
import Hero from './components/Hero';
import WorkGallery from './components/WorkGallery';
import Footer from '../common/Footer';

function Home({ isMobile }: { isMobile: boolean }) {
    return (
        <section className='relative flex flex-col w-full bg-primary-100 overflow-hidden'>
            {/* Decorative background stars */}
            <img src="/topleftstar.svg" alt="" className="absolute top-0 left-0 w-[600px] md:w-[900px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 animate-[spin_180s_linear_infinite]" />
            <img src="/rightstar.png" alt="" className="absolute top-[50vh] -right-4 md:right-[60px] w-[200px] md:w-[320px] pointer-events-none z-0" />

            <Navbar style='pinned' isMobile={isMobile} theme='light' bgColor='bg-transparent' scrolledBgColor='bg-primary-100/50 backdrop-blur-md' className='z-20' />
            <Hero isMobile={isMobile} className='z-10' />
            <WorkGallery id='work' isMobile={isMobile} />
            <Footer isMobile={isMobile} id='contact' theme='light' />
        </section>
    )
}

export default Home