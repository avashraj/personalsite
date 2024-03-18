"use client"
import Typewriter from 'typewriter-effect';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaPython, FaReact, FaGitAlt } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiTailwindcss, SiCplusplus  } from "react-icons/si";
import './globals.css';
import Link from 'next/link';


export default function Home() {
  
  return (
    <div className="grid grid-cols-12 grid-rows-12 h-screen mx-9 my-5 gap-10">
      <div className="border-2 border-emerald-600 col-start-2 col-end-9 row-start-1 row-end-6 justify-center div-seashell rounded">
        <div className="flex justify-start content-center text-7xl m-7 text-emerald-600 font-serif font-normal">
          <Typewriter
            options={{
              strings: ['Heyyyy,','Helloo,','Wazaah,'],
              
              loop: true,
              delay: 100,
              autoStart: true,
              pauseFor: 10000
            }}
          />
        </div>
        <div className="flex justify-start ml-7 content-center">
          <p className="text-1xl text-emerald-700 font-mono font-bold">my name is Avash Raj Adhikari and I'm a CS student  @ UC Merced exploring software engineering</p>
        </div>
        <div className="text-1xl text-emerald-700 flex justify-start ml-7 align-top font-mono font-semi-bold">
          <p>you can reach me with these links:</p>
        </div>
        <div className="flex justify-center content-center mt-5">
        <div className="mx-6"><Link href= "https://www.linkedin.com/in/avash-adhikari-514856239/"><FaLinkedin color="#047857" size={60} title="Linkedin"/></Link> </div>
        <div className="mx-6"><Link href = "https://github.com/avashraj"> <FaGithub color="#047857" size={60}/></Link></div>
        <div className="mx-6"><Link href = "mailto:avashraj328@gmail.com?subject=Mail from website"><MdEmail color="#047857" size={60}/></Link></div>
        </div>
      </div>

      <div className="border-2 border-emerald-600 col-start-9 col-end-12 row-start-1 row-end-8 flex flex-col justify-start pt-5 div-seashell rounded">
        <h1 className="text-2xl text-emerald-700 flex justify-start mb-2 mt-2 ml-3 font-mono font-bold">about me:</h1>
        <p className="text-1xl text-emerald-600 flext justify-start font-mono ml-3"> I strive to become a coding wizard who can complete the entire software development process. Currently my tech skills include: </p>
        <div className="grid grid-cols-3 gap-4 mt-5 ml-10">
          <div className='animate-bounce'><FaPython color="#047857" size={35}/></div>
          <div className=''> <FaReact color="#047857" size={35}/></div>
          <div className='animate-bounce'> <FaGitAlt color="#047857" size={35}/></div>
          <div className=''><SiTailwindcss color="#047857" size={35}/></div>
          <div className='animate-bounce'> <SiCplusplus color="#047857" size={35}/> </div>
        </div>
        <p className="text-1xl text-emerald-600 flext justify-start font-mono ml-3 mt-5">Other than code, I enjoy playing sports, cooking food, and taking pictures which you can see below</p>
      </div>

      <div className="border-2 border-emerald-600 rounded col-start-2 col-end-9 row-start-6 row-end-12 flex flex-col div-seashell">
          <h1 className="text-2xl text-emerald-700 flex justify-start mt-4 ml-8 font-mono font-bold ">my projects:</h1>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div className="mx-8"><Link href="https://github.com/avashraj/personalsite">
              <h1 className="font-mono font-bold text-emerald-700">this website:</h1>
              <p className="font-mono text-emerald-600 ">[built with react, nextjs, tailwindcss and hosted through vercel]</p></Link>
            </div>
            <div className='mx-8 hover:bg-blue'>
              <h1 className='font-mono font-bold text-emerald-700'>blip</h1>
              
                <div className='font-mono text-emerald-600'>
                  <Typewriter 
                  options={{
                    strings: ['[Currently building....]'],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    pauseFor: 20000
                  }} /> </div>
              
            </div>
          </div>
        
      </div>

      <div className="relative border-2 border-emerald-600 rounded col-start-9 col-end-12 row-start-8 row-end-12 flex justify-center items-center div-seashell">
        
      </div>
    </div>
  );
}
