import { useState } from 'react'
import Navbar from '../common/Navbar'
import Hero from './components/Hero'
import WorkGallery from './components/WorkGallery'
import AboutMe from './components/AboutMe'
import Footer from '../common/Footer'

function Home() {
    return (
        <section className='grid grid-cols-8 md:grid-cols-16 gap-y-24 w-full bg-[#151515]'>
            <Navbar />
            <Hero />
            <WorkGallery id='work'/>
            <AboutMe id='aboutme'/>
        </section>
    )
}

export default Home
