import React from 'react'
import {SlCup} from 'react-icons/sl'
import {LuCloudSnow} from 'react-icons/lu'
import {FiAnchor} from 'react-icons/fi'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'

const Acoordian = () => {
    const flag = true;

    const myAcoordian =[
        {
            icon: <SlCup/>,
            qusestion:"Is Dennis Farina famous?",
            answer:"Yes, of course.",
        },
        {
            icon:<LuCloudSnow/>,
            qusestion:"Are pineapples good?",
            answer:"Unfortunately no.",
        },
        {
            icon:<FiAnchor/>,
            qusestion:" Do you like yellow?",
            answer:"Oh yes!",
        },
    ] 
  return (
    <>
        <section className='text-[#000] px-4 md:px-16 py-[60px]'>
        <div className="fitw">
            <div className="mx-auto my-20  drop-shadow rounded-md ">
                <div className="font-bold text-[11px]  px-[10.66px] text-[#fff9db] bg-[#fab005] uppercase inline-block h-5 rounded-3xl ve" >FAQs</div>
                <div className="  text-[#000] mb-[30px]"> <h2 className='heading md:text-[34px] text-[26px] font-bold '>Woah, Frequently asked questions here</h2>
            </div>

{
            myAcoordian.map((items,index)=>(
                <details className="bg-transparent border  duration-300 rounded relative" key={index}>
                <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer flex  justify-start items-center" onClick={flag ? true: false}>
                    <div className=" text-[#fab005] mr-2 font-bold">
                        {items.icon}
                    </div>
                   {items.qusestion}</summary>
                    <div className="absolute right-2 top-4  my-auto">
                    {flag ? <IoIosArrowUp/>:<IoIosArrowDown/>  }
                 </div>
                <div className="bg-white px-5 py-3  border-gray-300 text-sm font-light">
                    <p>{items.answer}</p>
                </div>
            </details>
            ))
            //     <details className="bg-transparent border  duration-300 rounded relative" key={index}>
            //     <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer flex  justify-start items-center" onClick={flag ? true: false}>
            //         <div className=" text-[#fab005] mr-2 font-bold">
            //             {items.icon}
            //         </div>
            //        {items.qusestion}</summary>
            //         <div className="absolute right-2 top-2 bg-red-900 my-auto">
            //         {flag ? <IoIosArrowUp/>:<IoIosArrowDown/>  }
            //      </div>
            //     <div className="bg-white px-5 py-3  border-gray-300 text-sm font-light">
            //         <p>{items.answer}</p>
            //     </div>
            // </details>
}
           

            </div>
        </div>  

        </section>

    </>
  )
}

export default Acoordian