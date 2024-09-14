import * as yup from "yup";

// custom validation using the formik and yup

const Passwordrules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const gstRegex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

export const signupValidate = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password:yup.string().min(5).matches(Passwordrules, {message: "Please create a strong password"}).required("Required"),
    Repassword:yup.string().oneOf([yup.ref("password"), null], "Password must match").required("Required"),
})

export const loginValidate = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().min(5).required("Required"),
})

export const SellerSignin = yup.object().shape({
    name:yup.string("Please enter a valid name").required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    password:yup.string().min(5).matches(Passwordrules, {message: "Please create a strong password"}).required("Required"),
    Repassword:yup.string().oneOf([yup.ref("password"), null], "Password must match").required("Required"),
    gst: yup.string().matches(gstRegex, "Please enter a valid GST number").required("GST number is required")
})

export const SellerLogin = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Required"),
    password:yup.string().min(5).matches(Passwordrules, {message: "Please create a strong password"}).required("Required"),
})