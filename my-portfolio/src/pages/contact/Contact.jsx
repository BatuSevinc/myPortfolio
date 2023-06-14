import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact text-white d-flex flex-column align-items-center justify-content-center mx-auto">
      <h1 className="text-center">Bana Her Zaman Ulaşabilirsiniz..</h1>
      <div className="phone d-flex gap-3">
        <LocalPhoneIcon/> 
       <p>+90 534 551 80 80</p>
      </div>
      <div>
        <Link to="https://www.instagram.com/batusvnc/" target="_blank">
          <InstagramIcon className="text-white" fontSize="large" />
        </Link>
        <Link to="https://twitter.com/bosverbebatu" target="_blank">
          <TwitterIcon className="text-white" fontSize="large" />
        </Link>
        <Link to="https://www.linkedin.com/in/batusevinc/" target="_blank">
          <LinkedInIcon className="text-white" fontSize="large" />
        </Link>
        <Link to="https://github.com/BatuSevinc" target="_blank">
          <GitHubIcon className="text-white" fontSize="large" />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
