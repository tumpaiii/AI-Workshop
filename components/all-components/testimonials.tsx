import { cn } from "@/lib/utils";
import speaker_interactionImage from "@/assets/images/speaker-interaction.jpg";
import speaker_positioningImage from "@/assets/images/speaker-positioning.jpg";
import speaker_prototypingImage from "@/assets/images/speaker-prototyping.jpg";
import speaker_researchImage from "@/assets/images/speaker-research.jpg";

interface TestimonialsProps {
  className?: string;
}

export default function Testimonials({ className }: TestimonialsProps) {
  return (
    <section className={cn("honest", className)} id="honest-words" aria-labelledby="honest-title">
    <header className="about heading">
      <div>
        <p className="eyebrow">Participant Feedback</p>
        <h2 id="honest-title">Their <span>Honest</span> Words</h2>
        <p className="honest-note">Sample quotes and portraits for the workshop preview.</p>
      </div>
    </header>
    <div className="honest-scroll">
      <div className="honest-stage">
        <div className="honest-side left">From the first sketch</div>
        <div className="honest-side right">To the final prototype</div>
        <div className="honest-cards">
          <figure className="honest-card">
            <figcaption>
              <span className="honest-icon" aria-hidden="true">
                <img src={speaker_positioningImage} alt="" loading="lazy" />
              </span>
              <span>
                <strong>Product designer</strong>
                <small>Problem framing</small>
              </span>
            </figcaption>
            <blockquote>
              <p>“I came in with a broad idea. The brief helped me pick one user problem I could actually test.”</p>
            </blockquote>
          </figure>
          <figure className="honest-card">
            <figcaption>
              <span className="honest-icon" aria-hidden="true">
                <img src={speaker_prototypingImage} alt="" loading="lazy" />
              </span>
              <span>
                <strong>UX designer</strong>
                <small>Interaction design</small>
              </span>
            </figcaption>
            <blockquote>
              <p>“Sketching the review and correction steps gave me a clearer picture of what the interface needed to do.”</p>
            </blockquote>
          </figure>
          <figure className="honest-card">
            <figcaption>
              <span className="honest-icon" aria-hidden="true">
                <img src={speaker_researchImage} alt="" loading="lazy" />
              </span>
              <span>
                <strong>Product manager</strong>
                <small>Prompt design</small>
              </span>
            </figcaption>
            <blockquote>
              <p>“Trying the same prompt with messy inputs showed me where the experience could break.”</p>
            </blockquote>
          </figure>
          <figure className="honest-card">
            <figcaption>
              <span className="honest-icon" aria-hidden="true">
                <img src={speaker_interactionImage} alt="" loading="lazy" />
              </span>
              <span>
                <strong>Founder</strong>
                <small>Prototyping</small>
              </span>
            </figcaption>
            <blockquote>
              <p>“I had something I could hand to another person and watch them use by the end of the exercise.”</p>
            </blockquote>
          </figure>
          <figure className="honest-card">
            <figcaption>
              <span className="honest-icon" aria-hidden="true">
                <img src={speaker_positioningImage} alt="" loading="lazy" />
              </span>
              <span>
                <strong>Design lead</strong>
                <small>User testing</small>
              </span>
            </figcaption>
            <blockquote>
              <p>“The feedback session helped me see where people hesitated and what to change first.”</p>
            </blockquote>
          </figure>
          <figure className="honest-card">
            <figcaption>
              <span className="honest-icon" aria-hidden="true">
                <img src={speaker_interactionImage} alt="" loading="lazy" />
              </span>
              <span>
                <strong>Design student</strong>
                <small>Final walkthrough</small>
              </span>
            </figcaption>
            <blockquote>
              <p>“The walkthrough made it easier to explain what I built and what I’d test next.”</p>
            </blockquote>
          </figure>
        </div>
      </div>
    </div>
  </section>
  );
}
