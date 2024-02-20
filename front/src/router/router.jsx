import { createBrowserRouter } from "react-router-dom";
import First from "../Home/First";
import Login from "../Home/Login";
import Signup from "../Home/Signup";

export const mainRoutes = [
  {
    path: "/",
    element: <First />,
  },
  {
    path: "/first",
    element: <First />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
];
const router = createBrowserRouter(mainRoutes);

export default router;
