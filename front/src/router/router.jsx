import { createBrowserRouter } from "react-router-dom";
import First from "../Home/First";
import Login from "../Home/Login";
import Signup from "../Home/Signup";
import SandwichLayout from "../Components/SandwichLayout";
import DefaultLayout from "../Components/DefaultLayout";
import ComponentFooter from "../Components/Common/ComponentFooter";
import Main from "../Main/Main";
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
        path: "",
        element: <SandwichLayout />,
        children: [
          {
            path: "/main",
            element: <Main />,
          },
        ],
      },
    ],
  },
];
const router = createBrowserRouter(mainRoutes);

export default router;
