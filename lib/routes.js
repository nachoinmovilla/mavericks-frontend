import { BiBookBookmark, BiBuildings, BiCog, BiGroup, BiHome, BiLogOut, BiPlusCircle, BiSolidBookBookmark, BiSolidBuildings, BiSolidCog, BiSolidGroup, BiSolidHome, BiSolidLogOut, BiSolidPlusCircle, BiSolidUserCircle, BiUserCircle } from "react-icons/bi";


export const navRoutes = [
    {
        title: 'Main Menu',
        items: [
            {
                title: 'Dashboard',
                path: '/',
                pathname: '/',
                icon: <BiSolidHome />,
                badge: 0,
            },
            {
                title: 'Agent List',
                path: '/agents',
                pathname: 'agents',
                icon: <BiSolidGroup />,
                badge: 0,
            },
            {
                title: 'Documents',
                path: '/documents',
                pathname: 'documents',
                icon: <BiSolidBookBookmark />,
                badge: 0,
            },
            {
                title: 'Contacts List',
                path: '/contacts',
                pathname: 'contacts',
                icon: <BiSolidUserCircle />,
                badge: 2,
            },
        ]
    },
    {
        title: 'Listing',
        items: [
            {
                title: 'Add New',
                path: '/create',
                pathname: 'create',
                icon: <BiSolidPlusCircle />,
                badge: 0,
            },
            {
                title: 'My Properties',
                path: '/my-listings',
                pathname: 'my-listings',
                icon: <BiBuildings />,
                badge: 6,
            },
        ]
    },
    {
        title: 'Application',
        items: [
            {
                title: 'General Settings',
                path: '/settings',
                pathname: 'settings',
                icon: <BiSolidCog />,
                badge: 0,
            },
            {
                title: 'Logout Account',
                path: '/logout',
                pathname: 'logout',
                icon: <BiLogOut />,
                badge: 0,
            },
        ]
    }
]