import React from 'react'


const Introduction = () => {
  return (
    <div className='introduction container-fluid d-flex flex-column justify-content-center'>
      <div className='row'>
        <div className='col-12'>
          <h1 className='display-5' data-aos='fade-right' data-aos-delay='200'>Lorem ipsum dolor sit amet consectetur adipiscing. </h1>
          <h1 className='display-6 mt-5' data-aos='fade-left' data-aos-delay='700'>At auctor urna nunc id cursus. <br />
          Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus.<br />Lorem ipsum dolor sit amet consectetur adipiscing.<br />
          Lorem ipsum dolor sit amet consectetur adipiscing.
          </h1>
        </div>
        <div className="col-12 mt-5" data-aos='fade-down' data-aos-delay='1000'>
          <i className="fa-solid fa-angles-down fa-2xl"></i>
        </div>
      </div>
    </div>
  )
}

export default Introduction;