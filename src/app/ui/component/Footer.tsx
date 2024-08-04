import { Dock, DockIcon, HomeIcon, MailIcon, LinkedinIcon } from 'lucide-react'
import React from 'react'
import { EmailIcon, GithubIcon, InstagramIcon, LinkedInIcon, XIcon } from '../icons'
import Link from 'next/link'
import { poppins } from '../fonts'




const DATA = {
    contact : {
        social : [
            {
                name : "Github",
                url : "https://github.com/Anan08",
                icon : <GithubIcon className=''/>
            },
            {
                name : "LinkedIn",
                url : "https://www.linkedin.com/in/ananda-putra-3a7702237/",
                icon : <LinkedInIcon/>
            },
            {
                name : "Instagram",
                url : "https://www.instagram.com/ossee_s/",
                icon : <InstagramIcon/>
            },
            {
                name : "X",
                url : "https://x.com/Orbseer",
                icon : <XIcon/>
            },
            {
                name : "Email",
                url : "mailto:anandapgt@gmail.com",
                icon : <EmailIcon/>
            }
        ]
    }
}

export default function Footer() {
  return (
    <>
    <h1 className={`${poppins.className } flex justify-center items-center`}>More About me</h1>
    <div className='flex flex-col h-10 w-full items-center sticky bottom-0 bg-white justify-center hover:overflow-visible overflow-hidden hover:cursor-pointer '>
        <div className='flex flex-row justify-evenly items-center gap-5 w-full p-2 mb-12'>
                {DATA.contact.social.map((item) => {
                    return (
                        <>
                        <Link
                        href={item.url}
                        key={item.name}>
                            <h1 className='w-5 h-5 hover:cursor-pointer hover:translate-y-[-10px]' key={item.name}> {item.icon} </h1>
                        </Link>
                                
                        </>
                    )
                })}

            </div>
        </div>
    </>
  )
}
