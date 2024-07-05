import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About/About";
import Service from "../pages/Home/Service/Service";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";

import BookServices from "../pages/BookServices/BookServices";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children :[
        {
            path : "/",
            element: <Home></Home>
        },
        {
            path : "/about",
            element: <About></About>
        },
        {
            path : "/service",
            element: <Service></Service>
        },
        {
            path : "/login",
            element: <Login></Login>
        },
        {
            path : "/Signup",
            element: <SignUp></SignUp>
        },
        {
            path: "/book/:id",
            element:<BookServices></BookServices>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
            path : "/checkout/:id",
            element: <CheckOut></CheckOut>,
            loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    },
  ]);

  export default router