import { cn } from "@/lib/utils";
import deskImage from "@/assets/images/desk.jpg";
import prototypeImage from "@/assets/images/prototype.jpg";
import sketchImage from "@/assets/images/sketch.jpg";
import teamImage from "@/assets/images/team.jpg";
import testImage from "@/assets/images/test.jpg";

interface AboutProps {
  className?: string;
}

export default function About({ className }: AboutProps) {
  return (
    <section className={cn("about", className)} id="inside" aria-labelledby="section-title">
    <header className="heading">
      <div>
        <p className="eyebrow">About the Workshop</p>
        <h2 id="section-title">
          <span className="word-mask">
            <span>Inside</span>
          </span>
          <span className="word-mask">
            <span>the</span>
          </span>
          <span className="word-mask">
            <span>Workshop</span>
          </span>
        </h2>
      </div>
    </header>
    <div className="grid">
      <div className="column">
        <figure className="tile">
          <div className="photo portrait">
            <img src={teamImage} alt="Design team collaborating around a workshop table" />
          </div>
          <figcaption aria-label="1 product brief">
            <strong className="number" data-count="1" aria-hidden="true">01</strong>
            <span className="label">Product brief</span>
          </figcaption>
        </figure>
        <figure className="tile">
          <div className="photo wide">
            <img src={deskImage} alt="Laptop and notebook at a prototyping workstation" />
          </div>
          <figcaption aria-label="1 interactive prototype">
            <strong className="number" data-count="1" aria-hidden="true">01</strong>
            <span className="label">Interactive prototype</span>
          </figcaption>
        </figure>
      </div>
      <div className="column middle">
        <p className="statement">Design an AI product. Build a prototype people can try.</p>
        <figure className="tile">
          <div className="photo tall">
            <img src={sketchImage} alt="Designers mapping early interface ideas on paper" />
          </div>
          <figcaption aria-label="3 concepts to explore">
            <strong className="number" data-count="3" aria-hidden="true">03</strong>
            <span className="label">Concepts to explore</span>
          </figcaption>
        </figure>
      </div>
      <div className="column right">
        <figure className="tile">
          <div className="photo portrait">
            <img src={testImage} alt="Colleagues reviewing ideas during a group session" />
          </div>
          <figcaption aria-label="2 feedback rounds">
            <strong className="number" data-count="2" aria-hidden="true">02</strong>
            <span className="label">Feedback rounds</span>
          </figcaption>
        </figure>
        <figure className="tile">
          <div className="photo wide">
            <img src={prototypeImage} alt="Product dashboard displayed on a laptop" />
          </div>
          <figcaption aria-label="1 final walkthrough">
            <strong className="number" data-count="1" aria-hidden="true">01</strong>
            <span className="label">Final walkthrough</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
  );
}
