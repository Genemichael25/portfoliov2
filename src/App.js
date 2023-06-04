import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import "./App.css"
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { AboutMe } from './pages/AboutMe'
import { Contact } from './pages/Contact'
import { Uncharted } from './pages/Uncharted'
import { ApartmentApp } from './pages/ApartmentApp'
import { Savannah } from './pages/Savannah'
import { StudentApp } from './pages/StudentApp'

const App = () => {
  return (
    <>
      <Header />
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project-student-app" element={<StudentApp />}/>
            <Route path="/project-uncharted" element={<Uncharted />}/>
            <Route path="/project-apartment" element={<ApartmentApp />}/>
            <Route path="/project-savannahtinder" element={<Savannah />}/>
          </Routes>
        </Router>
      <Footer />
    </>
  )
}

export default App
