import React from 'react';

const Skills = () => {
  
  return (
    <div  className='bg-black pt-40'>

      <div className='p-3 text-align-center flex items-center justify-center' >
        <h1 className='text-6xl text-white font-bold'>Skills</h1>
      </div>

      <div className='flex flex-col'>

      <div className='flex flex-row my-10'>

        <div className='w-1/3 h-32 bg-neutral-800 m-3  rounded-2xl'>

        <h1 className='text-white text-3xl pt-4 pl-10'>HTML/CSS</h1>
        <div className='flex flex-row bg-white w-5/6 h-5 m-5 rounded-2xl'>
          <div className='w-96 bg-red-300 rounded-2xl flex items-center justify-center'>90%
          </div>
          <div className='w-1/6 bg-white rounded-r-2xl'>
          </div>
        </div>
        </div>

        <div className='w-1/3 h-32 bg-neutral-800 m-3  rounded-2xl'>
        <h1 className='text-white text-3xl pt-4 pl-10'>JavaScript</h1>
        <div className='flex flex-row bg-white w-5/6 h-5 m-5 rounded-2xl'>
          <div className='w-72 bg-red-300 rounded-2xl flex items-center justify-center'>70%
          </div>
          <div className='w-1/6 bg-white rounded-r-2xl'>
          </div>
        </div>
        </div>
        
        <div className='w-1/3 h-32 bg-neutral-800 m-3  rounded-2xl'>
        <h1 className='text-white text-3xl pt-4 pl-10'>React</h1>
        <div className='flex flex-row bg-white w-5/6 h-5 m-5 rounded-2xl'>
          <div className='w-96 bg-red-300 rounded-2xl flex items-center justify-center'>90%
          </div>
          <div className='w-1/6 bg-white rounded-r-2xl'>
          </div>
        </div>
        </div>

      </div>  
      <div className='flex flex-row'>
        <div className='w-1/3 h-32 bg-neutral-800 m-3  rounded-2xl'>
        <h1 className='text-white text-3xl pt-4 pl-10'>MySql</h1>
        <div className='flex flex-row bg-white w-5/6 h-5 m-5 rounded-2xl'>
          <div className='w-72 bg-red-300 rounded-2xl flex items-center justify-center'>70%
          </div>
          <div className='w-1/6 bg-white rounded-r-2xl'>
          </div>
        </div>
        </div>
        <div className='w-1/3 h-32 bg-neutral-800 m-3  rounded-2xl'>
        <h1 className='text-white text-3xl pt-4 pl-10'>Java</h1>
        <div className='flex flex-row bg-white w-5/6 h-5 m-5 rounded-2xl'>
          <div className='w-80 bg-red-300 rounded-2xl flex items-center justify-center'>80%
          </div>
          <div className='w-1/6 bg-white rounded-r-2xl'>
          </div>
        </div>
        </div>
        <div className='w-1/3 h-32 bg-neutral-800 m-3  rounded-2xl'>
        <h1 className='text-white text-3xl pt-4 pl-10'>Data Structures</h1>
        <div className='flex flex-row bg-white w-5/6 h-5 m-5 rounded-2xl'>
          <div className='w-72 bg-red-300 rounded-2xl flex items-center justify-center'>70%
          </div>
          <div className='w-1/6 bg-white rounded-r-2xl'>
          </div>
        </div>
        </div>
      </div>

      </div>
      

    </div>
  )
}

export default Skills