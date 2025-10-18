import { AboutUs } from "./AboutUs";
import { Campus } from "./Campus";
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
    </main>
  );
}
