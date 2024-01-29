import React from 'react'

import html from './media/html.png'
import css from './media/css.png'
import javascript from './media/javascript.png'
import react from './media/react.png'
import bootstrap from './media/bootstrap.png'

import python from './media/python.png'
import flask from './media/flask.png'
import sql from './media/sql.png'
import sqlalch from './media/sqlalchemy.png'
import sqlite from './media/sqlite3.png'

import git from './media/git.png'
import nodejs from './media/nodejs.png'
import postman from './media/postman.png'
import figma from './media/figma.png'



const Tools = () => {
    return (
        <div className='Tools container d-flex flex-column justify-content-center'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1 className='display-6 fst-italic text-start ps-3' data-aos='fade-right' data-aos-delay='200'>Frontend</h1>
                </div>
            </div>
            <div className='row row-cols-5 justify-content-around'>
                <div className='col-md-2' data-aos='fade-right' data-aos-delay='400' data-aos-easing='ease'>
                    <img src={html} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-2' data-aos='fade-right' data-aos-delay='600'>
                    <img src={css} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-2' data-aos='fade-right' data-aos-delay='800'>
                    <img src={javascript} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-2' data-aos='fade-right' data-aos-delay='1000'>
                    <img src={react} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-2 align-self-center' data-aos='fade-right' data-aos-delay='1200'>
                    <img src={bootstrap} className='img-fluid' alt='Error!'></img>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12' data-aos='fade-left' data-aos-delay='1400'>
                    <h1 className='display-6 fst-italic text-end pe-4 pt-5'>Backend</h1>
                </div>
            </div>
            <div className='row row-cols-4 justify-content-around pb-5 px-5'>
                <div className='col-md-2' data-aos='fade-left' data-aos-delay='1600'>
                    <img src={python} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-2' data-aos='fade-left' data-aos-delay='1800'>
                    <img src={flask} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-2' data-aos='fade-left' data-aos-delay='2000'>
                    <img src={sql} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-2' data-aos='fade-left' data-aos-delay='2400'>
                    <img src={sqlalch} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-3' data-aos='fade-left' data-aos-delay='2600'>
                    <img src={sqlite} className='img-fluid' alt='Error!'></img>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12' data-aos='fade-right' data-aos-delay='400'>
                    <h1 className='display-6 fst-italic text-start ps-3 p-3 mt-3'>Otras herramientas</h1>
                </div>
            </div>
            <div className='row row-cols-4 justify-content-around pb-5 px-5'>
                <div className='col-md-2' data-aos='fade-right' data-aos-delay='600'>
                    <img src={git} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-2' data-aos='fade-right' data-aos-delay='800'>
                    <img src={nodejs} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-2' data-aos='fade-right' data-aos-delay='1000'>
                    <img src={postman} className='img-fluid' alt='Error!'></img>
                </div>
                <div className='col-md-2' data-aos='fade-right' data-aos-delay='1200'>
                    <img src={figma} className='img-fluid' alt='Error!'></img>
                </div>
            </div>
        </div>
    )
}

export default Tools;