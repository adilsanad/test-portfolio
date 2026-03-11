
import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';

import { useEffect, useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface NavbarProps {
    theme?: 'light' | 'dark';
    style?: 'pinned' | 'floating';
    className?: string;
    isMobile: boolean;
    bgColor?: string;
    scrolledBgColor?: string;
};

function Navbar({ theme = 'dark', style = 'floating', className, isMobile, bgColor = 'bg-primary-100', scrolledBgColor = 'bg-primary-100/50 backdrop-blur-md' }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [scrolled, setScrolled] = useState(false)
    const [hasLoaded, setHasLoaded] = useState(false)

    const isLight = theme === 'light';

    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    const { elementRef } = useScrollAnimation({
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
        delay: 300,
    });

    useEffect(() => {
        const timer = setTimeout(() => {
            setHasLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

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

    if (isLight) {
        return (
            <nav
                ref={elementRef}
                className={`w-full flex items-center justify-between px-6 font-albert z-50 transition-all ${className}
                    ${showHeader ? "translate-y-0 duration-300" : "-translate-y-full"}
                    ${hasLoaded ? "opacity-100" : "opacity-0 -translate-y-6"}
                    ${scrolled ? `${scrolledBgColor} shadow-sm py-5 md:py-6 md:px-16` : `${bgColor} py-5 md:py-8 md:px-24`}
                    fixed top-0 left-0 right-0
                `}
            >
                <Link to='/' className={`${isMobile ? 'h-7' : 'h-9'} hover:scale-[0.95] transition-all`}>
                    <svg className="h-full w-auto" viewBox="0 0 29 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M26.5833 4.19315C26.5833 2.85418 25.1561 1.98672 23.9503 2.59286L13.2424 7.97583C8.11929 10.5513 4.45831 15.1565 3.05213 20.5128C3.67998 20.0425 4.38152 19.6597 5.13997 19.3833L7.43683 18.5463L7.45109 18.5412L20.7356 13.8867L23.9542 12.7138C25.1895 12.2637 26.1526 11.2896 26.5833 10.0642V4.19315ZM26.5833 13.9802V17.2501C26.5833 17.7287 26.5116 18.2047 26.3704 18.6624C26.1507 19.375 25.579 19.9272 24.8543 20.1271L8.82777 24.5479C7.12823 25.0167 5.9525 26.5496 5.9525 28.2965C5.9525 31.0526 8.35446 33.2069 11.1243 32.935L22.9573 31.7737C24.8993 31.5831 26.5833 33.0935 26.5833 35.0258C26.5833 36.4514 25.4162 37.6071 23.9765 37.6071H7.16084C6.49349 37.6071 5.9525 38.1427 5.9525 38.8035C5.9525 39.4643 6.49349 40 7.16084 40H23.9765C26.7509 40 29 37.773 29 35.0258C29 31.6786 26.0829 29.0623 22.719 29.3924L10.8859 30.5538C9.53804 30.686 8.36917 29.6377 8.36917 28.2965C8.36917 27.6238 8.82189 27.0336 9.4763 26.8531L25.5028 22.4323C27.0224 22.0131 28.2211 20.8552 28.6817 19.3613C28.8927 18.677 29 17.9655 29 17.2501V4.19315C29 1.06889 25.6697 -0.955176 22.8563 0.459155L12.1484 5.84212C4.69546 9.58878 0 17.1635 0 25.4399V31.3118C0 31.9726 0.540989 32.5082 1.20833 32.5082C1.87568 32.5082 2.41667 31.9726 2.41667 31.3118V25.5766C2.86405 23.7589 4.19636 22.2771 5.97463 21.629L8.26439 20.7946L21.5489 16.1401L21.5632 16.135L24.7888 14.9595C25.4413 14.7217 26.0448 14.3897 26.5833 13.9802Z" fill="#D6793E" />
                    </svg>
                </Link>

                {isMobile ? (
                    <>
                        <div
                            className="cursor-pointer flex flex-col gap-1.5 w-10 h-8 justify-center items-center"
                            onClick={handleClick}
                        >
                            <div className={`h-[2px] bg-neutral-900 rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-[7px] w-5" : "w-4"}`} />
                            <div className={`w-5 h-[2px] bg-neutral-900 rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                            <div className={`h-[2px] bg-neutral-900 rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-[7px] w-5" : "w-4"}`} />
                        </div>
                        {/* Mobile menu */}
                        <div className={`absolute top-full left-0 right-0 bg-primary-100 border-b border-neutral-100 px-6 py-6 flex flex-col gap-4 text-lg font-albert text-neutral-900 transition-all duration-200 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                            <a className="text-primary-500 font-semibold" href='/AdilCV2.pdf' target='_blank'>Resume</a>
                            <HashLink smooth to="/#work" onClick={() => setIsOpen(false)}>Work</HashLink>
                            <HashLink smooth to="/#aboutme" onClick={() => setIsOpen(false)}>About (me)</HashLink>
                            <HashLink smooth to="/#contact" onClick={() => setIsOpen(false)}>Reach out</HashLink>
                        </div>
                    </>
                ) : (
                    <div className="flex text-lg font-albert items-center gap-8 font-medium text-neutral-900">
                        <a className='text-primary-500 hover:text-primary-700 transition-colors' href='/AdilCV2.pdf' target='_blank'>Resume</a>
                        <HashLink className='hover:text-primary-500 transition-colors' smooth to="/#work">Work</HashLink>
                        <HashLink className='hover:text-primary-500 transition-colors' smooth to="/#aboutme">About (me)</HashLink>
                        <HashLink className='hover:text-primary-500 transition-colors' smooth to="/#contact">Reach out</HashLink>
                    </div>
                )}
            </nav>
        );
    }

    // Dark theme (original for project detail pages)
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
                }

            transform transition-all duration-500 ease-out
            ${hasLoaded
                    ? "opacity-100"
                    : "opacity-0 -translate-y-6"
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
                <Link to='/' className={`${isMobile ? 'h-8 px-2' : 'h-10'} hover:scale-[0.95] transition-all`}>
                    <svg className="h-full w-auto drop-shadow-[0px_0px_24px_rgba(57,43,255,1)]" viewBox="0 0 29 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M26.5833 4.19315C26.5833 2.85418 25.1561 1.98672 23.9503 2.59286L13.2424 7.97583C8.11929 10.5513 4.45831 15.1565 3.05213 20.5128C3.67998 20.0425 4.38152 19.6597 5.13997 19.3833L7.43683 18.5463L7.45109 18.5412L20.7356 13.8867L23.9542 12.7138C25.1895 12.2637 26.1526 11.2896 26.5833 10.0642V4.19315ZM26.5833 13.9802V17.2501C26.5833 17.7287 26.5116 18.2047 26.3704 18.6624C26.1507 19.375 25.579 19.9272 24.8543 20.1271L8.82777 24.5479C7.12823 25.0167 5.9525 26.5496 5.9525 28.2965C5.9525 31.0526 8.35446 33.2069 11.1243 32.935L22.9573 31.7737C24.8993 31.5831 26.5833 33.0935 26.5833 35.0258C26.5833 36.4514 25.4162 37.6071 23.9765 37.6071H7.16084C6.49349 37.6071 5.9525 38.1427 5.9525 38.8035C5.9525 39.4643 6.49349 40 7.16084 40H23.9765C26.7509 40 29 37.773 29 35.0258C29 31.6786 26.0829 29.0623 22.719 29.3924L10.8859 30.5538C9.53804 30.686 8.36917 29.6377 8.36917 28.2965C8.36917 27.6238 8.82189 27.0336 9.4763 26.8531L25.5028 22.4323C27.0224 22.0131 28.2211 20.8552 28.6817 19.3613C28.8927 18.677 29 17.9655 29 17.2501V4.19315C29 1.06889 25.6697 -0.955176 22.8563 0.459155L12.1484 5.84212C4.69546 9.58878 0 17.1635 0 25.4399V31.3118C0 31.9726 0.540989 32.5082 1.20833 32.5082C1.87568 32.5082 2.41667 31.9726 2.41667 31.3118V25.5766C2.86405 23.7589 4.19636 22.2771 5.97463 21.629L8.26439 20.7946L21.5489 16.1401L21.5632 16.135L24.7888 14.9595C25.4413 14.7217 26.0448 14.3897 26.5833 13.9802Z" fill="#D6793E" />
                    </svg>
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
                        <a className={` ${scrolled ? ' bg-black/60 hover:text-white border-black/20' : ''} text-[#4F78FF] font-medium py-4 p-6 hover:bg-white/5 border border-white/0 hover:border-white/10 rounded-[10px] transition-all`} href='/AdilCV2.pdf' target='_blank'>Resume</a>
                    </div>
                )}
            </div>
            <div className={`${isOpen ? "h-auto opacity-80 py-8" : "h-0 opacity-0 py-0"} flex w-full p-8 rounded-[0px_0px_15px_15px] justify-between items-center text-base bg-black/40 transition-all duration-200 ease-out overflow-hidden`}>
                <HashLink smooth to="/#work">Work</HashLink>
                <HashLink smooth to="/#aboutme">{'About (me)'}</HashLink>
                <HashLink smooth to="/#contact">Contact</HashLink>
                <a className="text-[#4F78FF]" href='/AdilCV2.pdf' target='_blank'>Resume</a>
            </div>
        </nav>
    );
}

export default Navbar;