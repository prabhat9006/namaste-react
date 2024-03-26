import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import Error from "./components/Error";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="App">
    <RouterProvider router={appRouter} />
  </div>
);
