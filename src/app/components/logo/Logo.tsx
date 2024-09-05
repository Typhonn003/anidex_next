"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export const LogoIcon = () => {
  return (
    <div className="relative z-20 flex items-center space-x-2 py-1">
      <div className="h-5 w-6 flex-shrink-0 rounded-bl-sm rounded-br-lg rounded-tl-lg rounded-tr-sm bg-neutral-100" />
    </div>
  );
};

export const Logo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-neutral-100"
    >
      <div className="h-5 w-6 flex-shrink-0 rounded-bl-sm rounded-br-lg rounded-tl-lg rounded-tr-sm bg-neutral-100" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="whitespace-pre font-medium text-neutral-200"
      >
        Anidex
      </motion.span>
    </Link>
  );
};
