import React, { useState } from 'react'
import Navbar from './assets/Components/Navbar'
import Home from './assets/Sections/Home'
import About from './assets/Sections/About'
import Skills from './assets/Sections/Skills'
import Projects from './assets/Sections/Projects'
import Experience from './assets/Sections/Experience'
import Testimonial from './assets/Sections/Testimonial'
import Footer from './assets/Sections/Footer'
import Contact from './assets/Sections/Contact'

import CustomCursor from './assets/Components/CustomCursor'
import IntroAnimation from './assets/Components/IntroAnimation'

const App = () => {
   
   const [intro,setintro] = React.useState(true)

  return (
    <>

    {!intro && <IntroAnimation onFinish={()=> setintro(true)}/>}

    {intro &&(

    <div className='relative gradient text-white'>

      
      <CustomCursor/>

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonial />
      <Contact/>
      
      <Footer />
    </div>)}
  </>
    
  )
}

export default App
