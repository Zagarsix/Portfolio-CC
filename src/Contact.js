import React from 'react'

const Contact = () => {
  const handleClick = (url) => {
    window.open(url,'__blank','noopener,noreferrer');
  }
  return (
    <div className='contact container d-flex flex-column justify-content-center'>
      <div className="row" data-aos='zoom-out' data-aos-delay='200'>
        <div className="col-md-12">
          <h1 className="display-6">
          Contáctame!
          </h1>
        </div>
        <div className="col-md-4 pt-5">
          <h1 className='display-6'><i className="fa-brands fa-2xl fa-linkedin" onClick={() => {handleClick('https://www.linkedin.com/in')}}></i></h1>
        </div>
        <div className="col-md-4 pt-5">
          <h1 className='display-6'><i className="fa-brands fa-2xl fa-square-github" onClick={() => {handleClick('https://github.com/Zagarsix')}}></i></h1>
        </div>
        <div className="col-md-4 pt-5">
          <h1 className='display-6'><i className="fa-brands fa-2xl fa-square-instagram" onClick={() => {handleClick('https://www.instagram.com/')}}></i></h1>
        </div>
        
      </div>
    </div>
  )
}

export default Contact;