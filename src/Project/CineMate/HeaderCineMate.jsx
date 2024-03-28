import { CINEMATE_LOGO_URL } from "../../utils/constants";
import { Link } from "react-router-dom";
const HeaderCineMate = () => {
  return (
    <div className="headercinemate">
      <div className="logo-container">
        <Link to="/projects/cinemate">
          <img className="logo" src={CINEMATE_LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderCineMate;
