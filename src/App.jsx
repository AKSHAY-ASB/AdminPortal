import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Suspense, lazy } from "react";
import RootLayout from "./components/Layouts/RootLayout";
const Home = lazy(() => import("./pages/Home"));
const ManagedUser = lazy(() => import("./pages/ManagedUser"));
const Analytics = lazy(() => import("./pages/Analytics"));
const RecentActivity = lazy(() => import("./pages/RecentActivity"));
const Support = lazy(() => import("./pages/Support"));
const Login = lazy(() => import("./pages/Login"));
const Payments = lazy(() => import("./pages/Payments"));
const Module = lazy(() => import("./pages/Module/Module"));
const Login_Registration = lazy(() => import("./pages/Login_Registration"));
const Maker = lazy(() => import("./pages/Maker"));
const Checker = lazy(() => import("./pages/Checker"));
const Admin = lazy(() => import("./pages/Admin"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "managedUser",
          element: <ManagedUser />,
        },
        {
          path: "analytics",
          element: <Analytics />,
        },
        {
          path: "recentActivity",
          element: <RecentActivity />,
        },
        {
          path: "payments",
          element: <Payments />,
        },
        {
          path: "support",
          element: <Support />,
        },
        {
          path: "admin",
          element: <Admin />,
        },
        {
          path: "module",
          element: <Module />,
        },
        {
          path: "login_reg",
          element: <Login_Registration />,
        },
        {
          path: "maker",
          element: <Maker />,
        },
        {
          path: "checker",
          element: <Checker />,
        },
      ],
    },
  ]);

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
