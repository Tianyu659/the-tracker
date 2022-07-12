import React, { useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useStateContext } from '../../contexts/ContextProvider';
import NavButton from './NavButton';

const NavBar = () => {
    const { setActiveMenu, screenSize, setScreenSize, currentColor } = useStateContext();

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 900) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true)
        }
    }, [screenSize]);

    return (
        <div className="flex justify-between p-2 md:mx-6 relative">
            <NavButton title="Menu" customFunc={() => setActiveMenu((prev) => !prev)} color={currentColor} icon={<MenuIcon />} dotColor='' />
            
            <div className="flex">
                <div >
                    <div className="flex items-center gap-2 cursor-pointer p-2 hover:bg-light-gray rounded-lg">
                        <img className="rounded-full w-8 h-8" src={"https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_960_720.png"} />
                        <p>
                            <span className="text-gray-400 text-14">Hi, </span> {' '}
                            <span className="text-gray-400 font-bold ml-1 text-14">Michael</span>
                        </p>
                        <KeyboardArrowDownIcon className="text-gray-400 text-14" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar