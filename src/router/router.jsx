import { createBrowserRouter } from "react-router";
import App from "../App";
import HompePage from "../pages/HomePage";
import ShoePage from "../pages/ShoePage";
import LeggingsPage from "../pages/LeggingsPage";
import GymPage from "../pages/GymPage";
import SportsPage from "../pages/SportsPage";
import DetailsPage from "../pages/DetailsPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import ProtectedRoute from "../features/ProtectRoute";
import AdminPanel from "../Admin";
import NotFound from "../features/NotFound";
import AdminLogin from "../features/AdminLogin";
import DashBoard from "../pages/Dashboard";
import AdminProducts from "../pages/AdminProducts";
import AdminOrders from "../pages/AdminOrders";
import AdminReviews from "../pages/Reviews";
import AddProduct from "../pages/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HompePage />,
      },
      {
        path: "/shoes",
        element: <ShoePage />,
      },
      {
        path: "/leggings",
        element: <LeggingsPage />,
      },
      {
        path: "/gym",
        element: <GymPage />,
      },
      {
        path: "/sports",
        element: <SportsPage />,
      },
      {
        path: "/details/:id",
        element: <DetailsPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
    ],
  },

  // Admin Layout
  {
    path: "login",
    element: <AdminLogin />,
  },

  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminPanel />
      </ProtectedRoute>
    ),
    children: [
      { path: "/admin", element: <DashBoard /> },
      { path: "/admin/products", element: <AdminProducts /> },
      { path: "/admin/orders", element: <AdminOrders /> },
      { path: "/admin/reviews", element: <AdminReviews /> },
      { path: "/admin/add", element: <AddProduct /> },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
