import { cn } from "@/lib/utils";
import deskImage from "@/assets/images/desk.jpg";
import prototypeImage from "@/assets/images/prototype.jpg";
import researchImage from "@/assets/images/research.jpg";
import reviewImage from "@/assets/images/review.jpg";
import sketchImage from "@/assets/images/sketch.jpg";
import teamImage from "@/assets/images/team.jpg";
import testImage from "@/assets/images/test.jpg";
import whiteboardImage from "@/assets/images/whiteboard.jpg";
import wireframesImage from "@/assets/images/wireframes.jpg";
import workstationImage from "@/assets/images/workstation.jpg";

interface HighlightsProps {
  className?: string;
}

export default function Highlights({ className }: HighlightsProps) {
  return (
    <section className={cn("about highlights", className)} id="highlights" aria-labelledby="highlights-title">
    <header className="heading">
      <div>
        <p className="eyebrow">Workshop Projects</p>
        <h2 id="highlights-title"><span>Workshop</span> Highlights</h2>
      </div>
    </header>
    <div className="highlights-gallery">
      <div className="reel-crop first">
        <div className="reel-track">
          <div className="reel-set">
            <figure className="highlight-frame">
              <img src={teamImage} alt="Design team collaborating around a workshop table" loading="lazy" />
              <figcaption>
                <strong>Turn a user problem into a product brief</strong>
                <span>Discovery</span>
              </figcaption>
            </figure>
            <figure className="highlight-frame">
              <img src={sketchImage} alt="Interface sketches drawn on paper" loading="lazy" />
              <figcaption>
                <strong>Sketch the first user flow</strong>
                <span>Ideation</span>
              </figcaption>
            </figure>
            <figure className="highlight-frame">
              <img src={researchImage} alt="Workshop participants collaborating on research" loading="lazy" />
              <figcaption>
                <strong>Compare competing concepts</strong>
                <span>Research</span>
              </figcaption>
            </figure>
            <figure className="highlight-frame">
              <img src={testImage} alt="Team reviewing ideas on sticky notes" loading="lazy" />
              <figcaption>
                <strong>Share an early direction</strong>
                <span>Critique</span>
              </figcaption>
            </figure>
          </div>
          <div className="reel-set" aria-hidden="true">
            <figure className="highlight-frame">
              <img src={teamImage} alt="Design team collaborating around a workshop table" loading="lazy" />
              <figcaption>
                <strong>Turn a user problem into a product brief</strong>
                <span>Discovery</span>
              </figcaption>
            </figure>
            <figure className="highlight-frame">
              <img src={sketchImage} alt="Interface sketches drawn on paper" loading="lazy" />
              <figcaption>
                <strong>Sketch the first user flow</strong>
                <span>Ideation</span>
              </figcaption>
            </figure>
            <figure className="highlight-frame">
              <img src={researchImage} alt="Workshop participants collaborating on research" loading="lazy" />
              <figcaption>
                <strong>Compare competing concepts</strong>
                <span>Research</span>
              </figcaption>
            </figure>
            <figure className="highlight-frame">
              <img src={testImage} alt="Team reviewing ideas on sticky notes" loading="lazy" />
              <figcaption>
                <strong>Share an early direction</strong>
                <span>Critique</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="reel-crop reverse">
        <div className="reel-track">
          <div className="reel-set">
            <figure className="highlight-frame">
              <img src={wireframesImage} alt="Interface design materials" loading="lazy" />
              <figcaption>
                <strong>Map the key screens</strong>
                <span>Wireframes</span>
              </figcaption>
            </figure>
            <figure className="highlight-frame">
              <img src={deskImage} alt="Laptop and monitor at a development workstation" loading="lazy" />
              <figcaption>
                <strong>Try prompts with real inputs</strong>
                <span>Prompt design</span>
              </figcaption>
            </figure>
            <figure className="highlight-frame">
              <img src={prototypeImage} alt="Product dashboard on a laptop" loading="lazy" />
              <figcaption>
                <strong>Build a testable prototype</strong>
                <span>Prototyping</span>
              </figcaption>
            </figure>
            <figure className="highlight-frame">
              <img src={whiteboardImage} alt="Analytics displayed on a screen" loading="lazy" />
              <figcaption>
                <strong>Review where the flow breaks</strong>
                <span>Iteration</span>
              </figcaption>
            </figure>
          </div>
          <div className="reel-set" aria-hidden="true">
            <figure className="highlight-frame">
              <img src={wireframesImage} alt="Interface design materials" loading="lazy" />
              <figcaption>
                <strong>Map the key screens</strong>
                <span>Wireframes</span>
              </figcaption>
            </figure>
            <figure className="highlight-frame">
              <img src={deskImage} alt="Laptop and monitor at a development workstation" loading="lazy" />
              <figcaption>
                <strong>Try prompts with real inputs</strong>
                <span>Prompt design</span>
              </figcaption>
            </figure>
            <figure className="highlight-frame">
              <img src={prototypeImage} alt="Product dashboard on a laptop" loading="lazy" />
              <figcaption>
                <strong>Build a testable prototype</strong>
                <span>Prototyping</span>
              </figcaption>
            </figure>
            <figure className="highlight-frame">
              <img src={whiteboardImage} alt="Analytics displayed on a screen" loading="lazy" />
              <figcaption>
                <strong>Review where the flow breaks</strong>
                <span>Iteration</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div className="reel-crop last">
        <div className="reel-track">
          <div className="reel-set">
            <figure className="highlight-frame">
              <img src={reviewImage} alt="Colleagues reviewing work around a table" loading="lazy" />
              <figcaption>
                <strong>Run a feedback session</strong>
                <span>User testing</span>
              </figcaption>
            </figure>
            <figure className="highlight-frame">
              <img src={researchImage} alt="Workshop participants collaborating on research" loading="lazy" />
              <figcaption>
                <strong>Group the findings</strong>
                <span>Synthesis</span>
              </figcaption>
            </figure>
            <figure className="highlight-frame">
              <img src={testImage} alt="Team reviewing ideas on sticky notes" loading="lazy" />
              <figcaption>
                <strong>Revise the interaction</strong>
                <span>Refinement</span>
              </figcaption>
            </figure>
            <figure className="highlight-frame">
              <img src={workstationImage} alt="Design team working around a table" loading="lazy" />
              <figcaption>
                <strong>Walk through the final demo</strong>
                <span>Showcase</span>
              </figcaption>
            </figure>
          </div>
          <div className="reel-set" aria-hidden="true">
            <figure className="highlight-frame">
              <img src={reviewImage} alt="Colleagues reviewing work around a table" loading="lazy" />
              <figcaption>
                <strong>Run a feedback session</strong>
                <span>User testing</span>
              </figcaption>
            </figure>
            <figure className="highlight-frame">
              <img src={researchImage} alt="Workshop participants collaborating on research" loading="lazy" />
              <figcaption>
                <strong>Group the findings</strong>
                <span>Synthesis</span>
              </figcaption>
            </figure>
            <figure className="highlight-frame">
              <img src={testImage} alt="Team reviewing ideas on sticky notes" loading="lazy" />
              <figcaption>
                <strong>Revise the interaction</strong>
                <span>Refinement</span>
              </figcaption>
            </figure>
            <figure className="highlight-frame">
              <img src={workstationImage} alt="Design team working around a table" loading="lazy" />
              <figcaption>
                <strong>Walk through the final demo</strong>
                <span>Showcase</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
    <button className="reel-toggle" type="button" hidden>Pause motion</button>
  </section>
  );
}
