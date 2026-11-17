import { cn } from "@/lib/utils";
import hero_terrainImage from "@/assets/images/hero-terrain.webp";
import prototypeImage from "@/assets/images/prototype.jpg";
import sketchImage from "@/assets/images/sketch.jpg";
import teamImage from "@/assets/images/team.jpg";
import testImage from "@/assets/images/test.jpg";
import workstationImage from "@/assets/images/workstation.jpg";

interface HeroProps {
  className?: string;
}

export default function Hero({ className }: HeroProps) {
  return (
    <section className={cn("bentro-hero", className)} id="top" aria-labelledby="launch-title">
    <div className="about">
      <h1 id="launch-title">
        <span className="hero-word">Formlab</span>
      </h1>
      <img className="bentro-terrain" src={hero_terrainImage} alt="" />
      <div className="bentro-gallery">
        <div className="bentro-pair">
          <img src={teamImage} alt="Product team collaborating" />
          <img src={sketchImage} alt="Interface sketches on paper" />
        </div>
        <div className="bentro-feature">
          <img src={workstationImage} alt="Design team working around a table" />
        </div>
        <div className="bentro-aside">
          <div className="bentro-copy">
            <p>Take a real user problem from first sketch to a working AI prototype. Test it, get feedback, and improve the experience.</p>
            <a className="launch-button" href="#register">Register for the Workshop</a>
          </div>
          <div className="bentro-pair">
            <img src={prototypeImage} alt="Product dashboard on a laptop" />
            <img src={testImage} alt="Team reviewing ideas on a wall" />
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
