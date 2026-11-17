import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
  className?: string;
}

export default function Badge({ className, ...props }: BadgeProps) {
  return <span className={cn("inline-flex items-center rounded-[12px] bg-[#202A43] px-3 py-1 text-xs font-semibold text-[#DCE5FF]", className)} {...props} />;
}
