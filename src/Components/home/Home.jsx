import "./home.css";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="left">
        <div className="imgContainer">
          <img src="./assets/myself.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Pankaj Tyagi</h1>
          <h3>
            <Typewriter
              options={{
                strings: [
                  "Web Developer",
                  "React Developer",
                  "Coding Enthusiast",
                ],
                autoStart: true,
                delay: 40,
                loop: true,
              }}
            />
          </h3>
        </div>
        <a href="#portfolio">
          <img src="./assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
