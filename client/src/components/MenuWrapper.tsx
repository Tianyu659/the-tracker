import React from 'react';

import Sidebar from './Sidebar';
import Navbar from './Navbar/Navbar';
import { useAppDispatch, useAppSelector } from '../app/hooks';

interface MenuWrapperProps {
    children: JSX.Element | JSX.Element[];
}

/**
 * This component is a wrapper for other pages to provide the sidebar and the navigation bar.
 */
const MenuWrapper: React.FC<MenuWrapperProps> = ({ children }) => {
    const { activeMenu } = useAppSelector((state) => state.theme);

    return (
        <div className="">
            <div className="flex relative dark:bj-main-dark-bg">
                {activeMenu ? (
                    <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white" >
                        <Sidebar />
                    </div>
                ) : (
                    <div className="w-0 dark:bg-secondary-dark-bg">
                        <Sidebar />
                    </div>
                )}
                <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                        <Navbar />
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuWrapper;