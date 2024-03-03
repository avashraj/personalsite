"use client"
import Image from "next/image";

export default function PictureDisplay( {pictures} ){
    return(
        <div className="image-display">
            {pictures.map((picture, index) => (
                <div key = {index} className="image-container">
                    <Image src = {picture.src} alt = {picture.alt} width = {400} height = {300} />
                </div>
            ))}
        
        </div>
    );
}