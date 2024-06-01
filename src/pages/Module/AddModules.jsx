import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Input, Button, Alert, Container, Select } from "../../components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { checkUsers, modulesName } from "../../utils";
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

const AddModules = () => {
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

  const options = [
    { key: "Active", value: "active" },
    { key: "DeActive", value: "deactive" },
  ];

  return (
    <Container>
      <div className="w-[40%] flex gap-4 justify-between">
        <div className="relative flex-1 flex lg:gap-10 flex-col p-4">
          <div className="">
            <div className="flex flex-col ">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(formik) => (
                  <Form className="flex flex-col gap-6">
                    <Input
                      type="text"
                      label="Employee Id"
                      name="empId"
                      placeholder="Enter Employee Id"
                      formik={formik}
                      disabled={alertError}
                      maxLength="10"
                    />
                    <Input
                      type="text"
                      label="Employee Name"
                      name="empName"
                      placeholder="Enter Employee Name"
                      formik={formik}
                      disabled={alertError}
                      maxLength="10"
                    />
                    <Input
                      type="text"
                      label="Employee Email"
                      placeholder="Enter Employee Email"
                      name="empEmail"
                      formik={formik}
                      disabled={alertError}
                    />
                    <Select
                      name="module"
                      label="Select Module"
                      options={modulesName}
                    />
                    <Select name="status" label="Status" options={options} />

                    <div className="flex justify-center w-full">
                      <Button
                        type="submit"
                        name="Submit"
                        disabled={
                          !(formik.isValid && formik.dirty) || alertError
                        }
                        className="bg-black hover:opacity-85 text-white py-7 w-[200px] h-12"
                      />
                    </div>
                  </Form>
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

export default AddModules;
