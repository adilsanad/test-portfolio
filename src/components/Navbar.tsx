
import ASLOGO from '../assets/aslogo.svg';

interface NavbarProps {
    theme?: 'light' | 'dark';
};

function Navbar({theme = 'dark'}: NavbarProps) {
    return (
        <nav className={`col-span-full flex col-start-2 w-fit pl-4 pr-7 py-4 ${theme === 'light' 
            ? 'bg-white/30 text-black'
            : 'bg-black/30 text-white/70'
            } rounded-[15px] items-center font-neulisneue`}>
            <div className="flex p-4 gap-72">
                <img src={ASLOGO}></img>
                <div className="flex gap-10 items-center text-lg">
                    <a className="" href='/'>Home</a>
                    <a href='/'>Work</a>
                    <a href='/'>{'About (me)'}</a>
                    <a href='/'>Reach Out!</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;