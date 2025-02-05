import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkGallery from './components/WorkGallery'
import AboutMe from './AboutMe'
import Footer from './components/Footer'

function App() {
  return (
    <section className='grid grid-cols-16 gap-y-24 pt-11 w-full bg-linear-to-b from-[#151515] to-[#101010]'>
      <Navbar/>
      <Hero/>
      <WorkGallery/>
      <AboutMe/>
      <Footer/>
    </section>
  )
}

export default App
