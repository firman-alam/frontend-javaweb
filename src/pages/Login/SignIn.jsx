import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button, Divider, TextField } from "@mui/material";

import "./Login.scss";
import { images } from "../../constants";
import { login } from "../../features/Auth";
import { clearMessage } from "../../features/Message";

// Yup Validation Schema
const ValidationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Your password is too short")
    .required("Password is required"),
});

const Signin = () => {
  // const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  // const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const handleLogin = (values) => {
    const { username, password } = values;
    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        navigate("/Home");
      })
      .catch(() => {
        // setLoading(false);
      });
  };

  if (isLoggedIn) {
    navigate("/Home");
  }

  // Formik initialization values
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      // console.log(JSON.stringify(values));
      handleLogin(values);
    },
    validationSchema: ValidationSchema,
  });

  return (
    <div className="app__login">
      <div className="app__login-left">
        <h1>Sign In</h1>
        {/* Form */}
        <form onSubmit={formik.handleSubmit}>
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
            variant="standard"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            onBlur={formik.handleBlur}
          />
          <Button type="submit" variant="outlined">
            Sign In
          </Button>
        </form>
        <Divider />
        <Button variant="outlined" onClick={() => navigate("/Register")}>
          Create Account
        </Button>
      </div>
      <div className="app__login-right">
        <img src={images.people2} alt="people" />
      </div>
    </div>
  );
};

export default Signin;
