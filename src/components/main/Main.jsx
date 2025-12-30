import { Stats } from "./Stats";
import { FAQ } from "./FAQ";
import { Faculty } from "./Faculty";
import { News } from "./News";
import { Newsletter } from "./Newsletter";
import { Testimonial } from "../header/Testimonial";
import { AboutUs } from "./AboutUs";
import { Campus } from "./Campus";
import { Contact } from "./Contact";
import { HomeExplore } from "./HomeExplore";
import { Program } from "./Program";
import { ScrollReveal } from "../common/ScrollReveal";

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
        <Faculty />
      </ScrollReveal>
      <ScrollReveal animation="reveal-up">
        <FAQ />
      </ScrollReveal>
      <ScrollReveal animation="reveal-scale">
        <News />
      </ScrollReveal>
      <ScrollReveal animation="reveal-up">
        <Testimonial />
      </ScrollReveal>
      <ScrollReveal animation="reveal-up">
        <Newsletter />
      </ScrollReveal>
      <ScrollReveal animation="reveal-up">
        <Contact />
      </ScrollReveal>
    </main>
  );
}
