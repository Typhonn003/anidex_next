import "./globals.css";
import type { Metadata } from "next";
import { Sidebar } from "./components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { cn } from "@/app/lib/utils";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Anidex",
  description:
    "Search for and favorite your top anime shows by name or genre with ease.",
};

const inter = Inter({ subsets: ["latin"] });

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <html lang="en">
      <body
        className={cn(
          "mx-auto flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-gray-100 md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
          "h-screen",
          `${inter.className}`,
        )}
      >
        <header>
          <Sidebar user={user} />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
