import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

import User from "./pages/User";
import SignIn from "./pages/SignIno";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
   {
    path: "/login",
    element: <SignIn/>,
  },{
    path: "/connexion",
    element: <User/>,
  },
]);
