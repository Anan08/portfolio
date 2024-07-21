import React from 'react'

type IconCardProps = {
  name : string,
  icon : React.ReactNode,
  desc : string
}

export default function IconCard({name, icon, desc} : IconCardProps) {
  return (
    <div className='w-40 h-40 flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-md hover:h-64 hover:cursor-pointer'  >
      <div className='mb-5'>
        {icon}
      </div>
      <div className='justify-center items-center flex flex-col overflow-hidden'>
        <h1 className='text-lg mt-12 font-bold '> {name} </h1>
        <p className='mt-5 text-xs flex flex-wrap'>{desc}</p>
      </div>
    </div>
  )
}
