"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./components/ui/aurora-background";

const Home = () => {
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
        <h2 className="text-center text-5xl font-bold md:text-7xl dark:text-white">
          Anidex
        </h2>
        <div className="py-4 text-center text-base font-extralight md:text-4xl dark:text-neutral-200">
          Search for information about your favorite anime by name or genre.
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Home;
