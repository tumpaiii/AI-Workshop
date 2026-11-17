import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
}

export default function Card({ className, ...props }: CardProps) {
  return <div className={cn("rounded-[12px] border border-[#30323B] bg-[#15171D] p-6 text-[#F4F5F9]", className)} {...props} />;
}
