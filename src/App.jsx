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
export default function App() {
  return (
    <div className="total-container">
      <Header width={useWindowWidth()} />
      <Main />
    </div>
  );
}
