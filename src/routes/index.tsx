import { createBrowserRouter } from "react-router-dom";
import { Documentation } from "../pages";
import App from "../App";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/documentation",
      element: <Documentation />,
    },
  ]);
  