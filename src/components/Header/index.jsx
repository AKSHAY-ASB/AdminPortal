import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { PopperNotify } from "../../components";
import { useSelector } from "react-redux";

const Header = () => {
  // const roles = useSelector((state) => state.roles.roles);
  // console.log("------>", roles.username);

  return (
    <div className="bg-[#F1F1F1] h-16 lg:h-12 z-20 border-b-[1px] border-[#C6C6C6] px-4 lg:px-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full gap-10">
        <Link to="/" className="">
          <img src={Logo} alt="logo" />
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
