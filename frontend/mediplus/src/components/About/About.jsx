import React from 'react';
import { Link } from 'react-router-dom';  
import aboutImg from "../../assets/images/about.png";
import aboutCarding from "../../assets/images/about-Card.png";

const About = () => {
  return (
    <section>
      <div className='mx-12 '> 
      <div className="container px-12 pt-7 ">
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
          {/* ===============about img==============*/}
          <div className='relative w-3/4 lg:w-1/2 xl:w-[900px] z-10 order-2 lg:order-1'>
            <img src={aboutImg} alt="" />
            <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-25%] md:right-[-2%] lg:right-[27%] '>
              <img src={aboutCarding} alt="" />
            </div>
          </div>

          {/* ======about section content========== */}
          <div className='w-full lg:w-5/12 xl:w-1/2 order-1 lg:order-2 mx-8'>
            <h2 className='text-[46px] leading-[46px] font-[700] text-headingColor font-semibold'>Proud to be one of the nation best</h2>
            <p className='text-[16px] leading-[25px] font-[400] text-textColor mt-[10px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem reprehenderit quibusdam sapiente quisquam veritatis id molestiae? Nisi odio totam nobis iure cumque distinctio non saepe minus similique, at debitis esse.</p>

            <p className='text-[16px] leading-[25px] font-[400] text-textColor mt-[30px]'>
              Our best is something we strive for each day, caring for our patients - not looking back at what we accomplished but towards what we can do tomorrow. Providing the best.
            </p>
            
            <Link to='/'>
              <button className='bg-blue-500  py-[10px] px-[15px] rounded-[45px] text-white font-[600] mt-[33px]'>Learn More</button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default About;
