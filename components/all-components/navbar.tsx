import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  return (
    <header className={cn("launch-nav", className)}>
    <a className="launch-mark" href="#top" aria-label="Workshop home">
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
        <path fill="currentColor" d="M2 2h14v14H2zM18 2h14v14H18zM2 18h14v14H2z"></path>
        <circle cx="25" cy="25" r="7" fill="#688BFF"></circle>
      </svg>
    </a>
    <nav aria-label="Main navigation">
      <a href="#inside">About</a>
      <a href="#curriculum">Curriculum</a>
      <a href="#speakers">Speakers</a>
      <a href="#pricing">Pricing</a>
      <a href="#faq">FAQ</a>
    </nav>
    <a className="launch-button" href="#register">Register</a>
  </header>
  );
}
