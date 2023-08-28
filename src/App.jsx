import './App.css'
import Navbar from './Navbar'
import Intro from './Intro'
import Footer from './Footer'
import Project from './Project'
import Contact from './Contact'
function App() {

  return (
    <>
      <Navbar />
      <Intro/>
      <div className='gradient'></div>
      <Project/>
      <div className="gradient"></div>
      <Contact/>
      <div className="gradient"></div>
      <Footer/>
    </>
  )
}

export default App
