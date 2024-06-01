import React, { useState } from "react";
import {
  MaterialReactTable,
  createMRTColumnHelper,
  useMaterialReactTable,
} from "material-react-table";
import { Box, Button, IconButton, Popover, Typography } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import data from "../../utils";
import {
  Delete as DeleteIcon,
  CheckCircleOutline as ApproveIcon,
  HighlightOff as RejectIcon,
  MoreVert as MoreVertIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { RxCross2 } from "react-icons/rx";
import Modal from "../../components/Modal";
import { useNavigate } from "react-router-dom";

const columnHelper = createMRTColumnHelper();

const columns = [
  columnHelper.accessor("id", {
    header: "Employee ID",
    size: 20,
  }),
  columnHelper.accessor("empName", {
    header: "Employee Name",
    size: 120,
  }),
  columnHelper.accessor("empEmail", {
    header: "Email Id",
    size: 250,
  }),
  columnHelper.accessor("module", {
    header: "Module",
    size: 240,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    size: 226,
  }),
];

const csvConfig = mkConfig({
  fieldSeparator: ",",
  decimalSeparator: ".",
  useKeysAsHeaders: true,
});

const Admin = () => {
  const [employees, setEmployees] = useState(data);
  const [deleteEmployeeId, setDeleteEmployeeId] = useState();
  const [isModalEmployee, setIsModalEmployee] = useState(false);

  const navigate = useNavigate();

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

  const handleApprove = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index].status = "Activated";
    setEmployees(updatedEmployees);
    console.log(updatedEmployees);
  };

  const handleReject = (index) => {
    const updatedEmployees = [...employees];
    updatedEmployees[index].status = "Deactivated";
    setEmployees(updatedEmployees);
    console.log(updatedEmployees);
  };

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(data);
    download(csvConfig)(csv);
  };

  const openDeleteEmployeeModal = (id) => {
    setIsModalEmployee(true);
    setDeleteEmployeeId(id);
  };

  const closeModal = () => {
    setIsModalEmployee(false);
  };

  const handleConfirmParam = () => {
    const deletedData = employees?.filter(
      (item) => item?.id !== deleteEmployeeId
    );
    setEmployees(deletedData);
  };

  const handleViewModules = () => {
    navigate("/module");
  };

  const table = useMaterialReactTable({
    columns,
    data: employees,
    columnFilterDisplayMode: "popover",
    paginationDisplayMode: "pages",
    positionToolbarAlertBanner: "bottom",
    positionActionsColumn: "last",
    renderTopToolbarCustomActions: ({ table }) => (
      <>
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
            onClick={() =>
              handleExportRows(table.getPrePaginationRowModel().rows)
            }
            startIcon={<FileDownloadIcon />}
          >
            PDF
          </Button>
          <Button onClick={handleExportData} startIcon={<FileDownloadIcon />}>
            Excel
          </Button>
        </Box>
        <Button onClick={handleViewModules}>View All Modules</Button>
      </>
    ),
    displayColumnDefOptions: { "mrt-row-actions": { size: 150 } },
    enableRowActions: true,
    renderRowActions: ({ row }) => (
      <Box>
        <IconButton
          color="error"
          onClick={() => openDeleteEmployeeModal(row?._valuesCache?.id)}
        >
          <DeleteIcon />
        </IconButton>
        <PopoverOptions
          row={row}
          onApprove={() => handleApprove(row.index)}
          onReject={() => handleReject(row.index)}
        />
      </Box>
    ),
  });

  return (
    <>
      <MaterialReactTable table={table} />

      {isModalEmployee && (
        <Modal
          isOpen={isModalEmployee}
          onClose={closeModal}
          className="rounded-[10px] p-3 sm:w-[400px]"
        >
          <div>
            <div className="p-4 space-y-2">
              <div className="flex justify-between items-center ">
                <h1 className="text-3xl font-medium">Confirmation</h1>
                <RxCross2 onClick={closeModal} className="cursor-pointer" />
              </div>

              <p className="text-sm py-3">Are you want delete this records ?</p>
            </div>

            <div className="flex justify-end">
              <Button
                className="w-28  rounded-3xl bg-[#f1f1f1]"
                onClick={closeModal}
              >
                Cancel
              </Button>
              <Button
                className=" w-28 rounded-3xl bg-gray-700 text-white  text-xs py-6 mx-2"
                onClick={handleConfirmParam}
              >
                Yes
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

const PopoverOptions = ({ row, onApprove, onReject }) => {
  const [threeDotsAdminTable, setThreeDotsAdminTable] = React.useState(null);
  const open = Boolean(threeDotsAdminTable);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setThreeDotsAdminTable(event.currentTarget);
  };

  const handleClose = () => {
    setThreeDotsAdminTable(null);
  };

  const handleApprove = () => {
    onApprove();
    handleClose();
  };

  const handleReject = () => {
    onReject();
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={threeDotsAdminTable}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box
          sx={{
            padding: "8px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CloseIcon
            style={{ marginLeft: "auto" }}
            onClick={() => handleClose()}
          />
          <IconButton color="success" onClick={handleApprove}>
            <ApproveIcon /> <Typography variant="body2">Active</Typography>
          </IconButton>
          <IconButton color="error" onClick={handleReject}>
            <RejectIcon /> <Typography variant="body2">Deactive</Typography>
          </IconButton>
        </Box>
      </Popover>
    </>
  );
};

export default Admin;
