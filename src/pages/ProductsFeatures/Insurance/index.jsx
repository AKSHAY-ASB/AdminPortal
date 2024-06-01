import CardComponents from "../../../components/CardComponets";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar"; // Icon for Motor Insurance
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety"; // Icon for Health Insurance
import FavoriteIcon from "@mui/icons-material/Favorite"; // Icon for Life Insurance

const Insurance = () => {
  return (
    <div className="flex flex-wrap m-5 w-full">
      <div className="w-full md:w-1/3 p-2">
        <CardComponents
          title="Motor"
          description="Protect your vehicle with comprehensive motor insurance."
          buttonLink="/motor-insurance"
          icon={DirectionsCarIcon}
        />
      </div>
      <div className="w-full md:w-1/3 p-2">
        <CardComponents
          title="Health"
          description="Secure your health with our extensive health insurance plans."
          buttonLink="/health-insurance"
          icon={HealthAndSafetyIcon}
        />
      </div>
      <div className="w-full md:w-1/3 p-2">
        <CardComponents
          title="Life"
          description="Ensure financial security for your loved ones with life insurance."
          buttonLink="/life-insurance"
          icon={FavoriteIcon}
        />
      </div>
    </div>
  );
};

export default Insurance;
