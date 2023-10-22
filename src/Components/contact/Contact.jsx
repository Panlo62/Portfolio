import { MdEmail } from "react-icons/md";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import "./contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact" id="contact">
        <div className="left">
          <img src="assets/shake.svg" alt="" />
        </div>
        <div className="right">
          <h1>Contact Me</h1>
          <p>
            For any queries, suggestions, complaints or collaborations, contact
            me through one of the after mentioned methods. I would be happy to
            help and will try to reply as soon as possible.
          </p>
          <div className="itemContainer">
            <AiOutlineWhatsApp className="icon" />
            <a href="https://wa.me/918368590184" target="_blank">
              Whatsapp me: <span>https://wa.me/918368590184</span>
            </a>
          </div>
          <div className="itemContainer">
            <MdEmail className="icon" />
            <a href="mailto: pankaj6255dav@gmail.com">
              Mail me: <span>pankaj6255dav@gmail.com</span>
            </a>
          </div>
          <div className="itemContainer">
            <AiFillGithub className="icon" />
            <a href="https://github.com/Panlo62" target="_blank">
              Connect through Github: <span>https://github.com/Panlo62</span>
            </a>
          </div>
          <div className="itemContainer">
            <AiFillLinkedin className="icon" />
            <a
              href="https://www.linkedin.com/in/pankaj-tyagi-jr"
              target="_blank"
            >
              Connect through LinkedIn:&nbsp;
              <span>https://www.linkedin.com/in/pankaj-tyagi-jr</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
