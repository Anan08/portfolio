'use client'

import { 
    HomeIcon,
    EnvelopeIcon,
    UserCircleIcon
} from '@heroicons/react/24/solid'
import Link from 'next/link';
import { usePathname } from 'next/navigation'


const links = [
    {
        name:'Home', 
        href:'/',
        icon: HomeIcon
    },
    {
        name:'Profile', 
        href:'/profile',
        icon: UserCircleIcon
    },
    {
        name:'Contact',
        href:'/contact',
        icon:EnvelopeIcon
    }
]


export default function NavLinks(className : any) {
    const pathname = usePathname();
    return(
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return(
                    <Link
                    key={link.name}
                    href={link.href}
                    className='flex flex-row justify-between space-x-1 hover:bg-black hover:text-white rounded-md p-1 '
                    >
                        <LinkIcon className='w-4'/>
                        <p className='hidden md:block'>{link.name}</p>
                    </Link>
                )
            })}
        </>
    )
}