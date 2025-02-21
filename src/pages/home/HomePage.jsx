import React from 'react'
import './HomePageCSS.css'
import figure_1 from '../../assets/imgs/dev-3.png';


export const HomePage = () => {
  return (
    <section className='app relative overflow-hidden'>
      {/* <div className='absolute min-h-screen w-full gradient'>

      </div> */}
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
      <div className='min-h-screen w-full relative max-xl:flex max-xl:flex-col items-center justify-evenly'>
        <div className='xl:absolute xl:bottom-[40%] xl:left-[50%]'>
          <div className='w-[500px]'>
            <h6 className='font-gotham text-[#9f9f9f] uppercase animate-fade-left animate-once animate-duration-1000'>HI, I AM MOGUE, I DEVELOPER</h6>
            <h1 className='font-monument-bold text-[#7ed957] uppercase text-5xl animate-fade-left animate-once animate-duration-1000 animate-delay-[250ms]'>the perfect PROJECT</h1>
            <h6 className='font-gotham text-[#9f9f9f] uppercase animate-fade-left animate-once animate-duration-1000 animate-delay-500'>for your business!</h6>
          </div>
        </div>
        <div className='xl:absolute xl:bottom-0 animate-fade-up animate-once animate-duration-1000'>
          <img src={figure_1} alt="" />
        </div>
      </div>
    </section>
  )
}
