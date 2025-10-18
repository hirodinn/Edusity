import { Testimonial } from "../header/Testimonial";
import { AboutUs } from "./AboutUs";
import { Campus } from "./Campus";
import { Contact } from "./Contact";
import { HomeExplore } from "./HomeExplore";
import "./Main.css";
import { Program } from "./Program";
export function Main({ setPlayVideo }) {
  return (
    <main>
      <HomeExplore />
      <Program />
      <AboutUs setPlayVideo={setPlayVideo} />
      <Campus />
      <Testimonial />
      <Contact />
    </main>
  );
}
