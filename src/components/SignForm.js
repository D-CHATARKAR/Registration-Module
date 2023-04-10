

import logo from "./logo.png";
import React, { useState } from "react";
import { useFormik } from "formik";
import "./Form.css";
import LogForm from "./LogForm";




const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } 
  if (!values.middleName) {
    errors.middleName = "Required";
  } 
  if (!values.lastName) {
    errors.lastName = "Required";
  } 
  if (!values.gender) {
    errors.gender = "Required";
  } 
  if (!values.dob) {
    errors.dob = "Required";
  } 
  if (!values.glasswearer) {
    errors.glasswearer = "Required";
  } 

  if (!values.phone) {
    errors.phone = "Required";
  } else if (values.phone.length <10 || values.phone.length >10) {
    
   
     errors.phone = "Invalid mobile number ";
  
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters or greater";
  }else{
    let i=0;
    let n=0,cc=0,cs=0,s=0;
    for( i=0;i<values.password.length;i++){
     
      if(values.password.charCodeAt(i)>=48 && values.password.charCodeAt(i)<=57){
        n++;
      } else if(values.password.charCodeAt(i)===64 || values.password.charCodeAt(i)===36 ||
      values.password.charCodeAt(i)===42 || (values.password.charCodeAt(i)>=33 && values.password.charCodeAt(i)<=47) ){
        s++;
      }else if(values.password.charCodeAt(i)>=65 && values.password.charCodeAt(i)<=90){
        cc++;
      }
      else if(values.password.charCodeAt(i)>=97 && values.password.charCodeAt(i)<=122){
        cs++;
      }
    }
    if(cs===0){
      errors.password = "Password must have atleast one small characters";
    }
    if(cc==0){
      errors.password = "Password must have atleast one capital characters";
    }
    if(n===0){
      errors.password = "Password must have atleast one digit";
    }
    if(s===0){
      errors.password = "Password must have atleast one special symbol";
    }
  }

  
  if (!values.cpassword) {
    errors.cpassword = "Required";
  } else if (values.cpassword !== values.password) {
    errors.cpassword = "This field should match with password";
  }

  return errors;
};

const Form = () => {
  const [form, setForm] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      middleName:"",
      lastName:"",
      email: "",
      password: "",
      cpassword:""
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      {form ? (
        <LogForm></LogForm>
      ) : (
        <div className="div-center ">
          
            <div className="card">
              <div className="logo">
                 <img src={logo} alt="logo" /> 
                 <span>Clearly.com</span>
              </div>
            <form onSubmit={formik.handleSubmit}>
              <label htmlFor="userName">User Name</label>
              
              <div className="userName">
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="FirstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              {formik.errors.firstName ? (
                <div className="required">{formik.errors.firstName}</div>
              ) : null}
               <input
                id="middleName"
                name="middleName"
                type="text"
                placeholder="MiddleName"
                onChange={formik.handleChange}
                value={formik.values.middleName}
              />
              {formik.errors.middleName ? (
                <div className="required">{formik.errors.middleName}</div>
              ) : null}
               <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="LastName"
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
              {formik.errors.lastName ? (
                <div className="required">{formik.errors.lastName}</div>
              ) : null}
              </div>
              <br />
              <label htmlFor="gender">Gender</label>
              <br />
            <div className="radio inline rbtn"  >
              <input type="radio" value="Male" name="gender" /> Male
              <input type="radio" value="Female" name="gender" /> Female
              <input type="radio" value="Other" name="gender" /> Other
             
              {formik.errors.gender ? (
                <div className="required">{formik.errors.gender}</div>
              ) : null}
               </div>
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
              <label htmlFor="phone">Phone Number</label>
              <br />
              <input
                id="phone"
                name="phone"
                type="tel" pattern="[0-9]*" inputmode="numeric"
                placeholder="Enter phone number"
                onChange={formik.handleChange}
                value={formik.values.phone}
              />
              {formik.errors.phone ? (
                <div className="required">{formik.errors.phone}</div>
              ) : null}
              <br />
               <label htmlFor="dob">Date of Birth</label>
              <br />
              <input
                id="dob"
                name="dob"
                type="date"
                placeholder="Enter valid date of birth"
                onChange={formik.handleChange}
                value={formik.values.dob}
              />
              {formik.errors.dob ? (
                <div className="required">{formik.errors.dob}</div>
              ) : null}
              <br />
              <div>
              <label htmlFor="glass-wearer">Eye glass wearer?</label>
              <br />
              <input type="radio" value="Yes" name="glasswearer" />Yes
              <br />
              <input type="radio" value="No" name="glasswearer" /> No
              </div>
              
              {formik.errors.glasswearer ? (
                <div className="required">{formik.errors.glasswearer}</div>
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
                value={formik.values.passwordName}
              />
              {formik.errors.password ? (
                <div className="required">{formik.errors.password}</div>
              ) : null}
              <br />
              <label htmlFor="cpassword">Confirm Password</label>
              <br />
              <input
                id="cpassword"
                name="cpassword"
                type="password"
                placeholder="Re-enter Password"
                onChange={formik.handleChange}
                value={formik.values.cpassword}
              />
              {formik.errors.cpassword ? (
                <div className="required">{formik.errors.cpassword}</div>
              ) : null}
              <br />
              <br />
              
              <div>
                <button type="submit" className="btn btn-primary btn-block">SignUp</button>
              </div>
            </form>
            <p>
              Already have an account ?{" "}
              <button className="sbtn" onClick={() => setForm(true)}>LogIn</button>
            </p>
            </div>
        </div>
      )}
    </>
  );
};

export default Form;
