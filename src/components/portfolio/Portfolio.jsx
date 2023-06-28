import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  project1Portfolio,
  project2Portfolio,
  project3Portfolio,
} from "../../data.js";

export default function Portfolio() {
  const [selected, setSelected] = useState("project1");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "project1",
      title: `${project1Portfolio[0].title}`,
    },
    {
      id: "project2",
      title: `${project2Portfolio[0].title}`,
    },
    { id: "project3", title: `${project3Portfolio[0].title}` },
  ];
  useEffect(() => {
    switch (selected) {
      case "project1":
        setData(project1Portfolio);
        break;
      case "project2":
        setData(project2Portfolio);
        break;
      case "project3":
        setData(project3Portfolio);
        break;
      default:
        setData(project1Portfolio);
    }
  }, [selected]);
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
        {data.map((d) => (
          <a href={d.link} target="_blank" rel="noopener noreferrer" key={d.id}>
            <div className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
