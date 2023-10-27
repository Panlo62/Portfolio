import "./menu.css";

export default function Menu({ menuOpen, setMenuOpen }) {
  const setMenuOpenFalse = () => setMenuOpen(false);
  const items = ["Home", "Intro", "Projects", "Achievements", "Contact"];

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        {items.map((item) => {
          {
            return (
              <li onClick={setMenuOpenFalse}>
                <a href={"#" + item.toLowerCase()}>{item}</a>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
