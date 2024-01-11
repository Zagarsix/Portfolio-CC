import './App.css';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Introduction from './Introduction';
import React from 'react';
import PreSkills from './PreSkills';
import Skills from './Skills';
import Projects from './Projects';
import Interests from './Interests';
import Contact from './Contact';
import injectContext from './store/appContext';

function App() {
  return (
      <div className="App">
        <Navbar />
        <section className='dashboard'>
          <Dashboard />
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
      </div>
  );
}


export default injectContext(App);
