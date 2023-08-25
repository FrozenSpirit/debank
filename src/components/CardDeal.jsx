import React from 'react'
import styles, {layout} from '../style'
import {card} from '../assets'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>

        <h2>
          Find a better card deal <br /> in few easy steps.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusantium ipsum odit obcaecati Sequi eaque voluptas cum in ut, incidunt fugiat molestiae explicabo facilis sint?
        </p>

        <Button styles={'mt-10'}/>

      </div>

      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="cardIMG" className='w-[100%] h-[100%]' />
      </div>


    </section>
  )
}

export default CardDeal;