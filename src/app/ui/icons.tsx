import Image from "next/image";
import nextJsIcon from '../../../public/icon/nextjs-icon.svg';
import visualStudioCodeIcon from '../../../public/icon/vscode-icon.svg';
import tailwindIcon from '../../../public/icon/tailwind-icon.svg';

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