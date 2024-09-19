"use client";
import { useState } from "react";
import {
  SidebarComponent,
  SidebarBody,
  SidebarLink,
  Logo,
  SidebarOption,
} from "@/app/components";
import Image from "next/image";
import { sidebarLinks, sidebarOptions } from "@/app/data";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

export const Sidebar = ({ user }: { user: KindeUser | null }) => {
  const [open, setOpen] = useState<boolean>(false);

  const filteredOptions = user
    ? sidebarOptions
    : sidebarOptions.filter((option) => option.value !== "favorites");

  const filteredLinks = sidebarLinks.filter((link) =>
    user ? !link.label.includes("Sign") : link.label !== "Logout",
  );

  return (
    <SidebarComponent open={open} setOpen={setOpen} animate={false}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Logo />
          <div className="mt-8 flex flex-col gap-2">
            {filteredOptions.map((option) => (
              <SidebarOption
                key={option.value}
                option={option}
                name={"menu-option"}
              />
            ))}
            <div className="w-full border border-blue-800" />
            {filteredLinks.map((link) => (
              <SidebarLink key={link.href} link={link} />
            ))}
          </div>
        </div>
        {user && (
          <div>
            <SidebarOption
              option={{
                label: user.given_name!,
                value: "profile",
                icon: (
                  <Image
                    src={user.picture!}
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt={`${user.given_name} profile picture`}
                  />
                ),
              }}
              name="profile-option"
            />
          </div>
        )}
      </SidebarBody>
    </SidebarComponent>
  );
};
