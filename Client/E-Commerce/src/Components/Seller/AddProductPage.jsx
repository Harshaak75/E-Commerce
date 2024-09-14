import React from 'react'
import Navbar from './Home Page/Navbar'
import CustomInput from '../Custom Components/CustomInputs'
import { Formik, Field, Form } from "formik";
import { Link } from 'react-router-dom'
import axios from 'axios';

function AddProductPage() {

    const onSubmit = async (values, actions) => {

        const formData = new FormData();

        // Append form fields to FormData
        formData.append('name', values.name);
        formData.append('category', values.category);
        formData.append('price', values.price);
        formData.append('ratings', values.ratings);
        formData.append('description', values.description);
        formData.append('discount', values.discount);
        formData.append('image', values.image);


        try {
            await axios.post("https://e-commerce-backend-1k7q.onrender.com/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data", // Correct content type for file uploads
                },
                withCredentials: true  // Required if you're dealing with cookies
            }).then(async response => {
                await new Promise((resolve) => {
                    setTimeout((resolve), 1000)
                })

                console.log("hiii",response);


            await new Promise((resolve) => setTimeout(resolve, 1000));

                actions.resetForm();

            //     console.log("hiii",response);

                if(response.data.status === 200){
                    alert(response.data.message)
                }
                else{
                    alert(response.data.message)
                }
            })

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className="navbar flex items-center px-5 text-lg font-semibold font-manrope justify-between h-12 ">
                <h1>MAVEX</h1>
                <h1>MENU</h1>
                <div className="left-nav flex gap-4">
                    <h1>ABOUT</h1>
                    <Link>
                        <h1>LOGOUT</h1>
                    </Link>
                </div>
            </div>
            <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Product Form</h2>
                <Formik
                    initialValues={{ name: '', category: '', price: '', ratings: '', description: '', discount: '', image: '' }}
                    // validationSchema={signupValidate}
                    onSubmit={async(values, actions) => {
                        await onSubmit(values, actions); // Call the passed `onSubmit` function with the form values
                    }}
                >
                    {({ isSubmitting, setFieldValue }) => (
                        <Form>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Left Column */}
                                <div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                                        <Field
                                            type="text"
                                            name="name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                            placeholder="Enter product name"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
                                        <Field
                                            as="select"
                                            name="category"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                        >
                                            <option value="">Select a category</option>
                                            <option value="clothes">Clothes</option>
                                            <option value="shoes">Shoes</option>
                                            <option value="accessories">Accessories</option>
                                        </Field>
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                                        <Field
                                            type="number"
                                            name="price"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                            placeholder="Enter price"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Ratings (1-5)</label>
                                        <Field
                                            type="number"
                                            name="ratings"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                            placeholder="Enter ratings (1 to 5)"
                                            min="1"
                                            max="5"
                                        />
                                    </div>
                                </div>

                                {/* Right Column */}
                                <div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
                                        <Field
                                            as="textarea"
                                            name="description"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                            placeholder="Enter product description"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Discount (%)</label>
                                        <Field
                                            type="number"
                                            name="discount"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                            placeholder="Enter discount percentage"
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Upload Image</label>
                                        <input
                                            type="file"
                                            name="image"
                                            accept="image/*"
                                            onChange={(event) => {
                                                setFieldValue("image", event.currentTarget.files[0]);
                                            }}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md"
                                        />
                                    </div>
                                </div>
                            </div>


                            <button disabled={isSubmitting}
                                type="submit"
                                className="btn mt-12 flex w-[84%] ml-7 items-center justify-center px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                Add Product
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>

    )
}

export default AddProductPage