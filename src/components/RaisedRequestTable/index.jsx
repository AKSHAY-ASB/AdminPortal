// import { useState } from "react";
// import {
//   MaterialReactTable,
//   createMRTColumnHelper,
//   useMaterialReactTable,
// } from "material-react-table";
// import { Box, IconButton } from "@mui/material";
// import data from "../../utils";

// import RequestDetailsComponentModal from "../RequestDetailsComponentModal";
// import VisibilityIcon from "@mui/icons-material/Visibility";

// const columnHelper = createMRTColumnHelper();

// const columns = [
//   columnHelper.accessor("id", {
//     header: "Sr.No",
//     size: 20,
//   }),
//   columnHelper.accessor("empName", {
//     header: "Employee Name",
//     size: 180,
//   }),
//   columnHelper.accessor("moduleName", {
//     header: "Module Name",
//     size: 180,
//   }),
//   columnHelper.accessor("subModule", {
//     header: "Sub Module",
//     size: 180,
//   }),
//   columnHelper.accessor("requestFor", {
//     header: "Request For",
//     size: 150,
//   }),
//   columnHelper.accessor("status", {
//     header: "Status",
//     size: 150,
//   }),
// ];

// const RaisedRequestTable = () => {
//   const [employees, setEmployees] = useState(data);
//   const [selectedEmployee, setSelectedEmployee] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleApprove = (employee) => {
//     const updatedEmployees = employees.map((emp) =>
//       emp.id === employee.id ? { ...emp, status: "Accepted" } : emp
//     );
//     setEmployees(updatedEmployees);
//     closeModal();
//   };

//   const handleReject = (employee) => {
//     const updatedEmployees = employees.map((emp) =>
//       emp.id === employee.id ? { ...emp, status: "Rejected" } : emp
//     );
//     setEmployees(updatedEmployees);
//     closeModal();
//   };

//   const openModal = (employee) => {
//     setSelectedEmployee(employee);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setSelectedEmployee(null);
//   };

//   const table = useMaterialReactTable({
//     columns,
//     data: employees,
//     columnFilterDisplayMode: "popover",
//     paginationDisplayMode: "pages",
//     positionToolbarAlertBanner: "bottom",
//     positionActionsColumn: "last",
//     displayColumnDefOptions: { "mrt-row-actions": { size: 200 } },
//     enableRowActions: true,
//     renderRowActions: ({ row }) => (
//       <Box>
//         <PopoverOptions
//           row={row}
//           onApprove={() => openModal(row.original)}
//           onReject={() => openModal(row.original)}
//         />
//       </Box>
//     ),
//   });

//   return (
//     <>
//       <MaterialReactTable table={table} />

//       {isModalOpen && selectedEmployee && (
//         <RequestDetailsComponentModal
//           isOpen={isModalOpen}
//           onClose={closeModal}
//           selectedEmployee={selectedEmployee}
//           handleApprove={handleApprove}
//           handleReject={handleReject}
//         />
//       )}
//     </>
//   );
// };

// const PopoverOptions = ({ row, onApprove, onReject }) => {
//   const handleApproveClick = () => {
//     onApprove();
//   };

//   return (
//     <>
//       <IconButton onClick={handleApproveClick}>
//         <VisibilityIcon />
//       </IconButton>
//     </>
//   );
// };

// export default RaisedRequestTable;

import { useState, useEffect } from "react";
import {
  MaterialReactTable,
  createMRTColumnHelper,
  useMaterialReactTable,
} from "material-react-table";
import { Box, IconButton } from "@mui/material";
import RequestDetailsComponentModal from "../RequestDetailsComponentModal";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";

const columnHelper = createMRTColumnHelper();

const columns = [
  columnHelper.accessor("id", {
    header: "Sr.No",
    size: 20,
  }),
  columnHelper.accessor("empName", {
    header: "Employee Name",
    size: 180,
  }),
  columnHelper.accessor("moduleName", {
    header: "Module Name",
    size: 180,
  }),
  columnHelper.accessor("subModule", {
    header: "Sub Module",
    size: 180,
  }),
  columnHelper.accessor("request", {
    header: "Request For",
    size: 150,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    size: 150,
  }),
];

const RaisedRequestTable = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:3000/requests");
        const data = response.data.map((item) => ({
          ...item,
          empName: item.empName || "user",
          // status: item.status || "Pending",
        }));
        setEmployees(data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, []);

  const handleApprove = (employee) => {
    const updatedEmployees = employees.map((emp) =>
      emp.id === employee.id ? { ...emp, status: "Accepted" } : emp
    );
    setEmployees(updatedEmployees);
    closeModal();
  };

  const handleReject = (employee) => {
    const updatedEmployees = employees.map((emp) =>
      emp.id === employee.id ? { ...emp, status: "Rejected" } : emp
    );
    setEmployees(updatedEmployees);
    closeModal();
  };

  const openModal = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
  };

  const table = useMaterialReactTable({
    columns,
    data: employees,
    columnFilterDisplayMode: "popover",
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    positionActionsColumn: "last",
    displayColumnDefOptions: { "mrt-row-actions": { size: 200 } },
    enableRowActions: true,
    renderRowActions: ({ row }) => (
      <Box>
        <PopoverOptions
          row={row}
          onApprove={() => openModal(row.original)}
          onReject={() => openModal(row.original)}
        />
      </Box>
    ),
  });

  return (
    <>
      <MaterialReactTable table={table} />

      {isModalOpen && selectedEmployee && (
        <RequestDetailsComponentModal
          isOpen={isModalOpen}
          onClose={closeModal}
          selectedEmployee={selectedEmployee}
          handleApprove={handleApprove}
          handleReject={handleReject}
        />
      )}
    </>
  );
};

const PopoverOptions = ({ row, onApprove, onReject }) => {
  const handleApproveClick = () => {
    onApprove();
  };

  return (
    <>
      <IconButton onClick={handleApproveClick}>
        <VisibilityIcon />
      </IconButton>
    </>
  );
};

export default RaisedRequestTable;
