import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { resetpassword } from "../api/auth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "font-awesome/css/font-awesome.min.css";

export const ResetPass = () => {
  const { token } = useParams();
  const [data, setData] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { mutate, isError } = useMutation(
    ["resetpassword", token],
    () => {
      return resetpassword(token, data);
    },
    {
      onSuccess: () => {
        // alert("Password reset successfully");
        setSuccess(true);
      },
      onError: () => setSuccess(false),
    }
  );

  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });

  const handleFormSubmit = (values) => {
    setData({ password: values.password });
    mutate();
  };

  return (
    <div
      style={{ height: "70vh" }}
      className=" w-full flex items-center justify-center p-7"
    >
      <div
        className={`max-w-sm w-full px-4 py-4 bg-white rounded-md shadow-md border border-gray-600 flex flex-col items-center justify-center`}
      >
        <h1 className="text-2xl text-black font-semibold mb-4 text-center">
          Reset Password
        </h1>{" "}
        {(isError && (
          <div className="mb-4 w-full text-center text-white bg-red-500 p-2 rounded">
            Error resetting password
          </div>
        )) ||
          (success && (
            <div className="mb-4 w-full text-center text-white bg-green-500 p-2 rounded">
              Password reset successfully
            </div>
          ))}
        {!success && (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
          >
            {({ errors, touched }) => (
              <Form className="w-full flex flex-col items-center">
                <div className="mb-2 flex flex-col items-center relative w-full">
                  <label
                    htmlFor="password"
                    className="text-black text-xs font-medium mb-1 text-center"
                  >
                    New Password
                  </label>
                  <div className="relative">
                    <Field
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className={`px-2 py-1 text-sm border rounded-md w-full ${
                        errors.password && touched.password
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <div className="absolute inset-y-0 right-0 pr-2 flex items-center text-sm leading-5">
                      <i
                        onClick={() => setShowPassword(!showPassword)}
                        className={`fa ${
                          showPassword ? "fa-eye-slash" : "fa-eye"
                        } cursor-pointer`}
                      ></i>
                    </div>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xs font-medium text-center"
                  />
                </div>
                <div className="mb-2 flex flex-col items-center relative w-full">
                  <label
                    htmlFor="confirmPassword"
                    className="text-black text-xs font-medium mb-1 text-center"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Field
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      className={`px-2 py-1 text-sm border rounded-md w-full ${
                        errors.confirmPassword && touched.confirmPassword
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                    />
                    <div className="absolute inset-y-0 right-0 pr-2 flex items-center text-sm leading-5">
                      <i
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className={`fa ${
                          showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                        } cursor-pointer`}
                      ></i>
                    </div>
                  </div>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-xs font-medium text-center"
                  />
                </div>
                <div className="flex justify-center w-full">
                  <button
                    type="submit"
                    className="px-2 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600"
                  >
                    Reset Password
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};
