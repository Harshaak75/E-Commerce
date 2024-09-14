import React from 'react'
import { signupValidate } from '../Validation/Validate'
import CustomInput from "../Custom Components/CustomInputs"
import { Formik, Form } from "formik"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { userLoggedIn } from '../Schema/Slice'
import { useNavigate } from 'react-router-dom'

function SigninPage() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const onSubmit = async (values, actions) => {

        try {
            await axios.post("https://e-commerce-frontend-klxu.onrender.com/api/user/createAccount", {
                email: values.email,
                password: values.password
            },
                {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    withCredentials: true  // Required for cookies to be sent with the request
                },
            ).then(async response => {
                await new Promise((resolve) => {
                    setTimeout((resolve), 1000)
                })

                actions.resetForm();

                console.log("hiii",response);

                const { status, token } = response.data;

                if(status === 200){
                    localStorage.setItem("token", token);
                    dispatch(userLoggedIn())
                    navigate("/")
                    alert("Account created successfully")
                }
                else{
                    alert("An error occurred while creating the account. Please try again.")
                }

            })

        } catch (error) {
            console.error(error);
            alert("An error occurred while creating the account. Please try again.")
        }

    }
    return (
        <section className="box h-screen flex items-center justify-center">

            <div className="main w-full sm:max-lg:w-[25rem] sm:max-lg:h-[35rem] lg:w-[26rem] lg:h-[36rem] shadow-xl rounded-xl">
                <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 mt-7 ml-6 md:max-lg:text-3xl lg:max-xl:text-3xl xl:max-2xl:text-3xl 2xl:text-3xl">
                    Create an account
                </h1>
                <Formik
                    initialValues={{ email: '', password: '', Repassword: '' }}
                    validationSchema={signupValidate}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>

                            <CustomInput
                                label="Email"
                                type="email"
                                name="email"
                                placeholder="Enter your  email" />

                            <CustomInput
                                label="Password"
                                type="password"
                                name="password"
                                placeholder="Enter your password" />

                            <CustomInput
                                label="Confirm Password"
                                type="password"
                                name="Repassword"
                                placeholder="Enter your password again" />

                            <button disabled={isSubmitting}
                                type="submit"
                                className="btn mt-12 flex w-[84%] ml-7 items-center justify-center px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                Sign Up
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>

        </section>
    )
}

export default SigninPage