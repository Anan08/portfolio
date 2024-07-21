import React from 'react'
import { NextJSIcon, TailwindIcon, VisualStudioCodeIcon } from '../icons'
import IconCard from './IconCard'

const Tech = {
  VisualCode : {
    name : 'Visual Code',
    icon : <VisualStudioCodeIcon/>,
    desc : 'Code Editor'
  },
  NextJS : {
    name : 'NextJS',
    icon : <NextJSIcon/>,
    desc : 'Javascript Framework'
  },
  Tailwind : {
    name : 'Tailwind CSS',
    icon : <TailwindIcon/>,
    desc : 'CSS Framework'
  }
}

//use Object.entries(Tech).map() to  extract the data in Tech object
export default function TechSection() {
  return (
    <div className='h-96 w-full mt-[200px] m-4 flex flex-col items-center'>     
      <div>
        <h1 className='text-xl font-extrabold '> <span className='text-orange-400'> Tech </span> Used : </h1>
      </div>
      <div className='flex flex-row justify-center gap-2 mt-5'>
        {Object.entries(Tech).map(([key, value]) => (
          <IconCard
          key={key}
          name={value.name}
          icon={value.icon}
          desc={value.desc}
          />
        ))}
      </div>  
      
    </div>
  )
}
