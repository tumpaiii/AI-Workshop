import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  className?: string;
  variant?: "default" | "outline";
}

export default function Button({ className, variant = "default", type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-[12px] px-5 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#688BFF] disabled:pointer-events-none disabled:opacity-50",
        variant === "default" ? "bg-[#688BFF] text-[#090A0D] hover:bg-[#A5B9FF]" : "border border-[#688BFF] text-[#F4F5F9] hover:bg-[#202A43]",
        className,
      )}
      {...props}
    />
  );
}
