import { AboutUs } from "./AboutUs";
import { HomeExplore } from "./HomeExplore";
import "./Main.css";
import { Program } from "./Program";
export function Main() {
  return (
    <main>
      <HomeExplore />
      <Program />
      <AboutUs />
    </main>
  );
}
