import React from 'react'
import { Formik, Form } from "formik"
import CustomInput from '../Custom Components/CustomInputs'
import { SellerSignin } from '../Validation/Validate'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

function SigninSeller() {

    const navigate = useNavigate();

    const onSubmit = async (values, actions) => {
        try {
            await axios.post("https://e-commerce-backend-1k7q.onrender.com/api/user/createSellerAccount",{
                name: values.name,
                email: values.email,
                password: values.password,
                gst: values.gst
            },{
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true  // Required for cookies to be sent with the request

            }).then(async response =>{
                await new Promise((resolve) => {
                    setTimeout((resolve), 1000)
                })
                actions.resetForm();

                const { status, token } = response.data;
                
                if(response.data.status === 200){
                    localStorage.setItem("token", token);
                    // dispatch(userLoggedIn())
                    navigate("/Home")
                    alert("Account created successfully")
                }
                else{
                    alert("An error occurred while creating the account. Please try again.")
                }

            })
        } catch (error) {
            console.log(error)
            alert("Error: ");
        }
    }
    return (
        <section className="box h-screen flex items-center justify-center">

            <div className="main w-full sm:max-lg:w-[25rem] sm:max-lg:h-[35rem] lg:w-[26rem] lg:h-[48.9rem] shadow-xl rounded-xl">
                <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 mt-7 ml-6 md:max-lg:text-3xl lg:max-xl:text-3xl xl:max-2xl:text-3xl 2xl:text-3xl">
                    Create Seller Account
                </h1>
                <Formik
                    initialValues={{name: '', email: '', password: '', Repassword: '', gst: '' }}
                    validationSchema={SellerSignin}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>

                            <CustomInput
                                label="Name"
                                type="text"
                                name="name"
                                placeholder="Enter your name (as per PAN Card)" />

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

                            <CustomInput
                                label="GSTin Number"
                                type="text"
                                name="gst"
                                placeholder="Enter your GSTin number" />

                            <button disabled={isSubmitting}
                                type="submit"
                                className="btn mt-12 flex w-[84%] ml-7 items-center justify-center px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                Sign up
                            </button>

                            <p className='ml-7 mt-3 text-lg font-roboto'>Already have an account? 
                                <Link to={"/loginSellerAccount"} > <span className='text-blue-600 font-bold'>Login</span></Link> </p>
                        </Form>
                    )}
                </Formik>
            </div>

        </section>
    )
}

export default SigninSeller