import Image from "next/image";
import nextJsIcon from '../../../public/icon/nextjs-icon.svg';
import visualStudioCodeIcon from '../../../public/icon/vscode-icon.svg';
import tailwindIcon from '../../../public/icon/tailwind-icon.svg';
import reactJsIcon from '../../../public/icon/reactjs-icon.svg';
import xIcon from '../../../public/icon/twitterx-icon.svg';
import emailIcon from '../../../public/icon/email-icon.svg';
import instagramIcon from '../../../public/icon/instagram-icon.svg';
import linkedInIcon from '../../../public/icon/linkedin-icon.svg';
import githubIcon from '../../../public/icon/github-icon.svg';


type IconProps = {
    className? : string
}

export const NextJSIcon = ({className} : IconProps) => {
    return (
        <Image 
        src={nextJsIcon}
        alt="nextJS"
        className={`${className} w-20 h-20`}/>
    );
}

export const VisualStudioCodeIcon = ({className} : IconProps) => {
    return (
        <Image
        src={visualStudioCodeIcon}
        alt="vsCode"
        className={`${className} w-20 h-20`}/>
    )
}

export const TailwindIcon = ({className} : IconProps) => {
    return (
        <Image
        src={tailwindIcon}
        alt="tailwind"
        className={`${className} w-20 h-20`}/>
    )
} 


export const ReactJsIcon = ({className} : IconProps) => {
    return (
        <Image
        src={reactJsIcon}
        alt="ReactJs"
        className={`${className} w-20 h-20`}/>
    )
}
export const InstagramIcon = ({className} : IconProps) => {
    return (
        <Image
        src={instagramIcon}
        alt="ReactJs"
        className={`${className} w-20 h-20`}/>
    )
}
export const XIcon = ({className} : IconProps) => {
    return (
        <Image
        src={xIcon}
        alt="ReactJs"
        className={`${className} w-20 h-20`}/>
    )
}
export const EmailIcon = ({className} : IconProps) => {
    return (
        <Image
        src={emailIcon}
        alt="ReactJs"
        className={`${className} w-20 h-20`}/>
    )
}
export const LinkedInIcon = ({className} : IconProps) => {
    return (
        <Image
        src={linkedInIcon}
        alt="ReactJs"
        className={`${className} w-20 h-20`}/>
    )
}
export const GithubIcon = ({className} : IconProps) => {
    return (
        <Image
        src={githubIcon}
        alt="ReactJs"
        className={`${className} w-20 h-20`}/>
    )
}