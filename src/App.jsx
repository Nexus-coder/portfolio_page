import './App.css'
import Navbar from './Navbar'
import Intro from './Intro'
import Footer from './Footer'
import Project from './Project'
import Contact from './Contact'
import { useRef } from 'react'
function App() {
  const contactRef = useRef(null)
  const projectref = useRef(null)
  // const ref = useRef(null)
  // const ref = useRef(null)
  function toContact() {
    contactRef.current?.scrollIntoView({ behaviour: "smooth", block: "start" })
  }
  function toProject() {
    projectref.current?.scrollIntoView({ behaviour: "smooth", block: "start" })
  }
  return (
    <>
      <Navbar toContact={toContact} toProject={toProject}/>
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
