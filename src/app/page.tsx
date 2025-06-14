import React from "react";
import {
  gosaikundaImage,
  mountain,
  mountainImage1,
  mountainImage2,
  mountainValley,
} from "../../public";
import ImageComponent from "@/components/ImageLightbox";

const images = [
  gosaikundaImage,
  mountain,
  mountainImage1,
  mountainImage2,
  mountainValley,
];

function Page() {
  return (
    <main className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">
        How React Simplifies Development?
      </h1>
      <ImageComponent imageSrc={images} />
    </main>
  );
}

export default Page;
