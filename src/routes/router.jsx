import { createBrowserRouter } from "react-router-dom";

import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Form from "../pages/Form";


export const router = createBrowserRouter([

  {
    path: "*",
    element: <NotFound />,
  },
    {
      path: "/",
      element: <Home/>,
      errorElement: <NotFound/>,
    },
    {
      path: "/form",
      element: <Form/>,
      errorElement: <NotFound/>,
    },
  ]);