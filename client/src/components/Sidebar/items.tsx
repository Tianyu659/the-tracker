import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GridViewIcon from '@mui/icons-material/GridView';
import GroupsIcon from '@mui/icons-material/Groups';

interface link {
    title: string;
    icon: React.ReactNode | React.ReactNode[]
}

export const items = [
    {
        title: 'User',
        links: [
            {
                name: 'user',
                icon: <PersonIcon />,
            },
        ],
    },
    // TODO: add projects page
    {
        title: 'Project',
        links: [
            {
                name: 'overview',
                icon: <GridViewIcon />
            },
            {
                name: 'tasks',
                icon: <AssignmentIcon />,
            },
            {
                name: 'members',
                icon: <GroupsIcon />,
            },
        ],
    },
]

export default items;