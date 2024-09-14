import React, { useEffect, useState } from 'react'
import NavbarBuyer from './NavbarBuyer'
import Footer from '../Footer'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from './fetch'
import { addtoCart } from '../Schema/Cartslice'
import Addtocart from './Addtocart'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function HomePageBuyer() {
    const [products, setproduct] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();
    let filteredProducts;

    const handleAddToCart = (item) => {
        console.log(item)
        dispatch(addtoCart(item))
    }

    useEffect(() => {
        fetchProduct().then((data) => setproduct(data));
    }, []);

    // Filter products based on search query
    if (products && products.length > 0) {
        filteredProducts = products.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    // for animations

    useGSAP(() => {
        gsap.from(".search-bar", {
            opacity: 0,
            delay: 1,
            duration: 1.5,
            y: -50,
            ease: "power4.inOut"
        }),
            gsap.to(".search-bar", {
                opacity: 1,
                duration: 1.5,
                delay: 1,
                y: 0,
                ease: "power4.inOut"
            }),
            gsap.from(".heading", {
                opacity: 0,
                delay: 1.2,
                duration: 1.5,
                y: -50,
                ease: "power4.inOut"
            }),
            gsap.to(".heading", {
                opacity: 1,
                duration: 1.5,
                delay: 1.2,
                y: 0,
                ease: "power4.inOut"
            }),
            gsap.from(".box1", {
                opacity: 0,
                delay: 3,
                duration: 2,
                y: -50,
                ease: "power4.inOut"
            }),
            gsap.to(".box1", {
                opacity: 1,
                duration: 2,
                delay: 3,
                y: 0,
                ease: "power4.inOut"
            })

    })

    return (
        <div>
            <NavbarBuyer />

            {/* SEARCH BAR */}

            <form action="" method="post">
                <div class="search-bar">
                    <span class="material-symbols-outlined text-3xl text-white">
                        search
                    </span>
                    <input autoComplete="off" type="text" placeholder="Search for Products" className="search-item text-white font-manrope" name="item" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
            </form>

            {/* DEAL */}

            <h1 className='heading text-5xl font-roboto mt-16 pl-[10.8%] font-bold'>Today's Deal</h1>

            {/* list of items */}

            <div className="box1 flex flex-wrap gap-6 items-center  px-[11%] pb-16 pt-10">
                {filteredProducts && filteredProducts.length > 0 ? (
                    filteredProducts.map((product, index) => (
                        <div key={index} className="box1 w-[22rem] h-[40rem] p-4 text-black rounded-lg flex flex-col">
                            <img src={`https://e-commerce-backend-1k7q.onrender.com${product.image}`} alt={product.name} className=" w-full h-[23rem] object-cover object-top  rounded-md" />
                            <h1 className="text-3xl font-bold mt-4 font-roboto whitespace-nowrap overflow-hidden text-ellipsis">{product.name}</h1>
                            <p className="text-lg font-bold font-manrope opacity-55">{product.category}</p>
                            <p className="mt-1 font-roboto font-medium">⭐ {product.ratings}</p>
                            <p className="mt-2 text-xl font-roboto font-medium">₹ {Math.floor(product.price)}</p>
                            <button className='text-sm px-4 mt-5 py-2.5 w-full font-semibold tracking-wide bg-gray-800 hover:bg-gray-900 text-white rounded-md' onClick={() => handleAddToCart(product)}>Add to Cart</button>
                        </div>
                    ))
                ) : (<p className='no-product text-xl font-semibold'>No Products listed</p>
                )}

            </div>

            <Footer />
        </div>
    )
}

export default HomePageBuyer