import {
  MaterialReactTable,
  createMRTColumnHelper,
  useMaterialReactTable,
} from "material-react-table";
import { Box, Button } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { jsPDF } from "jspdf"; //or use your library of choice here
import autoTable from "jspdf-autotable";
import data from "../../utils";

const columnHelper = createMRTColumnHelper();

const columns = [
  columnHelper.accessor("id", {
    header: "ID",
    size: 40,
  }),
  columnHelper.accessor("firstName", {
    header: "First Name",
    size: 120,
  }),
  columnHelper.accessor("lastName", {
    header: "Last Name",
    size: 120,
  }),
  columnHelper.accessor("company", {
    header: "Company",
    size: 300,
  }),
  columnHelper.accessor("city", {
    header: "City",
  }),
  columnHelper.accessor("country", {
    header: "Country",
    size: 220,
  }),
];

const Admin = () => {
  const handleExportRows = (rows) => {
    const doc = new jsPDF();
    const tableData = rows.map((row) => Object.values(row.original));
    const tableHeaders = columns.map((c) => c.header);

    autoTable(doc, {
      head: [tableHeaders],
      body: tableData,
    });

    doc.save("mrt-pdf-example.pdf");
  };

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true,
    columnFilterDisplayMode: "popover",
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          padding: "8px",
          flexWrap: "wrap",
        }}
      >
        <Button
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          //export all rows, including from the next page, (still respects filtering and sorting)
          onClick={() =>
            handleExportRows(table.getPrePaginationRowModel().rows)
          }
          startIcon={<FileDownloadIcon />}
        >
          Export All Rows
        </Button>
        <Button
          disabled={table.getRowModel().rows.length === 0}
          //export all rows as seen on the screen (respects pagination, sorting, filtering, etc.)
          onClick={() => handleExportRows(table.getRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Page Rows
        </Button>
        <Button
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          //only export selected rows
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Selected Rows
        </Button>
      </Box>
    ),
  });

  return <MaterialReactTable table={table} />;
};

export default Admin;

// import { DataGrid } from "@mui/x-data-grid";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { Box } from "@mui/material";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { ReusableMenu } from "../../components/DyanmicMenu";
// import { Button } from "../../components";
// import { RxCross2 } from "react-icons/rx";
// import Modal from "../../components/Modal";

// const Admin = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [threeDotMenu, setThreeDotMenu] = useState(null);
//   const [rows, setRows] = useState([
//     {
//       id: 1,
//       employeeName: "Snow",
//       emailId: "Jon@gmail.com",
//       module: "A",
//       status: "Active",
//     },
//     {
//       id: 2,
//       employeeName: "Lannister",
//       emailId: "Cersei@gmail.com",
//       module: "B",
//       status: "Active",
//     },
//     {
//       id: 3,
//       employeeName: "Lannister",
//       emailId: "Jaime@gmail.com",
//       module: "C",
//       status: "Active",
//     },
//     {
//       id: 4,
//       employeeName: "Stark",
//       emailId: "Arya@gmail.com",
//       module: "D",
//       status: "Active",
//     },
//     {
//       id: 5,
//       employeeName: "Targaryen",
//       emailId: "Daenerys@gmail.com",
//       module: "E",
//       status: "Active",
//     },
//     {
//       id: 6,
//       employeeName: "Melisandre",
//       emailId: "a@gmail.com",
//       module: "F",
//       status: "Active",
//     },
//   ]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const open = Boolean(threeDotMenu);

//   const [selectedItemId, setSelectedItemId] = useState(null);

