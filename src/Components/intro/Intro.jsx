import "./intro.css";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <h1>About Me</h1>
        <p>
          I'm Pankaj Tyagi, a driven Computer Science graduate with a relentless
          passion for solving complex problems and creating innovative software
          solutions. With a strong foundation in programming languages,
          algorithms, and data structures, coupled with real-world experience in
          software development, I'm dedicated to pushing the boundaries of what
          technology can achieve.
          <br />
          <br />
          My journey as a full-stack developer has equipped me with a diverse
          skill set, from web development to web scraping, enabling me to bring
          ideas to life and streamline processes. I believe in the power of
          continuous learning and thrive in collaborative, dynamic teams that
          encourage growth and innovation.
          <br />
          <br />
          But I'm more than just a coder. I've honed my soft skills in
          leadership, communication, problem-solving, and observation. My active
          involvement in clubs and competitions, coupled with a track record of
          achievements, reflects my commitment to excellence and making a
          positive impact.
          <br />
          <br />
          With a bachelor's degree in Computer Science and a strong academic
          record, I'm well-prepared to tackle the challenges of the digital age.
          Whether it's crafting elegant code, organizing events, or
          participating in global competitions, I'm always eager to take on the
          next exciting project.
        </p>
      </div>
      <div className="right">
        <div className="container">
          <a href="./assets/Resume_Pankaj_Tyagi.pdf" target="_blank">
            <img src="./assets/resume_img.png" alt="My resume" />
          </a>
          <h2>Resume</h2>
        </div>
      </div>
    </div>
  );
}
