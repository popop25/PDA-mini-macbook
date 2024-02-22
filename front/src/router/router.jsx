import { createBrowserRouter } from "react-router-dom";
import First from "../Home/First";
import Login from "../Home/Login";
import Signup from "../Home/Signup";
import SandwichLayout from "../Components/SandwichLayout";
import DefaultLayout from "../Components/DefaultLayout";
import Main from "../Main/Main";
import Product from "../Product/Main";
import WishList from "../WishList/Main";

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
          {
            path: "/product",
            element: <Product />,
          },
          {
            path: "/wish",
            element: <WishList />,
          },
        ],
      },
    ],
  },
];
const router = createBrowserRouter(mainRoutes);

export default router;
