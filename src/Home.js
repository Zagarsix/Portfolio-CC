import React from 'react'
import './styles/index.css';
import profile from './media/perfil.jpg'
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  // const handleClick = (url) => {
  //   window.open(url, '__blank', 'noopener,noreferrer');
  // }
  return (
    <div className='home container-fluid d-flex flex-column justify-content-center'>
      {/* <div className="row">
        <div className="col-md-12">
          <div className="btn btn-success" onClick={() => { handleClick('https://github.com/Zagarsix') }}>Bienvenido</div>
        </div>
      </div> */}
      <div className='row justify-content-center align-items-flex-start'>
      <div className='col-md-5 p-5'>
          <img src={profile} className="img-fluid rounded-circle h-50 w-20" alt='I am'></img>
        </div>
        <div className='col-md-6 align-self-start'>
          <h2 className='display-5'>Hola!, yo soy</h2>
          <h1 className='display-3' id="specialName"><Typewriter loop cursor delaySpeed={2500} words={['Claudio Candia', 'Zagarsix']} /></h1>
          <h2 className='h4 fst-italic'>Desarrollador Full Stack</h2>
        </div>
        
      </div>
    </div>
  )
}

export default Home