import React from 'react'
import {apple, bill, google} from '../assets'
import styles, {layout} from '../style'

const Billing = () => {
  return (
    
    // as heading is next to img, in md and lower it goes down when changes to col, so thats why sectionReverse
    <section id='product' className={layout.sectionReverse}>
    
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>

      {/* gradient */}
      <div className='aboslute z-[1] -left-[50%] top-0 w-[50%] rounded-full white__gradient'/>
      <div className='absolute z-[0] -left-[50%] bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />

      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className='sm:block hidden'/>
          billing & invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque libero delectus voluptatum culpa, quo natus a quis ut voluptatibus illum omnis! Modi nulla possimus beatae!
        </p>

        <div className='flex flex-wrap sm:mt-10 mt-6'>
          <img src={google} alt="googlePlay" className='w-[128px] h-[40px] object-contain mr-5 cursor-pointer'/>
          <img src={apple} alt="appleStore" className='w-[128px] h-[40px] object-contain cursor-pointer' />
        </div>
      </div>
    </section>
  )
}

export default Billing