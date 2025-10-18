import "./Program.css";
import { ProgramBox } from "./ProgramBox";
export function Program() {
  return (
    <section className="program" id="program">
      <h4 style={{ color: "#212ea0", margin: "60px 0 15px 0" }}>OUR PROGRAM</h4>
      <h1>What We Offer</h1>
      <div className="box-container">
        <ProgramBox
          imgSrc={"/program/image-1.png"}
          text={"Graduation Degree"}
          icon={"/program/icon-1.png"}
        />
        <ProgramBox
          imgSrc={"/program/image-2.png"}
          text={"Masters Degree"}
          icon={"/program/icon-2.png"}
        />
        <ProgramBox
          imgSrc={"/program/image-3.png"}
          text={"Post Graduation"}
          icon={"/program/icon-3.png"}
        />
      </div>
    </section>
  );
}
