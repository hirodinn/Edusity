import { useState, useEffect } from "react";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";

export default function App() {
  const [playVideo, setPlayVideo] = useState(false);
  let clickedInside = false;

  useEffect(() => {
    if (playVideo) {
      const scrollY = window.scrollY;

      const preventScroll = (e) => {
        window.scrollTo(0, scrollY);
        e.preventDefault();
        e.stopPropagation();
        return false;
      };

      window.addEventListener("scroll", preventScroll);
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });

      return () => {
        window.removeEventListener("scroll", preventScroll);
        window.removeEventListener("wheel", preventScroll);
        window.removeEventListener("touchmove", preventScroll);
      };
    }
  }, [playVideo]);

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

  return (
    <div className={`total-container ${playVideo && "freeze"}`}>
      {playVideo && (
        <div
          className="video-play"
          onClick={() => {
            setTimeout(() => {
              if (!clickedInside) {
                setPlayVideo(false);
              }
              clickedInside = false;
            }, 100);
          }}
        >
          <video
            src="/about-us/college.mp4"
            controls
            autoPlay
            onClick={() => {
              clickedInside = true;
            }}
          />
        </div>
      )}
      <Header width={useWindowWidth()} height={useScrollPosition()} />
      <Main setPlayVideo={setPlayVideo} />
    </div>
  );
}
