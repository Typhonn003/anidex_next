"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useContentStore } from "@/app/store";

export const LogoIcon = () => {
  return (
    <div className="relative z-20 flex items-center space-x-2 py-1">
      <div className="logo-icon" />
    </div>
  );
};

export const Logo = () => {
  const setContentType = useContentStore((state) => state.setContentType);

  return (
    <Link
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-xl font-normal text-neutral-100"
      onClick={() => setContentType("")}
    >
      <div className="logo-icon" />
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
