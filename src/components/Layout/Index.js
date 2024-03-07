import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "../common/Footer";
import Header from "../common/Header";
import Home from "../HomePage/Home";
import Cart from "../Cart/Cart";
import ErrorElement from "../common/ErrorElement";

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
          path: "cart",
          element: <Cart />,
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
