import React from 'react'
import './About.css'
import PICTURE from '../../assets/about_me_image.jpg'
import {BiMedal} from 'react-icons/bi'

const About = () => {
  return (
    <section id='about'>
      <div className="container about__title">
      <h5>Who am I?</h5>
      <h2>About Me</h2>
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
          <h5>Project Experience</h5>
          <small>5+ years of group and personal projects </small>
          </article>

          <article className='about__card'>
          <BiMedal className='about__icon'/>
          <h5>Work Experience</h5>
          <small>1+ years of Software Engineering</small>
          </article>

          <article className='about__card'>
          <BiMedal className='about__icon'/>
          <h5>Social Experience</h5>
          <small>Work very well in AGILE and group based environment </small>
          </article>
        
          

        </div>
        <div>
        <p className= 'summary'>
          My name is Jerome Gabriel Cala, and I recently graduated with a B.S. for Comptuer Science in Texas Tech University. I am born from the 
          Philippines, and I moved here in the United States in the year of 2013. I have chosen Computer Science to be my major because I have 
          always had a passion for computers, especially how video games and websites were made. I now work as an Associate Software Engineer 
          for L3Harris, and continue to strive. My goal now is to be a future entrepeneur, with the hopes of making my own tech company.          
          In my years as a Computer Science student, I have worked on projects such as a Public Transit Application through Object Oriented 
          Programming, games such as space invaders and turtle racing. I am currently working with Luis Garcia and Gabe Guzman to create our own
          Gym Clothing line called HNGR. More details will be released soon.
        </p> 
        </div>
        
        </div>
        
      </div>
      
    
    </section>
    
  )
}

export default About