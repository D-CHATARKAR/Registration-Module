import logo from "./logo.png"
import React, { useState } from "react";
import { useFormik } from "formik";
import "./Form.css";
import SignForm from "./SignForm";

const validate = (values) => {
  const errors = {};
 

  

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters or greater";
  }

  return errors;
};

const LogForm = () => {
  const [form, setForm] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      {form ? (
        <SignForm></SignForm>
      ) : (
        <div className="div-center">
          <div className="card">
          <div className="logo">
              <img src={logo} alt="logo" /> 
              <span>Clearly.com</span>
          </div>
            
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="email">Email Address</label>
              <br />
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter valid email address"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.errors.email ? (
                <div className="required">{formik.errors.email}</div>
              ) : null}
              <br />
              <label htmlFor="password">Password</label>
              <br />
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter Password"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              {formik.errors.password ? (
                <div className="required">{formik.errors.password}</div>
              ) : null}
              <br />
              <br />
                <button type="submit" className="btn btn-primary btn-block">LogIn</button>
              
            </form>
            <p>
              Create an account ?
              <button className="sbtn"
                style={{ marginLeft: "3px" }}
                onClick={() => setForm(true)}
              >
                {" "}
                Sign Up
              </button>
            </p>
            <a style={{ color: "red" }} href="">
              {" "}
              Forgot Password?
            </a>
            </div>
        </div>
      )}
    </>
  );
};

export default LogForm;
