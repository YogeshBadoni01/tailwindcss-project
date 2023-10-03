import React from 'react'

const Card = () => {
        const myCard = [
            {
                Image:"image/image3.png",
                Heading:"History of Dennis Farina   ",
                Badge:"Cool badge ",
                Subheading:"Discover the career of Dennis Farina and his roles in movies!",
            },
            {
                Image:"image/image4.png",
                Heading:"Career of Dennis Farina",
                Badge:"Cool badge 2",
                Subheading:"Dennis Farina had a really great career with many opportunities!",
            },
            {
                Image:"image/image5.png",
                Heading:"Major roles of Dennis Farina",
                Badge:"Cool badge 3",
                Subheading:"Discover the major roles of Dennis Farina and something else!",
            },
        ]
  return (
    <>
    <section className='px-4 md:px-16 py-[60px] m-auto' >
    <div className=" text-center text-[#000]">
          <h2 className='heading md:text-[34px] text-[26px] font-bold mt-[31px] mb-[13px]'>These cards are really nice</h2>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] text-[#000] fitw m-auto [perspective:1000px]">
            {myCard.map((items,index)=>(

            <div className=" md:first-letter:max-w-sm rounded overflow-hidden shadow-lg p-[28px] -m-[10px] transition-all duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                <img className="w-full h-auto object-cover mb-[10px]" src={items.Image} alt={items.Heading}/>
                <div className="[transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">

                <div className=" mt-3 mb-[5px] flex justify-between gap-[16px] flex-wrap items-center  ">
                    <h4 className=" text-base font-medium">
                        {items.Heading}
                    </h4>
                    <div className="font-bold text-[11px]  px-[10.66px] bg-[#fff9db] text-[#fab005] uppercase " >{items.Badge}</div>
                </div>
                <div className=" text-sm">
                    <p>{items.Subheading}</p>
                </div>
                <button className='text-sm font-semibold mt-[14px] px-[18px] bg-[#fff9db] text-[#fab005] w-full h-9 rounded'>Find out</button>
                </div>
            </div> 
            ))}
        </div>
    </section>
    </>
  )
}

export default Card