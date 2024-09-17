import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import UpdateForm from '../Validation/UpdateForm';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { url } from '../info';


function AddProducts({ products }) {

  const navigate = useNavigate();

  const [pro, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${url}/api/user/getProducts`);
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);



  const handleDelete = async (product) => {
    try {
      await axios.delete(`${url}/api/user/DeleteProduct/${product}`);
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = (product) => {
    setSelectedProduct(product);
    setIsFormVisible(true); // Show the update form
  };

  const handleCloseForm = () => {
    setIsFormVisible(false); // Hide the update form
    setSelectedProduct(null); // Clear the selected product
  };

  const check = async () => {
    const token = localStorage.getItem("token");
    console.log("token: " + token)

    if (token) {
      try {
        // Decode the token
        const decodedToken = jwtDecode(token);
        console.log(decodedToken.email); // This will contain the token's payload

        await axios.post(`${url}/api/user/checkSeller`, {
          email: decodedToken.email
        },
          {
            headers: {
              "Content-Type": "application/json"
            },
            withCredentials: true  // Required for cookies to be sent with the request
          }).then(async response => {
            if (response.data.status === 200) {
              // alert("you are a seller")
              navigate("/addproductdetails");
            }
            else {
              alert("you are not a seller")
            }
          })
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }

    useGSAP(() =>{
        gsap.from(".box1",{
          opacity:0,
          delay:3,
          duration:2,
          y:-50,
          ease:"power4.inOut"
        }),
        gsap.to(".box1",{
          opacity:1,
          duration:2,
          delay:3,
          y:0,
          ease:"power4.inOut"
        })

    })




  }
  return (
    <div className=" flex flex-wrap gap-4 items-center px-5 pb-16">

      {/* add here */}
      {products && products.length > 0 ? (
        products.map((product, index) => (
          <div key={index} className=" w-[22rem] h-[40rem] max-md:w-[19rem] max-md:h-[35rem] max-md:justify-center p-4 text-black rounded-lg flex flex-col">
            <img src={`${url}${product.image}`} alt={product.name} className=" w-full h-[23rem] object-cover rounded-md" />
            <h1 className="text-2xl font-bold mt-4 font-roboto whitespace-nowrap overflow-hidden text-ellipsis">{product.name}</h1>
            <p className="text-lg font-bold font-manrope opacity-55">{product.category}</p>
            <p className="mt-1 font-roboto font-medium">⭐ {product.ratings}</p>
            <p className="mt-2 text-xl font-roboto font-medium">₹ {Math.floor(product.price)}</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-1 mt-3">
              <span class="material-symbols-outlined">
                update
              </span>
              <button onClick={() => handleUpdate(product)}> Update</button>
              </div>
              <div className="flex gap-1">
              <span class="material-symbols-outlined">
                close
              </span>
              <button className='float-right' onClick={() => handleDelete(product.id)}>Delete</button>
              </div>
            </div>

          </div>
        ))
      ) : (""
      )}

      <div className="w-[10rem] h-[8rem] bg-white rounded-xl flex flex-col items-center justify-center">
        <Link onClick={check}>
          <div onClick={check} className="circle cursor-pointer w-14 h-14 rounded-full bg-gray-50 ml-5 flex items-center justify-center">
            <span className="material-symbols-outlined text-black text-4xl">
              add
            </span>
          </div>
          <h1 className='font-sans text-lg font-medium'>Add Product</h1>
        </Link>
      </div>

      {isFormVisible && selectedProduct && (
        <UpdateForm
          product={selectedProduct}
          onClose={handleCloseForm}
          onUpdate={() => {
            fetchProducts(); // Refresh the product list after updating
            handleCloseForm();
          }}
        />
      )}

    </div>
  )
}


export default AddProducts