import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from './store/appContext';

import './styles/App.css';

import Navbar from './Navbar';
import Footer from './Footer';

import Home from './Home';
import About from './About';
import PreSkills from './PreSkills';
import Tools from './Tools';
import Projects from './Projects';
import Interests from './Interests';
import Contact from './Contact';


const App = () => {

  const basename = process.env.BASENAME || "";

  return (
    <div className="App">
      <BrowserRouter basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/PreSkills" element={<PreSkills />} />
          <Route path="/Tools" element={<Tools />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Interests" element={<Interests />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<h1>Not found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}


export default injectContext(App);
