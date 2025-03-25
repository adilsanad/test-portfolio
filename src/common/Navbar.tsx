
import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import ASLOGO from '../assets/aslogo.svg';
import { useEffect, useState } from 'react';

interface NavbarProps {
    theme?: 'light' | 'dark';
    style?: 'pinned' | 'floating';
    className?: string;
    isMobile: boolean;
};

function Navbar({ theme = 'dark', style = 'floating', className, isMobile }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    return (
        <nav className={`col-span-full flex flex-col
            ${style === 'pinned'
                ? 'w-full '
                : 'md:col-start-2 md:w-fit mt-11 border border-white/5'
            }
            ${theme === 'light'
                ? 'bg-white/30 text-black'
                : 'bg-black/30 text-white/70'
            } 
            ${isMobile ? isOpen ? 'rounded-none' : 'rounded-[0px_0px_15px_15px] bg-gradient-to-b from-black/60 to-black/30' : 'rounded-[15px] '} items-center font-neulisneue backdrop-blur-xs ${className}`}
        >
            <div className={`flex ${style === 'pinned' ? 'w-full justify-between p-8' : 'gap-72 pl-8 pr-4 py-4'} items-center `}>
                <Link to='/'>
                    <img className='drop-shadow-[0px_0px_24px_rgba(57,43,255,1)' src={ASLOGO}></img>
                </Link>
                {isMobile ? (
                    <div
                        className="cursor-pointer flex flex-col gap-1.5 w-10 h-8 justify-center items-center opacity-80"
                        onClick={handleClick}
                    >
                        <div
                            className={`w-8 h-0.75 bg-gray-100 rounded-[5px] transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2.25" : ""
                                }`}
                        />
                        <div
                            className={`w-8 h-0.75 bg-gray-100 rounded-[5px] transition-all duration-300 ${isOpen ? "opacity-0" : ""
                                }`}
                        />
                        <div
                            className={`w-8 h-0.75 bg-gray-100 rounded-[5px] transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2.25" : ""
                                }`}
                        />
                    </div>
                ) : (
                    <div className="flex items-center gap-2 text-lg font-light">
                        <HashLink className='py-2 p-4' smooth to="/#work">Work</HashLink>
                        <HashLink className='py-2 p-4' smooth to="/#aboutme">{'About (me)'}</HashLink>
                        <HashLink className='py-2 p-4' smooth to="/#contact">Reach Out!</HashLink>
                        <a className="text-[#4F78FF] py-4 p-6 hover:bg-white/5 active:bg-white/5 border border-white/0 hover:border-white/10 active:border-white/10 rounded-[10px] transition-all " href='/public/CV0624profile.pdf' download="AdilSanad_Resume.pdf">Resume</a>
                    </div>
                )}
            </div>
            <div className={`${isOpen ? "h-auto opacity-80 py-8" : "h-0 opacity-0 py-0"} flex w-full p-8 rounded-[0px_0px_15px_15px] justify-between items-center text-base bg-black/40 transition-all duration-200 ease-out overflow-hidden`}>
                <HashLink smooth to="/#work">Work</HashLink>
                <HashLink smooth to="/#aboutme">{'About (me)'}</HashLink>
                <HashLink smooth to="/#contact">Reach Out!</HashLink>
                <a className="text-[#4F78FF]" href='/public/CV0624profile.pdf' download="AdilSanad_Resume.pdf">Resume</a>
            </div>
        </nav>
    );
}

export default Navbar;