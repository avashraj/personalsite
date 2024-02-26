import Image from "next/image";
import Homelink from "./components/homepagelink";
//about me portfolio and photography are buttons to other pages
/*about me page:

*/
export default function Home() {
  return (
    <div>
      <div className="flex justify-center"><h1 className="content-center text-9xl">Yooooo</h1></div>
      <div className="flex justify-center"> <p>my name is avash and I am a student exploring software engineering</p></div>
      <div className="flex justify-center">
        <div className="mx-4"><Homelink href = 'about' text = 'about me'/></div>
        <div className="mx-4"><Homelink href = 'portfolio' text = 'portfolio'/></div>
        <div className="mx-4"><Homelink href = 'photog' text = 'photography'/></div>  
      </div>
      <div className="flex justify-center">What I'm Currently working on</div>
      <div className="flex justify-center"><p>shhhhhh</p></div>
    </div>
  );
}
