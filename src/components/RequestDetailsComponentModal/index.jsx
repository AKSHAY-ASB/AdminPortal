import React from "react";
import { Modal, Box, Typography, IconButton, Button } from "@mui/material";
import ApproveIcon from "@mui/icons-material/Check";
import RejectIcon from "@mui/icons-material/Close";
import CloseIcon from "@mui/icons-material/Close";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const data = [
  {
    id: 1,
    empName: "John Doe",
    moduleName: "Finance",
    subModule: "Loans",
    requestFor: "New Loan",
    status: "Pending",
    previousLoanAmount: 5000,
    requestedLoanAmount: 10000,
  },
  // More employee records...
];

const RequestDetailsComponentModal = ({
  isOpen,
  onClose,
  selectedEmployee,
  handleApprove,
  handleReject,
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          position: "relative",
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" align="center" gutterBottom>
          Request Details
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Module Name:</strong> {selectedEmployee.moduleName}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Sub Module:</strong> {selectedEmployee.subModule}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Request For:</strong> {selectedEmployee.requestFor}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Previous Loan Amount:</strong>{" "}
          {selectedEmployee.previousLoanAmount}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Requested Loan Amount:</strong>{" "}
          {selectedEmployee.requestedLoanAmount}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 3,
          }}
        >
          <ButtonComponent
            variant="contained"
            color="success"
            startIcon={<ApproveIcon />}
            onClick={() => handleApprove(selectedEmployee)}
          >
            Approve
          </ButtonComponent>
          <ButtonComponent
            variant="contained"
            color="error"
            startIcon={<RejectIcon />}
            onClick={() => handleReject(selectedEmployee)}
          >
            Reject
          </ButtonComponent>
        </Box>
      </Box>
    </Modal>
  );
};

export default RequestDetailsComponentModal;
