import { cn } from "@/lib/utils";
import deskImage from "@/assets/images/desk.jpg";
import prototypeImage from "@/assets/images/prototype.jpg";
import reviewImage from "@/assets/images/review.jpg";
import sketchImage from "@/assets/images/sketch.jpg";
import teamImage from "@/assets/images/team.jpg";
import testImage from "@/assets/images/test.jpg";

interface CurriculumProps {
  className?: string;
}

export default function Curriculum({ className }: CurriculumProps) {
  return (
    <section className={cn("about curriculum", className)} id="curriculum" aria-labelledby="curriculum-title">
    <header className="heading">
      <div>
        <p className="eyebrow">Curriculum</p>
        <h2 id="curriculum-title">What <span>You’ll</span> Learn</h2>
      </div>
    </header>
    <div className="curriculum-grid">
      <div className="curriculum-list">
        <div className="topic is-active">
          <button type="button" aria-controls="topic-0" aria-expanded="true">Define the problem</button>
          <div className="topic-copy" id="topic-0" aria-hidden="false">
            <div>
              <p>Choose a real user problem and write a brief that explains where AI can help and how you’ll judge the result.</p>
            </div>
          </div>
        </div>
        <div className="topic">
          <button type="button" aria-controls="topic-1" aria-expanded="false">Sketch the experience</button>
          <div className="topic-copy" id="topic-1" aria-hidden="true">
            <div>
              <p>Map the user journey and sketch three ways someone could ask for help, review an output, and correct it.</p>
            </div>
          </div>
        </div>
        <div className="topic">
          <button type="button" aria-controls="topic-2" aria-expanded="false">Design the prompts</button>
          <div className="topic-copy" id="topic-2" aria-hidden="true">
            <div>
              <p>Write prompts for your main tasks and try them with typical, ambiguous, and incomplete inputs.</p>
            </div>
          </div>
        </div>
        <div className="topic">
          <button type="button" aria-controls="topic-3" aria-expanded="false">Build a prototype</button>
          <div className="topic-copy" id="topic-3" aria-hidden="true">
            <div>
              <p>Connect your key screens into a working flow that someone can try from start to finish.</p>
            </div>
          </div>
        </div>
        <div className="topic">
          <button type="button" aria-controls="topic-4" aria-expanded="false">Test with users</button>
          <div className="topic-copy" id="topic-4" aria-hidden="true">
            <div>
              <p>Watch someone try the prototype, then revise the moments where the interface or AI output causes confusion.</p>
            </div>
          </div>
        </div>
        <div className="topic">
          <button type="button" aria-controls="topic-5" aria-expanded="false">Present your design</button>
          <div className="topic-copy" id="topic-5" aria-hidden="true">
            <div>
              <p>Walk through your prototype and explain the design decisions, what you learned from testing, and what you’d change next.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="curriculum-media">
        <div className="curriculum-photo is-active" aria-hidden="false">
          <img src={teamImage} alt="" loading="lazy" />
          <img src={teamImage} alt="Design team discussing a project around a table" loading="lazy" />
        </div>
        <div className="curriculum-photo" aria-hidden="true">
          <img src={sketchImage} alt="" loading="lazy" />
          <img src={sketchImage} alt="Hand sketching interface layouts on paper" loading="lazy" />
        </div>
        <div className="curriculum-photo" aria-hidden="true">
          <img src={deskImage} alt="" loading="lazy" />
          <img src={deskImage} alt="Laptop and monitor at a development workstation" loading="lazy" />
        </div>
        <div className="curriculum-photo" aria-hidden="true">
          <img src={prototypeImage} alt="" loading="lazy" />
          <img src={prototypeImage} alt="Laptop displaying a product dashboard" loading="lazy" />
        </div>
        <div className="curriculum-photo" aria-hidden="true">
          <img src={testImage} alt="" loading="lazy" />
          <img src={testImage} alt="Team reviewing ideas on sticky notes" loading="lazy" />
        </div>
        <div className="curriculum-photo" aria-hidden="true">
          <img src={reviewImage} alt="" loading="lazy" />
          <img src={reviewImage} alt="Colleagues collaborating around a shared table" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
  );
}