//   const navigate = useNavigate();

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleOpenPopOver = (event, user) => {
//     setThreeDotMenu(event.currentTarget);
//     setSelectedUser(user);
//   };

//   const handleCloseUserMenu = () => {
//     setThreeDotMenu(null);
//   };

//   const handleApproveUser = () => {
//     if (selectedUser) {
//       const updatedRows = rows.map((row) =>
//         row.id === selectedUser.id ? { ...row, status: "Approved" } : row
//       );
//       setRows(updatedRows);
//       handleCloseUserMenu();
//     }
//   };

//   const handleRejectUser = () => {
//     if (selectedUser) {
//       const updatedRows = rows.map((row) =>
//         row.id === selectedUser.id ? { ...row, status: "Rejected" } : row
//       );
//       setRows(updatedRows);
//       handleCloseUserMenu();
//     }
//   };

//   const columns = [
//     {
//       field: "id",
//       headerName: "Employee ID",
//       width: 150,
//       headerAlign: "center",
//       align: "center",
//     },
//     {
//       field: "employeeName",
//       headerName: "Employee Name",
//       width: 200,
//       headerAlign: "center",
//       align: "center",
//     },
//     {
//       field: "emailId",
//       headerName: "Email ID",
//       width: 250,
//       headerAlign: "center",
//       align: "center",
//     },
//     {
//       field: "module",
//       headerName: "Module",
//       type: "number",
//       width: 200,
//       headerAlign: "center",
//       align: "center",
//     },
//     {
//       field: "status",
//       headerName: "Access Status",
//       width: 150,
//       headerAlign: "center",
//       align: "center",
//     },
//     {
//       field: "action",
//       headerName: "Actions",
//       width: 150,
//       headerAlign: "center",
//       align: "center",
//       renderCell: (params) => (
//         <Box
//           sx={{
//             "& :focus": {
//               outline: "none",
//             },
//           }}
//         >
//           <EditIcon
//             className="cursor-pointer mr-2"
//             style={{ color: "#006BD6" }}
//             // onClick={() => handleEdit(params.id)}
//           />
//           <DeleteIcon
//             className="cursor-pointer"
//             style={{ color: "red" }}
//             onClick={() => handleDeleteModuleUser(params.id)}
//           />
//           <MoreVertIcon
//             className="cursor-pointer"
//             sx={{ color: "#000000" }}
//             onClick={(event) => handleOpenPopOver(event, params.row)}
//             size="small"
//             aria-controls={open ? "account-menu" : undefined}
//             aria-haspopup="true"
//             aria-expanded={open ? "true" : undefined}
//           />
//         </Box>
//       ),
//     },
//   ];

//   const handleDeleteModuleUser = (id) => {
//     setSelectedItemId(id);
//     setIsModalOpen(true);
//   };

//   const handleAssignedModule = () => {
//     navigate("/assignModule");
//   };

//   const handleModule = () => {
//     navigate("/allModules");
//   };

//   const handleConfirmParam = () => {
//     if (selectedItemId) {
//       const updatedRows = rows.filter((row) => row.id !== selectedItemId);
//       setRows(updatedRows);
//       setIsModalOpen(false);
//     }
//   };

//   return (
//     <>
//       <div className="p-5">
//         <div className="w-full flex flex-row justify-between">
//           <h2 className="capitalize text-[#525252] text-md mx-5">
//             Set Module Admin
//           </h2>
//           <div className="">
//             <button
//               className="bg-[#000000] hover:opacity-85 text-white w-[130px] h-12 rounded-[15px] mr-2"
//               onClick={handleModule}
//             >
//               View Reports
//             </button>
//             <button
//               className="bg-[#000000] hover:opacity-85 text-white w-[130px] h-12 rounded-[15px] mr-5"
//               onClick={handleAssignedModule}
//             >
//               Add Module
//             </button>
//           </div>
//           {isModalOpen && (
//             <Modal
//               isOpen={isModalOpen}
//               onClose={closeModal}
//               className="rounded-[10px] p-3 sm:w-[400px]"
//             >
//               <div>
//                 <div className="p-4 space-y-2">
//                   <div className="flex justify-between items-center ">
//                     <h1 className="text-3xl font-medium">Confirmation</h1>
//                     <RxCross2 onClick={closeModal} className="cursor-pointer" />
//                   </div>

//                   <p className="text-sm py-3">
//                     Are you want save this records ?
//                   </p>
//                 </div>

//                 <div className="flex justify-end">
//                   <Button
//                     name="Cancel"
//                     className="w-28  rounded-3xl bg-[#f1f1f1]"
//                     onClick={closeModal}
//                   />
//                   <Button
//                     name="Yes"
//                     className=" w-28 rounded-3xl bg-gray-700 text-white  text-xs py-6 mx-2"
//                     onClick={handleConfirmParam}
//                   />
//                 </div>
//               </div>
//             </Modal>
//           )}
//         </div>

//         <div className="w-full p-5">
//           <DataGrid
//             rows={rows}
//             columns={columns}
//             pageSize={5}
//             checkboxSelection
//             disableSelectionOnClick
//             autoHeight
//           />
//         </div>
//       </div>

//       <ReusableMenu
//         anchorEl={threeDotMenu}
//         open={open}
//         onClose={handleCloseUserMenu}
//         handleApproveUser={handleApproveUser}
//         handleRejectUser={handleRejectUser}
//       />
//     </>
//   );
// };

// export default Admin;
