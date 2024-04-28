import React, { useLayoutEffect, useState } from "react";
import {
  KeyboardArrowDown,
  Face,
  ManageAccountsOutlined,
  AccountCircleOutlined,
  Payments,
  SupportAgent,
  Dashboard,
} from "@mui/icons-material";
import {
  MdOutlineDashboard,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { TbGraphFilled } from "react-icons/tb";
import { FaClock } from "react-icons/fa";
import { NavLink } from "react-router-dom";
// import { checkUsers } from "../../utils";
import { useSelector } from "react-redux";
// import { useSelector } from "react-redux";

function Sidebar() {
  const [open, setOpen] = useState(true);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const [selectedSubmenuItem, setSelectedSubmenuItem] = useState(null);

  const roles = useSelector((state) => state.roles);

  console.log("is admin===>", roles?.roles?.isAdmin);
  const { isAdmin } = roles?.roles;

  let submenuItems = [
    { title: "Admin", role: "admin", link: "/admin", icon: <Face /> },
    { title: "Module", role: "module", link: "/module", icon: <Face /> },
    { title: "Maker", role: "maker", link: "/maker", icon: <Face /> },
    { title: "Checker", role: "checker", link: "/checker", icon: <Face /> },
  ];

  if (isAdmin) {
    submenuItems = submenuItems?.filter((item) => {
      return item.role !== "checker" && item.role !== "maker";
    });

    console.log("submenuItems---->", submenuItems);
  }

  const Menus = [
    { title: "Dashboard", link: "/", Icons: MdOutlineDashboard },
    {
      title: "Manage User",
      link: "/managedUser",
      icon: <ManageAccountsOutlined />,
      submenu: true,
      submenuItems: submenuItems,
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

  const activeClasses = ({ isActive }) =>
    isActive
      ? `bg-[#000] rounded-[20px] text-white text-sm w-full px-4 py-2 flex tracking-wider gap-2 items-center ${
          open ? "px-4" : "justify-center px-1"
        }`
      : `w-full group hover:bg-gray-200 gap-2 py-2 text-[#525252] rounded-[20px] text-sm flex tracking-wider items-center ${
          open ? "px-4" : "justify-center px-2"
        }`;

  const handleSubMenuToggle = (index) => {
    setOpenSubmenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleSubmenuItemSelect = (index) => {
    setSelectedSubmenuItem(index);
  };

  return (
    <>
      <div className="hidden lg:flex bg-[#f1f1f1] min-h-screen border-r-[1px]">
        <div
          className={`flex flex-col min-h-screen bg-gray-100  ${
            open ? "w-64" : "w-20"
          } transition-all duration-100  ease-in-out`}
        >
          <div
            className={`flex items-center  ${
              open ? `justify-end` : `justify-center`
            } p-2`}
          >
            <button
              onClick={() => setOpen(!open)}
              className="focus:outline-none border p-1 rounded-md"
            >
              {open ? (
                <MdOutlineKeyboardArrowLeft className="h-6 w-6 text-gray-700" />
              ) : (
                <MdOutlineKeyboardArrowRight className="h-6 w-6 text-gray-700" />
              )}
            </button>
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
                      className={`text-gray-700 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 mx-10 hover:bg-gray-200 rounded-[20px] mt-2 ${
                        selectedSubmenuItem === subIndex && "bg-gray-200"
                      } ${!open && "hidden"}`}
                      onClick={() => handleSubmenuItemSelect(subIndex)}
                    >
                      {console.log("sub menu: ", submenuItem)}
                      <NavLink
                        to={submenuItem.link}
                        className="flex items-center gap-x-4 "
                      >
                        <span className="text-2xl block float-left">
                          {submenuItem.icon}
                        </span>
                        <span>{submenuItem.title}</span>
                      </NavLink>
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
