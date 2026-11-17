import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("workshop-footer", className)} id="footer">
    <div className="about">
      <nav className="footer-columns" aria-label="Footer navigation">
        <div>
          <h2>Workshop</h2>
          <a href="#inside">Overview</a>
          <a href="#curriculum">Curriculum</a>
          <a href="#highlights">Highlights</a>
        </div>
        <div>
          <h2>People</h2>
          <a href="#speakers">Speakers</a>
          <a href="#honest-words">Participant feedback</a>
        </div>
        <div>
          <h2>Attend</h2>
          <a href="#pricing">Pricing</a>
          <a href="#register">Registration</a>
        </div>
        <div>
          <h2>Help</h2>
          <a href="#faq">FAQ</a>
          <a href="#top">Back to top</a>
        </div>
      </nav>
      <div className="footer-base">
        <a className="launch-mark" href="#top" aria-label="Workshop home">
          <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
            <path fill="currentColor" d="M2 2h14v14H2zM18 2h14v14H18zM2 18h14v14H2z"></path>
            <circle cx="25" cy="25" r="7" fill="#688BFF"></circle>
          </svg>
        </a>
        <p>© 2026 AI Product Design Workshop. All rights reserved.</p>
      </div>
      <div className="footer-wordmark" aria-hidden="true">
        <span>Formlab</span>
      </div>
    </div>
  </footer>
  );
}
