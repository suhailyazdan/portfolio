import React from 'react'
import {Routes, Route} from 'react-router-dom'
import App from './App'
import Home from './containers/Home'
import AboutMe from './containers/AboutMe'
import Skills from './containers/Skills'
import Services from './containers/Services'
import Portfolio from './containers/Portfolio'
import ContactMe from './containers/ContactMe'

const Roots = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Route>
    </Routes>
    </>
  )
}

export default Roots