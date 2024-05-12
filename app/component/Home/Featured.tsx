import React from "react";
import Image from "next/image";
import { BedDouble, Grid2X2, LandPlot, MapPin } from "lucide-react";

export default function Featured() {
  const listingInfo = [
    {
      src: "/AbodeHomeHero.jpg",
      title: "Camp Residence",
      price: 50000000,
      address: "812 Middle Q.M, Baguio City",
      bed: 4,
      lotArea: 500,
      floorArea: 400,
    },
    {
      src: "/AbodeHomeHero.jpg",
      title: "Camp Residence",
      price: 50000000,
      address: "812 Middle Q.M, Baguio City",
      bed: 4,
      lotArea: 500,
      floorArea: 400,
    },
    {
      src: "/AbodeHomeHero.jpg",
      title: "Camp Residence",
      price: 50000000,
      address: "812 Middle Q.M, Baguio City",
      bed: 4,
      lotArea: 500,
      floorArea: 400,
    },
  ];
  return (
    <section className="relative max-w-[1440px] m-auto px-5 md:px-10">
      <div className="w-full text-center my-16">
        <span className="text-3xl font-semibold">Featured Listings</span>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-x-10 gap-y-10">
        {listingInfo.map((data, i) => (
          <div className="w-full lg:w-1/3" key={i}>
            <div className="relative w-full h-[250px]">
              <Image
                src={data.src}
                className="object-cover bg-no-repeat w-full h-full brightness-75 rounded-xl"
                alt=""
                fill={true}
                sizes="width: 100%"
                priority
              ></Image>
            </div>
            <div className="flex flex-col gap-y-3">
              <div className="flex justify-between items-center mt-3">
                <h4 className="text-xl font-semibold">{data.title}</h4>
                <span className="text-xl font-semibold">
                  {data.price.toLocaleString()}
                </span>
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="flex gap-x-2">
                  <MapPin />
                  <span>{data.address}</span>
                </div>
                <div className="flex flex-row gap-x-5">
                  <div className="flex gap-x-2 items-center">
                    <BedDouble />
                    <span className="text-sm">
                      {data.bed}{" "}
                      <i className="hidden md:inline-block lg:hidden xl:inline-block">
                        Bedroom
                      </i>
                    </span>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <LandPlot />
                    <span className="text-sm">
                      {data.lotArea}{" "}
                      <i className="hidden md:inline-block lg:hidden xl:inline-block">
                        Lot Area
                      </i>{" "}
                    </span>
                  </div>
                  <div className="flex gap-x-2 items-center">
                    <Grid2X2 />
                    <span className="text-sm">
                      {data.floorArea}{" "}
                      <i className="hidden md:inline-block lg:hidden xl:inline-block">
                        Floor Area
                      </i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full text-center mt-5">
                <button className="w-full h-12 bg-[#151515] text-white rounded-xl">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center my-16 w-full">
        <button className="w-full md:w-1/4 h-12 bg-[#151515] text-white rounded-xl">
          View Listings
        </button>
      </div>
    </section>
  );
}
