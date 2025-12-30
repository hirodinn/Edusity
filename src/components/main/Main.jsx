import { Testimonial } from "../header/Testimonial";
import { AboutUs } from "./AboutUs";
import { Campus } from "./Campus";
import { Contact } from "./Contact";
import { HomeExplore } from "./HomeExplore";
import { Program } from "./Program";
import { ScrollReveal } from "../common/ScrollReveal";

import "./Main.css";
import { Stats } from "./Stats";

export function Main({ setPlayVideo }) {
  return (
    <main>
      <ScrollReveal animation="reveal-up">
        <HomeExplore />
      </ScrollReveal>
      <ScrollReveal animation="reveal-scale">
        <Program />
      </ScrollReveal>
      <ScrollReveal animation="reveal-up">
        <AboutUs setPlayVideo={setPlayVideo} />
      </ScrollReveal>
      <ScrollReveal animation="reveal-up">
        <Stats />
      </ScrollReveal>
      <ScrollReveal animation="reveal-scale">
        <Campus />
      </ScrollReveal>
      <ScrollReveal animation="reveal-up">
        <Testimonial />
      </ScrollReveal>
      <ScrollReveal animation="reveal-up">
        <Contact />
      </ScrollReveal>
    </main>
  );
}
