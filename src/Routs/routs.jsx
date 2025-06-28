import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error> ,
    children: [
        {
            path: '/',
            Component: Home
        }
    ]
  },
]);