import React, {useState} from 'react';


const Contact = () => {
  const [text, setText]=useState({
    mname:"",
    email:"",
    message:"",
  });

  const nChange=(e)=>{
    setText({
      ...text,
      mname:e.target.value,
    })
  }
   const eChange=(e)=>{
    setText({
      ...text,
      email:e.target.value,
    })
  }
   const mChange=(e)=>{
    setText({
      ...text,
      message:e.target.value,
    })
  }
  const submit=()=>{
    setText({
      ...text,
      mname:"",
    email:"",
    message:"",
    })
  }

 
  return (
    <div className='flex flex-row bg-black p-16 justify-between pt-32 sm:w-full' >
      <div className='flex-1'>
        <h1 className='text-5xl font-bold text-white mb-10 flex items-center justify-center'>Contact Me</h1>
        <div className='flex flex-row ml-44'>
          <div className=' p-1'>
          <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="22" y1="2" x2="11" y2="13" />  <polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
          </div>
          <div className=''>
          <h1 className='text-2xl text-white pl-6 mb-10'>vidyamadugula1@gmail.com</h1>
          </div>
        </div>

        <div className='flex flex-row ml-44'>
          <div className='mr-6 p-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          </div>
          <div>
          <h1 className='text-2xl text-white pl-1'>9392221588</h1>
          </div>
        </div>
        <div className='flex flex-row ml-44 mt-12'>
        <a href='https://www.instagram.com/vidyamadugula/'>
        <svg class="h-8 w-8 text-white mr-10"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
        </a>
        <a href='https://www.linkedin.com/in/vidya-madugula-36b767237/'>
        <svg class="h-8 w-8 text-white mr-10"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
        </a>
        <a href='https://github.com/vidyaMadugula'>
        <svg class="h-8 w-8 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
        </a>
        </div>
        
      </div>

      <div className='flex flex-col pr-16 flex-1'>
        <div className='w-full ml-10'>
        <input type='text' placeholder='Your Name' className='w-full h-20 rounded-2xl mb-6 pl-5 bg-neutral-800 text-white ' onChange={nChange} value={text.mname}></input>
        </div>
        <div className='w-full ml-10'>
        <input type='text' placeholder='Your Email' className='w-full h-20 rounded-2xl mb-6 pl-5 bg-neutral-800 text-white'  onChange={eChange} value={text.email}></input>
        </div>
        <div className='w-full ml-10'>
        <input type='text' placeholder='Your Message' className='w-full h-20 rounded-2xl mb-6 pl-5 bg-neutral-800 text-white '  onChange={mChange} value={text.message}></input>
        </div>
        <div className='mr-96 '>
        <button className='bg-red-400 px-10 py-5 w-400px rounded-2xl text-2xl ml-12' onClick={submit}>Submit</button>
        </div>
      

      </div>
    </div>
  )
}

export default Contact