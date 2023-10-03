import Image from "next/image"
const SectionOne = () => {
  return (
    <>
            <section className="carousel-container  text-[#000] px-4 md:px-16 py-[60px] ">
                <div className="m-auto flex fitw flex-col lg:flex-row ">
                    <div className="lg:basis-1/2 basis-auto xl:basis-auto  text-left p-2 ">
                        <div className="mb-5">

                            <h2 className='heading text-[26px] md:text-[34px]  font-bold mt-[31px] mb-[13px]'>You can put whatever you want here</h2>
                            <h6 className='subheading  text-sm  md:text-base' >Dennis Farina was one of Hollywood's busiest actors and a familiar face to moviegoers and television viewers alike. In 1998's "Saving Private Ryan," directed by Steven Spielberg, Farina played "Col. Anderson," a pivotal role in the film.</h6>
                    </div>
                        <button className="bg-[#fab005] text-[#fff] rounded-[4px] font-semibold  px-[18px] gap-2 h-[36px] ">Check it out</button>
                    </div>
                    <div className=" m-auto lg:basis-1/2 xl:basis-auto p-2 md:hover:scale-110 hover:scale-75 ">
                        <img src={"/image/image1.png"} alt="hollywood" />
                    </div>
                </div>
            </section>
    </>
  )
}

export default SectionOne