import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useNavigate, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userLoggedOut } from '../Schema/Slice'

function NavbarBuyer() {

    const status = useSelector((state) => state.strictLoginUsers.isLoggedIn)

    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    const dispatch = useDispatch();

    const naviagte = useNavigate();

    // logout functionality

    const logout = () => {
        dispatch(userLoggedOut());
        naviagte('/');
    }

    // animation

        useGSAP(() => {


            gsap.from(".navbar", {
                y: -100,
                duration: 2,
                ease: "power4.inOut",
                delay: 0.2
            })

            gsap.to(".navbar", {
                y: 0,
                duration: 2,
                ease: "power4.inOut",
                delay: 0.2,
            })

            gsap.from(".title", {
                y: -100,
                opacity: 0,
                duration: 1,
                delay: 1.5,
                stagger: 0.2,
                ease: "power4.Out",
            })
            gsap.to(".title", {
                y: 0,
                duration: 1,
                stagger: 0.2,
                delay: 1.5,
                ease: "power4.Out",
            })

            gsap.to(".border", {
                width: "100%",  // move from 0 to full width
                duration: 1,
                ease: "power4.inOut",
                delay: 3,
            });
    }, [])

    // Navbar component

    return (
        <div className='hi'>
            
            <div className="navbar max-md:text-[14px] max-md:flex max-md:justify-around
             flex items-center px-5 text-lg font-semibold font-manrope justify-between h-12 pt-5">
                
                <h1 className='max-md:hidden'>MAVEX</h1>
                <h1 className='pl-28 max-md:hidden md:hidden'>MENU</h1>
                <div className="left-nav flex gap-4">
                    <div className="">
                        <Link to={"/CreateSellerAccount"}><h1 className='seller max-md:w-[6.8rem]'>Become a Seller</h1></Link>

                        <div className="border w-0 h-1 bg-red-500"></div>
                    </div>
                    <div className="relative">
                    <div id='cart-badge' className={`w-2 h-2 bg-blue-500 absolute left-4 bottom-8 rounded-full ${totalQuantity > 0 ? 'block' : 'hidden'} `}></div>
                    <Link to={"/addtoCart"}>
                        <span class="material-symbols-outlined text-[1rem]">
                            shopping_cart
                        </span>
                    </Link>
                    </div>



                    {!status ? (
                        <>
                            <Link to={"/createAccount"}>
                                <h1>SIGNIN</h1>
                            </Link>

                            <Link to={"/loginUser"}>
                                <h1>LOGIN</h1>
                            </Link>
                        </>
                    ) :
                        <Link onClick={logout}>
                            <h1>LOGOUT</h1>
                        </Link>
                    }
                </div>
            </div>
            <div className="flex items-center justify-center ">
                <div className="title1 flex justify-center overflow-hidden w-screen items-center text-[18rem] md:text-[14.5rem]   max-md:text-[6rem]  max-md:pt-5 text-[black]">
                    {/* <h1 className='text-[18rem] text-[black]'>KUDOS</h1> */}
                    <h1 className='title'>M</h1>
                    <h1 className='title'>A</h1>
                    <h1 className='title'>V</h1>
                    <h1 className='title'>E</h1>
                    <h1 className='title'>X</h1>
                </div>
            </div>
        </div>
    )
}

export default NavbarBuyer