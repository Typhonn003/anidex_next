"use client";
import { useState } from "react";
import {
  SidebarComponent,
  SidebarBody,
  SidebarLink,
  Logo,
} from "@/app/components";
import Image from "next/image";
import { Links } from "@/app/data";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

export const Sidebar = ({
  user,
  links,
}: {
  user: KindeUser | null;
  links: Links[];
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <SidebarComponent open={open} setOpen={setOpen} animate={true}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Logo />
          <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
        </div>
        {user && (
          <div>
            <SidebarLink
              link={{
                label: user.given_name!,
                href: "#",
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
            />
          </div>
        )}
      </SidebarBody>
    </SidebarComponent>
  );
};
