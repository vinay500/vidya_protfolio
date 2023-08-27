import React from 'react';
import vidya from '../images/Vidya.jpg';



const Home = () => {
  return (
    <div className='flex flex-row  flex-no-wrap bg-black h-full '>
    <div className=' w-5/6 pt-96 text-white pl-40'>
        <h1 className='my-3 font-bold text-4xl'>Hi, I'm Vidya Madugula</h1>
        <h1 className='font-bold text-4xl'> Frontend Developer</h1>
    </div>
    <div className='bg-neutral-800 p-20 mt-20 mr-20 rounded-2xl'>
        <img className='w-50 bg-transparent rounded-2xl' src={vidya} alt='background'></img>
    </div>
    </div>
    
  )
}

export default Home;
//"home": "https://vidyaMadugula.github.io/portfolio",
// "predeploy": "npm run build",
//"deploy": "gh-pages -d build",