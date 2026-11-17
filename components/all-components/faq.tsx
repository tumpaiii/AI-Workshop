import { cn } from "@/lib/utils";

interface FaqProps {
  className?: string;
}

export default function Faq({ className }: FaqProps) {
  return (
    <section className={cn("workshop-faq", className)} id="faq" aria-labelledby="faq-title">
    <header className="about heading faq-head">
      <div>
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-title"><span>Frequently</span> Asked Questions</h2>
        <p className="faq-intro">Find out who the workshop is for, what to bring, and what you’ll build.</p>
      </div>
    </header>
    <div className="faq-list">
      <details name="workshop-faq" open>
        <summary>Who is the workshop for?<span aria-hidden="true"></span></summary>
        <p>Product designers, founders, and product teams who want to turn an AI product idea into something they can test.</p>
      </details>
      <details name="workshop-faq">
        <summary>Do I need to know how to code?<span aria-hidden="true"></span></summary>
        <p>You can start with sketches and a clickable prototype. The focus is on designing and testing the experience.</p>
      </details>
      <details name="workshop-faq">
        <summary>What should I bring?<span aria-hidden="true"></span></summary>
        <p>Bring a laptop and a user problem or product idea you’d like to explore.</p>
      </details>
      <details name="workshop-faq">
        <summary>What will I build?<span aria-hidden="true"></span></summary>
        <p>You’ll work through a short product brief and build a prototype that demonstrates a key user flow.</p>
      </details>
    </div>
  </section>
  );
}
