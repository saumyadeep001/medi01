import React from 'react';
import '../../src/index.css';
import { Link } from 'react-router-dom';
import userImg from "../assets/images/hero-bg.png";
import heroImg from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png"

import {BsArrowRight,} from 'react-icons/bs'
import About from '../components/About/About';
import ServiceList from '../components/Services/ServiceList';


const Home = () => {
  return (
    <>
      <section className='hero__section pt-[60px] 2xl:h-800px bg-cover bg-center' style={{ backgroundImage: `url(${userImg})` }}>
        <div className='container ml-0'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            <div className="mx-12">
              <div>
                <div className='lg:w-[571px]'>
                  <h1 className='text-[36px] leading-[66px] text-headingColor font-[700] md:text-[60px] md:leading-[70px]'>
                    We help patients live a healthy, longer life.
                  </h1>
                  <p className='text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]'>
                  Discover a healthier, happier you with us! Elevate your well-being and unlock a life of vitality. Join us on the path to personalized care, where your health and longevity are our top priorities. Embrace a future of wellness – because with us, your health journey begins here.
                  </p>
                  <button className='bg-blue-400 rounded-full py-2 px-6 text-white font-semibold font-[600] h-[44px] mt-[38px] flex items-center justify-center'>
                    Request an Appointment
                  </button>
                </div>
                {/*======== hero counter =========*/}

                {/* <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[30px] font-[700] text-headingColor' style={{ borderBottom: '5px solid #FEB60D' }}>
    30+
  </h2>
  <p className='text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]'>
    Years of Experience
  </p> */}




                <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-[60px]'>
                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[35px] font-[700] text-headingColor' style={{ borderBottom: '7px solid #FEB60D', borderRadius: '10px' }}>
                       30+
                    </h2>
                 
                    <p className='text-[18px] leading-[40px] font-[400] text-textColor mt-[18px];'>Years of Experience</p>
                    
                  </div>

                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[35px] font-[700] text-headingColor' style={{ borderBottom: '7px solid purple', borderRadius: '10px' }}>
                      15+
                    </h2>
                 
                    <p className='text-[18px] leading-[40px] font-[400] text-textColor mt-[18px];'>
                      Clinic Location
                   </p>
                    
                  </div>

                  <div>
                    <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[35px] font-[700] text-headingColor' style={{ borderBottom: '7px solid blue', borderRadius: '10px' }}>
                    100%
                    </h2>
                 
                    <p className='text-[18px] leading-[40px] font-[400] text-textColor mt-[18px];'>
                      Patient Satisfaction
                    </p>
                    
                  </div>




                  
                </div>
              </div>
            </div>
      

             {/*===========hero content=========== */}
             <div className='flex flex-col lg:flex-row lg:gap-[px] max-w-screen-lg mx-auto'>
  <div className='lg:mr-[30px] lg:ml-[50px]'>
    <img src={heroImg} alt="" className="ml-[50px] lg:ml-0 lg:mb-[20px] w-full lg:w-auto" />
  </div>
  <div className='lg:mt-[40px] lg:mr-[80px]'>
    <img src={heroImg02} alt="" className='w-full max-w-[300px] lg:max-w-full' />
    {/* Add space between img2 and img3 */}
    <div className="lg:mb-6"></div>
    <img src={heroImg03} alt="" className='w-full max-w-[300px] lg:max-w-full' />
  </div>
</div>

</div>
        </div>
      </section>



       <section className='mt-8'>
        <div className='container'>
          <div className='lg:w-[470px] mx-auto'>
            <h2 className='text-[46px] leading-[40px] text-center font-semibold'>
                Providing the best medical services
            </h2>
            <p className='  text-[18px] leading-[30px] font-[400] text-textColor mt-[18px] text-center'>world-class care for everyone. Our health System offers unmatched,expert health care.</p>

          </div>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>

          <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={icon01} alt="" />
            </div>
            

            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[600] text-center'>
                Find a Doctor
              </h2>
              <p className='  text-[15px] leading-7 font-[400] text-textColor mt-1 text-center'>world-class care for everyone. Our health System offers unmatched,expert health care.From the lab to the clinic.</p>

              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border-solid border-[#181A1E] mt-[25px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                </Link>

            </div>
            </div>

            <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={icon02} alt="" />
            </div>
            

            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[600] text-center'>
                Find a Location
              </h2>
              <p className='  text-[15px] leading-7 font-[400] text-textColor mt-1 text-center'>world-class care for everyone. Our health System offers unmatched,expert health care.From the lab to the clinic.</p>

              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border-solid border-[#181A1E] mt-[25px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                </Link>

            </div>
            </div>


            <div className='py-[30px] px-5'>
            <div className='flex items-center justify-center'>
              <img src={icon03} alt="" />
            </div>
            

            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[600] text-center'>
                Doctor Appointment
              </h2>
              <p className='  text-[15px] leading-7 font-[400] text-textColor mt-1 text-center'>world-class care for everyone. Our health System offers unmatched,expert health care.From the lab to the clinic.</p>

              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border-solid border-[#181A1E] mt-[25px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none '>
                <BsArrowRight className='group-hover:text-white w-6 h-5'/>
                </Link>

            </div>
            </div>


        
        </div>
      </section> 

       <About/>

       {/* ============= services section =============== */}

       {/* <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='text-[40px] leading-[54px] font-[700] text-headingColor text-center mt-12'>Our medical services</h2>
            <p className='text-[18px] leading-[30px] font-[400] text-textColor mt-[18px] text-center'>World-class care fokr everything.Our health System offers unmatched,expert health care.</p>
          </div>


          <serviceList/>
        </div>
       </section> */}

       {/*===============services section end============= */}

       {/* ============ feature section ============= */}

       <section >
  <div className='flex items-center justify-between flex-col lg:flex-row mt-12 mx-12'>
 

    {/*========== feature content ===========*/}
    <div className='xl:w-[650px] mx-12'>
      <h2 className='text-[40px] leading-[50px] font-[700] text-headingColor mt-6'>
        Get virtual treatment <br /> anytime.
      </h2>

      <ul className='pl-4'>
        <li className='text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]'>
          1. Schedule the appointment directly.   
        </li>
        <li className='text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]'>
          2. Search for your physician here, and contact their office.
        </li>
        <li className='text-[18px] leading-[30px] font-[400] text-textColor mt-[18px]'>
          3. View our physicians who are accepting new patients, use the online scheduling tool to select an appointment time.
        </li>
      </ul>
      <Link to='/'>
        <button className='bg-blue-500 py-[10px] px-[15px] rounded-[45px] text-white font-[600] mt-[33px]'>Learn More</button>
      </Link>
    </div>

    {/*========= feature section img ======== */}
    <div className='relative z-10 xl:w-[550px] flex justify-start mt-[50px] lg:mt-12' >
      <img src={featureImg} alt="" />

      <div className='w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-0 p-2 pd-3 lg:pt-5 lg:px-4 lg:pb-[23px] rounded-[10px]'>
      <div className='flex items-center justify-between'>
        <p className='text-[14px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
          Tue, 24
       </p>
       <p className='text-[12px] leading-[10px] lg:text-[14px]lg:leading-5 text-textColor font-[400]'>
          10:00
       </p>
      </div>
      </div> 

    </div>  

  


  </div>
</section>


    </>
  );
};

export default Home;
