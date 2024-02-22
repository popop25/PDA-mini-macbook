import { createBrowserRouter } from "react-router-dom";
import First from "../Home/First";
import Login from "../Home/Login";
import Signup from "../Home/Signup";
import SandwichLayout from "../Components/SandwichLayout";
import DefaultLayout from "../Components/DefaultLayout";
import Main from "../Main/Main";
import Product from "../Product/Main";
import Funding from "../Funding/Main";
import WishList from "../WishList/Main";
import User from "../Components/Common/User";
import ModalComp from "../Components/Common/Modal";

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
          {
            path: "/user",
            element: <User />,
          },
          {
            path: "/modal",
            element: <ModalComp />,
          },
          {
            path: "/funding/:fundingId",
            element: <Funding />,
          },
        ],
      },
    ],
  },
];
const router = createBrowserRouter(mainRoutes);

export default router;
