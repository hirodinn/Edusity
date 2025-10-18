import { useState, useEffect } from "react";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
function useScrollPosition() {
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}
export default function App() {
  return (
    <div
      className="total-container"
      onScrollCapture={() => console.log("scrolled")}
    >
      <Header width={useWindowWidth()} height={useScrollPosition()} />
      <Main />
    </div>
  );
}
