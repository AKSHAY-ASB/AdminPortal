import { AccountCircle, Logout, Settings } from "@mui/icons-material";

export const items = [
  {
    title: "Accordion Item 1",
    content: <p>This is the content of accordion item 1.</p>,
  },
  {
    title: "Accordion Item 2",
    content: <p>This is the content of accordion item 2.</p>,
  },
  {
    title: "Accordion Item 3",
    content: <p>This is the content of accordion item 3.</p>,
  },
];

export const headerClass = ``;

export const roles = [
  {
    id: 1,
    icon: <AccountCircle />,
    text: "Akshay Buchade",
    role: "admin",
    link: "/admin",
    title: "Admin",
  },
  {
    id: 2,
    icon: <AccountCircle />,
    text: "Ashit Sinha",
    role: "module",
    link: "/module",
    title: "Module",
  },
  {
    id: 3,
    icon: <AccountCircle />,
    text: "G K",
    role: "maker",
    link: "/maker",
    title: "Maker",
  },
  {
    id: 4,
    icon: <AccountCircle />,
    text: "Y G",
    role: "checker",
    link: "/checker",
    title: "Checker",
  },
];

export const menuItems = [
  {
    id: 2,
    icon: <Settings />,
    text: "Setting",
    userName: "Setting",
  },
  {
    id: 3,
    icon: <Logout />,
    text: "Logout",
    userName: "Logout",
  },
];

export const adminUserStatus = {
  name: "Admin",
  role: "admin",
};

export const checkUsers = {
  id: 1,
  username: "Akshay Bucahde",
  isAdmin: true,
  role: "admin",
  isModule: false,
  isMaker: false,
  isChecker: false,
};

export const checkModuleUsers = {
  id: 1,
  username: "Ashit",
  isAdmin: false,
  role: "module",
  isModule: true,
  isMaker: false,
  isChecker: false,
};

export const checkMakerUsers = {
  id: 1,
  username: "Maker",
  isAdmin: false,
  role: "module",
  isModule: false,
  isMaker: true,
  isChecker: false,
};

export const modules = ["Loans", "Investment", "Insurance"];

export const investmentModules = ["Fixed Deposit", "Mutual Funds"];
export const insuranceModules = ["Motor", "Health", "Life"];

export const subModules = [
  "Home Loan",
  "Personal Loan",
  "Car Loan",
  "Tractor Loan",
  "Utility Vehicle",
  "Commercial",
  "Used Cars",
  "Three Wheeler",
];

export const requestAssignModules = [
  {
    id: "1",
    moduleName: "Loans",
    subModule: "Home loan",
    request: "Rate of Interest",
    status: "pending",
  },
  {
    id: "2",
    moduleName: "Loans",
    subModule: "Personal loan",
    request: "Features and Benefits",
    status: "pending",
  },
  {
    id: "3",
    moduleName: "Investment",
    subModule: "Fixed Deposit",
    request: "Loan Tenure (Years)",
    status: "pending",
  },
  {
    id: "4",
    moduleName: "Insurance",
    subModule: "Life",
    request: "Loan Tenure (Years):",
    status: "pending",
  },
  {
    id: "5",
    moduleName: "Loans",
    subModule: "Car loan",
    request: "Min Amount",
    status: "pending",
  },
];

export const status = [{ key: "Active" }, { key: "deActive" }];

