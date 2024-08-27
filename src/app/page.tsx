"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import {
  AuroraBackground,
  Cover,
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
  PlaceholdersAndVanishInput,
} from "@/app/components";

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
        <h2 className="home-text-style">
          Search for information about your favorite anime by name.
        </h2>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
        <div className="flex items-center gap-4">
          <h2 className="home-text-style">Or by genre.</h2>
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
        <h2 className="home-text-style text-xl">
          <Link href={"api/auth/register"} target="_self">
            <Cover>Create a profile</Cover>
          </Link>{" "}
          to add anime to your favorites.
        </h2>
      </motion.div>
    </AuroraBackground>
  );
};

export default Home;
