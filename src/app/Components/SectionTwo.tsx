import Image from "next/image"
const SectionOne = () => {
  return (
    <>
            <section className="carousel-container  text-[#000] px-4 md:px-16 py-[60px] ">
                <div className="m-auto flex fitw flex-col lg:flex-row">
                    <div className=" m-auto lg:basis-1/2 xl:basis-auto p-2 md:hover:scale-110 hover:scale-75  ">
                        <img src={"/image/image2.png"} alt="hollywood" />
                    </div>
                    <div className="lg:basis-1/2 basis-auto xl:basis-auto  text-left p-2">
                        <div className="mb-5">

                            <h2 className='heading text-[26px] md:text-[34px]  font-bold mt-[31px] mb-[13px]'>Put something here too</h2>
                            <h6 className='subheading  text-sm  md:text-base' >Dennis Farina is unique among thespians in that he was one of the few to achieve success as a "late-bloomer." He did not start acting until he was 37 years old, after stints in the military and 18 years on the Chicago Police Department.</h6>
                    </div>
                        <button className="bg-[#fab005] text-[#fff] rounded-[4px] font-semibold  px-[18px] gap-2 h-[36px] ">Tell me more</button>
                    </div>
                </div>
            </section>
    </>
  )
}

export default SectionOne