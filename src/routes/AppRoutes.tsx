import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

// Layouts
import AppLayout from "../layouts/AppLayout";
import AuthLayout from "../layouts/AuthLayout";
import AdminLayout from "../layouts/AdminLayout";
import Layout from "../features/restaurants/components/layout/Layout";

// Restaurant Manager Pages
import RestaurantManagerLanding from "../features/restrauntManager/LandingPage/RestaurantManagerLanding";
import RestaurantForm from "../features/restrauntManager/InfoPage/RestaurantForm";
import ReferralForm from "../features/restrauntManager/InfoPage/ReferralForm";

// Auth Pages
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";
import HomePage from "../features/auth/pages/HomePage";
import ErrorPage from "../features/auth/components/ErrorPage";

// Customer Pages
import PlaceOrderPage from "../features/customer/orderPlacement/PlaceOrderPage";
import OrderStatusPage from "../features/customer/orderStatus/OrderStatusPage";
import OrderHistoryPage from "../features/customer/orderHistory/OrderHistoryPage";

// Admin Pages
import OrderManagmentPage from "../features/admin/orders/OrderManagmentPage";
import Dashboard from "../features/admin/dashboard/Dashboard";

// Restaurant Dashboard Pages
import Home from "../features/restaurants/pages/Home";
import Menu from "../features/restaurants/pages/Menu";
import Orders from "../features/restaurants/pages/Orders";
import OrderHistory from "../features/restaurants/pages/OrderHistory";
import RestaurantInfo from "../features/restaurants/pages/RestaurantInfo";
import NotFound from "../features/restaurants/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "place-order", element: <PlaceOrderPage /> },
      { path: "place-order/order-status", element: <OrderStatusPage /> },
      { path: "order-history", element: <OrderHistoryPage /> },
      { path: "login", element: <Login /> }, // General login
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "orders", element: <OrderManagmentPage /> },
    ],
  },

  // ✅ Restaurant Manager Flow: No layout
  { path: "/restaurant-manager", element: <RestaurantManagerLanding /> },
  { path: "/restaurant-manager/register", element: <Register /> },
  { path: "/restaurant-manager/info", element: <RestaurantForm /> },
  { path: "/restaurant-manager/refer-form", element: <ReferralForm /> },
  { path: "/restaurant-manager/login", element: <Login /> }, // manager login

  // ✅ Restaurant Dashboard (after login)
  {
    path: "/restaurant",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
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

const AppRoutes = () => <RouterProvider router={router} />;

export default AppRoutes;
