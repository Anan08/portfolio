import { Dock, DockIcon, HomeIcon, MailIcon, LinkedinIcon } from 'lucide-react'
import React from 'react'



export type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
    email : (props : IconProps) => <MailIcon {...props} />,
    linkedIn : (props : IconProps) => <LinkedinIcon {...props}/>

}

const DATA = {
    contact : {
        social : {
            Github : {
                name : "Github",
                url : "https://github.com/Anan08",
                icon : "Github"
            },
            LinkedIn : {
                name : "LinkedIn",
                url : "https://www.linkedin.com/in/ananda-putra-3a7702237/",
                icon : "LinkedIn"
            },
            Instagram : {
                name : "Instagram",
                url : "https://www.instagram.com/ossee_s/",
                icon : "Instagram"
            },
            X : {
                name : "X",
                url : "https://x.com/Orbseer",
                icon : "X"
            },
            Email : {
                name : "Email",
                url : "/",
                icon : "Email"
            }
        }
    }
}

export default function Footer() {
  return (
    <div className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl'>
        <Dock direction='middle'>

        </Dock>
    </div>
  )
}
