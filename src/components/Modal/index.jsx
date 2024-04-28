// import * as React from "react";
// import Button from "@mui/material/Button";
// import { styled } from "@mui/material/styles";
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
// import { Formik, Form } from "formik";
// import * as Yup from "yup";
// import {
//   Input,
//   Alert,
//   // Help,
// } from "../../components";
// import { useState } from "react";
// // import { items } from "../../utils";
// import { useSelector } from "react-redux";

// const BootstrapDialog = styled(Dialog)(({ theme }) => ({
//   "& .MuiDialogContent-root": {
//     padding: theme.spacing(2),
//   },
//   "& .MuiDialogActions-root": {
//     padding: theme.spacing(1),
//   },
// }));

// export default function Modal() {
//   const [open, setOpen] = React.useState(false);

//   const initialValues = {
//     mobileNumber: "",
//     password: "",
//     rememberMe: false,
//   };

//   const { mobileNumber } = useSelector((state) => state.login);
//   console.log("Mobile Number:", mobileNumber);

//   const [alertError, setAlertError] = useState(false);

//   const validationSchema = Yup.object({
//     mobileNumber: Yup.string()
//       .required("Enter mobile number")
//       .max(10)
//       .matches(/^[6-9]\d{9}$/, "Enter valid mobile number"),
//     password: Yup.string().required("Enter password").min(10),
//     rememberMe: Yup.boolean(),
//   });

//   const onSubmit = (values) => {
//     try {
//       console.log(`Form Data: `, values);
//       // dispatch(getUserLoginAction(values.mobileNumber));
//       // dispatch({type:USER_LOGIN, payload:values.password});
//     } catch (error) {
//       setAlertError(true);
//     }
//   };

//   const handleClickOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <Button variant="outlined" onClick={handleClickOpen}>
//         Open dialog
//       </Button>
//       <BootstrapDialog
//         onClose={handleClose}
//         aria-labelledby="customized-dialog-title"
//         open={open}
//       >
//         <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
//           Modal title
//         </DialogTitle>
//         <IconButton
//           aria-label="close"
//           onClick={handleClose}
//           sx={{
//             position: "absolute",
//             right: 8,
//             top: 8,
//             color: (theme) => theme.palette.grey[500],
//           }}
//         >
//           <CloseIcon />
//         </IconButton>
//         <DialogContent dividers>
//           <div className="w-full flex gap-4 justify-between">
//             <div className="relative flex-1 flex lg:gap-10 flex-col p-4">
//               <div className="flex flex-col">
//                 <div className="flex flex-col gap-2">
//                   <h1 className="text-2xl ">Create new Request</h1>
//                   <h1 className="text-2xl ">Module Name</h1>
//                   <Formik
//                     initialValues={initialValues}
//                     validationSchema={validationSchema}
//                     onSubmit={onSubmit}
//                   >
//                     {(formik) => (
//                       <Form className="flex flex-col gap-6">
//                         <Input
//                           type="text"
//                           name="param1"
//                           label="Parameter 1"
//                           placeholder="Type here"
//                           formik={formik}
//                         />
//                         <Input
//                           type="text"
//                           name="param2"
//                           label="Parameter 2"
//                           placeholder="Type here"
//                           formik={formik}
//                         />
//                         <Input
//                           type="text"
//                           name="param1"
//                           label="Parameter 3"
//                           placeholder="Type here"
//                           formik={formik}
//                         />
//                         <Input
//                           type="text"
//                           name="param2"
//                           label="Parameter 4"
//                           placeholder="Type here"
//                           formik={formik}
//                         />

//                         <div className="flex justify-center w-full">
//                           <Button
//                             type="submit"
//                             name="Login"
//                             disabled={
//                               !(formik.isValid && formik.dirty) || alertError
//                             }
//                             className="bg-black hover:opacity-85 text-white w-[288px] h-12"
//                           />
//                         </div>
//                       </Form>
//                     )}
//                   </Formik>

//                   {alertError && <Alert errorMessage="Check your password" />}

//                   {/* <div className="border-[1px] border-gray-200" /> */}

//                   {/* <div className="space-y-2">
//                 <p className="text-center">Do not have an account? </p>
//                 <Link to="/register" className="flex justify-center">
//                   <Button
//                     name="Register"
//                     className="w-[288px] h-12 bg-white text-black border border-[#322F35]"
//                   />
//                 </Link>
//               </div> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </DialogContent>
//         <DialogActions>
//           <Button autoFocus onClick={handleClose}>
//             Save changes
//           </Button>
//         </DialogActions>
//       </BootstrapDialog>
//     </React.Fragment>
//   );
// }

const Modal = ({ isOpen, onClose, children, className }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div
        className={`bg-white shadow-lg max-sm:m-2 sm:w-1/2 ${className}`}
        onClick={() => onClose()}
      >
        {children}
      </div>
    </div>
  );
};
export default Modal;
