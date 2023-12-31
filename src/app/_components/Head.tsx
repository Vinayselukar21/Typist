import { ModeToggle } from '@/components/mode-toggle';
import { Keyboard } from 'lucide-react';
// import ThemeDropdown from './ThemeDropdown';
const Header = () => {
    return (
        <div className='flex md:justify-between justify-center px-10 py-10 text-teal-200'>
            <div className='flex gap-3 items-center text-teal-200'>
                <Keyboard size={40} />
                <h1 className='text-3xl font-mono font-bold'> Typist.</h1>
            </div>
            <div className='hidden md:block'>
                <ModeToggle />
                {/* <ThemeDropdown /> */}
            </div>
        </div>
    )
}
export default Header