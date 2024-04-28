// import React from "react";
// import { Sidebar } from "../../components";

import Skeletons from "../../components/Skeletons";
// import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <>
      <div className="w-full flex items-center p-3 h-full">
        <div className="w-[70%] h-[100vh] bg-[#f1f1f1] p-4 rounded-[10px] mr-2">
          <div className="lg:w-56 h-5 bg-[#A5A5A5] rounded-[10px]"></div>
          {/* <Dashboard/> */}

          <div className="pt-3">
            <div className="w-full">
              <div className="w-full flex justify-between items-center">
                <div className="w-full h-52 bg-[#d9d9d9] mr-2 rounded-[10px]">
                  <Skeletons
                    hWidth={400}
                    vHeight={40}
                    sx={{ fontSize: "1rem", bgcolor: "#A5A5A5" }}
                  />
                </div>

                <div className="w-full h-52 bg-[#d9d9d9] rounded-[10px]">
                  <Skeletons
                    hWidth={400}
                    vHeight={40}
                    sx={{ fontSize: "1rem", bgcolor: "#A5A5A5" }}
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex items-center mt-2">
              <div className="w-full h-96 bg-[#d9d9d9] rounded-[10px] mr-2">
                <Skeletons
                  hWidth={400}
                  vHeight={40}
                  sx={{ fontSize: "1rem", bgcolor: "#A5A5A5" }}
                />
              </div>

              <div className="w-full h-96 bg-[#d9d9d9] rounded-[10px] mr-2">
                <Skeletons
                  hWidth={400}
                  vHeight={40}
                  sx={{ fontSize: "1rem", bgcolor: "#A5A5A5" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-[30%] h-[100vh] bg-[#f1f1f1] p-4 rounded-[10px]">
          <Skeletons
            hWidth={300}
            vHeight={30}
            sx={{ fontSize: "1rem", bgcolor: "#A5A5A5" }}
          />
          <Skeletons
            hWidth={200}
            vHeight={30}
            sx={{ fontSize: "1rem", bgcolor: "#A5A5A5" }}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
