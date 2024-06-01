import CardComponents from "../../../components/CardComponets";
import SavingsIcon from "@mui/icons-material/Savings"; // Use an appropriate icon for Fixed Deposit
import TrendingUpIcon from "@mui/icons-material/TrendingUp"; // Use an appropriate icon for Mutual Funds

const Investment = () => {
  return (
    <div className="flex flex-wrap m-5 w-full">
      <div className="w-full md:w-1/3 p-2">
        <CardComponents
          title="Fixed Deposit"
          description="Earn guaranteed returns with our Fixed Deposit plans."
          buttonLink="/fixed-deposit"
          icon={SavingsIcon}
        />
      </div>
      <div className="w-full md:w-1/3 p-2">
        <CardComponents
          title="Mutual Funds"
          description="Invest in diversified mutual funds for better growth."
          buttonLink="/mutual-funds"
          icon={TrendingUpIcon}
        />
      </div>
    </div>
  );
};

export default Investment;
