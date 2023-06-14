import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/contact.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <h1>ABOUT </h1>
        <div className="wrapper">
          <p>
            I'm a Frontend Developer & QA Engineer with years of experience in
            tech. Specializing in frontend development, I use HTML5, CSS,
            JavaScript, Bootstrap, React, and React Native to create responsive
            web and mobile applications.
          </p>
          <br />
          <p>
            As a strong proponent for women in tech, I actively support
            initiatives empowering women in STEM fields and enjoy fostering a
            more diverse, inclusive tech industry. I'm eager to explore new
            technologies, continue learning, and collaborate to create solutions
            that make a positive impact.
          </p>
        </div>
      </div>
    </div>
  );
}
