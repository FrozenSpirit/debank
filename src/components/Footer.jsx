import React from 'react'
import styles from '../style'
import {logo} from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>

      <div className={`${styles.flexStart} flex-col mb-8   w-full md:flex-row `}>

        <div className='flex-[1] flex flex-col justify-start mr-10'>
          <img src={logo} alt="bankLogo" className='w-[250px] h-[60px] object-cover'/>
          <p className={`${styles.paragraph} mt-5 max-w-[312px]`}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          </p>
        </div>


        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((footerLinks)=>(
          <div key={footerLinks.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>

            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
              {footerLinks.title}
            </h4>

            <ul>
            {footerLinks.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerLinks.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
        </div>
      </div>

      

      {/* base with links */}

      <div className='w-full flex justify-between items-center flex-col md:flex-row pt-6 border-t-[2px]border-t-[#3F3E45]'>

        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>Copyright</p>

        <div className='flex flex-row md:mt-0 mt-5'>
          {socialMedia.map((social, index) => (
            <img
            key={social.id}
            src={social.icon}
            alt="logo"
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? 'mr-5' : 'mr-0'}`}

            onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Footer