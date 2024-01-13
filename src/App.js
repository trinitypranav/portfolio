import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import { Provider } from "react-redux";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Error from "./components/Error";
import Certifications from "./components/Certifications";
// import Error from "./components/Error";
// import RestaurantDetails from "./components/RestaurantDetails";
// import Shimmer from "./components/Shimmer";
// import store from "./store";
// import Cart from "./components/Cart";

// Lazy Loading, Code Splitting, Chunking of About and Contact
// const About = lazy(() => import("./components/About")); // returning import() is important here
// const Contact = lazy(() => import("./components/Contact"));

const App = () => {
  return (
    <div className="box-content m-0 p-0">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/work",
          element: <Work />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/education",
          element: <Education />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/certifications",
          element: <Certifications />,
        },
      ],
    },
  ]
  // { basename: "/learning-react" }
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={appRouter} />);
