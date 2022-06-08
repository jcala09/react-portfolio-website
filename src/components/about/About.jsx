import React from 'react'
import './About.css'
import PICTURE from '../../assets/about_me_image.jpg'
import {BiMedal} from 'react-icons/bi'
import Contact from "../contact/Contact"
const About = () => {
  return (
    <section id='about'>
      <h5>Who am I?</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-pic">
            <img src={PICTURE} alt="About Image" />
          </div>
        </div>
        <div className= "about__content">
        <div className="about__cards">

          <article className='about__card'>
          <BiMedal className='about__icon'/>
          <h5>Project Experience</h5>
          <small>3+ years of group and personal projects </small>
          </article>

          <article className='about__card'>
          <BiMedal className='about__icon'/>
          <h5>Work Experience</h5>
          <small>5+ years of working with clients and customers</small>
          </article>

          <article className='about__card'>
          <BiMedal className='about__icon'/>
          <h5>Social Experience</h5>
          <small>I talk with homies a lot hehe </small>
          </article>

          

        </div>
        <p className= 'summary'>
          My name is Jerome Gabriel Cala, and I am a Junior here at Texas Tech University. I am born from the Philippines, and I moved here in the United States in the year of 2013. I have chosen Computer Science to be my major because I have always had a passion for computers, especially how video games and websites were made. My goal after I graduate is to work in special topics I am interested in, such as Software Engineering or mobile app development. 
In my years as a Computer Science student, I have worked on projects such as a Public Transit Application through Object Oriented Programming, games such as space invaders and turtle racing. I am currently working on making my own personal website, and studying how to mess with Spotify, Youtube, and Discord APIs.
          </p>  
        </div>
        
      </div>
    </section>
  )
}

export default About