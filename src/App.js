import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './component/home';
import About from './component/about';
import Contact from './component/contact';
import Ahmad from './abc.jpg'


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <h1>hi ahmad</h1>
      <p>helloe hows u</p>
      <img src={Ahmad} width={20} height={20}></img>
    </Router>
  )
}

export default App;