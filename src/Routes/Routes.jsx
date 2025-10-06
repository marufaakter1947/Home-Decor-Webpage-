import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import MainLayouts from "../LayOuts/MainLayouts";
import ErrorPage from "../Pages/ErrorPage";
import WishList from "../Pages/WishList";
import ProductDetails from "../Pages/ProductDetails";

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
  
  },
  {
    path:"/products",
    Component: Products,
  },
  {
    path:"/wishlist",
    Component: WishList,
  },
  {
    path:"/product/:id",
    Component: ProductDetails,
  },
    ]
  },
  
  
])

export default router