"use client";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "./components/ui/aurora-background";
import { PlaceholdersAndVanishInput } from "./components/ui/placeholders-and-vanish-input";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./components/ui/animated-modal";

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
        <h2 className="py-4 text-center text-lg font-extralight md:text-2xl dark:text-neutral-200">
          Search for information about your favorite anime by name.
        </h2>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
        <div className="flex items-center gap-4">
          <h2 className="py-4 text-center text-lg font-extralight md:text-2xl dark:text-neutral-200">
            Or by genre.
          </h2>
          <Modal>
            <ModalTrigger className="group/modal-btn flex justify-center bg-black text-white dark:bg-white dark:text-black">
              See the options
            </ModalTrigger>
            <ModalBody>
              <ModalContent>
                <h4 className="mb-8 text-center text-lg font-bold text-neutral-600 md:text-2xl dark:text-neutral-100">
                  Future{" "}
                  <span className="rounded-md border border-gray-200 bg-gray-100 px-1 py-0.5 dark:border-neutral-700 dark:bg-neutral-800">
                    content
                  </span>{" "}
                  here.
                </h4>
                <div className="flex items-center justify-center"></div>
              </ModalContent>
            </ModalBody>
          </Modal>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Home;
