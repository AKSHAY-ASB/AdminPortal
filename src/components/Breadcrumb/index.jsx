import { Breadcrumbs } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = ({ className = "" }) => {
  const location = useLocation();
  const pathname = location.pathname.split("/").filter((item) => item);

  return (
    <div className={`${className} pt-3`}>
      <Breadcrumbs aria-label="breadcrumb " className="font-karla text-sm">
        {pathname &&
          pathname.map((item, index) =>
            index === pathname.length - 1 ? (
              <span
                key={item}
                className={`font-normal text-sm text-grey-500 font-karla dark:text-white`}
              >
                {item
                  .split(/[_-]/)
                  .join(" ")
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
              </span>
            ) : (
              <Link
                to={`/${item}`}
                key={item}
                className={`font-normal text-sm text-gray-500 font-karla dark:text-white`}
              >
                {item
                  .split(/[_-]/)
                  .join(" ")
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
              </Link>
            )
          )}
      </Breadcrumbs>
    </div>
  );
};

export default Breadcrumb;
