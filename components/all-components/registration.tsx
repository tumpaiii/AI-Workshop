import { cn } from "@/lib/utils";

interface RegistrationProps {
  className?: string;
}

export default function Registration({ className }: RegistrationProps) {
  return (
    <section className={cn("launch-cta", className)} id="register" aria-labelledby="register-title">
    <div className="about launch-cta-card">
      <p className="eyebrow">Registration</p>
      <h2 id="register-title">Build your first<br />AI product prototype</h2>
      <p>Bring a product idea or a problem you’d like to solve. Work through the brief, prototype the experience, and test it with someone else.</p>
      <button className="launch-button" id="register-open" type="button">Register for the Workshop</button>
    </div>
    <dialog className="launch-dialog" id="register-dialog" aria-labelledby="register-dialog-title">
      <form method="dialog">
        <h3 id="register-dialog-title">Workshop registration</h3>
        <p>Registration is coming soon. Event details and the sign-up link will appear here when available.</p>
        <button className="launch-button">Close</button>
      </form>
    </dialog>
  </section>
  );
}
