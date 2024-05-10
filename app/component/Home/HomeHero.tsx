import React from "react";
import Image from "next/image";
import { Search } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="relative max-w-[1440px] w-full h-[90vh] flex justify-between items-center m-auto py-5 ">
      <div className="absolute w-full h-full">
        <Image
          src="/AbodeHomeHero.jpg"
          className="object-cover bg-no-repeat h-full brightness-50  contrast-[1.15]"
          fill={true}
          alt="Homehero Image"
          priority
        ></Image>
      </div>
      <div className="w-full h-full flex flex-col z-10 text-white pt-10 md:pt-5 px-10">
        <div className="w-full lg:w-2/3">
          <h1 className="text-5xl text-center lg:text-left md:text-6xl lg:text-7xl xl:text-8xl">
            Discover the Most Suitable Property
          </h1>
        </div>
        <div className="w-full flex justify-end">
          <span className="text-sm md:text-base text-center lg:text-left lg:w-1/3 lg:pl-10 pt-10 lg:pt-0">
            {`Our expertise lies in matching purchasers with the homes of their
            dreams. Whether you're looking for a stunning estate, a roomy family
            home, or a charming house, our committed staff is here to help you
            every step of the way.`}
          </span>
        </div>
        <div className="text-center pt-10 md:hidden">
          <button className="bg-white text-black p-3 rounded-2xl">
            View Listing
          </button>
        </div>
        <div className="justify-center items-end w-full h-full hidden md:flex pb-5">
          <div className="w-2/3 flex items-center gap-x-5 bg-gray-500 bg-opacity-50 p-5 rounded-3xl">
            <div className="flex flex-col gap-y-2 w-6/12">
              <label htmlFor="location">Location</label>
              <select
                name="location"
                id="location"
                className="p-2 rounded-xl bg-transparent border"
              >
                <option value="">Select location</option>
                <option value="dog">Baguio</option>
                <option value="cat">Manila</option>
                <option value="hamster">Pangasinan</option>
                <option value="parrot">Pampanga</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-2 w-6/12">
              <label htmlFor="type">Type</label>
              <select
                name="type"
                id="type"
                className="p-2 rounded-xl bg-transparent border"
              >
                <option value="">Select Type</option>
                <option value="dog">Condo</option>
                <option value="cat">Residential</option>
                <option value="hamster">Single Detached House</option>
              </select>
            </div>
            <div className="w-1/12 flex justify-end">
              <button className="bg-black p-5 rounded-full">
                <Search size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
