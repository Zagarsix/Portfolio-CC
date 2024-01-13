import React from 'react'
import javascript from './media/javascript.png'
import bootstrap from './media/bootstrap.png'
import html from './media/html.png'
import css from './media/css.png'
import python from './media/python.png'
import flask from './media/flask.png'

function Projects() {
  const handleClick = (url) => {
    window.open(url,'__blank','noopener,noreferrer');
  }
  return (
    <div className='projects container d-flex flex-column justify-content-center'>
      <div className='row'>
        <div className='col-md-12'>
          <h1 className='display-4 my-5' data-aos='fade-right' data-aos-delay='200'>My projects</h1>
        </div>
      </div>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 w-100'>
        <div className="col" data-aos='flip-up' data-aos-delay='400'>
          <div className="card" onClick={() => handleClick('https://google.cl')}>
            <img src={css} className="card-img" alt="Error!" />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <h5 className="card-title fw-bold">Clon de Meetup</h5>
              <p className="card-text">Lorem ipsum</p>
              <p className="card-text"><small>Made with JavaScript & React</small></p>
            </div>
          </div>
        </div>
        <div className="col" data-aos='flip-up' data-aos-delay='600'>
          <div className="card" onClick={() => {handleClick('https://github.com/Zagarsix')}}>
            <img src={javascript} className="card-img" alt="Error!" />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <h5 className="card-title fw-bold">Psicoreinventar</h5>
              <p className="card-text">Final Proyect</p>
              <p className="card-text"><small>Made with React & Boostrap , Python & Flask</small></p>
            </div>
          </div>
        </div>
        <div className="col" data-aos='flip-up' data-aos-delay='800'>
          <div className="card" onClick={() => {handleClick('https://github.com/Zagarsix')}}>
            <img src={python} className="card-img" alt="Error!" />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <h5 className="card-title fw-bold">Battleship</h5>
              <p className="card-text">Simple Game based on Battleship where you fight against the CPU.</p>
              <p className="card-text"><small>Made with JavaScript & React with tools such as Flux and ContextAPI</small></p>
            </div>
          </div>
        </div>
        <div className="col" data-aos='flip-up' data-aos-delay='1000'>
          <div className="card h-100" onClick={() => {handleClick('https://github.com/Zagarsix')}}>
            <img src={flask} className="card-img" alt="Error!" />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <h5 className="card-title fw-bold">Star Wars Blog</h5>
              <p className="card-text">Webpage that showcases Star Wars Characters, Vehicles and Planets. With functionality to add favorites.</p>
              <p className="card-text"><small>Made with JavaScript & React</small></p>
            </div>
          </div>
        </div>
        <div className="col" data-aos='flip-up' data-aos-delay='1200'>
          <div className="card h-100" onClick={() => {handleClick('https://github.com/Zagarsix')}}>
            <img src={bootstrap} className="card-img h-100" alt="Error!" />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <h5 className="card-title fw-bold">TicTacToe</h5>
              <p className="card-text">Lorem Ipsum</p>
              <p className="card-text"><small>Made with React.js</small></p>
            </div>
          </div>
        </div>
        <div className="col" data-aos='flip-up' data-aos-delay='1400'>
          <div className="card" onClick={() => {handleClick('https://github.com/Zagarsix')}}>
            <img src={html} className="card-img" alt="Error!" />
            <div className="card-img-overlay d-flex flex-column justify-content-center">
              <h5 className="card-title fw-bold">JWT Authentication</h5>
              <p className="card-text">Basic Login with JWT Token Authentication, and protection of private views (/private), made to learn basic Authentication on Backend and the use of sessionStorage on Frontend.</p>
              <p className="card-text"><small>Made with JavaScript & React, Python, Flask, Werkzeug & JWT.</small></p>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12' data-aos='zoom-in' data-aos-delay='1800'>
          <h1 className='display-6 my-5'>Check out my GitHub!<br /><i className="fa-brands fa-xl fa-square-github" onClick={() => handleClick('https://github.com/Zagarsix')}></i></h1>
        </div>
      </div>


    </div>
  )
}

export default Projects