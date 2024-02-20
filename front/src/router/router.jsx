import { createBrowserRouter } from "react-router-dom";

import First from "../Home/First";
const router = createBrowserRouter([
  {
    path: "/",
    element: <First />,
  },
  {
    path: "/first",
    element: <First />,
  },
  // {
  //   path: '/login',
  //   element: <Login />,
  // },
  // {
  //   path: '/signup',
  //   element: <Signup />,
  // },
  // {
  //   path: '/home',
  //   element: <Home />,
  // },
]);
export default router;
