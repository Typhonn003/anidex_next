"use client";
import { motion } from "framer-motion";
import React, { ChangeEvent } from "react";
import Link from "next/link";
import {
  Cover,
  LogoIcon,
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
  PlaceholdersAndVanishInput,
  TagsList,
} from "@/app/components";
import { placeholders } from "@/app/data";
import { useSearchStore } from "@/app/store";
import { useRouter } from "next/navigation";

const Home = () => {
  const { pendingSearch, setPendingSearch, setCurrentSearch, setCurrentPage } =
    useSearchStore();
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPendingSearch(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCurrentPage(1);
    setCurrentSearch(pendingSearch);
    router.push("/search");
  };

  return (
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
      <div className="flex gap-2">
        <h1 className="text-center text-5xl font-bold text-neutral-100 md:text-7xl dark:text-gray-800">
          Anidex
        </h1>
        <div className="h-1 w-1">
          <LogoIcon />
        </div>
      </div>
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
          <ModalTrigger className="group/modal-btn flex justify-center bg-black text-neutral-200 dark:bg-white dark:text-gray-800">
            See the options
          </ModalTrigger>
          <ModalBody>
            <ModalContent>
              <TagsList />
              <div className="flex items-center justify-center"></div>
            </ModalContent>
          </ModalBody>
        </Modal>
      </div>
      <h2 className="home-text-style text-xl">
        <Link href={"/api/auth/register"} target="_self">
          <Cover>Create a profile</Cover>
        </Link>{" "}
        to add anime to your favorites.
      </h2>
    </motion.div>
  );
};

export default Home;
