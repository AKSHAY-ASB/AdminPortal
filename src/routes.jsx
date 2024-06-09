import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const lazyPages = {
  Home: lazy(() => import("./pages/Home")),
  ManagedUser: lazy(() => import("./pages/ManagedUser")),
  RecentActivity: lazy(() => import("./pages/RecentActivity")),
  Support: lazy(() => import("./pages/Support")),
  Login: lazy(() => import("./pages/Login")),
  Payments: lazy(() => import("./pages/Payments")),
  Module: lazy(() => import("./pages/Module/Module")),
  Login_Registration: lazy(() => import("./pages/Login_Registration")),
  Maker: lazy(() => import("./pages/Maker")),
  Checker: lazy(() => import("./pages/Checker")),
  Admin: lazy(() => import("./pages/Admin")),
  AllModules: lazy(() => import("./pages/AllModules")),
  AllReports: lazy(() => import("./pages/AllReports/index.jsx")),
  AllRequests: lazy(() => import("./pages/AllRequests/index.jsx")),
  AssignedModules: lazy(() =>
    import("./pages/AssignedModules/AssignedModules.jsx")
  ),
  AddModules: lazy(() => import("./pages/Module/AddModules.jsx")),
  ProductsFeatures: lazy(() => import("./pages/ProductsFeatures/index.jsx")),
  HomeLoan: lazy(() =>
    import("./pages/ProductsFeatures/Loans/HomeLoan/index.jsx")
  ),
  Reports: lazy(() => import("./pages/Reports/Reports.jsx")),
  PersonalLoan: lazy(() =>
    import("./pages/ProductsFeatures/Loans/PersonalLoan/PersonalLoan.jsx")
  ),
  CarLoan: lazy(() =>
    import("./pages/ProductsFeatures/Loans/CarLoan/CarLoan.jsx")
  ),
  TractorLoan: lazy(() =>
    import("./pages/ProductsFeatures/Loans/TractorLoan/TractorLoan.jsx")
  ),
  UtilityVehicleLoan: lazy(() =>
    import(
      "./pages/ProductsFeatures/Loans/UtilityVehicleLoan/UtilityVehicleLoan.jsx"
    )
  ),
  CommercialVehicleLoan: lazy(() =>
    import(
      "./pages/ProductsFeatures/Loans/CommercialVehicleLoan/CommercialVehicleLoan.jsx"
    )
  ),
  UsedCarsLoan: lazy(() =>
    import("./pages/ProductsFeatures/Loans/UsedCarsLoan/UsedCarsLoan.jsx")
  ),
  ThreeWheelerLoan: lazy(() =>
    import(
      "./pages/ProductsFeatures/Loans/ThreeWheelerLoan/ThreeWheelerLoan.jsx"
    )
  ),
  FixedDeposit: lazy(() =>
    import("./pages/ProductsFeatures/Investment/FixedDeposit/FixedDeposit.jsx")
  ),
  MutualFunds: lazy(() =>
    import("./pages/ProductsFeatures/Investment/MutualFunds/MutualFunds.jsx")
  ),
  MotorInsurance: lazy(() =>
    import(
      "./pages/ProductsFeatures/Insurance/MotorInsurance/MotorInsurance.jsx"
    )
  ),
  LeadGeneration: lazy(() => import("./pages/LeadGeneration/index.jsx")),
  HealthInsurance: lazy(() =>
    import(
      "./pages/ProductsFeatures/Insurance/HealthInsurance/HealthInsurance.jsx"
    )
  ),
  LifeInsurance: lazy(() =>
    import("./pages/ProductsFeatures/Insurance/LifeInsurance/LifeInsurance.jsx")
  ),
  Home_Loan: lazy(() =>
    import("./pages/ProductsFeatures/Loans/HomeLoan/Home_Loan.jsx")
  ),
  AddNewUser: lazy(() => import("./pages/Users/AddUsers.jsx")),
  RequestModule: lazy(() => import("./pages/RequestModule/index.jsx")),
  RaisedRequestTable: lazy(() =>
    import("./components/RaisedRequestTable/index.jsx")
  ),
  Foreclosure: lazy(() => import("./pages/Foreclosure/index.jsx")),
};

const routerConfig = [
  { path: "/", element: <lazyPages.Home /> },
  { path: "/managed-user", element: <lazyPages.ManagedUser /> },
  { path: "/recent-activity", element: <lazyPages.RecentActivity /> },
  { path: "/support", element: <lazyPages.Support /> },
  { path: "/login", element: <lazyPages.Login /> },
  { path: "/payments", element: <lazyPages.Payments /> },
  { path: "/module", element: <lazyPages.Module /> },
  { path: "/login-registration", element: <lazyPages.Login_Registration /> },
  { path: "/maker", element: <lazyPages.Maker /> },
  { path: "/checker", element: <lazyPages.Checker /> },
  { path: "/admin", element: <lazyPages.Admin /> },
  { path: "/all-modules", element: <lazyPages.AllModules /> },
  { path: "/all-reports", element: <lazyPages.AllReports /> },
  { path: "/all-requests", element: <lazyPages.AllRequests /> },
  { path: "/assigned-modules", element: <lazyPages.AssignedModules /> },
  { path: "/add-modules", element: <lazyPages.AddModules /> },
  { path: "/products-features", element: <lazyPages.ProductsFeatures /> },
  {
    path: "/products-features/loans/home-loan",
    element: <lazyPages.HomeLoan />,
  },
  { path: "/reports", element: <lazyPages.Reports /> },
  {
    path: "/products-features/loans/personal-loan",
    element: <lazyPages.PersonalLoan />,
  },
  { path: "/products-features/loans/car-loan", element: <lazyPages.CarLoan /> },
  {
    path: "/products-features/loans/tractor-loan",
    element: <lazyPages.TractorLoan />,
  },
  {
    path: "/products-features/loans/utility-vehicle-loan",
    element: <lazyPages.UtilityVehicleLoan />,
  },
  {
    path: "/products-features/loans/commercial-vehicle-loan",
    element: <lazyPages.CommercialVehicleLoan />,
  },
  {
    path: "/products-features/loans/used-cars-loan",
    element: <lazyPages.UsedCarsLoan />,
  },
  {
    path: "/products-features/loans/three-wheeler-loan",
    element: <lazyPages.ThreeWheelerLoan />,
  },
  {
    path: "/products-features/investment/fixed-deposit",
    element: <lazyPages.FixedDeposit />,
  },
  {
    path: "/products-features/investment/mutual-funds",
    element: <lazyPages.MutualFunds />,
  },
  {
    path: "/products-features/insurance/motor-insurance",
    element: <lazyPages.MotorInsurance />,
  },
  { path: "/lead-generation", element: <lazyPages.LeadGeneration /> },
  {
    path: "/products-features/insurance/health-insurance",
    element: <lazyPages.HealthInsurance />,
  },
  {
    path: "/products-features/insurance/life-insurance",
    element: <lazyPages.LifeInsurance />,
  },
  {
    path: "/products-features/loans/home-loan/home-loan",
    element: <lazyPages.Home_Loan />,
  },
  { path: "/add-new-user", element: <lazyPages.AddNewUser /> },
  { path: "/request-module", element: <lazyPages.RequestModule /> },
  { path: "/raised-request-table", element: <lazyPages.RaisedRequestTable /> },
  { path: "/foreclosure", element: <lazyPages.Foreclosure /> },
];

const router = createBrowserRouter(routerConfig);

export default router;
