import React, { useState } from "react";
import {
  ArrowBack,
  Dashboard,
  KeyboardArrowDown,
  Face,
  ManageAccountsOutlined,
  AccountCircleOutlined,
  Payments,
  SupportAgent,
} from "@mui/icons-material";
import { MdOutlineDashboard } from "react-icons/md";
import { TbGraphFilled } from "react-icons/tb";
import { FaClock } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

  const activeClasses = ({ isActive }) =>
    isActive
      ? `text-black text-sm w-full px-4 py-2 flex tracking-wider gap-2 items-center ${
          open ? "px-4" : "justify-center px-1"
        }`
      : `group hover:bg-gray-200 gap-2 py-2 text-[#525252] rounded-[20px] text-sm flex tracking-wider items-center ${
          open ? "px-4" : "justify-center px-2"
        }`;

  const Menus = [
    { title: "Dashboard", link: "/", Icons: MdOutlineDashboard },
    {
      title: "Manage User",
      link: "/managedUser",
      Icons: ManageAccountsOutlined,
      submenu: true,
      submenuItems: [
        { title: "Module", link: "/module", icon: <Face /> },
        { title: "Maker", link: "/managedUser", icon: <Face /> },
        { title: "Checker", link: "/managedUser", icon: <Face /> },
      ],
    },
    {
      title: "Login / Registration",
      link: "login_reg",
      icon: <AccountCircleOutlined />,
    },
    // { title: "Media", spacing: true },
    { title: "Analytics", link: "/analytics", icon: <TbGraphFilled /> },
    { title: "Recent Activity", link: "/recentActivity", icon: <FaClock /> },
    { title: "Payments", link: "/payments", icon: <Payments /> },
    { title: "Support", link: "/support", icon: <SupportAgent /> },
  ];

  const handleSubMenuToggle = (index) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? null : index);
  };

  return (
    <>
      <div className="flex bg-[#f1f1f1]">
        <div
          className={`bg-dark-purple h-screen p-5 pt-8  ${
            open ? "w-72" : "w-20"
          } duration-300  relative`}
        >
          <ArrowBack
            className={`bg-white text-dark-purple text-3xl absolute -right-3
        border rounded-full border-dark-purple cursor-pointer ${
          !open && "rotate-180"
        }`}
            onClick={() => setOpen(!open)}
          />

          <div className="inline-flex items-center">
            <Dashboard
              className={`bg-amber-300 text-4xl rounded cursor-pointer block float-left mr-2 duration-500
            ${open && "rotate-[360deg]"}`}
            />
            <h1
              className={`text-white origin-left font-medium text-2xl duration-300 ${
                !open && "scale-0"
              }`}
            >
              Dashboard
            </h1>
          </div>

          {Menus.map((menu, index) => (
            <React.Fragment key={index}>
              <li
                className={`text-gray-300 text-sm flex items-center
              gap-x-4 cursor-pointer p-2
               hover:bg-light-white rounded-md mt-2 ${
                 menu.spacing ? "my-9" : "mt-2"
               }`}
              >
                <NavLink to={menu.link} className={activeClasses}>
                  <span className="text-2xl block float-left">
                    {menu.icon ? menu.icon : <Dashboard />}
                  </span>
                  <span
                    className={`text-base font-medium flex-1 ${
                      !open && "hidden"
                    } duration-200`}
                  >
                    {menu.title}
                  </span>
                </NavLink>
                {menu.submenu && open && (
                  <KeyboardArrowDown
                    className={`${openSubmenuIndex === index && "rotate-180"}`}
                    onClick={() => handleSubMenuToggle(index)}
                  />
                )}
              </li>

              {menu.submenu && openSubmenuIndex === index && (
                <ul>
                  {menu.submenuItems.map((submenuItem, subIndex) => (
                    <li
                      key={subIndex}
                      className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md mt-2 ${
                        !open && "hidden"
                      }`}
                    >
                      <span className="text-2xl block float-left">
                        {submenuItem.icon}
                      </span>
                      <span>{submenuItem.title}</span>
                    </li>
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
