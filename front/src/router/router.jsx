import { createBrowserRouter } from "react-router-dom";
import First from "../Home/First";
import Login from "../Home/Login";
import Signup from "../Home/Signup";
import SandwichLayout from "../Components/SandwichLayout";
import DefaultLayout from "../Components/DefaultLayout";
import ComponentFooter from "../Components/Common/ComponentFooter";import User from "../Components/Common/User";

export const mainRoutes = [
  {
    path: "",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
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
      {
        path: "/footer",
        index: true,
        element: <ComponentFooter />,
      },
      {
        path: "",
        element: <SandwichLayout />,
        children: [
          {
            path: "/user",
            element: <User />
          }
        ],
      },
    ],
  },
];
const router = createBrowserRouter(mainRoutes);

export default router;
