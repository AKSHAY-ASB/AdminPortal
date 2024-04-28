import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const Dashboard = () => {
    return (
        <>
            <div className="w-full flex items-center">
                <div className="w-[70%] h-[100vh] bg-[#f1f1f1] p-4 rounded-[10px] mr-2">
                    <div className="lg:w-56 h-5 bg-[#A5A5A5] rounded-[10px]"></div>

                    <div className="pt-3">
                        <div className="w-full">
                            <div className="w-full flex justify-between items-center">
                                <div className="w-full h-52 bg-[#d9d9d9] mr-2 rounded-[10px]">
                                    <Stack spacing={1} sx={{ p: 1 }}>
                                        <Skeleton
                                            variant="text"
                                            width={"40%"}
                                            sx={{ fontSize: "1rem", bgcolor: "#A5A5A5" }}
                                        />
                                    </Stack>
                                </div>
                                <div className="w-full h-52 bg-[#d9d9d9] rounded-[10px]">
                                    <Stack spacing={1} sx={{ p: 1 }}>
                                        <Skeleton
                                            variant="text"
                                            width={"40%"}
                                            sx={{ fontSize: "1rem", bgcolor: "#A5A5A5" }}
                                        />
                                    </Stack>
                                </div>
                            </div>

                            <div className="w-full flex items-center mt-2">
                                <div className="w-full h-96 bg-[#d9d9d9] rounded-[10px] mr-2">
                                    <Stack spacing={1} sx={{ p: 1 }}>
                                        <Skeleton
                                            variant="text"
                                            width={"40%"}
                                            sx={{ fontSize: "1rem", bgcolor: "#A5A5A5" }}
                                        />
                                    </Stack>
                                </div>

                                <div className="w-full h-96 bg-[#d9d9d9] rounded-[10px]">
                                    <Stack spacing={1} sx={{ p: 1 }}>
                                        <Skeleton
                                            variant="text"
                                            width={"40%"}
                                            sx={{ fontSize: "1rem", bgcolor: "#A5A5A5" }}
                                        />
                                    </Stack>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[30%] h-[100vh] bg-[#f1f1f1] p-4 rounded-[10px]">
                    <Stack spacing={1} sx={{ p: 1, pl: 0 }}>
                        <Skeleton
                            variant="text"
                            width={"70%"}
                            sx={{ fontSize: "1rem", bgcolor: "#A5A5A5" }}
                        />
                    </Stack>
                    <Stack spacing={1}>
                        <Skeleton
                            variant="text"
                            width={"40%"}
                            sx={{ fontSize: "1rem", bgcolor: "#A5A5A5" }}
                        />
                    </Stack>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
