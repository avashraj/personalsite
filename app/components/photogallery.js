"use client"

import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function PhotoGallery() {
  const imageFilenames = [
    'enjoy2.JPG',
    'god.JPG',
    'enjoy1.JPG',
    'walk.JPG',
    'mystuff.JPG',
    'fren.JPG',
    'getty.JPG',
    'home.JPG',
    'fren2.JPG',
  ];

  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < imageFilenames.length) {
      const timer = setTimeout(() => {
        setVisibleCount(visibleCount + 1);
      }, 150); 
      return () => clearTimeout(timer);
    }
  }, [visibleCount, imageFilenames.length]);

  return (
    <div>
      <div className="photos-container">
        {imageFilenames.slice(0, visibleCount).map((filename, index) => (
          <Link href='/' key={index}>
            
              <Image 
                src={`/photos/${filename}`} 
                width={500} 
                height={400} 
                alt={filename.replace('.JPG', '')} 
                quality={75}
                layout="intrinsic" />
            
          </Link>
        ))}
      </div>
      <style jsx>{`
        .photos-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 0; 
        }
        @media (max-width: 768px) {
          .photos-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
