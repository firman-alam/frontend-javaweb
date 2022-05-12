import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button, Divider, TextField } from "@mui/material";

import { register } from "../../features/Auth";
import { clearMessage } from "../../features/Message";
import "./Login.scss";
import { images } from "../../constants";

// Yup Validation Schema
const ValidationSchema = yup.object({
  // firstName: yup.string().required("First Name is required"),
  // lastName: yup.string().required("Last Name is required"),
  userName: yup.string().required("User Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Your password is too short")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Please retype your password")
    .oneOf([yup.ref("password"), null], "Password not match"),
});

const SignUp = () => {
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  // Formik Initialization Values
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      // console.log(JSON.stringify(values));
      dispatch(register(JSON.stringify(values)));
    },
    validationSchema: ValidationSchema,
  });

  return (
    <div className="app__login">
      <div className="app__login-left">
        <h1>Sign Up</h1>
        {/* Form */}
        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="userName"
            name="userName"
            label="User Name"
            variant="standard"
            value={formik.values.userName}
            onChange={formik.handleChange}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
            onBlur={formik.handleBlur}
          />
          <TextField
            id="email"
            name="email"
            label="Email"
            variant="standard"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            onBlur={formik.handleBlur}
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            type="password"
            variant="standard"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
          />
          <TextField
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            label="Confirm Password"
            variant="standard"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            onBlur={formik.handleBlur}
          />
          <Button type="submit" variant="outlined">
            Sign Up
          </Button>
        </form>
        <Divider />
        <a href="" onClick={() => navigate("/")}>
          <p>Have an account? Sign In</p>
        </a>
      </div>
      <div className="app__login-right">
        <img src={images.people2} alt="people" />
      </div>
      {message && (
        <div className="message">
          <div className={successful ? "message-success" : "message-danger"}>
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
