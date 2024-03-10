import { CartProvider } from "../../utils/CartContext";
import AllProduct from "../AppProductPage/AllProduct";
import ProductDetail from "../AppProductPage/ProductDetail";
import Cart from "../Cart/Cart";
import Home from "../HomePage/Home";
import Login from "../User/Login";
import Signup from "../User/Signup";
import ErrorElement from "../common/ErrorElement";
import Footer from "../common/Footer";
import Header from "../common/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Index = () => {
  const AppLayout = () => {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Login",
          element: <Login />,
        },
        {
          path: "/Signup",
          element: <Signup />,
        },
        {
          path: "/cart",
          element: (
            <CartProvider>
              <Cart />
            </CartProvider>
          ),
        },
        {
          path: "/AllProduct",
          element: <AllProduct />,
        },
        {
          path: "/ProductDetail",
          element: <ProductDetail />,
        },
      ],
      errorElement: <ErrorElement />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Index;
