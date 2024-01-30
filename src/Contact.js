import React from 'react'

const Contact = () => {
  const handleClick = (url) => {
    window.open(url, '__blank', 'noopener,noreferrer');
  }
  return (
    <div className='Contact container d-flex flex-column justify-content-start'>
      <div className="row" data-aos='zoom-out' data-aos-delay='700'>
        <div className="col-md-12 p-3 mb-5">
          <h1 className='display-6 fst-italic'>Ante cualquier consulta, duda o sugerencia... </h1>
          <h1 className="display-4">
            <strong>...contáctame!</strong>
          </h1>
        </div>
        <div className="col-md-3">
          <h1 className='display-6'><i className="fa-brands fa-linkedin fa-beat-fade fa-2xl" onClick={() => { handleClick('https://www.linkedin.com/in/zagarsix117/') }}></i></h1>
        </div>
        <div className="col-md-3">
          <h1 className='display-6'><i className="fa-brands fa-square-github fa-beat-fade fa-2xl " onClick={() => { handleClick('https://github.com/Zagarsix') }}></i></h1>
        </div>
        <div className="col-md-3">
          <h1 className='display-6'><i className="fa-brands fa-square-whatsapp fa-beat-fade fa-2xl " onClick={() => { handleClick('https://wa.me/56962310719/') }}></i></h1>
        </div>
        <div className="col-md-3">
          <h1 className='display-6'><i className="fa-solid fa-square-envelope fa-beat-fade fa-2xl" onClick={() => { handleClick('mailto:claudk1006@gmail.com') }}></i></h1>
        </div>
      </div>
    </div>
  )
}

export default Contact;