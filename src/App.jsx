import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Projects from "./Project/Projects";
import TaskMate from "./Project/TaskMate/TaskMate";
import CineMate from "./Project/CineMate/CineMate";
import Calculator from "./Project/Calculator/Calculator";
import Counter from "./Project/Counter/Counter";
import ProgressBar from "./Project/ProgressBar/ProgressBar";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/projects",
    element: <Projects />,
    children: [
      {
        path: "/projects/taskmate",
        element: <TaskMate />,
      },
      {
        path: "/projects/cinemate",
        element: <CineMate />,
      },
      {
        path: "/projects/calculator",
        element: <Calculator />,
      },
      {
        path: "/projects/counter",
        element: <Counter />,
      },
      {
        path: "/projects/progressbar",
        element: <ProgressBar />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="App">
    <RouterProvider router={appRouter} />
  </div>
);
