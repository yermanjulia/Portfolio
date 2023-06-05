import "./portfolio.scss";

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        <li className="active">Project 1</li>
        <li>Project 2</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="assets/PlayStation-logo.png" alt=""></img>
          <h3> PlayStation Project</h3>
        </div>
        <div className="item">
          <img src="assets/logo_nucamp.png" alt=""></img>
          <h3> Nucamp Project</h3>
        </div>
      </div>
    </div>
  );
}
