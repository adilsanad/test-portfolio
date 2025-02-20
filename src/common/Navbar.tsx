
import { Link } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import ASLOGO from '../assets/aslogo.svg';

interface NavbarProps {
    theme?: 'light' | 'dark';
    style?: 'pinned' | 'floating';
    className?: string;
};

function Navbar({ theme = 'dark', style = 'floating', className }: NavbarProps) {
    return (
        <nav className={`col-span-full flex 
            ${style === 'pinned' 
                ? 'w-full p-4'
                : 'md:col-start-2 md:w-fit pl-4 pr-7 py-4 mt-11 '
            }
            ${theme === 'light'
                ? 'bg-white/30 text-black'
                : 'bg-black/30 text-white/70'
            } rounded-[15px] items-center font-neulisneue ${className}`}
        >
            <div className={`flex ${style === 'pinned' ? 'w-full justify-between' : 'gap-72'} p-4`}>
                <img src={ASLOGO}></img>
                <div className="flex gap-10 items-center text-lg">
                    <Link className="" to='/'>Home</Link>
                    <HashLink smooth to="/#work">Work</HashLink>
                    <HashLink smooth to="/#aboutme">{'About (me)'}</HashLink> 
                    <HashLink smooth to="/#contact">Reach Out!</HashLink> 
                </div>
            </div>
        </nav>
    );
}

export default Navbar;