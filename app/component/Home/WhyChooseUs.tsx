import React from "react";
import Image from "next/image";

export default function WhyChooseUs() {
  const items = [
    {
      image: "/icons/1.png",
      title: "Expertise",
      desc: "Our team of skilled real estate agents can assist you in finding the ideal home to fit your needs and budget because they have extensive knowledge of the neighborhood real estate market.",
    },
    {
      image: "/icons/2.png",
      title: "Personalized Service",
      desc: "We are dedicated to offering individualized service catered to your particular tastes and needs since we recognize that purchasing a home is a major financial commitment.",
    },
    {
      image: "/icons/3.png",
      title: "Transparency",
      desc: "At every stage, we think it's important to communicate honestly and openly. Throughout the entire process, from property viewings to negotiations and closing, we'll keep you updated and involved.",
    },
    {
      image: "/icons/4.png",
      title: "Support",
      desc: "It can be intimidating to purchase a home, but you don't have to do it by yourself. To provide a seamless and stress-free experience, our committed staff is here to assist you and respond to any questions you may have.",
    },
  ];
  return (
    <section className="relative max-w-[1440px] w-full m-auto px-5 md:px-10 py-16">
      <h5 className="text-3xl font-semibold text-center md:text-left pb-10">
        Why Choose Us
      </h5>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
        {items.map((data, i) => (
          <div className="w-full flex flex-col items-center" key={i}>
            <div className="relative w-[150px] h-[150px]">
              <Image
                src={data.image}
                alt={`${data.title} Image`}
                fill={true}
                className="object-fill bg-no-repeat"
              ></Image>
            </div>
            <h5 className="pb-5 text-xl font-semibold text-center">
              {data.title}
            </h5>
            <p className="text-center">{data.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
