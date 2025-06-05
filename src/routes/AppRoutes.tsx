import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
  } from "react-router-dom";
  
  import Home from "../features/restaurants/pages/Home";
  import Menu from "../features/restaurants/pages/Menu";
  import Orders from "../features/restaurants/pages/Orders";
  import OrderHistory from "../features/restaurants/pages/OrderHistory";
  import RestaurantInfo from "../features/restaurants/pages/RestaurantInfo";
  import NotFound from "../features/restaurants/pages/NotFound";
  import Layout from "../features/restaurants/components/layout/Layout";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout><Outlet /></Layout>,
      children: [
        { index: true, element: <Home /> },
        { path: "menu", element: <Menu /> },
        { path: "orders", element: <Orders /> },
        { path: "order-history", element: <OrderHistory /> },
        { path: "restaurant-info", element: <RestaurantInfo /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  
  const App = () => (
    <div className="flex flex-col h-screen bg-white text-gray-800 overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
  
  export default App;
  