import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState,useEffect } from 'react'
import { time } from './Load';

function Loader() {

  const [percentage, setpercentage] = useState(0);

  const gsapRef = useRef();

  useEffect(()=>{

    let a = 0;

    const intervel = setInterval(()=>{
      a += Math.floor(Math.random()*5);
      setpercentage(a)
      if(a > 92){
        setpercentage(100)
        clearInterval(intervel);
      }
    },100);
  },[])

  if(percentage >= 100){
    gsap.to(".counter", {
      opacity:0,
      duration: 1,
      delay: 0.5,
      display:"none",
    })

    gsap.from(".title",{
      display:"none",
      duration: 1,
      delay: 2,
    })

    gsap.to(".title",{
      display:"block",
      duration: 1.2,
      stagger:1,
      ease:"power4.inOut",
      delay: 2,
    })

    gsap.to(gsapRef.current,{
      y:-1000,
      duration: 1.5,
      ease:"power4.inOut",
      delay: 3,
    })
  }

  return (
    <div>
      <div ref={gsapRef} className="loader w-[100vw] h-[100vh] flex items-center justify-center bg-customWhite">
        <div className="load-font w-[20rem] h-[10rem] flex items-center justify-center z-40">
          <h1 className='title text-[15rem] font-manrope z-0 hidden'>MAVEX</h1>
        <h1 className='counter text-9xl font-manrope z-0'>{percentage}%</h1>
        </div>
      </div>
    </div>
  )
}

export default Loader