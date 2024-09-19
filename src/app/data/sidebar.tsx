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

export type Options = {
  value: string;
  label: string;
  icon: React.JSX.Element | React.ReactNode;
};

export const sidebarLinks: Links[] = [
  {
    label: "Sign In",
    href: "/api/auth/login",
    icon: <IconUser className="icon-style" />,
  },
  {
    label: "Sign Up",
    href: "/api/auth/register",
    icon: <IconUser className="icon-style" />,
  },
  {
    label: "Logout",
    href: "/api/auth/logout",
    icon: <IconArrowLeft className="icon-style" />,
  },
];

export const sidebarOptions: Options[] = [
  {
    value: "search",
    label: "Search",
    icon: <IconSearch className="icon-style" />,
  },
  {
    value: "genres",
    label: "Genres",
    icon: <IconCategory className="icon-style" />,
  },
  {
    value: "favorites",
    label: "Favorites",
    icon: <IconStar className="icon-style" />,
  },
];
