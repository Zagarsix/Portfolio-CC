import React from 'react'
import profile2 from './media/perfil4.jpg'


const About = () => {
  const handleClick = (url) => {
    window.open(url, '__blank', 'noopener,noreferrer');
  }
  return (
    <div className='About container-fluid d-flex flex-column justify-content-center'>
      <div className='row justify-content-end align-items-center'>
        <div className='col-md-5 justify-content-end align-self-center'>
          <h2 className='display-5'>Hola<i class="fa-solid fa-hand fa-shake fa-2xl"></i>
          </h2>
        </div>
        <div className='col-md-2'>
          <img src={profile2} className="Perfil2 img-fluid rounded-circle" alt="foto de mi rostro con bigote y barba"></img>
        </div>
      </div>
      <div className='row justify-content-start align-items-start'>
        <div className='col-12 justify-content-start'>
          <h1 className='display-6 mt-5' data-aos='fade-left' data-aos-delay='700'>° Mi nombre es Claudio Ernesto Candia Jofré.<br />
            ° Mi nombre de perfil: Zagarsix, se debe a mi antiguo nickname de gamer.<br/>
            ° Nací en Santiago, un 10 de Junio de 1987. <br/>
            ° Chequea mi <span onClick={() => { handleClick('https://flowcv.com/resume/fn9716kr8s') }}>CV.</span>
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