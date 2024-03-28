import { HEADER_LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setButtonName] = useState("Login");
  const handleBtn = () => {
    const btn = btnName == "Login" ? "Logout" : "Login";
    setButtonName(btn);
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={HEADER_LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>{" "}
          </li>
          <button type="button" onClick={handleBtn}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
