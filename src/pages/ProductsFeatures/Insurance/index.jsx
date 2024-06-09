import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"; // Icon for Motor Insurance
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety"; // Icon for Health Insurance
import FavoriteIcon from "@mui/icons-material/Favorite"; // Icon for Life Insurance
import CardComponents from "../../../components/CardComponets";

const cardData = [
  {
    title: "Motor",
    description: "Protect your vehicle with comprehensive motor insurance.",
    buttonLink: "/motor-insurance",
    icon: DirectionsCarIcon,
  },
  {
    title: "Health",
    description:
      "Secure your health with our extensive health insurance plans.",
    buttonLink: "/health-insurance",
    icon: HealthAndSafetyIcon,
  },
  {
    title: "Life",
    description:
      "Ensure financial security for your loved ones with life insurance.",
    buttonLink: "/life-insurance",
    icon: FavoriteIcon,
  },
];

const Insurance = () => {
  return (
    <div className="flex flex-wrap m-5 w-full">
      {cardData.map((card, index) => (
        <div key={index} className="w-full md:w-1/3 p-2">
          <CardComponents
            title={card.title}
            description={card.description}
            buttonLink={card.buttonLink}
            icon={card.icon}
          />
        </div>
      ))}
    </div>
  );
};

export default Insurance;
