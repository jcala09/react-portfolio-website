import React from 'react'
import './About.css'
import PICTURE from '../../assets/about_me_image.jpg'
import {BiMedal} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      
      <div className="container about__title">
      </div>

      <div className="container about__container">

        <div className="about__me">

          <div className="about__me-pic">

            <img src={PICTURE} alt="About" />

          </div>
        
        </div>

        <div className= "about__content">

          <div className="about__cards">

            <article className='about__card'>
            <BiMedal className='about__icon'/>
            <h5>Work Experience</h5>
            <small>2.5+ years of Full Stack Development</small>
            </article>

            <article className='about__card'>
            <BiMedal className='about__icon'/>
            <h5>Project Experience</h5>
            <small>5+ years of group and personal projects </small>
            </article>

            <article className='about__card'>
            <BiMedal className='about__icon'/>
            <h5>Social Experience</h5>
            <small>Work very well in AGILE and group based environments </small>
            </article>
          
          </div>

        </div>
      </div>
    </section>
  )
}

export default About