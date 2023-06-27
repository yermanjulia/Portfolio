import "./topbar.scss";
import {} from "@material-ui/core";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <div className="itemContainer">
            <a href="https://github.com/yermanjulia" target="_blank">
              <GitHubIcon className="icon" />
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/yermanjulia/" target="_blank">
              <LinkedInIcon className="icon" />
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://www.instagram.com/fromqatodev/" target="_blank">
              <InstagramIcon className="icon" />
            </a>
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
