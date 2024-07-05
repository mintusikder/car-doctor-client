import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About/About";
import Service from "../pages/Home/Service/Service";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import BookServices from "../pages/BookServices/BookServices";
import CheckService from "../pages/CheckOutService/CheckService";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/service",
        element: <Service></Service>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/Signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/book/:id",
        element: <BookServices></BookServices>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },

      {
        path: "/book/:id",
        element: <CheckService></CheckService>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);

export default router;
