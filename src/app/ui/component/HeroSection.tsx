"use client"

import React, { Suspense, useState, useEffect } from 'react'
import Globe from './Globe'

const Occupation = [
  "+Designer","+Illustrator","+Artist" 
]

export default function HeroSection() {
  const [occupation, setOccupation] = useState(Occupation[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setOccupation(prevOccupation => {
        const currentIndex = Occupation.indexOf(prevOccupation);
        const nextIndex =  (currentIndex + 1) % Occupation.length;
        return Occupation[nextIndex];
      });
    }, 2000);
  
    return () => {
      clearInterval(interval);
    }
  }, []);
  


  return (
    <section className="mx-auto w-full flex-col justify-center pt-4 rounded-3xl h-96 max-w-screen-xl ">
      <div className="z-10">
          <h1 className='flex justify-center pt-[50px] text-2xl mr-20 font-semibold text-orange-400 z-10'>Ananda Putra Andika</h1>
          <h1 className='flex justify-center ml-20 text-5xl font-extrabold z-10'>Programmer</h1>
          <h1 className='flex justify-center ml-20 text-5xl font-extrabold z-10' >{occupation}</h1>
      </div>
      <Suspense fallback={<p>Loading Globe...</p>}>
        <div>
          <Globe className='mt-[250px] z-0 h-96 w-96'/>
        </div>
      </Suspense>

    </section>
  )
}
