import SavingsIcon from "@mui/icons-material/Savings"; // Icon for Fixed Deposit
import TrendingUpIcon from "@mui/icons-material/TrendingUp"; // Icon for Mutual Funds
import CardComponents from "../../../components/CardComponets";

const investmentData = [
  {
    title: "Fixed Deposit",
    description: "Earn guaranteed returns with our Fixed Deposit plans.",
    buttonLink: "/fixed-deposit",
    icon: SavingsIcon,
  },
  {
    title: "Mutual Funds",
    description: "Invest in diversified mutual funds for better growth.",
    buttonLink: "/mutual-funds",
    icon: TrendingUpIcon,
  },
];

const Investment = () => {
  return (
    <div className="flex flex-wrap m-5 w-full">
      {investmentData.map((investment, index) => (
        <div key={index} className="w-full md:w-1/3 p-2">
          <CardComponents
            title={investment.title}
            description={investment.description}
            buttonLink={investment.buttonLink}
            icon={investment.icon}
          />
        </div>
      ))}
    </div>
  );
};

export default Investment;