const data = [
  {
    id: 1,
    empName: "Akshay Buchade",
    empEmail: "akshay@gmail.com",
    moduleName: "Loans",
    subModule: "Home loan",
    module: "maker",
    requestFor: "Rate of Interest",
    status: "Pending",
  },
  {
    id: 2,
    empName: "Akshay Buchade",
    empEmail: "akshay@gmail.com",
    moduleName: "Loans",
    subModule: "Personal Loan",
    module: "Module B",
    requestFor: "Rate of Interest",
    status: "Pending",
  },
  {
    id: 3,
    empName: "Akshay Buchade",
    empEmail: "akshay@gmail.com",
    moduleName: "Investment",
    subModule: "Fixed Deposit",
    module: "Module C",
    requestFor: "Rate of Interest",
    status: "Pending",
  },
  {
    id: 4,
    empName: "Akshay Buchade",
    empEmail: "akshay@gmail.com",
    moduleName: "Loans",
    subModule: "Car loan",
    module: "Module D",
    requestFor: "Min Amount",
    status: "Pending",
  },
  {
    id: 5,
    empName: "Akshay Buchade",
    empEmail: "akshay@gmail.com",
    moduleName: "Insurance",
    subModule: "Life Insurance",
    module: "Module E",
    requestFor: "Loan Tenure",
    status: "Pending",
  },
];

export default data;

export const modulesName = [
  { key: "Personal Loans", value: "pl" },
  { key: "Vehicle Loans", value: "vl" },
  { key: "Fixed Deposits", value: "fd" },
  { key: "Mutual Funds", value: "mf" },
  { key: "Financial Portfolio Planning", value: "fpp" },
  { key: "Insurance", value: "in" },
  { key: "Rural Housing", value: "rh" },
];

export const headers = [
  "Parameter Name",
  "Previous Value",
  "Current Value",
  "Last Date & Time",
  "Changed By",
];

export const headersLeadGen = [
  "Parameter Name",
  "Lead Count",
  "Cool off period",
  "Current Value",
  "Last Date & Time",
  "Changed By",
];

export const product_feature = [
  {
    product_type: "loans",
    product_title: "Loans",
    types: [
      {
        product_sub_type: "home",
        type_name: "home",
        tabs_details: [
          {
            tab_title: "Overview",
          },
          {
            tab_title: "Features and Benefits",
          },
          {
            tab_title: "EMI Calculator",
          },
          {
            tab_title: "FAQs",
          },
          {
            tab_title: "How to Apply",
          },
          {
            tab_title: "Eligibility & Documents",
          },
        ],
      },
      {
        product_sub_type: "new_car",
        type_name: "new car",
        tabs_details: [
          {
            tab_title: "Overview",
          },
          {
            tab_title: "Features and Benefits",
          },
        ],
      },
      {
        product_sub_type: "personal",
        type_name: "personal",
        tabs_details: [
          {
            tab_title: "Overview",
          },
          {
            tab_title: "Features and Benefits",
          },
          {
            tab_title: "EMI Calculator",
          },
        ],
      },
      {
        product_sub_type: "balance_transfer",
        type_name: "balance transfer",
        tabs_details: [
          {
            tab_title: "UPT transfer",
          },
          {
            tab_title: "NEFT transfer",
          },
          {
            tab_title: "Bank transfer",
          },
        ],
      },
    ],
  },
  {
    product_type: "investment",
    product_title: "Investment",
    types: [
      {
        product_sub_type: "Fixed Deposit",
        type_name: "fixedDeposit",
        tabs_details: [
          {
            tab_title: "Features and Benefits",
          },
          {
            tab_title: "Interest Rates",
          },
          {
            tab_title: "FAQs",
          },
          {
            tab_title: "How to Apply",
          },
          {
            tab_title: "Eligibility & Documents",
          },
        ],
      },
      {
        product_sub_type: "Mutual Funds",
        type_name: "mutualFunds",
        tabs_details: [
          {
            tab_title: "Overview",
          },
          {
            tab_title: "Features and Benefits",
          },
        ],
      },
    ],
  },
  {
    product_type: "insurance",
    product_title: "Insurance",
    types: [
      {
        product_sub_type: "motor",
        type_name: "Motor",
        tabs_details: [
          {
            tab_title: "FAQs",
          },
        ],
      },
      {
        product_sub_type: "health",
        type_name: "Health",
        tabs_details: [
          {
            tab_title: "FAQs",
          },
        ],
      },
      {
        product_sub_type: "life",
        type_name: "Life",
        tabs_details: [
          {
            tab_title: "FAQs",
          },
        ],
      },
    ],
  },
];
