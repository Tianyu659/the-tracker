import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import { useStateContext } from '../../contexts/ContextProvider';
import items from './items';
import Item from './Item';

const Sidebar: React.FC = () => {
    const { activeMenu, setActiveMenu, screenSize } = useStateContext();

    const handleCloseSidebar = () => {
        if (activeMenu && screenSize <= 900) {
            console.log('yo');
            setActiveMenu(false);
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