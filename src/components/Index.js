import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Product from "./Product";
const Index = () => {
  const AppLayout = () => {
    return (
      <div className="app container h-screen w-full">
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
          path: "/Product",
          element: <Product />,
        },
      ],
      errorElement: "",
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Index;
