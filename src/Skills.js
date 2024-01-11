import React from 'react'
import javascript from './media/javascript.png'
import react from './media/react.png'
import bootstrap from './media/bootstrap.png'
import html from './media/html.png'
import css from './media/css.png'
import python from './media/python.png'
import flask from './media/flask.png'
import sqlalch from './media/sqlalchemy.png'
import sql from './media/sql.png'


function Skills() {
    return (
        <div className='skills container d-flex flex-column justify-content-center'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1 className='display-4 fst-italic text-start ps-3' data-aos='fade-right' data-aos-delay='300'>Frontend</h1>
                </div>
            </div>
            <div className='row row-cols-5 justify-content-around'>
                <div className='col-md-2' data-aos='fade-right' data-aos-delay='500'>
                    <img src={javascript} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-2' data-aos='fade-right' data-aos-delay='800'>
                    <img src={react} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-2 align-self-center' data-aos='fade-right' data-aos-delay='1100'>
                    <img src={bootstrap} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-2' data-aos='fade-right' data-aos-delay='1400'>
                    <img src={html} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-2' data-aos='fade-right' data-aos-delay='1700'>
                    <img src={css} className='img-fluid' alt='Error!'></img>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12' data-aos='fade-left' data-aos-delay='1900'>
                    <h1 className='display-4 fst-italic text-end pe-4 pt-5'>Backend</h1>
                </div>
            </div>
            <div className='row row-cols-4 justify-content-around pb-5 px-5'>
                <div className='col-md-3' data-aos='fade-left' data-aos-delay='3000'>
                    <img src={python} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-3' data-aos='fade-left' data-aos-delay='2800'>
                    <img src={flask} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-3' data-aos='fade-left' data-aos-delay='2500'>
                    <img src={sqlalch} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-3' data-aos='fade-left' data-aos-delay='2200'>
                    <img src={sql} className='img-fluid' alt='Error!'></img>
                </div>
            </div>
        </div>
    )
}

export default Skills