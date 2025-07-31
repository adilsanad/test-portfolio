
import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import ASLOGO from '../assets/aslogo.svg';
import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface NavbarProps {
    theme?: 'light' | 'dark';
    style?: 'pinned' | 'floating';
    className?: string;
    isMobile: boolean;
};

function Navbar({ theme = 'dark', style = 'floating', className, isMobile }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [scrolled, setScrolled] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    const { elementRef, isVisible, animationClasses } = useScrollAnimation({
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
        delay: 300,
    });

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY

            setScrolled(currentY > 0)

            if (currentY < lastScrollY || currentY < 50) {
                setShowHeader(true)
            } else {
                setShowHeader(false)
            }

            setLastScrollY(currentY)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    return (
        <nav
            ref={elementRef}
            className={` col-span-full flex flex-col z-99 bg-black/35 text-white/80 items-center font-neulisneue backdrop-blur-md transition-all ${className} 
            ${style === 'pinned'
                ? isMobile
                    ? `fixed top-0 w-full `
                    : `fixed top-0 w-full bg-black/60`
            : style === 'floating'
                ? isMobile
                    ? `md:w-fit m-2 rounded-[15px]  border border-white/5 `
                    : ` md:w-fit mt-11 rounded-[15px] ml-11  border border-white/5 `
                : ''
                }

            ${isMobile 
                ? isOpen 
                    ? 'rounded-[0px_0px_15px_15px]' 
                    : ' bg-gradient-to-b from-black/60 to-black/30' 
                : ''
            }

            ${showHeader 
                ? "translate-y-0 duration-300" 
                : "-translate-y-full"
            } `}
        >
            <div className={`flex ${style === 'pinned'
                ? isMobile
                    ? 'w-full justify-between p-4 py-8'
                    : 'w-full justify-between p-8'
                : style === 'floating'
                    ? isMobile
                        ? 'gap-4 px-4 py-6 w-full justify-between'
                        : 'gap-72 pl-8 pr-4 py-4'
                    : ''
                } items-center`}>
                <Link to='/'>
                    <img className={` ${isMobile ? 'h-8 px-2' : 'h-10'} hover:scale-[0.95] transition-all drop-shadow-[0px_0px_24px_rgba(57,43,255,1)`} src={ASLOGO}></img>
                </Link>
                {isMobile ? (
                    <div
                        className="cursor-pointer flex flex-col gap-1.5 w-10 h-8 justify-center items-center opacity-80"
                        onClick={handleClick}
                    >
                        <div
                            className={` h-[3px] bg-white/75 rounded-[5px] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.25 w-6" : "w-5"
                                }`}
                        />
                        <div
                            className={`w-6 h-[3px] bg-white/75 rounded-[5px] transition-all duration-300 ${isOpen ? "opacity-0" : ""
                                }`}
                        />
                        <div
                            className={`h-[3px] bg-white/75 rounded-[5px] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.25 w-6" : "w-5"
                                }`}
                        />
                    </div>
                ) : (
                    <div className="flex items-center gap-2 text-lg font-light">
                        <HashLink className='py-2 p-4 hover:text-white/100 transition-all' smooth to="/#work">Work</HashLink>
                        <HashLink className='py-2 p-4 hover:text-white/100 transition-all' smooth to="/#aboutme">{'About (me)'}</HashLink>
                        <HashLink className='py-2 p-4 hover:text-white/100 transition-all' smooth to="/#contact">Contact</HashLink>
                        <a className={` ${scrolled ? ' bg-black/60 hover:text-white border-black/20' : '' } text-[#4F78FF] font-medium py-4 p-6 hover:bg-white/5 border border-white/0 hover:border-white/10 rounded-[10px] transition-all`} href='/AdilSanad_CV25.pdf' target='_blank'>Resume</a>
                    </div>
                )}
            </div>
            <div className={`${isOpen ? "h-auto opacity-80 py-8" : "h-0 opacity-0 py-0"} flex w-full p-8 rounded-[0px_0px_15px_15px] justify-between items-center text-base bg-black/40 transition-all duration-200 ease-out overflow-hidden`}>
                <HashLink smooth to="/#work">Work</HashLink>
                <HashLink smooth to="/#aboutme">{'About (me)'}</HashLink>
                <HashLink smooth to="/#contact">Contact</HashLink>
                <a className="text-[#4F78FF]" href='/AdilSanad_CV25.pdf' target='_blank'>Resume</a>
            </div>
        </nav>
    );
}

export default Navbar;