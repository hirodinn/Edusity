import { useState } from "react";
export function ProgramBox({ imgSrc, icon, text }) {
  const [hovered, setHovered] = useState(false);
  function hover() {
    setHovered(!hovered);
  }
  return (
    <div
      className={hovered ? "box hovered" : "box"}
      onMouseEnter={hover}
      onMouseLeave={hover}
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className="info">
        <img src={icon} />
        <p>{text}</p>
      </div>
    </div>
  );
}
