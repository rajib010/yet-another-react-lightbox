"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import {
  Download,
  Slideshow,
  Fullscreen,
} from "yet-another-react-lightbox/plugins";

interface ImageComponentProps {
  imageSrc: StaticImageData[];
}

export default function ImageComponent({ imageSrc }: ImageComponentProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = imageSrc.map((img) => ({
    src: img.src,
  }));

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-5xl">
        {imageSrc.slice(0, 3).map((img, idx) => (
          <div
            key={idx}
            className={`relative aspect-square overflow-hidden cursor-pointer group ${
              idx === 0 ? "row-span-2 col-span-2" : ""
            }`}
            onClick={() => {
              setIndex(idx);
              setOpen(true);
            }}
          >
            <Image
              src={img}
              alt={`Gallery Image ${idx + 1}`}
              fill
              className="object-cover rounded-md cursor-pointer transition-all duration-1000 ease-in-out hover:scale-105 "
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </div>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        plugins={[Download, Slideshow, Fullscreen]}
        on={{ view: ({ index }) => setIndex(index) }}
      />
    </>
  );
}
