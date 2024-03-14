"use client"
import Image from "next/image";
import Homelink from "./components/homepagelink";
import Typewriter from 'typewriter-effect';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaPython, FaReact, FaGitAlt } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiTailwindcss, SiCplusplus  } from "react-icons/si";
import './globals.css';

export default function Home() {
  return (
    <div className="grid grid-cols-12 grid-rows-12 h-screen mx-9 my-5 gap-5">
      <div className="border-4 border-maroon rounded col-start-2 col-end-9 row-start-1 row-end-6 justify-center">
        <div className="flex justify-center content-center text-7xl m-7 text-maroon">
          <Typewriter
            options={{
              strings: ['heyyyy','helloo','wazaah'],
              autoStart: true,
              loop: true,
              delay: 100,
              pauseFor: 10000
            }}
          />
        </div>
        <div className="flex justify-center content-center">
          <p className="text-2xl text-maroon">my name is Avash and I'm a CS student exploring software engineering</p>
        </div>
        <div className="text-2xl text-maroon flex justify-center m-3 align-top">
          <p>you can reach me with these links</p>
        </div>
        <div className="flex justify-center content-center mt-6">
        <div className="mx-6"><FaLinkedin color="maroon" size={53} title="Linkedin"/></div>
        <div className="mx-6"><FaGithub color="maroon" size={53}/></div>
        <div className="mx-6"><MdEmail color="maroon" size={53}/></div>
        </div>
      </div>

      <div className="border-4 border-maroon rounded col-start-9 col-end-12 row-start-1 row-end-8 flex flex-col justify-start pt-5">
        <h1 className="text-4xl text-maroon flex justify-center mb-4 mt-6">I enjoy using:</h1>
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="ml-10"><FaPython color="maroon" size={53}/></div>
          <div className="ml-12"> <FaReact color="maroon" size={53}/></div>
          <div className="ml-10"> <FaGitAlt color="maroon" size={53}/></div>
          <div className="ml-12"><SiTailwindcss color="maroon" size={53}/></div>
          <div className="ml-10"> <SiCplusplus color="maroon" size={53}/> </div>
        </div>
      </div>

      <div className="border-4 border-maroon rounded col-start-2 col-end-9 row-start-6 row-end-12">
        <div className="flex justify-center items-center h-full">
          <p className="text-3xl text-maroon">my projects</p>
        </div>
      </div>

      <div className="border-4 border-maroon rounded col-start-9 col-end-12 row-start-8 row-end-12 flex justify-center items-center">
        <p className="text-3xl text-maroon">pictures</p>
      </div>
    </div>
  );
}
