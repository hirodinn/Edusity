import "./Header.css";
import { Navigators } from "./Navigators";
import { Sidebar } from "./Sidebar";
export function Header({ width }) {
  return (
    <header id="home">
      <img src="header-icons/edusity.png" />
      {width >= 775 ? <Navigators orientation="horizontal" /> : <Sidebar />}
    </header>
  );
}
