import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayouts from "../LayOuts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import WishList from "../Pages/WishList";

const router = createBrowserRouter([
  {
    path:"/",
    element: <MainLayouts></MainLayouts>,
    errorElement:<ErrorPage></ErrorPage>,
    hydrateFallbackElement:<p>Loading...</p>,
    children:[
   {
    index:true,
    element: <Home></Home>,
    loader: ()=> fetch("./furnitureData.json")
  },
  {
    path:"/products",
    Component: Products,
  },
  {
    path:"/wishlist",
    Component: WishList,
  },
    ]
  },
  
  
])

export default router