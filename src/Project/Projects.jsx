import { Link, Outlet } from "react-router-dom";
const Projects = () => {
  return (
    <div className="project">
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects/taskmate">TaskMate</Link>
          </li>
          <li>
            <Link to="/projects/cinemate">Cinemate</Link>
          </li>
          <li>
            <Link to="/projects/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/projects/counter">Counter</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};
export default Projects;
