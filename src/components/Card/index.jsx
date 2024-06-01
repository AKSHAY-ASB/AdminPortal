import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Card = (props) => {
  const { title, description, buttonLink } = props;

  return (
    <Link to={buttonLink}>
      <div className="max-w-sm p-6 mx-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-2">
            {/* <Icon className="text-gray-900 dark:text-white mr-2" /> */}
            <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </p>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="flex justify-end">
          <ArrowForwardIcon className="ml-1" />
        </div>
      </div>
    </Link>
  );
};

export default Card;
