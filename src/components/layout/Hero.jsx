import React from "react";
import Image from 'next/image';
import pizzaImage from '../../../public/pizza.png'
import RightArrow from "../icons/right";

export default function Hero() {
  return (
    <section className="hero"> 
     <div className="py-12">
     <h1 className=" text-4xl font-semibold">Everything <br /> is better <br />with a <span className="text-primary">Pizza</span></h1>
      <p className="my-6 text-gray-500 text-sm">
        Pizza is the missing piece that makes every day complete, a simple yet
        delicious joy in life.
      </p>
      <div className="flex gap-4 text-sm">
        <button className="flex items-center gap-2 bg-primary text-white uppercase px-4 py-2 rounded-full">Order Now <RightArrow className="size-6"/></button>
        <button className="flex items-center gap-2 py-2 text-gray-600 font-semibold">Learn More <RightArrow /></button>
      </div>
     </div>
      <div className="relative">
      <Image layout={'fill'} objectFit={'contain'} src={pizzaImage} alt={"Pizza"} /> 
      </div>
    </section>
  );
}
