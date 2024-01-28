import React from 'react'
import './styles/index.css';
import profile from './media/perfil.jpg'
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  // const handleClick = (url) => {
  //   window.open(url, '__blank', 'noopener,noreferrer');
  // }
  return (
    <div className='Home container-fluid d-flex flex-column justify-content-center'>
      {/* <div className="row">
        <div className="col-md-12">
          <div className="btn btn-success" onClick={() => { handleClick('https://github.com/Zagarsix') }}>Bienvenido</div>
        </div>
      </div> */}
      <div className='row justify-content-center align-items-center'>
        <div className='col-md-3 p-3 mb-5'>
          <img src={profile} className="img-fluid rounded-circle h-50 w-20" alt='I am'></img>
        </div>
        <div className='col-md-6 align-self-center'>
          <h2 className='display-5'>Hola!, yo soy</h2>
          <h1 className='display-3' id="specialName"><Typewriter loop cursor delaySpeed={2500} words={['Claudio Candia', 'Zagarsix']} /></h1>
          <h2 className='h4 fst-italic'>Desarrollador Full Stack</h2>
        </div>
        <div className="angles col-12 py-3" data-aos='fade-down' data-aos-delay='500'>
          <i className="fa-solid fa-angles-down fa-2xl"></i>
        </div>
      </div>
      <div className='row p-2 mt-4 align-items-start'>
        <div className='col-12'>
          <h1 className='p-2' data-aos='fade-right' data-aos-delay='500'>Estudié en <strong>4Geeks Academy</strong></h1>
          <h1 className='mt-3' data-aos='fade-left' data-aos-delay='500'>adquiriendo conocimientos en <strong>Javascript y Python,</strong><br />
            y tecnologías como <strong>Html5, CSS3, React, Bootstrap, Sql Alchemy, Flask y Git.</strong><br />
            Mi objetivo es profundizar en estos lenguajes y aprender nuevas tecnologías complementarias.
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Home