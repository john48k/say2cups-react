import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Homepage from "./components/Homepage";
import Contacts from "./components/contactPage";
import "./Css/About.css";
import "./Css/text_Flicker.css";
import "./Css/beatsPage.css";
import "./Css/contactPage.css";
import "./Css/galleryPage.css";
import "./Css/kitsPage.css";
import "./Css/Navbar.css";
import "./Css/StartupPage.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
