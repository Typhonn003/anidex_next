"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./components/ui/aurora-background";
import { PlaceholdersAndVanishInput } from "./components/ui/placeholders-and-vanish-input";

const Home = () => {
  const placeholders = [
    "What's the name of your favorite anime?",
    "Which anime are you searching for?",
    "Try searching with part of the name.",
    "Looking for your next anime adventure?",
    "Got a specific anime in mind? Search here!",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center gap-4 px-4"
      >
        <h1 className="text-center text-5xl font-bold md:text-7xl dark:text-white">
          Anidex
        </h1>
        <h2 className="py-4 text-center text-base font-extralight md:text-4xl dark:text-neutral-200">
          Search for information about your favorite anime by name or genre.
        </h2>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </motion.div>
    </AuroraBackground>
  );
};

export default Home;
