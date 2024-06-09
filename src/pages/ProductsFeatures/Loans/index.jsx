import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TractorIcon from "@mui/icons-material/Agriculture";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import BusinessIcon from "@mui/icons-material/Business";
import CarRepairIcon from "@mui/icons-material/Build";
import ElectricRickshawIcon from "@mui/icons-material/ElectricRickshaw";
import CardComponents from "../../../components/CardComponets";

const loanData = [
  {
    title: "Home Loan",
    description: "Get a home loan at the best rates.",
    buttonLink: "/home-loan",
    icon: HomeIcon,
  },
  {
    title: "Personal Loan",
    description: "Quick personal loans for all your needs.",
    buttonLink: "/personal-loan",
    icon: PersonIcon,
  },
  {
    title: "Car Loan",
    description: "Drive your dream car with our car loans.",
    buttonLink: "/car-loan",
    icon: DirectionsCarIcon,
  },
  {
    title: "Tractor Loan",
    description: "Affordable loans for tractors.",
    buttonLink: "/tractor-loan",
    icon: TractorIcon,
  },
  {
    title: "Utility Vehicle",
    description: "Finance your utility vehicle easily.",
    buttonLink: "/utility-vehicle",
    icon: LocalShippingIcon,
  },
  {
    title: "Commercial",
    description: "Loans for commercial vehicles.",
    buttonLink: "/commercial-vehicle",
    icon: BusinessIcon,
  },
  {
    title: "Used Cars",
    description: "Finance options for used cars.",
    buttonLink: "/used-cars",
    icon: CarRepairIcon,
  },
  {
    title: "Three Wheeler",
    description: "Loans for three-wheelers.",
    buttonLink: "/three-wheeler",
    icon: ElectricRickshawIcon,
  },
];

const Loans = () => {
  return (
    <div className="flex flex-wrap m-5 w-full">
      <div className="w-full md:w-1/3 p-2">
        {loanData.map((loan, index) => ({
          /* <CardComponents
            key={`${loan.title}-${index}`}
            title={loan.title}
            description={loan.description}
            buttonLink={loan.buttonLink}
            icon={loan.icon}
          /> */
        }))}
      </div>
    </div>
  );
};

export default Loans;
