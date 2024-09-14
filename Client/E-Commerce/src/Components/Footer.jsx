import React from 'react'

function Footer() {
  return (
    <div className="w-[100%] h-[40rem] relative flex justify-center bg-gradient-to-br from-[#FA5FED] to-[#915BFF]">
    <div className="w-[80%] h-[70%] absolute bottom-0 bg-[#1A1A1A] rounded-t-3xl flex items-center flex-col pt-10">
        <div className="footerBox w-[90%] h-[15rem] flex flex-wrap justify-evenly text-white gap-10">
            <div className="brand">
                <h1 className='font-manrope text-6xl font-bold'>MAVEX</h1>
            </div>
            <div className="about1">
                <div className="list1">
                    <h3 className='font-roboto text-2xl font-bold pb-3'>Get to Know Us</h3>
                    <p className='para'>About Us</p>
                    <p className='para'>Careers</p>
                    <p className='para'>Press Releases</p>
                    <p className='para'>Mavex Science</p>
                </div>
            </div>
            <div className="about2">
                <div className="list2">
                    <h3 className='font-roboto text-2xl font-bold pb-3'>Make Money with Us</h3>
                    <p className='para'>Sell on Mavex</p>
                    <p className='para'>Protect and Build Your Brand</p>
                    <p className='para'>Become an Affiliate</p>
                    <p className='para'>Supply to Mavex</p>
                </div>
            </div>
            <div className="socialMedia">
                <h3 className='font-roboto text-2xl font-bold pb-3'>Connect with Us</h3>
                <div className="list3 flex items-center gap-3">

                    {/* <p className='para'>Sell on Mavex</p> */}
                    <img className='w-10 h-10' src="https://www.pikpng.com/pngl/b/57-572881_twitter-linkedin-logo-png-transparent-white-clipart.png" alt="" />
                    <img className='w-10 h-10 ml-2' src="https://www.ifad.org/documents/36783902/47179339/Twitter-256.png/3598d270-83f2-f842-1795-2bdd7377d3e8?t=1673367280549&download=true" alt="" />
                    <img className='w-16 h-11' src="https://awareak.org/wp-content/uploads/2023/07/CITYPNG.COMHD-White-Instagram-Round-Logo-Icon-PNG-1600x1200-1.png" alt="" srcset="" />
                </div>
            </div>
        </div>
        <div className="bg-white h-[0.2rem] w-[97%]"></div>

        <div className="text-white font-roboto text-xl bottom-0 absolute pb-3">
            <p>Maxev 2024. All rights reserved.</p>
        </div>
    </div>
</div>
  )
}

export default Footer