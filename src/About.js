import React from 'react'
import profile2 from './media/perfil4.jpg'


const About = () => {
  return (
    <div className='About container-fluid d-flex flex-column justify-content-center'>
      <div className='row justify-content-center align-items-center'>
        <div className='col-md-6 align-self-center'>
          <h2 className='display-5'>Hola<i class="fa-solid fa-hand-peace fa-beat"></i>
          </h2>
          <div className='col-md-3 p-3 mb-5'>
            <img src={profile2} className="img-fluid rounded-circle h-50 w-30"></img>
          </div>

        </div>
      </div>
      <div className='row justify-content-center align-items-center'>
        <div className='col-12'>
          <h1 className='display-6 mt-5' data-aos='fade-left' data-aos-delay='700'>adquiriendo conocimientos en Javascript y Python,<br />
            y tecnologías como Html5, CSS3, React, Bootstrap, Sql Alchemy, Flask y Git.<br />
            Mi objetivo es profundizar en estos lenguajes y aprender nuevas tecnologías complementarias.
          </h1>
        </div>
        <div className="col-12 mt-5" data-aos='fade-down' data-aos-delay='1000'>
          <i className="fa-solid fa-angles-down fa-2xl"></i>
        </div>
      </div>
    </div>
  )
}

export default About;