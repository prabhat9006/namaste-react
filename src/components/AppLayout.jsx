import Projects from "../Project/Projects";
import Body from "./Body";
import BodyFood from "./BodyFood";
import Header from "./Header";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;
