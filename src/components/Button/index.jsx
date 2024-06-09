import { ArrowForward } from "@mui/icons-material";

const Button = ({ name, type = "button", className, disabled, ...rest }) => {
  return (
    <button
      type={type}
      className={`${className} w-32 ml-8 text-sm flex items-center justify-center rounded-[22px] py-[15px] px-4 disabled:bg-[#C6C6C6]`}
      {...rest}
    >
      {name}
    </button>
  );
};
export default Button;
