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
        <div className="flex justify-center items-center m-5"> {/* This centers the content and adds margin */}
          <Image
            src={`/photos/${photoList[currentIndex]}`}
            alt="Photo Carousel"
            width={500} // Specify your desired width
            height={300} // Specify your desired height
             // This will maintain aspect ratio based on the width and height provided
            className="object-center object-cover rounded-lg" // Add additional styling as needed
          />
        </div>
      );
};

export default PhotoCarousel
