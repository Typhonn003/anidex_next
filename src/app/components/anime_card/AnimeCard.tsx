"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export const AnimeCard = ({
  id,
  title,
  picture,
  onClick,
}: {
  id: string;
  title: string;
  picture: string;
  onClick: () => void;
}) => {
  return (
    <motion.li
      layoutId={`card-${title}-${id}`}
      key={title}
      onClick={onClick}
      className="flex max-w-44 cursor-pointer flex-col rounded-xl p-4 hover:bg-neutral-50 dark:hover:bg-neutral-800"
    >
      <div className="flex w-full flex-col gap-4">
        <motion.div layoutId={`image-${title}-${id}`}>
          <Image
            width={100}
            height={100}
            src={picture}
            alt={title}
            className="h-60 w-full rounded-lg object-cover object-top"
          />
        </motion.div>
        <div className="flex flex-col justify-center">
          <motion.h3
            layoutId={`title-${title}-${id}`}
            className="overflow-hidden text-ellipsis whitespace-nowrap text-base font-medium text-neutral-800 md:text-left dark:text-neutral-200"
          >
            {title}
          </motion.h3>
          {/* <motion.p
            layoutId={`description-${synopsis}-${id}`}
            className="text-center text-base text-neutral-600 md:text-left dark:text-neutral-400"
          >
            {synopsis}
          </motion.p> */}
        </div>
      </div>
    </motion.li>
  );
};
