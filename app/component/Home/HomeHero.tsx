import React from "react";
import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="relative max-w-[1440px] w-full h-[90vh] flex justify-between items-center m-auto py-5 px-10">
      <div className=" h-full">
        <Image
          src="/AbodeHomeHero.jpg"
          className="relative object-cover bg-no-repeat h-full brightness-50 md:brightness-75 contrast-[1.15]"
          fill={true}
          alt="Homehero Image"
          priority
        ></Image>
      </div>
      <div className="w-full h-full flex flex-col z-10 text-white pt-10 md:pt-5">
        <div className="w-full lg:w-[70vw]">
          <h1 className="text-5xl text-center lg:text-left md:text-6xl lg:text-7xl xl:text-8xl">
            Discover the Most Suitable Property
          </h1>
        </div>
        <div className="w-full flex justify-end mt-10 lg:mt-[-1.25rem]">
          <span className="lg:w-[29vw] xl:w-[30vw]">
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
