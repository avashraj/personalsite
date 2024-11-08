"use client"

import Typewriter from 'typewriter-effect';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaPython, FaReact, FaGitAlt } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { DiSwift } from "react-icons/di";
import { SiTailwindcss, SiCplusplus } from "react-icons/si";
import './globals.css';
import Link from 'next/link';
import PhotoCarousel from './components/photocarousel';

export default function Home() {
  
  const photoList = ['getty.JPG','home.JPG','mystuff.JPG'];
  return (
    <div className="grid gap-6 m-4 xl:grid-cols-12 xl:grid-rows-12 xl:h-screen xl:mx-9 xl:my-5 xl:gap-6">
      <div className="border-2 border-emerald-600 xl:col-start-2 xl:col-end-9 xl:row-start-1 xl:row-end-6 justify-center div-seashell rounded">
        <div className="flex justify-start content-center text-6xl xl:text-7xl m-7 text-emerald-600 font-serif font-normal">
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
        <div className="flex justify-start ml-5 xl:ml-7 content-center">
          <p className="text-1xl text-emerald-700 font-mono font-bold">my name is Avash Raj Adhikari and I&apos;m a CS student  @ UC Merced exploring software engineering</p>
        </div>
        <div className="text-1xl ml-5 text-emerald-700 flex justify-start xl:ml-7 align-top font-mono font-semi-bold">
          <p>you can reach me with these links:</p>
        </div>
        <div className="flex justify-center content-center mt-5 mb-3">
        <div className="mx-6 hover:opacity-80 "><Link href= "https://www.linkedin.com/in/avash-adhikari-514856239/"><FaLinkedin color="#047857" size={60} title="Linkedin"/></Link> </div>
        <div className="mx-6 hover:opacity-80"><Link href = "https://github.com/avashraj"> <FaGithub color="#047857" size={60}/></Link></div>
        <div className="mx-6 hover:opacity-80"><Link href = "mailto:avashraj328@gmail.com?subject=Mail from website"><MdEmail color="#047857" size={60}/></Link></div>
        </div>
      </div>

      <div className="border-2 border-emerald-600 xl:col-start-9 xl:col-end-12 xl:row-start-1 xl:row-end-8 flex flex-col justify-start pt-5 div-seashell rounded">
        <h1 className="text-2xl text-emerald-700 flex justify-start mb-2 mt-2 ml-3 font-mono font-bold">about me:</h1>
        <p className="text-1xl text-emerald-600 flext justify-start font-mono xl:ml-4 m-3"> I like finding and solving problems and I wanna develop my skills to the point where I can solve any problem. Currently my tech skills include: </p>
        <div className="grid grid-cols-3 gap-4 mt-5 ml-10">
          <div className='animate-bounce'><FaPython color="#047857" size={35}/></div>
          <div> <FaReact color="#047857" size={35}/></div>
          <div className='animate-bounce'> <FaGitAlt color="#047857" size={35}/></div>
          <div className=''><SiTailwindcss color="#047857" size={35}/></div>
          <div className='animate-bounce'> <SiCplusplus color="#047857" size={35}/> </div>
          <div className=''> <DiSwift color="#047857" size={35}/></div>
        </div>
        <p className="text-1xl text-emerald-600 flex justify-start font-mono ml-4 mt-3 mb-2 xl:mb-0">Other than code, I enjoy playing sports, cooking food, and taking pictures which you can see below [click pic!]</p>
        
      </div>

      <div className="border-2 border-emerald-600 rounded xl:col-start-2 xl:col-end-9 xl:row-start-6 xl:row-end-12 flex flex-col div-seashell">
          <h1 className="text-2xl text-emerald-700 flex justify-start mt-4 ml-3 xl:ml-7 font-mono font-bold ">my projects:</h1>
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div className="mx-4 hover:border-2 hover:border-emerald-400 hover:rounded"><Link href="https://github.com/ezsinehan/calHacks2024-SAPPHIRE">
              <h1 className="xl:pl-4 font-mono font-bold text-emerald-700">sapphire (prototype)</h1>
              <p className="xl:pl-4 font-mono text-emerald-600 ">swift, swiftUI, & apple vision framework </p></Link>
            </div>
            <div className="mx-4 hover:border-2 hover:border-emerald-400 hover:rounded"><Link href="https://github.com/avashraj/dsc_2024">
              <h1 className="xl:pl-4 font-mono font-bold text-emerald-700">data science challenge @ Lawrence Livermore National Lab</h1>
              <p className="xl:pl-4 font-mono text-emerald-600 ">numpy, pandas, sklearn & pytorch</p></Link>
            </div>
            <div className="mx-4 hover:border-2 hover:border-emerald-400 hover:rounded"><Link href="https://github.com/avashraj/blip">
              <h1 className="xl:pl-4 font-mono font-bold text-emerald-700">blip: a way to find fun things near you!</h1>
              <p className="xl:pl-4 font-mono text-emerald-600 ">react native, with a firebase backend</p></Link>
            </div>
            <div className="mx-4 hover:border-2 hover:border-emerald-400 hover:rounded"><Link href="https://github.com/avashraj/personalsite">
              <h1 className="xl:pl-4 font-mono font-bold text-emerald-700">this website:</h1>
              <p className="xl:pl-4 font-mono text-emerald-600 ">built with react, nextjs, tailwindcss and hosted through vercel</p></Link>
            </div>
          </div>
      </div>

      <div className="relative rounded xl:col-start-9 xl:col-end-12 xl:row-start-8 xl:row-end-12 flex justify-center items-center">
        <Link href="/photog"><PhotoCarousel className='m-1' photoList={photoList} /> </Link>       
      </div>
    </div>
  );
}
