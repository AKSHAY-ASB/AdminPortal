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

const Login = () => {
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
        {/* <div className="hidden lg:flex flex-1 w-1/2">
          <div className="bg-[#D9D9D9] w-full">
            <div className="h-[671px] flex items-center justify-center">
              image
            </div>
          </div>
        </div> */}

        <div className="relative flex-1 flex lg:gap-10 flex-col p-4">
          {/* Help  */}
          {/* <div className="absolute right-7">
            <Help helpTitle="Login Issues" items={items} />
          </div> */}

          <div className="flex flex-col mt-14">
            <div className="flex flex-col gap-8">
              <h1 className="text-3xl text-center">
                Welcome to OneApp Admin Portal
              </h1>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {(formik) => (
                  <Form className="flex flex-col gap-6">
                    <Input
                      type="number"
                      name="mobileNumber"
                      label="Enter mobile number"
                      placeholder="Enter mobile number"
                      formik={formik}
                      disabled={alertError}
                      maxLength="10"
                    />
                    <Password
                      label="password"
                      name="password"
                      placeholder="Enter your password"
                      formik={formik}
                      disabled={alertError}
                    />

                    <div className="flex justify-between items-center">
                      <CheckBox
                        label="Remember Me"
                        name="rememberMe"
                        disabled={alertError}
                        className={`${
                          alertError ? "text-[#696969]" : "text-black"
                        }`}
                      />

                      <Link
                        to={alertError ? "" : "/register/Unregistermobile"}
                        className={`text-sm underline ${
                          alertError ? "text-[#525252]" : ""
                        }`}
                      >
                        Forgot Password?
                      </Link>
                    </div>

                    <div className="flex justify-center w-full">
                      <Button
                        type="submit"
                        name="Login"
                        disabled={
                          !(formik.isValid && formik.dirty) || alertError
                        }
                        className="bg-black hover:opacity-85 text-white w-[288px] h-12"
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

export default Login;
