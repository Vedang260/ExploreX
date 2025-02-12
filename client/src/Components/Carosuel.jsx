import React, {useState, useEffect} from "react";
import DestinationCards from "./Destinations";

const images = [
  {src: "./assets/images/TajMahal.jpg", 
   title: "TajMahal", 
   desc: "Eternal 🤍 Love, white marble, 🕊️ UNESCO wonder"},
  {src: "./assets/images/Mumbai.jpg", 
   title: "Mumbai", 
   desc: "Bustling 🚅 metropolis, 🎥 Bollywood, Gateway of India"},
   {src: "./assets/images/Kerala.jpg", 
    title: "Kerala", 
    desc: "💦Backwaters, 🥥coconuts, Ayurveda, 🌿lush greenery"},
    {src: "./assets/images/South.jpg", 
      title: "Meenakshi Temple", 
      desc: "🛕Ancient temple, ⛩️Dravidian architecture, 🙏🏻Spiritual hub"},
      {src: "./assets/images/Ahmedabad2.jpg", 
        title: "Ahmedabad", 
        desc: "🌃Historic city, 🌉vibrant culture, Sabarmati Ashram"},
        {src: "./assets/images/Kolkata.jpg", 
          title: "Kolkata", 
          desc: "⛪Cultural capital, colonial charm, 🔱Durga Puja"}

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
              index === current
                ? "pointer-events-auto opacity-100"
                : "pointer-events-none opacity-0"
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.15)), url(${img.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Main Content Section */}
            <main className="w-full h-[85vh] flex flex-col justify-center items-center text-center text-white px-6 sm:px-10">
              <section className="max-w-3xl">
                <h2 className="mt-6 mb-4 text-cyan-300 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                  {img.title}
                </h2>
                <p className="text-lg sm:text-2xl md:text-3xl tracking-wide mb-6 font-bold">
                  {img.desc}
                </p>
                <div className="flex gap-4 justify-center items-center">
                  <button className="px-6 sm:px-8 py-3 rounded-md text-sm sm:text-base md:text-lg font-medium uppercase tracking-wider cursor-pointer transition-all duration-500 bg-white text-black hover:bg-[#89edd9] hover:text-white">
                    Explore
                  </button>
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