import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    
    <section id='experience'>
      
      <h5>Experience</h5>
      <h2>Skills I possess</h2>
      <div className='container container__experience'>
        <div className='experience__frontend'>
        <h3>Frontend Development</h3>
        <div className= "experience__content">

          <article className='experience__details'>
          <BsPatchCheckFill /><h4>HTML</h4>
          <small className='text-light'>Experienced</small>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill /><h4>CSS</h4>
          <small className='text-light'>Experienced</small>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill /><h4>JavaScript</h4>
          <small className='text-light'>Experienced</small>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill /><h4>React</h4>
          <small className='text-light'>Experienced</small>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill /><h4>Angular</h4>
          <small className='text-light'>Novice</small>
          </article>
        </div>
      </div>

      {/* BACKEND */}
      <div className='container__backend'>
        <h3>Backend Development</h3>
        <div className= "experience__content">

          <article className='experience__details'>
          <BsPatchCheckFill /><h4>Bash</h4>
          <small className='text-light'>Intermediate</small>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill /><h4>Java</h4>
          <small className='text-light'>Experienced</small>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill /><h4>C,C++</h4>
          <small className='text-light'>Experienced</small>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill /><h4>NodeJS</h4>
          <small className='text-light'>Experienced</small>
          </article>

          <article className='experience__details'>
          <BsPatchCheckFill /><h4>Ansible</h4>
          <small className='text-light'>Novice</small>
          </article>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Experience