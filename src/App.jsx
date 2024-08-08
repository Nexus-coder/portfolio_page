import './App.css'
import Navbar from './Navbar'
import Intro from './Intro'
import Footer from './Footer'
import Project from './Project'
import Contact from './Contact'
import { useRef } from 'react'
import { Analytics } from "@vercel/analytics/react"
function App() {

  const contactRef = useRef(null)
  const projectref = useRef(null)


  function toContact() {
    contactRef.current?.scrollIntoView({ behaviour: "smooth", block: "start" })
  }

  function toProject() {
    projectref.current?.scrollIntoView({ behaviour: "smooth", block: "start" })
  }
  return (
    <>
      <Analytics />
      <Navbar toContact={toContact} toProject={toProject} />

      <Intro />

      <div className='gradient'></div>

      <Project ref={projectref} />

      <div className="gradient"></div>

      <Contact ref={contactRef} />

      <div className="gradient"></div>

      <Footer />
    </>
  )
}

export default App
