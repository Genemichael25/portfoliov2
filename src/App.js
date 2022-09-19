import React from 'react'
import { About } from './components/About'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Projects } from './components/Projects'

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Footer />
    </>
  )
}

export default App
