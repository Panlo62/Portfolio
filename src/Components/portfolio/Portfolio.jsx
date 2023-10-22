import "./portfolio.css";
import { portfolioWorks } from "../../Data";
import ProjectInfo from "../projectInfo/ProjectInfo";
import { useState } from "react";

export default function Portfolio() {
  const [curr, setCurr] = useState();

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="container">
        <div className="left">
          {portfolioWorks.map((d) => (
            <div
              className="item"
              onClick={() => {
                setCurr(d);
              }}
            >
              <img src={d.img} alt={d.title} />
              <h3>{d.title}</h3>
            </div>
          ))}
        </div>
        <div className="right">
          {curr != undefined && (
            <ProjectInfo
              curr={curr}
              onClick={() => {
                setCurr();
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
