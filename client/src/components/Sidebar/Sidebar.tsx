import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import items from './items';
import Item from './Item';
import { setActiveMenu } from '../../feature/theme/themeSlice';

/**
 * This component is responsible for the sidebar menu
 */
const Sidebar: React.FC = () => {
    // Get the states and hooks from the Redux store
    const { activeMenu, screenSize } = useAppSelector(state => state.theme);
    const dispatch = useAppDispatch();

    // Closes side bar
    const handleCloseSidebar = () => {
        if (activeMenu && screenSize <= 900) {
            dispatch(setActiveMenu(false));
        }
    }

    return (
        <div className="mt-1 ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10" >
            {activeMenu && (<>
                <div className="flex justify-between items-center">
                    <Link to="/" onClick={handleCloseSidebar} className="items-center gap-3 ml-3 mt-4 flex text-2xl font-bold tracking-tight text-slate-900">
                        {/* for dark mode: dark:text-white */}
                        <AdminPanelSettingsIcon /> <span>Tracker</span>
                    </Link>
                </div>
                <div className="mt-10">
                    {items.map((item) => (
                        <Item item={item} handleCloseSidebar={handleCloseSidebar} />
                    ))}
                </div>
            </>)}
        </div>
    )
}

export default Sidebar