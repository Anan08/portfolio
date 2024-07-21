import React from 'react';
import { Content } from '../content';
import Spline from '@splinetool/react-spline/next';
import { Key } from 'lucide-react';

//use Object.entries(Tech).map() to  extract the data in Tech object
export default function MainContent() {
  return (
    <div className='h-full w-full mt-[200px] m-4 flex flex-col items-center'>     
      <div className=''>
        <h1 className='text-xl font-bold'> <span className='text-orange-400'> About </span> Me </h1>
      </div>
      <div className='w-full md:w-[600px] mt-10 flex flex-row justify-center gap-20'>
        <div className='w-full'>
          <p className='text-base md:text-lg text-gray-700 text-wrap text-justify'> {Content.AboutMe.desc} </p>
        </div>
        <div  className='w-full flex flex-col'>
          {Content.Project.list.map((item, index) => {
            return(
              <div className='mb-5'> 
                <p className='text-base md:text-lg text-black text-wrap text-justify font-extrabold'> {item.desc} </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
