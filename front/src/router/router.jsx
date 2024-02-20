import { createBrowserRouter } from "react-router-dom";
import First from "../Home/First";
import Login from "../Home/Login";
import Signup from "../Home/Signup";
import Layout from "../Components/Layout";

export const mainRoutes = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <First />,
      },
      {
        path: "/login",
        index: true,
        element: <Login />,
      },
      {
        path: "/signup",
        index: true,
        element: <Signup />,
      },
    ],
  },
];
const router = createBrowserRouter(mainRoutes);

export default router;
