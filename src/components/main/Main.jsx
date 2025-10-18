import { Testimonial } from "../header/Testimonial";
import { AboutUs } from "./AboutUs";
import { Campus } from "./Campus";
import { Contact } from "./Contact";
import { HomeExplore } from "./HomeExplore";
import "./Main.css";
import { Program } from "./Program";
export function Main() {
  return (
    <main>
      <HomeExplore />
      <Program />
      <AboutUs />
      <Campus />
      <Testimonial />
      <Contact />
    </main>
  );
}
