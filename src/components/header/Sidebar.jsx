import { useState } from "react";
import "./Sidebar.css";
import { Navigators } from "./Navigators";
export function Sidebar() {
  const [hideSide, setHideSide] = useState(true);
  return (
    <>
      <button
        className="toggle-button"
        onClick={() => {
          setHideSide(!hideSide);
        }}
      >
        <img src="header-icons/toggle.png" />
      </button>
      <Navigators orientation="vertical" hide={hideSide} />
    </>
  );
}
