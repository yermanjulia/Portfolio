import "./topbar.scss";
import { FontAwesomeIcon } from "@fortawesome/fontawesome-free";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            fromqatodev
          </a>
          <div className="itemContainer">
            <i class="fa-solid fa-phone">+1(619)343-3996</i>
          </div>
          <div className="itemContainer">
            <i class="fa-solid fa-square-envelope">yerman.julia@gmail.com</i>
          </div>
        </div>

        <div className="right"> </div>
      </div>
    </div>
  );
}
