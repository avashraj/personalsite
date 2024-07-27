import { useState, useEffect } from "react";
import Image from "next/image";

const PhotoCarousel = ( {photoList} ) => {
    const[currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % photoList.length);
        }, 6000);

        return() => clearInterval(timer);
    }, [photoList.length]);

    return (
        <div className="flex justify-center items-center m-1"> 
          <Image
            src={`/photos/${photoList[currentIndex]}`}
            alt="Photo Carousel"
            width={500} 
            height={300} 
             
            className="object-center object-cover rounded-lg" 
          />
        </div>
      );
};

export default PhotoCarousel
