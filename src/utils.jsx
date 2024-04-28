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

//  {
//     id: 2,
//     username: "module@gmail.com",
//     isAdmin: false,
//     isModule: true,
//     isMaker: false,
//     isChecker: false,
//   },
//   {
//     id: 3,
//     username: "maker@gmail.com",
//     isAdmin: false,
//     isModule: false,
//     isMaker: true,
//     isChecker: false,
//   },
//   {
//     id: 4,
//     username: "checker@gmail.com",
//     isAdmin: false,
//     isModule: false,
//     isMaker: false,
//     isChecker: true,
//   },
