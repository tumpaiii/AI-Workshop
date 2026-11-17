import { cn } from "@/lib/utils";

interface PricingProps {
  className?: string;
}

export default function Pricing({ className }: PricingProps) {
  return (
    <section className={cn("workshop-pricing", className)} id="pricing" aria-labelledby="pricing-title">
    <header className="about heading pricing-intro">
      <div>
        <h2 id="pricing-title">Choose Your <span>Workshop Pass</span></h2>
        <p>Compare the individual and team options for the AI Product Design Workshop.</p>
      </div>
    </header>
    <div className="price-head" aria-hidden="true">Pricing</div>
    <div className="about price-grid">
      <article className="price-card">
        <h3>Workshop</h3>
        <p>Build your first AI prototype</p>
        <ul>
          <li>Live workshop sessions</li>
          <li>Product brief and sketch exercises</li>
          <li>Prompt design practice</li>
          <li>Interactive prototype walkthrough</li>
          <li>Workshop templates</li>
        </ul>
        <a className="launch-button" href="#register">Registration details</a>
      </article>
      <article className="price-card featured">
        <h3>Workshop + Review</h3>
        <p>Get feedback on your prototype</p>
        <ul>
          <li>Everything in Workshop</li>
          <li>Dedicated prototype review</li>
          <li>Feedback on prompts and user flows</li>
          <li>Prioritized next steps</li>
          <li>Time for follow-up questions</li>
        </ul>
        <a className="launch-button" href="#register">Registration details</a>
      </article>
      <article className="price-card">
        <h3>Team Pass</h3>
        <p>Bring your product team</p>
        <ul>
          <li>Shared workshop sessions</li>
          <li>Team problem-framing exercise</li>
          <li>Collaborative prototyping</li>
          <li>Group feedback on your concept</li>
          <li>Take-home workshop templates</li>
        </ul>
        <a className="launch-button" href="#register">Registration details</a>
      </article>
    </div>
  </section>
  );
}
