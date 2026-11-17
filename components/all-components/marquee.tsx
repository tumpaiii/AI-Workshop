import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
}

export default function Marquee({ className }: MarqueeProps) {
  return (
    <div className={cn("closing-marquee", className)} aria-label="AI Product Design Workshop">
    <div aria-hidden="true">
      <span>AI Product Design Workshop</span>
      <span>AI Product Design Workshop</span>
    </div>
  </div>
  );
}
