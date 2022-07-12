import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { useStateContext } from '../../contexts/ContextProvider';

interface PropsInterface {
    item: {
        title: string;
        links: {
            name: string;
            icon: JSX.Element;
        }[];
    },
    handleCloseSidebar: () => void,
}

const Item: React.FC<PropsInterface> = ({ item, handleCloseSidebar }): JSX.Element => {
    const { currentColor } = useStateContext();

    console.log(currentColor);
    const activeLink = 'flex items-center gap-5 pl-4 pd-3 pb-2.5 pt-2.5 rounded-lg text-white text-md m-2'
    const normalLink = 'flex items-center gap-5 pl-4 pd-3 pb-2.5 pt-2.5 rounded-lg text-white text-md text-gray-700 dark:hover:text-black hover:bg-light-gray m-2' //dark:text-gray-200

    return (
        <div key={item.title} >
            <p className="text-gray-400 m-3 mt-4 uppercase" >
                {item.title}
            </p>
            {item.links.map((link) => (
            <NavLink 
                to={`/${item.title}/${link.name}`}
                key={link.name}
                onClick={handleCloseSidebar}
                style={({ isActive }) => ({ backgroundColor : isActive ? currentColor : ''})}
                className={({ isActive }) => isActive ? activeLink : normalLink}
            >
                {link.icon}
                <span className="capitalize">
                    {link.name}
                </span>
            </NavLink>
            ))}
        </div>
    )
}

export default Item;