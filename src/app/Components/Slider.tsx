"use client"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {IoIosArrowBack,IoIosArrowForward} from "react-icons/io"
const Slider = () => {
  
  const arrowStyle = {
    background: "white",
    border: 0,
    color: "#fff",
    fontSize: "80px",
   
    
  };
  const CustomRight = ({ onClick }) => (
    <button className="arrow right" onClick={onClick} style={arrowStyle}>
      < IoIosArrowForward style={{ fontSize: "50px" }} />
    </button>
  );
  const CustomLeft = ({ onClick }) => (
    <button className="arrow left" onClick={onClick} style={arrowStyle}>
      <IoIosArrowBack style={{ fontSize: "50px" }} />
    </button>
  );
  const Category = [
    {
      Number: 1,
      Text: "Write something here.",
    },
    {
      Number: 2,
      Text: "Something here too.",
    },
    {
      Number: 3,
      Text: "Mh, maybe here too?",
    },
    {
      Number: 4,
      Text: "If you'd like to, you could do that here...",
    },
    {
      Number: 5,
      Text: "Woah, you are quite convincing...",
    },
    {
      Number: 6,
      Text: "And we are done with the cards!",
    },
  ];

  const Responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
       
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="carousel-container  text-[#000] px-4 md:px-16 py-[60px]">
      <div className=" text-center">
          <h2 className='heading md:text-[34px] text-[26px] font-bold mt-[31px] mb-[13px]'>Explain something in this carousel</h2>
          <h6 className='subheading mb-[13px] text-sm  md:text-base' >You can insert images or some texts if you need.</h6>
      </div>
      <Carousel responsive={Responsive} showDots={true} dotListClass=".react-multi-carousel-dot" infinite className='h-[300px] max-w-[960px] m-auto '>
        {Category.map((item) => (
          <div className="category-card h-[320px] flex flex-col items-center justify-center rounded-2xl  gap-[15px] bg-[#fcc419] md:mr-4" key={item.Number}>
            <h5 className='text-xl  md:text-[26px] font-bold'>{item.Number}</h5>
            <p className='text-sm md:text-base'>{item.Text}</p>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Slider;
