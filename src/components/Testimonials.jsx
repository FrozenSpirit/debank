import React from 'react'
import {feedback} from '../constants'
import FeedbackCard from './FeedbackCard'
import styles from '../style'

const Testimonials = () => {
  return (
   <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>

{/* gradient color  */}
    <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40'/>


      <div className='w-full flex flex-col justify-between items-center relative z-[1] sm:mb-16 md:flex-row'>
        <h2 className={`${styles.heading2}`}>
          What People are <br className='sm:block hidden'/> saying about us
        </h2>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque distinctio facere, consectetur exercitationem non in dignissimos 
          </p>
        </div>
      </div>
      
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
        {feedback.map((card, index) => <FeedbackCard
        key={card.id} {...card}/>)}
      </div>
    
   </section>
  )
}

export default Testimonials