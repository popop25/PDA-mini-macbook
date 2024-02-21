import { createBrowserRouter } from "react-router-dom";
import First from "../Home/First";
import Login from "../Home/Login";
import Signup from "../Home/Signup";
import Layout from "../Components/Layout";
import Footer from "../Components/Common/Footer";

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
      {
        path: "/footer",
        index: true,
        element: <Footer />,
      },
    ],
  },
];
const router = createBrowserRouter(mainRoutes);

export default router;
