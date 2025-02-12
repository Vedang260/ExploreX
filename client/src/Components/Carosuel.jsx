import React, {useState, useEffect} from "react";
import DestinationCards from "./Destinations";

const images = [

  {src: "./assets/images/Ahmedabad.jpg", title: "TajMahal", desc: "Discover vibrant city life"},


  {src: "./assets/images/Mumbai3.jpg", title: "TajMahal", desc: "Discover vibrant city life"},

]
const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
  {images.map((img, index) => (
    <div
      key={index}
      className={`absolute w-full h-screen transition-opacity duration-1000 ease-in-out ${
        index === current ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.15)), url(${img.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Main Content Section */}
      <main className="w-full h-[85vh] flex flex-col justify-center items-center text-center text-white">
        <section>
          <h3 className="text-[35px] font-light tracking-[3px] shadow-md">
            {img.subtitle}
          </h3>
          <h1 className="mt-[30px] mb-[20px] text-[55px] font-bold uppercase shadow-lg">
            {img.title}
          </h1>
          <p className="text-[25px] tracking-wide mb-[25px] shadow-md">
            {img.desc}
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <a
              href="#"
              className="px-[30px] py-[12px] rounded-md text-[13px] font-medium uppercase tracking-wider transition-all duration-500 bg-white text-black hover:bg-[#00b894] hover:text-white"
            >
              Explore
            </a>
            <a
              href="#"
              className="px-[30px] py-[12px] rounded-md text-[13px] font-medium uppercase tracking-wider transition-all duration-500 bg-[#00b894] text-white hover:bg-white hover:text-black"
            >
              Get Started
            </a>
          </div>
        </section>
      </main>
    </div>
  ))}
    </div>
    <DestinationCards />
    </>
    
  );
};

export default Carousel;