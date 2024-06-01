import { useState } from "react";
import Logo from "../../assets/logo.svg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PopperNotify from "../Popper";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

const Header = () => {
  const [lastLogin, setLastLogin] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const user = useSelector((state) => state.login);
  // console.log("--------->    ", user);

  const fetchLastLogin = () => {
    setIsLoggedIn(true);
    const lastLoginData = {
      date: new Date(),
      status: "Active",
    };
    setLastLogin(lastLoginData);
  };

  if (!isLoggedIn) {
    fetchLastLogin();
  }

  return (
    <div className="bg-[#F1F1F1] h-16 lg:h-12 z-20 border-b-[1px] border-[#C6C6C6] px-4 lg:px-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full gap-10">
        <Link to="/" className="flex items-center mx-4">
          <img src={Logo} alt="logo" />
          <div className="mx-4">
            {isLoggedIn ? (
              <div>
                <p>Last login: {lastLogin.date.toLocaleString()}</p>
              </div>
            ) : (
              <p>Loading last login status...</p>
            )}
          </div>
        </Link>

        <div className="flex items-center mx-4">
          <NotificationsIcon className="mx-2" />
          <PopperNotify />
        </div>
      </div>
    </div>
  );
};

export default Header;
