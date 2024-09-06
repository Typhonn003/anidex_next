import { cn } from "@/app/lib/utils";
import { ReactNode, ButtonHTMLAttributes } from "react";

export const Button = ({
  children,
  className,
  ...rest
}: {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-md border border-slate-800 px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        rest.disabled
          ? "cursor-not-allowed bg-[linear-gradient(110deg,#2c2e36,45%,#58657a,55%,#1a1b20)] bg-[length:200%_100%]"
          : "animate-shimmer bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
