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
    icon: <IconSearch className="icon-style" />,
  },
  {
    label: "Genres",
    href: "#",
    icon: <IconCategory className="icon-style" />,
  },
  {
    label: "Favorites",
    href: "#",
    icon: <IconStar className="icon-style" />,
  },
  {
    label: "Sign In",
    href: "/api/auth/login",
    icon: <IconUser className="icon-style" />,
  },
  {
    label: "Logout",
    href: "/api/auth/logout",
    icon: <IconArrowLeft className="icon-style" />,
  },
];
