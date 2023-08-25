import React, { useState } from "react";
import { motion } from "framer-motion";
const Carousel = () => {
  const pillStyle = {
    color: "#00AEFF",
    padding: "4px 12px",
    borderRadius: "20px",
    backgroundColor: "rgb(127, 255, 212, 0.1)",
  };

  const slides = [
    {
      url: "/spacex-optimized.jpg",
      name: "SpaceX Dashboard",
      link: "https://github.com/alexfedy/SpaceX-Dashboard",
      live: true,
      liveLink: "https://space-x-dashboard-two.vercel.app/",
      description:
        "View SpaceX launch & rocket data on a beautiful and organized dashboard.",
      tags: ["Astro", "React", "Tailwind", "NextUI", "Rest API"],
    },
    {
      url: "/tracker-optimized.jpg",
      name: "React Budget Tracker",
      link: "https://github.com/alexfedy/budget-tracker",
      live: true,
      liveLink: "https://budget-tracker-ivory.vercel.app/",
      description:
        "Manage your budget with a simple React state management dashboard.",
      tags: ["React", "Tailwind", "DaisyUI"],
    },
    {
      url: "/avatar-optimized.jpg",
      name: "Random Avatar Generator",
      link: "https://github.com/alexfedy/random-avatar-generator",
      live: true,
      liveLink: "https://random-avatar-generator-pi.vercel.app/",
      description: "Generate avatars/profile icons with a single button click.",
      tags: ["Astro", "React", "Tailwind", "Rest API"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <motion.div
        initial={{ scale: 1, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        key={currentIndex}
        className="h-[90%] relative group flex flex-col gap-4 items-center justify-center mt-4"
      >
        <motion.h2
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full text-center text-2xl text-slate-200"
        >
          {slides[currentIndex].name}
        </motion.h2>
        <motion.img
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          src={slides[currentIndex].url}
          className="max-h-[400px] rounded-2xl bg-center bg-cover"
        />
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-full text-center"
        >
          <h2 className="my-4 text-md">{slides[currentIndex].description}</h2>
          <div className="text-slate-400 flex flex-wrap justify-center gap-4 mb-8 mt-4">
            <a
              href={slides[currentIndex].link}
              className="underline"
              target="_blank"
            >
              View Code
            </a>
            <a
              href={slides[currentIndex].liveLink}
              className="underline"
              target="_blank"
            >
              View Live Site
            </a>
          </div>
          <div className="w-full text-xs my-2 flex  justify-center flex-wrap gap-2">
            {slides[currentIndex].tags.map((tag, i) => (
              <span key={i} style={pillStyle}>
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
        {/* Left arrow */}
        <div className="md:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <div onClick={prevSlide}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 14 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-180"
            >
              <path
                d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807612 21.0711 0.807612 22.0208 1.3934 22.6066C1.97918 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM9 13.5L12 13.5L12 10.5L9 10.5L9 13.5Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        {/* Right arrow */}
        <div className="md:hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <div onClick={nextSlide}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 14 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.0607 13.0607C13.6464 12.4749 13.6464 11.5251 13.0607 10.9393L3.51472 1.3934C2.92893 0.807612 1.97918 0.807612 1.3934 1.3934C0.807612 1.97918 0.807612 2.92893 1.3934 3.51472L9.87868 12L1.3934 20.4853C0.807612 21.0711 0.807612 22.0208 1.3934 22.6066C1.97918 23.1924 2.92893 23.1924 3.51472 22.6066L13.0607 13.0607ZM9 13.5L12 13.5L12 10.5L9 10.5L9 13.5Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Carousel;
