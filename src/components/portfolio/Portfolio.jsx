import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import { FaGithub } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: IMG1,
      title: 'JeromeFolio - Portfolio Website',
      description: 'A modern, responsive portfolio website built with React showcasing my work, experience, and skills. Features smooth scrolling, interactive components, and a clean design.',
      github: 'https://github.com/jcala09/react-portfolio-website',
      demo: 'https://jeromefolio.netlify.app'
    },
    {
      id: 2,
      image: IMG2,
      title: 'JeromEssentials - Everyday needs',
      description: 'A self personalized website to store any important information for me such as a shopping list, reminders, etc.',
      github: 'https://github.com/jcala09/JeromEssentials',
      demo: 'https://jeromessentials.netlify.app/'
    },
    {
      id: 3,
      image: IMG3,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 4,
      image: IMG4,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard displaying current conditions, forecasts, and weather maps with location-based services.',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 5,
      image: IMG5,
      title: 'Social Media Analytics',
      description: 'Analytics platform for tracking social media performance with data visualization, reporting, and insights.',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      id: 6,
      image: IMG6,
      title: 'Recipe Finder App',
      description: 'Recipe discovery application with search functionality, ingredient filtering, and step-by-step cooking instructions.',
      github: 'https://github.com',
      demo: 'https://demo.com'
    }
  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map(({ id, image, title, description, github, demo }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
              <a href={demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <FiExternalLink /> Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio