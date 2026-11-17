import { cn } from "@/lib/utils";
import speaker_interactionImage from "@/assets/images/speaker-interaction.jpg";
import speaker_positioningImage from "@/assets/images/speaker-positioning.jpg";
import speaker_prototypingImage from "@/assets/images/speaker-prototyping.jpg";
import speaker_researchImage from "@/assets/images/speaker-research.jpg";

interface SpeakersProps {
  className?: string;
}

export default function Speakers({ className }: SpeakersProps) {
  return (
    <section className={cn("about speakers", className)} id="speakers" aria-labelledby="speakers-title">
    <header className="heading">
      <div>
        <p className="eyebrow">Speakers</p>
        <h2 id="speakers-title">Meet the <span>Minds</span></h2>
        <p className="speakers-intro">Meet the people behind each part of the workshop. Speaker profiles are illustrative.</p>
      </div>
    </header>
    <div className="speaker-grid">
      <article className="speaker">
        <div className="speaker-portrait">
          <img src={speaker_positioningImage} alt="" loading="lazy" />
        </div>
        <div className="speaker-info">
          <small>Workshop speaker</small>
          <div>
            <h3>Daniel Park</h3>
            <p>Product Strategy<br />Fieldwork Studio</p>
          </div>
        </div>
      </article>
      <article className="speaker">
        <div className="speaker-portrait">
          <img src={speaker_prototypingImage} alt="" loading="lazy" />
        </div>
        <div className="speaker-info">
          <small>Workshop speaker</small>
          <div>
            <h3>Alex Morgan</h3>
            <p>AI Prototyping<br />Circuit Works</p>
          </div>
        </div>
      </article>
      <article className="speaker">
        <div className="speaker-portrait">
          <img src={speaker_researchImage} alt="" loading="lazy" />
        </div>
        <div className="speaker-info">
          <small>Workshop speaker</small>
          <div>
            <h3>Maya Bennett</h3>
            <p>User Research<br />Signal Research</p>
          </div>
        </div>
      </article>
      <article className="speaker">
        <div className="speaker-portrait">
          <img src={speaker_interactionImage} alt="" loading="lazy" />
        </div>
        <div className="speaker-info">
          <small>Workshop speaker</small>
          <div>
            <h3>Sofia Ellis</h3>
            <p>Interaction Design<br />Shape Studio</p>
          </div>
        </div>
      </article>
    </div>
  </section>
  );
}
