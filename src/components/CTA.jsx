import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY}
    ${styles.padding} flex-col bg-black-gradient-2 rounded-[20px] box-shadow sm:flex-row `}>

      <div className='flex-1 flex flex-col'>

        <h2 className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Let's try our services now!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quidem, porro libero beatae error at, usandae earum 
        </p>
      </div>


      <div className={`${styles.flexCenter} sm:ml-10 m-5`}>
        <Button/>
      </div>

    </section>
  )
}

export default CTA