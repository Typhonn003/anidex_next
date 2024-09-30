"use client";
import { cn } from "@/app/lib/utils";
import Link, { LinkProps } from "next/link";
import React, { useState, createContext, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { Logo } from "@/app/components/logo/Logo";
import { Links, Options } from "@/app/data";
import { useContentStore } from "@/app/store";
import { useRouter } from "next/navigation";

interface SidebarContextProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  animate: boolean;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined,
);

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};

export const SidebarProvider = ({
  children,
  open: openProp,
  setOpen: setOpenProp,
  animate = true,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  const [openState, setOpenState] = useState(false);

  const open = openProp !== undefined ? openProp : openState;
  const setOpen = setOpenProp !== undefined ? setOpenProp : setOpenState;

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: animate }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const SidebarComponent = ({
  children,
  open,
  setOpen,
  animate,
}: {
  children: React.ReactNode;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  animate?: boolean;
}) => {
  return (
    <SidebarProvider open={open} setOpen={setOpen} animate={animate}>
      {children}
    </SidebarProvider>
  );
};

export const SidebarBody = (props: React.ComponentProps<typeof motion.div>) => {
  return (
    <>
      <DesktopSidebar {...props} />
      <MobileSidebar {...(props as React.ComponentProps<"div">)} />
    </>
  );
};

export const DesktopSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<typeof motion.div>) => {
  const { open, setOpen, animate } = useSidebar();
  return (
    <>
      <motion.div
        className={cn(
          "hidden h-full w-[160px] flex-shrink-0 border-r border-blue-800 bg-blue-600 px-4 py-4 md:flex md:flex-col",
          className,
        )}
        animate={{
          width: animate ? (open ? "160px" : "60px") : "160px",
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        {...props}
      >
        {children}
      </motion.div>
    </>
  );
};

export const MobileSidebar = ({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) => {
  const { open, setOpen } = useSidebar();
  return (
    <>
      <div
        className={cn(
          "flex h-10 w-full flex-row items-center justify-between bg-blue-600 px-4 py-4 md:hidden",
        )}
        {...props}
      >
        <div className="z-20 flex w-full items-center justify-between">
          <Logo />
          <IconMenu2
            className="text-neutral-200"
            onClick={() => setOpen(!open)}
          />
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className={cn(
                "fixed inset-0 z-[100] flex h-full w-full flex-col justify-between bg-blue-600 p-10 dark:bg-neutral-900",
                className,
              )}
            >
              <div
                className="absolute right-10 top-10 z-50 text-neutral-800 dark:text-neutral-200"
                onClick={() => setOpen(!open)}
              >
                <IconX />
              </div>
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export const SidebarLink = ({
  link,
  className,
  ...props
}: {
  link: Links;
  className?: string;
  props?: LinkProps;
}) => {
  const { open, animate } = useSidebar();
  return (
    <Link
      href={link.href}
      className={cn(
        "group/sidebar flex items-center justify-start gap-2 rounded-md px-1 py-2 hover:bg-blue-800/40",
        className,
      )}
      target="_self"
      {...props}
    >
      {link.icon}
      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="!m-0 inline-block whitespace-pre !p-0 text-sm text-neutral-200 transition duration-150 group-hover/sidebar:translate-x-2"
      >
        {link.label}
      </motion.span>
    </Link>
  );
};

export const SidebarOption = ({
  option,
  name,
  className,
}: {
  option: Options;
  name: string;
  className?: string;
}) => {
  const { contentType, setContentType } = useContentStore();
  const { open, animate } = useSidebar();
  const router = useRouter();

  const handleOption = (value: string) => {
    setContentType(value);
    router.push(option.value);
  };

  return (
    <label
      key={option.value}
      className={cn(
        "group/sidebar relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-lg px-1 py-2 transition-colors",
        {
          "bg-blue-800 px-2": contentType === option.value,
          "hover:bg-blue-800/40": contentType !== option.value,
          "px-0": animate && !open && option.value === "profile",
          "px-1": !(animate && !open && option.value === "profile"),
        },
        className,
      )}
    >
      <input
        type="radio"
        name={name}
        value={option.value}
        checked={contentType === option.value}
        onChange={() => handleOption(option.value)}
        className="sr-only"
      />
      {option.icon}
      <motion.span
        animate={{
          display: animate ? (open ? "inline-block" : "none") : "inline-block",
          opacity: animate ? (open ? 1 : 0) : 1,
        }}
        className="!m-0 inline-block whitespace-pre !p-0 text-sm text-neutral-200 transition duration-150 group-hover/sidebar:translate-x-2"
      >
        {option.label}
      </motion.span>
    </label>
  );
};
