//need home button component
/*photography page:
need photog year component 
button for the year to show my photos for that year drop down type thing to pick different years
favorite photos button
all photos button
default have my favorite photos on page
show photos that have been designated by the buttons
*/

import HomeButton from "../components/homebutton";

export default function Photography() {
    return(
        <div>
            <div className="flex"><HomeButton /></div>
            <div className="flex justify-center"><p className="text-4xl">One of my hobbies is taking pictures,</p></div>
            <div className="flex justify-center"><h1 className="text-6xl">so heres my photography</h1></div>
            <div></div>
        </div>
    );
}