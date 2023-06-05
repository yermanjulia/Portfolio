import { useEffect, useRef } from "react";
import "./intro.scss";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,

      strings: ["Frontend Web Developer", "QA Engineer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/logo.jpeg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h3>Hey, I Am</h3>
          <h1>JULIA</h1>
          <h4>
            I'm a <span ref={textRef}></span>
          </h4>
        </div>
        <a href="#portfolio">
          <img src="assets/down-arrow.png" alt="" />
        </a>
      </div>
    </div>
  );
}
