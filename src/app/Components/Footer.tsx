import Link from "next/link"
const Footer = () => {
  return (
    <>
     <footer className="bg-[#fab005] md:px-[64px] py-[60px]">
        <div className="contianer xl:px-[177px]">
            <div className="flex justify-between lg:flex-row flex-col xs:text-center lg:text-left fitw">
                <div className=" flex flex-col gap-[16px] p-2">
                    <h3 className="font-bold text-xl">Simple Mantine template</h3>
                    <div className="flex flex-col gap-[10px]">
                        <p>You can do anything you want with this template, from portfolios to other stuff.</p>
                        <p>You can find the illustrations I used on <Link href={"https://icons8.com/"} className=" text-[#228be6]">www.icons8.com</Link></p>
                    </div>
                    <button className="px-[18px] bg-[#fff] inline-block w-fit font-semibold h-9 text-[#228be6] rounded-sm m-auto lg:m-0"><Link href={"https://mantine.dev/"} >check out mantine</Link></button>
                </div>
                <div className="  flex justify-start p-2 ">
                        <code className="text-[#000] h-fit  bg-[#fff] p-[15px] w-full text-xs ">
                            Tamplete made by
                            <div className=" flex justify-center lg:justify-start gap-[16px] items-center text-[16px] mt-2">
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
    </footer>   
    </>
  )
}

export default Footer