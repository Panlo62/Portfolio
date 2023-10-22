import "./topbar.css";
import { MdEmail } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillCopy } from "react-icons/ai";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#home" className="logo">
            Pankaj Tyagi
          </a>
          <div className="itemContainer">
            <BsFillPersonFill className="icon" />
            <span>+91 8368590184</span>
          </div>
          <div className="itemContainer">
            <MdEmail className="icon" />
            <span>pankaj6255dav@gmail.com</span>
          </div>
          <div className="itemContainer">
            <AiFillCopy className="icon" />
            <span>
              <a href="./assets/Resume_Pankaj_Tyagi.pdf" target="_blank">
                My Resume
              </a>
            </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
