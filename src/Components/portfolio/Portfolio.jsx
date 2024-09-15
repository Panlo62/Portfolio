import "./portfolio.css";
import { portfolioWorks } from "../../Data";
import ProjectInfo from "../projectInfo/ProjectInfo";
import { useState, useRef, useEffect } from "react";

export default function Portfolio() {
  const [curr, setCurr] = useState();
  const projectInfoRef = useRef(null); // Ref for the ProjectInfo component

  // Effect to handle clicks outside of ProjectInfo
  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the click is outside of the ProjectInfo component
      if (projectInfoRef.current && !projectInfoRef.current.contains(event.target)) {
        setCurr(undefined); // Close ProjectInfo by resetting curr
      }
    }

    // Add event listener if a project is selected (curr is not undefined)
    if (curr) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on component unmount or when curr changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [curr]);

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <div className="container">
        <div className="left">
          {portfolioWorks.map((d) => (
            <div
              className="item"
              key={d.title}
              onClick={() => {
                setCurr(d); // Set the current project to show ProjectInfo
              }}
            >
              <img src={d.img} alt={d.title} />
              <h3>{d.title}</h3>
            </div>
          ))}
        </div>
        <div className="right">
          {curr && (
            <div ref={projectInfoRef}>
              <ProjectInfo
                curr={curr}
                onClick={() => {
                  setCurr(undefined); // Close ProjectInfo by resetting curr
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
