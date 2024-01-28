import React from 'react'


const About = () => {
  return (
    <div className='About container-fluid d-flex flex-column justify-content-center'>
      <div className='row'>
        <div className='col-12'>
          <h1 className='display-5' data-aos='fade-right' data-aos-delay='200'>Estudié en <strong>4Geeks Academy</strong></h1>
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