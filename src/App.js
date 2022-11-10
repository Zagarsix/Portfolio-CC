import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import NotFound from "./components/notFound";
import Navbar from "./components/navbar";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route exact path={"/"} >
              <Home />
            </Route>
            <Route exact path={"/about"} >
              <About />
            </Route>
            <Route exact path={"/projects"} >
              <Projects />
            </Route>
            <Route exact path={"/contact"} >
              <Contact />
            </Route>
            <Route component={NotFound} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
