import React from 'react'

import clonMeetup from './media/clonMeetup.png'
import psicoreinventar from './media/psicoreinventar.png'
import battleship from './media/Battleship.png'
import starwars from './media/starwarsBlog.png'
import tictactoe from './media/tictactoe.png'
import jwt from './media/jwtAuthentication.png'

const Projects = () => {
  const handleClick = (url) => {
    window.open(url, '__blank', 'noopener,noreferrer');
  }
  return (
    <div className='Projects container d-flex flex-column justify-content-center'>
      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 w-80'>
        <div className="col" data-aos='flip-up' data-aos-delay='400'>
          <div className="card" onClick={() => handleClick('https://clon-meetup.vercel.app/')}>
            <img src={clonMeetup} className="card-img" alt="Clon de Meetup"/>
            <div className="card-img-overlay d-flex flex-column justify-content-start">
              <h5 className="card-title fw-bold">Clon de Meetup</h5>
              {/* <p className="card-text">Lorem ipsum</p>
              <p className="card-text"><small>Made with JavaScript & React</small></p> */}
            </div>
          </div>
        </div>
        <div className="col" data-aos='flip-up' data-aos-delay='600'>
          <div className="card" onClick={() => { handleClick('https://github.com/Zagarsix/Final-Project-Psicoreinventar') }}>
            <img src={psicoreinventar} className="card-img" alt="Proyecto final: Psicoreinventar" />
            <div className="card-img-overlay d-flex flex-column justify-content-start">
              <h5 className="card-title fw-bold">Psicoreinventar</h5>
              {/* <p className="card-text">Final Proyect</p>
              <p className="card-text"><small>Made with React & Boostrap , Python & Flask</small></p> */}
            </div>
          </div>
        </div>
        <div className="col" data-aos='flip-up' data-aos-delay='800'>
          <div className="card" onClick={() => { handleClick('https://battleship-online.vercel.app/') }}>
            <img src={battleship} className="card-img" alt="Battleship game" />
            <div className="card-img-overlay d-flex flex-column justify-content-start">
              <h5 className="card-title fw-bold">Battleship</h5>
              {/* <p className="card-text">Simple Game based on Battleship where you fight against the CPU.</p>
              <p className="card-text"><small>Made with JavaScript & React with tools such as Flux and ContextAPI</small></p> */}
            </div>
          </div>
        </div>
        <div className="col" data-aos='flip-up' data-aos-delay='1000'>
          <div className="card" onClick={() => { handleClick('https://github.com/Zagarsix/Starwars-blog-reading-list-Code') }}>
            <img src={starwars} className="card-img" alt="Clon sencillo del blog de Star Wars" />
            <div className="card-img-overlay d-flex flex-column justify-content-start">
              <h5 className="card-title fw-bold">Star Wars Blog</h5>
              {/* <p className="card-text">Webpage that showcases Star Wars Characters, Vehicles and Planets. With functionality to add favorites.</p>
              <p className="card-text"><small>Made with JavaScript & React</small></p> */}
            </div>
          </div>
        </div>
        <div className="col" data-aos='flip-up' data-aos-delay='1200'>
          <div className="card" onClick={() => { handleClick('https://tic-tac-toe-with-react-code-hspb.vercel.app/') }}>
            <img src={tictactoe} className="card-img" alt="Tictactoe game" />
            <div className="card-img-overlay d-flex flex-column justify-content-start">
              <h5 className="card-title fw-bold">TicTacToe</h5>
              {/* <p className="card-text">Lorem Ipsum</p>
              <p className="card-text"><small>Made with React.js</small></p> */}
            </div>
          </div>
        </div>
        <div className="col" data-aos='flip-up' data-aos-delay='1400'>
          <div className="card" onClick={() => { handleClick('https://github.com/Zagarsix/JWT-Authentication-Code') }}>
            <img src={jwt} className="card-img" alt="Login básico con JWT authentication" />
            <div className="card-img-overlay d-flex flex-column justify-content-start">
              <h5 className="card-title fw-bold">JWT Authentication</h5>
              {/* <p className="card-text">Basic Login with JWT Token Authentication, and protection of private views (/private), made to learn basic Authentication on Backend and the use of sessionStorage on Frontend.</p>
              <p className="card-text"><small>Made with JavaScript & React, Python, Flask, Werkzeug & JWT.</small></p> */}
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='Review col-md-12' data-aos='zoom-in' data-aos-delay='500' data-aos-easing='linear' data-aos-duration='1000'>
          <h1 className='display-6 p-3 m-5'>Revisa mi Github!<br /><i className="fa-brands fa-flip fa-2xl fa-square-github" onClick={() => handleClick('https://github.com/Zagarsix')}></i></h1>
        </div>
      </div>
    </div>
  )
}

export default Projects;