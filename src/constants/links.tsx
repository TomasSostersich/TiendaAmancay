
import { FaBoxOpen, FaCartShopping, FaInstagram } from "react-icons/fa6";


export const navbarLinks = [
    {
        id: 1,
        title: ' Inicio',
        href: '/',
    },
    {
        id: 2,
        title: 'Productos',
        href: '/products',
    },
    {
        id: 3,
        title: 'Sobre Nosotros',
        href: '/about',
    },
    
];

export const socialLinks =[
    {
        id: 1,
        title:"Instagram",
        href:"https://www.instagram.com/amancay_accesorioss_/",
        icon: <FaInstagram />
    }
];
export const dashboardLinks = [
	{
		id: 1,
		title: 'Productos',
		href: '/dashboard/productos',
		icon: <FaBoxOpen size={25} />,
	},
	{
		id: 2,
		title: 'Ordenes',
		href: '/dashboard/ordenes',
		icon: <FaCartShopping size={25} />,
	},
];