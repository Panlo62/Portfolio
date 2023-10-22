import "./projectInfo.css";

export default function ProjectInfo({ curr, onClick }) {
  return (
    <div className="project-info">
      <div className="header">
        <h2>{curr.title}</h2>
        <button onClick={onClick}>X</button>
      </div>
      <div className="container">
        <div className="content">
          <a href={curr.link} target="_blank">
            <img src={curr.img} alt={curr.title} />
          </a>
          <div className="link">
            <h3>Link</h3>
            <p>
              <a href={curr.link} target="_blank">
                {curr.link}
              </a>
            </p>
          </div>
        </div>
        <div className="desc">
          <h3>Description</h3>
          <p>{curr.desc}</p>
        </div>
      </div>
    </div>
  );
}
