"use client"
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { motion } from "framer-motion";

export const AnimeCard3d = ({
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
    <motion.li layoutId={`card-${title}-${id}`} key={title} onClick={onClick}>
      <CardContainer className="w-full">
        <CardBody className="group/card relative box-border max-w-44 cursor-pointer rounded-xl border border-black/[0.1] bg-gray-50 px-2 py-3 shadow-lg md:max-w-44 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
          <CardItem translateZ="90">
            <motion.div layoutId={`image-${title}-${id}`}>
              <Image
                width={100}
                height={100}
                src={picture}
                alt={title}
                className="h-60 w-full max-w-[8.75rem] rounded-md border border-black/[0.1] object-fill group-hover/card:shadow-xl"
              />
            </motion.div>
          </CardItem>
          <CardItem translateZ="70" className="w-full max-w-[8.75rem]">
            <motion.div layoutId={`title-${title}-${id}`}>
              <h2 className="mt-4 overflow-hidden text-ellipsis text-nowrap">
                {title}
              </h2>
            </motion.div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </motion.li>
  );
};
