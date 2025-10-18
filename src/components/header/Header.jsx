import "./Header.css";
import { Navigators } from "./Navigators";
import { Sidebar } from "./Sidebar";
export function Header({ width, height }) {
  return (
    <header id="home" className={height >= 120 ? "solid" : ""}>
      <img src="header-icons/edusity.png" />
      {width >= 775 ? <Navigators orientation="horizontal" /> : <Sidebar />}
    </header>
  );
}
