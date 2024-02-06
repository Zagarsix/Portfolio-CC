import React from 'react'
import profile2 from './media/perfil4.jpg'


const About = () => {
  const handleClick = (url) => {
    window.open(url, '__blank', 'noopener,noreferrer');
  }
  return (
    <div className='About container-fluid d-flex flex-column justify-content-center'>
      <div className='row justify-content-end align-items-center'>
        <div className='col-md-6'>
          <h1 className='display-3 fst-italic'>Hola<i class="fa-solid fa-hand fa-shake fa-2xl"></i>
          </h1>
        </div>
        <div className='col-md-2'>
          <img src={profile2} className="Perfil2 img-fluid" alt="foto de mi rostro con bigote y barba"></img>
        </div>
      </div>
      <div className='row justify-content-start align-items-start'>
        <div className='col-12'>
          <h1 className='mt-5' data-aos='fade-left' data-aos-delay='900'>
            <ul className='justify-content-start align-items-start'>
              <li>Mi nombre es <strong>Claudio Ernesto Candia Jofré.</strong></li>
              <li>Mi nombre de perfil: <strong>Zagarsix</strong>, se debe a mi antiguo nickname de gamer.</li>
              <li>Nací en <strong>Santiago</strong>, un 10 de Junio de 1987.</li>
              <li>Chequea mi <strong className="CV" onClick={() => { handleClick('https://flowcv.com/resume/fn9716kr8s') }}>CV.</strong></li>
            </ul>
          </h1>
        </div>
        <div className="col-12 mt-2" data-aos='fade-down' data-aos-delay='500'>
          <i className="fa-solid fa-angles-down fa-2xl"></i>
        </div>
        <div className='col-12'>
          <h1 className='p-2 fst-italic' data-aos='fade-right' data-aos-delay='500'>Estudié en <strong>4Geeks Academy</strong></h1>
          <h1 className='mt-3' data-aos='fade-left' data-aos-delay='500'>adquiriendo conocimientos en <strong>Javascript y Python,</strong><br />
            y tecnologías como <strong>Html5, CSS3, React, Bootstrap, Sql Alchemy, Flask y Git.</strong><br />
            Mi objetivo es profundizar en estos lenguajes y aprender nuevas tecnologías complementarias.
          </h1>
        </div>
      </div>
    </div>
  )
}

export default About;