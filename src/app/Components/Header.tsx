"use client"
import Link from "next/link"
import Image from "next/image"
import { AiOutlineClose } from "react-icons/ai"
import {HiShoppingCart} from "react-icons/hi"
import {HiBars3} from "react-icons/hi2"
import { Work_Sans } from "next/font/google"
import { useState } from "react"


const work_sans=Work_Sans({
    subsets:['latin'],
    display:'swap',
    weight: ["100","200","300","400","500","600","700","800","900"],
})
const Header = () => {
    const [navbar, setNavbar]=useState(false)
  return (
    <>
        <header className="static md:absolute top-[60px] left-[60px] right-[60px]">
                <button className="absolute top-[50px] right-2  lg:hidden" onClick={() => setNavbar(!navbar)}>
                    {navbar ? (
                        <AiOutlineClose/>
                        ) : ( <HiBars3 className="text-[#000] h-[28px] w-[40px] z-50" /> )}
                </button>
                <div className="lg:flex hidden justify-between absolute top-[60px] left-[60px] right-[60px] "> 
                        <div>
                            <p className="fs-[13px] leading-6 bg-[#fff9bd] text-[#fab005] px-[13.33px]  rounded-[10px] font-bold uppercase ">A simple Mantine template</p>
                        </div>
                        <div>
                            <ul className="flex gap-[30px] justify-center items-center text-[#000]">
                                <li>
                                    <Link href={"/Carousel"}>Carousel</Link>
                                </li>
                                <li>
                                    <Link href={"/Card"}>Card</Link>
                                </li>
                                <li>
                                    <Link href={"/FAQs"}>FAQs</Link>
                                </li>
                                <li>
                                    <button className="px-[18px] bg-[#fab005] rounded-md h-9 text-[#fff] font-semibold">Check out Mantine</button>
                                </li>
                            </ul>
                        </div>
                </div>

            <nav className={` w-full  md:w-auto" id="navbar-default md:hidden ${navbar ? 'p-12 md:p-0' : 'hidden'} `}>
               <div className="absolute lg:static z-[9999]  top-0 md:w-full md:h-auto h-screen justify-evenly bg-white -left-16px w-[320px] right-0 p-[24px]" >
                <div className="mx-2 md:hidden flex justify-between ">
                    <h2 className="mb-4 text-[#000] text-base">Menu</h2>
                    <button className=""  onClick={() => setNavbar(!navbar)}>{!navbar ? (
                         <HiBars3   />
                    ) : (<AiOutlineClose className="text-[#000] h-[28px] w-[16px] z-50"/>  )}</button>
                </div>
                <div className=" flex flex-col gap-[30px]">
                    <ul className=" flex flex-col  md:p-0 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white text-md md:text-lg  h-fit justify-evenly text-[#000] gap-[10px] text-[26px] font-bold">
                        <li>
                            <Link href={"/Carousel"}>Carousel</Link>
                        </li>
                        <li>
                            <Link href={"/Card"}>Card</Link>
                        </li>
                        <li>
                            <Link href={"/FAQs"}>FAQs</Link>
                        </li>
                    </ul>

                    <ul className="flex flex-col gap-[10px] text-[#000]">
                        <li className="">
                            <Link href={'/Contect'}>Contect</Link>
                        </li>
                        <li className="">
                            <Link href={"mailto:example@gmail.com"} className="text-[#1c7ed6]" >example@gmail.com</Link>
                        </li>
                    </ul>

                    <div className="  flex justify-start">
                        <code className="text-[#000] h-fit  bg-[#fff9db] p-[15px] text-xs">
                            Tamplete made by
                            <div className=" flex gap-[16px] items-center text-[16px]">
                                <div className=" bg-[#fff4e6] text-[#fd7e14]">
                                    <h2 className="font-bold">GDC</h2>
                                </div>
                                <div className="flex flex-col ">
                                    <div className="">
                                        <p className="text-md">Giuseppetm</p>
                                    </div>
                                    <div className="">
                                        <p className="text-xs text-[#868e96]" >giuseppe.delcampo@outlook.com</p>
                                    </div>
                                </div>
                            </div>
                        </code>
                    </div>
                </div>
               </div>
            </nav>
        </header>
    </>
  )
}

export default Header