import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../layouts/AppLayout";
import OrderPlacementPage from "../features/customer/orderPlacement/OrderPlacementPage";
import OrderStatusPage from "../features/customer/orderStatus/OrderStatusPage";
import OrderHistoryPage from "../features/customer/orderHistory/OrderHistoryPage";
import OrderManagmentPage from "../features/admin/orders/OrderManagmentPage";
import ErrorPage from "../features/auth/components/ErrorPage";
import Login from "../features/auth/pages/Login";
import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../features/admin/dashboard/Dashboard";
import Register from "../features/auth/pages/Register";
import HomePage from "../features/auth/pages/HomePage";
import RestaurantManagerLanding from "../features/restrauntManager/LandingPage/RestaurantManagerLanding";
import RestaurantInfoForm from "../features/restrauntManager/InfoPage/RestaurantInfoForm";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/place-order",
          element: <OrderPlacementPage />,
        },
        {
          path: "/place-order/order-status",
          element: <OrderStatusPage />,
        },
        {
          path: "/order-history",
          element: <OrderHistoryPage />,
        },
        {
          path: "/admin/orders",
          element: <OrderManagmentPage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { path: "dashboard", element: <Dashboard /> },
        // { path: 'orders', element: <OrdersPage /> },
        // { path: 'users', element: <UsersPage /> },
        // { path: 'menu', element: <MenuPage /> },
      ],
    },
    {
      path: "/restaurant-manager",
      element: <RestaurantManagerLanding />,
    },
    {
      path: "restaurant-manager/info",
      element: <RestaurantInfoForm />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
