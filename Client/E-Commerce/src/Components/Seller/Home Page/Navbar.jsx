import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

import { useNavigate, Link } from 'react-router-dom'

function Navbar() {

    const navigate = useNavigate();

    const logout = () =>{
        // localStorage.removeItem('token')
        navigate('/loginSellerAccount');
    }

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
    })
    return (
        <div className=''>
            <div className="navbar flex items-center px-5 text-lg font-semibold font-manrope justify-between h-12 
            max-md:text-[14px] max-md:flex max-md:justify-around 
            ">
                <h1 className=''>MAVEX</h1>
                <h1 className='pl-28 max-md:hidden md:hidden'>MENU</h1>
                <div className="left-nav flex gap-4">
                    <h1>ABOUT</h1>
                    <Link onClick={logout}>
                    <h1>LOGOUT</h1>
                    </Link>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <div className="title1 flex justify-center items-center text-[18rem] md:text-[14.5rem]   max-md:text-[6rem]  max-md:pt-5 text-[black]">
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


export const BitNav = () =>{
    <div className="navbar flex items-center px-5 text-lg font-semibold font-manrope justify-between h-12 ">
                <h1>MAVEX</h1>
                <h1>MENU</h1>
                <div className="left-nav flex gap-4">
                    <h1>ABOUT</h1>
                    <Link onClick={logout}>
                    <h1>LOGOUT</h1>
                    </Link>
                </div>
            </div>
}


export default Navbar