// const Admin = () => {
//   return <div>Admin</div>;
// };

// export default Admin;

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import {
  Input,
  Password,
  Button,
  Alert,
  Container,
  // Help,
  CheckBox,
} from "../../components";
import { useState } from "react";
// import { items } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { checkUsers } from "../../utils";
import { fetchRolesSuccess } from "../../slice/rolesSlice";

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

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { mobileNumber } = useSelector((state) => state.login);
  // console.log("Mobile Number:", mobileNumber);

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
                      name="mobileNumber"
                      placeholder="Enter Employee Id"
                      formik={formik}
                      disabled={alertError}
                      maxLength="10"
                    />
                    <Input
                      type="text"
                      name="mobileNumber"
                      placeholder="Enter Employee Name"
                      formik={formik}
                      disabled={alertError}
                      maxLength="10"
                    />
                    <Input
                      name="text"
                      placeholder="Enter Employee Email"
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
                        className="bg-black hover:opacity-85 text-white py-5 w-[288px] h-12"
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

export default Admin;
