import "./intro.scss";

export default function Intro() {
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
          <h4>Projects | Resume | Blog</h4>
        </div>
      </div>
    </div>
  );
}
