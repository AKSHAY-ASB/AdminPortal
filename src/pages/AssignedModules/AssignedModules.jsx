import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Input, Button, Alert, Container, Select } from "../../components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { checkUsers, modules, status } from "../../utils";
import { fetchRolesSuccess } from "../../redux/slice/rolesSlice";

const validationSchema = Yup.object({
  mobileNumber: Yup.string()
    .required("Enter mobile number")
    .max(10)
    .matches(/^[6-9]\d{9}$/, "Enter valid mobile number"),
  password: Yup.string().required("Enter password").min(10),
  rememberMe: Yup.boolean(),
});

const initialValues = {
  mobileNumber: "",
  password: "",
  rememberMe: false,
};

const AssignedModules = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alertError, setAlertError] = useState(false);

  const onSubmit = (values) => {
    try {
      console.log(`Form Data: `, values);
      // alert();
      dispatch(fetchRolesSuccess(checkUsers));
      navigate("/");
    } catch (error) {
      setAlertError(true);
    }
  };
  const handleAllModules = () => {
    navigate("/allModules");
  };

  const handleAllRequest = () => {
    navigate("/allRequests");
  };

  const handleAllReports = () => {
    navigate("/allReports");
  };

  return (
    <Container>
      <div className="w-[40%] flex gap-4 justify-between">
        <div className="relative flex-1 flex lg:gap-10 flex-col p-4">
          <h1 className="capitalize text-[#525252] text-[26px]">
            Add New Module admin
          </h1>
          <div className="">
            <div className="flex flex-col ">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(formik) => (
                  <>
                    <Form className="flex flex-col gap-6">
                      <Input
                        label="Employee Id"
                        type="text"
                        name="empId"
                        placeholder="Enter Employee Id"
                        formik={formik}
                        disabled={alertError}
                        maxLength="10"
                      />
                      <Input
                        label="Name"
                        type="email"
                        name="empName"
                        placeholder="Enter Employee Name"
                        formik={formik}
                        disabled={alertError}
                        maxLength="10"
                      />
                      <Input
                        label="Email"
                        name="module"
                        placeholder="Enter Employee Email"
                        formik={formik}
                        disabled={alertError}
                      />
                      <Select
                        label="Module"
                        type="text"
                        name="module"
                        placeholder="Select Module"
                        options={modules}
                        formik={formik}
                        disabled={alertError}
                        maxLength="10"
                      />
                      <Select
                        label="Status"
                        name="text"
                        placeholder="Select Status"
                        options={status}
                        formik={formik}
                        disabled={alertError}
                      />

                      <div className="flex justify-center w-full">
                        <Button
                          type="submit"
                          name="Submit"
                          disabled={
                            !(formik.isValid && formik.dirty) || alertError
                          }
                          className="bg-[#000000] hover:opacity-85 text-white py-5 w-[150px] h-12"
                        />
                      </div>
                    </Form>
                    <div className="flex items-center justify- mt-10">
                      <Button
                        type="submit"
                        name="View Modules"
                        className="bg-[#e6e6e6] hover:opacity-85 text-black py-5 w-[150px] h-12"
                        onClick={handleAllModules}
                      />
                      <Button
                        type="submit"
                        name="View Requests"
                        className="bg-[#e6e6e6] hover:opacity-85 mx-5 text-black py-5 w-[150px] h-12"
                        onClick={handleAllRequest}
                      />
                      <Button
                        type="submit"
                        name="View Reports"
                        className="bg-[#e6e6e6] hover:opacity-85 text-black py-5 w-[150px] h-12"
                        onClick={handleAllReports}
                      />
                    </div>
                  </>
                )}
              </Formik>

              {alertError && <Alert errorMessage="Check your password" />}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AssignedModules;
