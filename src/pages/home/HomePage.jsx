import React from 'react'
import './HomePageCSS.css'
import figure_1 from '../../assets/imgs/dev-3.png';


export const HomePage = () => {
  return (
    <section className='app relative overflow-hidden'>
      <div style={{
        width: '1200px',
        height: '1200px',
        background: "radial-gradient(circle, rgba(126, 217, 87, 0.7) 2.5%, rgba(32, 30, 38, 0) 45%)",
        borderRadius: "50%",
        position: "absolute",
        bottom: "-600px",
        left: "-500px",
      }}></div>
      <div style={{
        width: '900px',
        height: '900px',
        background: "radial-gradient(circle, rgba(126, 217, 87, 0.7) 1.5%, rgba(32, 30, 38, 0) 45%)",
        borderRadius: "50%",
        position: "absolute",
        top: "-570px",
        right: "-470px",
      }}></div>
      <div className='min-h-screen max-xl:pt-32 w-full relative flex max-xl:flex-col items-center justify-between'>
        <div className='realtive min-w-[50%] max-xl:px-10 max-xl:flex max-xl:flex-col max-xl:justify-evenly max-xl:space-y-28'>
          <div className='xl:absolute xl:bottom-[40%] xl:left-[50%]'>
            <div className='xl:w-[600px] max-xl:w-full '>
              <h6 className='font-gotham text-[#9f9f9f] uppercase animate-fade-left animate-once animate-duration-1000'>HI, I AM MOGUE, I DEVELOPER</h6>
              <h1 className='font-monument-bold text-[#7ed957] uppercase max-xl:text-4xl text-6xl animate-fade-left animate-once animate-duration-1000 animate-delay-[250ms]'>the perfect PROJECT</h1>
              <h6 className='font-gotham text-[#9f9f9f] uppercase animate-fade-left animate-once animate-duration-1000 animate-delay-500'>for your business!</h6>
            </div>
          </div>
          <div className='max-xl:w-full xl:absolute xl:right-10 xl:bottom-10 max-xl:text-right'>
            <h6 className='w-[230px] text-justify font-gotham text-[#9f9f9f] uppercase animate-fade-right animate-once animate-duration-1000 animate-delay-[750ms]'>A programmer who solves problems in the most fun way. :)</h6>
          </div>
        </div>
        <div className='xl:absolute xl:bottom-0 animate-fade-up animate-once animate-duration-1000'>
          <img src={figure_1} alt="" />
        </div>
      </div>
    </section>
  )
}
