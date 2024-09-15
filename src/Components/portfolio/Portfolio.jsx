import "./portfolio.css";
import { portfolioWorks } from "../../Data";
import { useState, useEffect, useRef } from "react";
import ProjectInfo from "../projectInfo/ProjectInfo";

export default function Portfolio() {
  const [curr, setCurr] = useState();
  const [isMobile, setIsMobile] = useState(false);
  const projectInfoRef = useRef(null);

  // Check if the device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if screen width is 768px or less
    };

    // Run on initial render
    handleResize();

    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close the ProjectInfo if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (projectInfoRef.current && !projectInfoRef.current.contains(event.target)) {
        setCurr(undefined); // Close the ProjectInfo by resetting curr
      }
    }

    // Only add the event listener when a project is open and we're on desktop/tablet
    if (curr && !isMobile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on component unmount or when curr changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [curr, isMobile]);

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
                if (isMobile) {
                  // On mobile, open the project link directly
                  window.open(d.link, "_blank"); // Open link in a new tab
                } else {
                  // On desktop/tablet, show ProjectInfo
                  setCurr(d);
                }
              }}
            >
              <img src={d.img} alt={d.title} />
              <h3>{d.title}</h3>
            </div>
          ))}
        </div>
        <div className="right">
          {!isMobile && curr && (
            <div ref={projectInfoRef}>
              <ProjectInfo
                curr={curr}
                onClick={() => {
                  setCurr(undefined); // Close the ProjectInfo
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
