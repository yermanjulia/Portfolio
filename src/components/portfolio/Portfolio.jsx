import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";

export default function Portfolio() {
  const [selected, setSelected] = useState("project1");
  const list = [
    {
      id: "project1",
      title: "Project 1",
    },
    {
      id: "project2",
      title: "Project 2",
    },
    { id: "project3", title: "Project 3" },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>PORTFOLIO</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>

      <div className="container">
        <div className="item">
          <img src="./assets/mockup.png" alt="" />
          <h3>PlayStation</h3>
        </div>
        <div className="item">
          <img src="./assets/mockup.png" alt="" />
          <h3>Nucamp</h3>
        </div>
        <div className="item">
          <img src="./assets/mockup.png" alt="" />
          <h3>WeatherApp</h3>
        </div>
      </div>
    </div>
  );
}
