import React from 'react'
import { Form, Formik } from "formik"
import axios from 'axios'

import CustomInput from '../Custom Components/CustomInputs'

import { SellerLogin } from '../Validation/Validate'
import { useNavigate } from 'react-router-dom'
import { url } from '../info'

function LoginSeller() {

    const navigate = useNavigate();

    const login = async (values, actions) => {

        try {
            await axios.post(`${url}/api/user/loginSeller`, {
                email: values.email,
                password: values.password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
                .then(async response => {
                    await new Promise((resolve) => {
                        setTimeout((resolve), 1000)
                    })

                    actions.resetForm();

                    const { status, token } = response.data;
                    
                    if (response.data.status === 200) {
                        localStorage.setItem("token", token);
                        alert("login success")
                        navigate("/Home")
                    }
                    else {
                        alert("login failed, try again")
                    }
                })

        } catch (error) {
            console.error(error)
        }
    }
    return (
        <section className="box h-screen flex items-center justify-center">

            <div className="Loginmain  w-full  sm:max-lg:w-[23rem] sm:max-lg:h-[28rem] lg:w-[23rem] lg:h-[28rem] shadow-xl rounded-xl">
                <h1 className="text-2xl flex items-center justify-center mr-7 font-bold leading-tight tracking-tight text-gray-900 mt-7 ml-6 md:max-lg:text-3xl lg:max-xl:text-3xl xl:max-2xl:text-3xl 2xl:text-3xl">
                    Log in
                </h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={SellerLogin}
                    onSubmit={login}
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

                            <button disabled={isSubmitting}
                                type="submit"
                                className="btn mt-12 flex w-[84%] ml-7 items-center justify-center px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                Login
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>

        </section>
    )
}

export default LoginSeller