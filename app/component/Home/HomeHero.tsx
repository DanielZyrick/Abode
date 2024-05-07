import React from "react";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="relative max-w-[1440px] w-full h-[90vh] flex justify-between items-center m-auto py-5 px-10">
      <div className="h-full">
        <Image
          src="/AbodeHomeHero.jpg"
          className="bg-no-repeat object-fill rounded-b-3xl h-full"
          fill={true}
          alt="Homehero Image"
          priority
        ></Image>
      </div>
      <div className="w-full h-full flex z-10 text-white pt-20">
        <div className="w-[70vw]">
          <h1 className="text-8xl">Discover the Most Suitable Property</h1>
        </div>
        <div className="w-[30vw] pt-48">
          <span>
            {`Our expertise lies in matching purchasers with the homes of their
            dreams. Whether you're looking for a stunning estate, a roomy family
            home, or a charming house, our committed staff is here to help you
            every step of the way.`}
          </span>
        </div>
      </div>
    </section>
  );
}
