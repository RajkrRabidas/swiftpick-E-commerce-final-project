import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section class="hero w-full h-[70vh] container mx-auto text-center grid grid-cols-1 md:grid-cols-2 items-center">
        <div class="max-w-2xl w-full mx-auto row-span-1">
          <div class="left-side">
            <span class="inline-block text-xl table bg-purple-500 text-white px-5 py-2 rounded-full mb-4">
              Sale up to 20% OFF
            </span>
            <h1 class="md:text-6xl font-bold mb-4">
              Discover Trendy
              <span class="text-purple-700">Fashion</span> Everyday
            </h1>
            <p class="text-gray-700 mb-6">
              Elevate Your Style with the Latest in Clothing and Accessories
            </p>

            <a
              href="#"
              class="bg-purple-500 text-2xl table text-white px-10 py-5 rounded-lg shadow hover:bg--800"
            >
              Buy Product
            </a>
          </div>
        </div>

      </section>
    </>
  );
};

export default Hero;
