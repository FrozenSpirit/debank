import React from 'react'
import styles from '../style'
import GetStarted from './GetStarted'
import { discount, robot } from '../assets'

// we are giving ids to go-to during scroll

const Hero = () => {
  return (
    <section id='home'
    className={`flex flex-col md:flex-row ${styles.paddingY}  `}
    >

      <div className={`${styles.flexStart} flex-1 flex-col px-6 sm:px-16 xl:px-0`}>

        <div className='flex flex-row items-center py-[5px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img 
            className='w-[30px] h-[30px]'
            src={discount}
            alt='discountLogo'
          />

          <p className={`${styles.paragraph} ml-2`}>
            <span className='text-white'>20%</span> Discount For  <span className='text-white'>1 Month</span> Account
          </p>
        </div>

        <div>
          <h1>The Next </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>

        <h1 className='font-poppins font-semibold text-[52px] text-white leading-[75px] w-full ss:text-[69px] ss:leading-[100.8px]'>
          Payment Method
        </h1>
        <p className={`${styles.paragraph} max-w-[450px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quam! Odit nesciunt minus amet? Qui illo explicabo inventore reprehenderit magni error porro iste placeat alias vero! Temporibus, perspiciatis esse! Non.
        </p>
      </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>

        <img src={robot} alt="robotPic" className='w-[100%] h-[100%] relative z-[5]'/>

        {/* gradient */}
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40'/>
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>

    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero