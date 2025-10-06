import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayouts from "../LayOuts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path:"/",
    element: <MainLayouts></MainLayouts>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
   {
    index:true,
    element: <Home></Home>
  },
  {
    path:"/products",
    Component: Products,
  },
    ]
  },
  
  
])

export default router