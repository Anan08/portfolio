import React from 'react'


const project = [
  {
    image : 'testimg',
    desc : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque in dolor, id error aperiam temporibus ea facere recusandae incidunt veritatis!',
    title : 'test'
  },
  {
    image : 'testimg',
    desc : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque in dolor, id error aperiam temporibus ea facere recusandae incidunt veritatis!',
    title : 'test'
  },
  {
    image : 'testimg',
    desc : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque in dolor, id error aperiam temporibus ea facere recusandae incidunt veritatis!',
    title : 'test'
  }
]

export default function CollectionSection() {
  return (
    <div className='bg-black h-[500px] p-5'>
      {project.map((item) => {
        return(
          <div key={item.title}>
          
            <h1 className='text-white' key={item.title}>{item.desc}</h1>
            
          </div>
        )
      })}
    </div>
  )
}
