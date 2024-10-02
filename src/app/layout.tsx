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
          "mx-auto flex w-full flex-1 flex-col overflow-hidden rounded-md md:flex-row",
          "h-svh",
          `${inter.className}`,
        )}
      >
        <header>
          <Sidebar user={user} />
        </header>
        <main className="h-[calc(100%-2.5rem)] w-full md:h-full">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
