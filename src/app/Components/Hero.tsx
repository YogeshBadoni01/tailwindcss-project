"use client"
import Link from "next/link";
import {AiOutlineArrowDown} from "react-icons/ai"
import { useState,useEffect } from "react";
const Hero = () => {

        const textToType = "Simple Mantine Template";
        const [displayText, setDisplayText] = useState("");
      
        useEffect(() => {
          let currentIndex = 0;
          const typingInterval = setInterval(() => {
            if (currentIndex <= textToType.length) {
              setDisplayText(textToType.slice(0, currentIndex));
              currentIndex++;
            } else {
              clearInterval(typingInterval);
            }
          }, 100); // Adjust the typing speed by changing the interval (in milliseconds).
      
          return () => {
            clearInterval(typingInterval);
          };
        }, []);
  return (
    <>
        <section className=" h-screen w-full text-[#000] flex justify-center items-center ">
            <div className="py-[120px] px-[40px] md:px-40 md:py-[120px] bg-[#fcf4e2] text-center rounded-2xl rotate-0 transition-flip origin-left  animate-[wiggle_1s_ease-in-out_infinite] ">
                <h5 className="text-[#fab005] mb-[15px] text-sm md:text-[16px] font-medium">MADE WITH REACT AND MANTINE</h5>
                <h1 className="text-[#2d2d2d] mb-[15px] text-[44px] md:text-6xl font-bold h-max">{displayText}   </h1>
                <p className="text-xl mb-[25px] ">Simple showcase of this powerful and well implemented library called
                    <Link href={"https://mantine.dev/" } className="text-[#fd7e14]"> Mantine</Link>
                </p>
                <div className="flex  gap-[10px] text-[16px] justify-center h-[42px] font-semibold">
                    <button className="bg-[#fab005] text-[#fff] rounded-2xl flex justify-center items-center px-[18px] gap-2 ">
                        <div className="">Tell me more</div>
                        <div className="animate-bounce"><AiOutlineArrowDown/> </div>
                    </button>
                    <button className=" rounded-2xl px-[18px] bg-[#fff]">
                        <div className="">Other stuff</div>
                    </button>
                </div>
            </div>
        </section> 
    </>
  )
}

export default Hero