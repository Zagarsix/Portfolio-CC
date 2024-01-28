import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from './store/appContext';

import './styles/App.css';

import Navbar from './Navbar';

import Home from './Home';
import Introduction from './Introduction';
import PreSkills from './PreSkills';
import Skills from './Skills';
import Projects from './Projects';
import Interests from './Interests';
import Contact from './Contact';


const App = () => {

  const basename = process.env.BASENAME || "";

  return (
    <div className="App">
      <section className='home'>
        <Home />
      </section>
      <section className='introduction'>
        <Introduction />
      </section>
      <section className='preskills'>
        <PreSkills />
      </section>
      <section className='skills'>
        <Skills />
      </section>
      <section className='projects'>
        <Projects />
      </section>
      <section className='interests'>
        <Interests />
      </section>
      <section className='contact'>
        <Contact />
      </section>

      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Introduction " element={<Introduction />} />
          <Route path="/PreSkills" element={<PreSkills />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Interests" element={<Interests />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default injectContext(App);
