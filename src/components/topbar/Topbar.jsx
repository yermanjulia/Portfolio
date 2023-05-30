import "./topbar.scss";
import {} from "@material-ui/core";
// import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
// import ThreeDRotation from "@mui/icons-material/ThreeDRotation";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            fromqatodev
          </a>
          <div className="itemContainer">
            <a href="https://github.com/yermanjulia">
              <GitHubIcon />
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/yermanjulia/">
              <LinkedInIcon />
            </a>
          </div>
          <div className="itemContainer">
            <a href="https://www.instagram.com/fromqatodev/">
              <InstagramIcon />
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
