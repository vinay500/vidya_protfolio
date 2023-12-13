import React from 'react';
import travel from '../images/travel.jpg';
import youtube from "../images/youtube.png"

const Projects = () => {
  return (
    <div className='bg-black h-full pt-32'>
      <h1 className='text-6xl text-white font-bold pt-16 pb-8 flex items-center justify-center'>Projects</h1>
      <div className='flex flex-row'>
        <div className='flex-1'>
        <div className="flex items-center justify-center mt-12 ">
          <a className="relative block w-2/3 h-full bg-red-800 group rounded-2xl" href="##">
          <img className="absolute inset-0 object-cover w-full h-full group-hover:opacity-50 rounded-2xl" src={travel}/>
          <div className="relative p-5">
           <div className="mt-40">
               {/* Hidden content */}
              <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 h-96">
                <div className="p-2 ">
                  <p className="text-3xl text-white mt-40 flex items-center justify-center">Travel Website</p>
                  <p className='text-1xl text-white flex items-center justify-center'>The travel website project aims to create an interactive and visually appealing platform for users to explore and provides information about various destinations. Technologies used HTML,CSS,Java Script.</p>
                  <a href='https://vidyamadugula.github.io/travel_website/' target='_blank'>
                  <svg className="h-8 w-8 text-white ml-48 mt-6"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />  <polyline points="15 3 21 3 21 9" />  <line x1="10" y1="14" x2="21" y2="3" /></svg>
                  </a>
                </div>
            </div>
         {/* End of hidden content */}
          </div>
          </div>
          </a>
      </div>
        </div>
      <div className='flex-1'>
      <div className="flex items-center justify-center mt-12 ">
          <a className="relative block w-2/3 h-full bg-red-800 group rounded-2xl flex-flow-column "  href="##">
          <img className="absolute inset-0 object-fill w-full  h-full group-hover:opacity-50 rounded-2xl" src={youtube}/>
          <div className="relative p-5">
           <div className="mt-40">
               {/* Hidden content */}
              <div className="transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 h-96">
                <div className="p-2">
                  <p className="text-3xl text-white mt-40 flex items-center justify-center">YouTube Explorer</p>
                  <p className='text-1xl text-white flex items-center justify-center'>Constructed an advanced React project enabling users to explore YouTube content seamlessly. Leveraged the YouTube API to source and display videos, while integrating Live Chat and Comments Sections.</p>
                  <a href='https://drive.google.com/file/d/1GXMiJFNewMFG1PfF1A6U1HMA0ANza-KR/view?usp=sharing' target='_blank'>
                  <svg className="h-8 w-8 text-white ml-48 mt-6"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />  <polyline points="15 3 21 3 21 9" />  <line x1="10" y1="14" x2="21" y2="3" /></svg>
                  </a>
                </div>
            </div>
         {/* End of hidden content */}
          </div>
          </div>
          </a>
      </div>
      </div>

      
      </div>

      


      
    </div>
  )
}

export default Projects;
//https://vidyamadugula.github.io/travel_website/
// top-0 left-0 w- h-0 bottom-0   ml-44 flex flex-col justify-center items-center bg-red-300  opacity-0 group-hover:h-4/5 group-hover:opacity-100 duration-0.001s rounded-2xl

{/* <div className='flex flex-row bg-white' >

      <div className=' relative rounded-2xl w-2/3 bg-gray ;'>
        <img src={travel} alt='travel_website' className=' absolute rounded-2xl w-2/3 h-full ml-44 mr-9 group-hover:opacity-50 '></img> 
        <div className=' top-0 left-0 w- h-0 bottom-0   ml-44 transition-all transform translate-y-8 opacity-0 group-hover:opacity-0 group-hover:translate-y-0'>
          <div>
          <h1 className='text-white'>travel website</h1>
          </div>
        </div>
      </div>
      <div className='group relative rounded-2xl '>
        <img src={travel} alt='travel_website' className='rounded-2xl w-2/3 h-4/5 mr-44 object-cover '></img> 
        <div className='absolute top-0 left-0 w-2/3 h-0 bottom-0 px-4 py-3  mr-28 flex flex-col justify-center items-center bg-red-300  opacity-0 group-hover:h-4/5 group-hover:opacity-100 duration-0.001s rounded-2xl '>
          <h1 className='text-white'>travel website</h1>
        </div>
      </div>
      </div> */}