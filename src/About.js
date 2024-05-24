import React from 'react'
import profile2 from './media/perfil4.jpg'
import myfamily from './media/myFamily.jpg'


const About = () => {
  const handleClick = (url) => {
    window.open(url, '__blank', 'noopener,noreferrer');
  }
  return (
    <div className='About container-fluid d-flex flex-column justify-content-start'>
      <div className='row justify-content-end align-items-center'>
        <div className='col-md-6'>
          <h1 className='display-3 fst-italic'>Hola<i className="fa-solid fa-hand fa-shake"></i>
          </h1>
        </div>
        <div className='col-md-2'>
          <img src={profile2} className="Perfil2 img-fluid" alt="foto de mi rostro con bigote y barba"></img>
        </div>
      </div>
      <div className='row justify-content-start align-items-start'>
        <div className='col-12'>
          <h3 className='mt-5' data-aos='fade-left' data-aos-delay='900'>
            <ul className='justify-content-start align-items-start'>
              <li>Mi nombre es <strong>Claudio Ernesto Candia Jofré.</strong></li>
              <li>Mi nombre de perfil: <strong>Zagarsix</strong>, se debe a mi antiguo nickname de gamer.</li>
              <li>Nací en <strong>Santiago</strong>, un 10 de Junio de 1987.</li>
              <li>Chequea mi <strong className="CV" onClick={() => { handleClick('https://flowcv.com/resume/fn9716kr8s') }}>CV.</strong></li>
            </ul>
          </h3>
        </div>
        <div className="col-12 mt-2" data-aos='fade-down' data-aos-delay='500'>
          <i className="fa-solid fa-angles-down fa-2xl"></i>
        </div>
        <div className='col-12'>
          <h3 className='mt-5' data-aos='fade-right' data-aos-delay='600'>
            <ul className='justify-content-start align-items-start'>
              <li>Antes de conocer el mundo IT, estudié <i>Química Ambiental</i> en la <strong>Universidad de Chile.</strong></li>
              <li>Soy un músico autodidacta. Me encanta tocar <strong>batería.</strong></li>
              <li>En mis tiempos libres, también soy un <strong>jugador semi-profesional de tenis de mesa.</strong></li>
              <li>Y gran parte de mi tiempo, lo dedico a <strong>mi familia </strong>. <i>Un gran pedazo de mi corazón</i> plasmado en una imagen.</li>
            </ul>
          </h3>
          <div className='col-md-12' data-aos='fade-left' data-aos-delay='500'>
            <img src={myfamily} className="myFamily img-fluid" alt="foto de mi familia: mi esposa y mis 5 hijos"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;