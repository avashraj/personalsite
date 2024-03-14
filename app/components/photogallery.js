"use client"

import Image from "next/image"
import Link from "next/link"

export default function PhotoGallery(){
    return(
        <div>
            <div className="photos-container">
                <Image 
                    src="/enjoy2.JPG"
                    width={500}
                    height={400} 
                    alt='enjoy on stage'
                    quality={75}/>
                <Image 
                    src="/god.JPG"
                    width={500}
                    height={400} 
                    alt='get right with god'
                    quality={75}/>
                
                <Link href= '/'><Image
                    src="/enjoy1.JPG"
                    width={500}
                    height={400} 
                    alt='enjoy on stage again'
                    quality={100}/></Link>
                <Image 
                    src="/walk.JPG"
                    width={500}
                    height={400} 
                    alt='pretty sunset'
                    quality={75}/>
                <Image 
                    src="/mystuff.JPG"
                    width={500}
                    height={400} 
                    alt='my desk at my parents house'
                    quality={75}/>
                <Image 
                    src="/fren.JPG"
                    width={500}
                    height={400} 
                    alt='my friends on a hike'
                    quality={75}/>
                <Image 
                    src="/getty.JPG"
                    width={500}
                    height={400} 
                    alt='pretty sunset'
                    quality={75}/>
                <Image 
                    src="/home.JPG"
                    width={500}
                    height={400} 
                    alt='my desk at my parents house'
                    quality={75}/>
                <Image 
                    src="/fren2.JPG"
                    width={500}
                    height={400} 
                    alt='my friends on a hike'
                    quality={75}/>
            </div>   
            <style jsx>{`
                .photos-container {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-gap: 0; 
                }

                /* Mobile devices */
                @media (max-width: 768px) {
                    .photos-container {
                        grid-template-columns: 1fr; 
                    }
                }
            `}</style>
        </div> 
    )
}
