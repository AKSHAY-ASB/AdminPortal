import { Sparklines, SparklinesLine } from "react-sparklines";

const Reports = () => {
  const statistics = [
    {
      value: "12",
      label: "Logins",
      color: "bg-purple-600",
      sparklineData: [5, 10, 5, 20, 8, 15],
    },
    {
      value: "500",
      label: "Users registered",
      color: "bg-blue-500",
      sparklineData: [5, 7, 3, 10, 9, 8],
    },
    {
      value: "350",
      label: "Existing customers",
      color: "bg-red-500",
      sparklineData: [1, 3, 2, 6, 4, 7],
    },
    {
      value: "120",
      label: "FD customers",
      color: "bg-yellow-500",
      sparklineData: [5, 9, 5, 10, 8, 9],
    },
  ];

  return (
    <div className="flex flex-wrap p-5 w-full ">
      {statistics.map((stat, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
          <div className={`p-4 rounded-lg ${stat.color}`}>
            <div className="flex flex-col justify-between h-full">
              <div className="flex">
                <div className="w-1/2">
                  <h4 className="text-white text-2xl font-semibold">
                    {stat.value}
                  </h4>
                  <h6 className="text-white text-sm">{stat.label}</h6>
                </div>
                <div className="w-1/2 flex items-center justify-end">
                  <Sparklines data={stat.sparklineData} width={94} height={40}>
                    <SparklinesLine color="white" />
                  </Sparklines>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-white text-xs">
                  <i className="feather icon-clock text-sm"></i> update : 2:15
                  am
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reports;
