import {
  IconArrowLeft,
  IconCategory,
  IconSearch,
  IconStar,
  IconUser,
} from "@tabler/icons-react";

export type Links = {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
};

export const sidebarLinks = [
  {
    label: "Search",
    href: "#",
    icon: (
      <IconSearch className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Genres",
    href: "#",
    icon: (
      <IconCategory className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Favorites",
    href: "#",
    icon: (
      <IconStar className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Sign In",
    href: "#",
    icon: (
      <IconUser className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
  {
    label: "Logout",
    href: "#",
    icon: (
      <IconArrowLeft className="h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-200" />
    ),
  },
];
