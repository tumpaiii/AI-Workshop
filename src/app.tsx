import { useEffect } from "react";
import { cn } from "@/lib/utils";
import { mountInteractions } from "./interactions";
import Navbar from "@/components/all-components/navbar";
import Hero from "@/components/all-components/hero";
import About from "@/components/all-components/about";
import Curriculum from "@/components/all-components/curriculum";
import Highlights from "@/components/all-components/highlights";
import Speakers from "@/components/all-components/speakers";
import Testimonials from "@/components/all-components/testimonials";
import Pricing from "@/components/all-components/pricing";
import Faq from "@/components/all-components/faq";
import Registration from "@/components/all-components/registration";
import Marquee from "@/components/all-components/marquee";
import Footer from "@/components/all-components/footer";

interface AppProps {
  className?: string;
}

export default function App({ className }: AppProps) {
  useEffect(mountInteractions, []);

  return (
    <>
      <Navbar />
      <Hero />
      <main className={cn(className)}>
        <About />
        <Curriculum />
        <Highlights />
        <Speakers />
        <Testimonials />
        <Pricing />
        <Faq />
        <Registration />
        <Marquee />
      </main>
      <Footer />
    </>
  );
}
