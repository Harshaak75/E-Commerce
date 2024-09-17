import React, { useRef, useState, useEffect } from 'react'
import Navbar from "./Navbar"
import Footer from '../../Footer'
import AddProducts from '../AddProducts'
import gsap from 'gsap'
import axios from 'axios'
import { useGSAP } from '@gsap/react'
import { url } from '../../info'

function Home() {

  const [products, setproducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${url}/api/user/getProducts`)
        setproducts(response.data.products)

        console.log(response.data.products[0].image)
      } catch (error) {
        console.log("error in product", error)
      }
    }

    fetchProduct()
  }, [])

  // animation
  
  useGSAP(() =>{
    gsap.from(".add",{
      opacity:0,
      delay:1,
      duration:1.5,
      y:-50,
      ease:"power4.inOut"
    }),
    gsap.to(".add",{
      opacity:1,
      duration:1.5,
      delay:1,
      y:0,
      ease:"power4.inOut"
    })
  })
  return (

    <>

      <div className='w-[100vw] h-[100vh] overflow-x-hidden '>

        <Navbar />
        

        <div className="h-[15rem] overflow-hidden flex flex-col items-center justify-center text-5xl font-manrope font-semibold">
          <h1 className='add whitespace-nowrap max-md:text-[2rem]'>ADD PRODUCTS</h1>
        </div>


        {/* ADD PRODUCTS */}

        <AddProducts products={products}/>


        {/* FOOTER */}

        <Footer />


      </div>
    </>
  )
}

export default Home