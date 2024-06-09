import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Suspense, lazy, useEffect } from "react";
import RootLayout from "./components/Layouts/RootLayout";
import AllModules from "./pages/AllModules";
import AllReports from "./pages/AllReports/index.jsx";
import AllRequests from "./pages/AllRequests/index.jsx";
import AssignedModules from "./pages/AssignedModules/AssignedModules.jsx";
import AddModules from "./pages/Module/AddModules.jsx";
import ProductsFeatures from "./pages/ProductsFeatures/index.jsx";
import HomeLoan from "./pages/ProductsFeatures/Loans/HomeLoan/index.jsx";
import Reports from "./pages/Reports/Reports.jsx";
import PersonalLoan from "./pages/ProductsFeatures/Loans/PersonalLoan/PersonalLoan.jsx";
import CarLoan from "./pages/ProductsFeatures/Loans/CarLoan/CarLoan.jsx";
import TractorLoan from "./pages/ProductsFeatures/Loans/TractorLoan/TractorLoan.jsx";
import UtilityVehicleLoan from "./pages/ProductsFeatures/Loans/UtilityVehicleLoan/UtilityVehicleLoan.jsx";
import CommercialVehicleLoan from "./pages/ProductsFeatures/Loans/CommercialVehicleLoan/CommercialVehicleLoan.jsx";
import UsedCarsLoan from "./pages/ProductsFeatures/Loans/UsedCarsLoan/UsedCarsLoan.jsx";
import ThreeWheelerLoan from "./pages/ProductsFeatures/Loans/ThreeWheelerLoan/ThreeWheelerLoan.jsx";
import FixedDeposit from "./pages/ProductsFeatures/Investment/FixedDeposit/FixedDeposit.jsx";
import MutualFunds from "./pages/ProductsFeatures/Investment/MutualFunds/MutualFunds.jsx";
import MotorInsurance from "./pages/ProductsFeatures/Insurance/MotorInsurance/MotorInsurance.jsx";
import LeadGeneration from "./pages/LeadGeneration/index.jsx";
import HealthInsurance from "./pages/ProductsFeatures/Insurance/HealthInsurance/HealthInsurance.jsx";
import LifeInsurance from "./pages/ProductsFeatures/Insurance/LifeInsurance/LifeInsurance.jsx";
import Home_Loan from "./pages/ProductsFeatures/Loans/HomeLoan/Home_Loan.jsx";
import AddNewUser from "./pages/Users/AddUsers.jsx";
import RequestModule from "./pages/RequestModule/index.jsx";
import RaisedRequestTable from "./components/RaisedRequestTable/index.jsx";
import Foreclosure from "./pages/Foreclosure/index.jsx";
import generateToken from "./api/tokenGenerator.js";
import applyTokenInterceptor from "./api/axiosInterceptor.js";
// import router from "./routes.jsx";

const Home = lazy(() => import("./pages/Home"));
const ManagedUser = lazy(() => import("./pages/ManagedUser"));
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
  useEffect(() => {
    const generateTokens = async () => {
      try {
        // Generate backend token
        const backendToken = await generateToken(
          import.meta.env.VITE_BACKEND_CLIENT_ID,
          import.meta.env.VITE_BACKEND_CLIENT_SECRETE,
          import.meta.env.VITE_BACKEND_TOKEN_URL,
          "backendToken"
        );

        // Generate CMS token
        const cmsToken = await generateToken(
          import.meta.env.env.VITE_CMS_CLIENT_ID,
          import.meta.env.VITE_CMS_CLIENT_SECRETE,
          import.meta.env.VITE_CMS_TOKEN_URL,
          "cmsToken"
        );

        // Apply tokens as interceptor
        applyTokenInterceptor(cmsToken);
        applyTokenInterceptor(backendToken);
      } catch (error) {
        console.error("Error generating tokens:", error);
      }
    };

    generateTokens();
  }, []);

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
          path: "managedUser",
          element: <ManagedUser />,
        },
        {
          path: "requestModule",
          element: <RequestModule />,
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
          path: "faq",
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
        {
          path: "raisedRequest",
          element: <RaisedRequestTable />,
        },
        {
          path: "allModules",
          element: <AllModules />,
        },
        {
          path: "allRequests",
          element: <AllRequests />,
        },
        {
          path: "allReports",
          element: <AllReports />,
        },
        {
          path: "assignModule",
          element: <AssignedModules />,
        },
        {
          path: "addModules",
          element: <AddModules />,
        },
        {
          path: "addUsers",
          element: <AddNewUser />,
        },
        {
          path: "productFeatures",
          element: <ProductsFeatures />,
        },
        {
          path: "home-loan",
          element: <Home_Loan />,
        },
        {
          path: "productConfiguration",
          element: <HomeLoan />,
        },
        {
          path: "reports",
          element: <Reports />,
        },
        {
          path: "personal-loan",
          element: <PersonalLoan />,
        },
        {
          path: "car-loan",
          element: <CarLoan />,
        },
        {
          path: "tractor-loan",
          element: <TractorLoan />,
        },
        {
          path: "utility-vehicle",
          element: <UtilityVehicleLoan />,
        },
        {
          path: "commercial-vehicle",
          element: <CommercialVehicleLoan />,
        },
        {
          path: "used-cars",
          element: <UsedCarsLoan />,
        },
        {
          path: "three-wheeler",
          element: <ThreeWheelerLoan />,
        },
        {
          path: "fixed-deposit",
          element: <FixedDeposit />,
        },
        {
          path: "mutual-funds",
          element: <MutualFunds />,
        },
        {
          path: "motor-insurance",
          element: <MotorInsurance />,
        },
        {
          path: "health-insurance",
          element: <HealthInsurance />,
        },
        {
          path: "life-insurance",
          element: <LifeInsurance />,
        },
        {
          path: "leadGen",
          element: <LeadGeneration />,
        },
        {
          path: "foreclosure",
          element: <Foreclosure />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
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
