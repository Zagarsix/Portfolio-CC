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
          <h1 className='display-6 mt-5' data-aos='fade-left' data-aos-delay='700'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Ligula ullamcorper malesuada proin libero nunc consequat. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Quam lacus suspendisse faucibus interdum. Tempus egestas sed sed risus pretium quam vulputate dignissim. Magna fermentum iaculis eu non diam phasellus vestibulum. Lorem ipsum dolor sit amet consectetur adipiscing. At auctor urna nunc id cursus. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Euismod lacinia at quis risus sed vulputate odio ut enim. Habitant morbi tristique senectus et. Malesuada nunc vel risus commodo. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.<br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Ligula ullamcorper malesuada proin libero nunc consequat. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Quam lacus suspendisse faucibus interdum. Tempus egestas sed sed risus pretium quam vulputate dignissim. Magna fermentum iaculis eu non diam phasellus vestibulum. Lorem ipsum dolor sit amet consectetur adipiscing. At auctor urna nunc id cursus. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Euismod lacinia at quis risus sed vulputate odio ut enim. Habitant morbi tristique senectus et. Malesuada nunc vel risus commodo. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin.
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