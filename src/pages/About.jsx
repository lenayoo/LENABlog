import NavBar from '../NavBar'
import './style.css'

function About() {
  return (
    <div className="page-body">
      <div className="page-header">
        <NavBar />
      </div>
      <h1>About</h1>
      <div className="about-intro">
        <p>
          Hi, I am Lena. I am react programmer. <br />I love to create the
          things to help me and others to find their ways. sound too big?
          <br />
          Currently, I live in Tokyo, Japan and work as a frontend engineer.{' '}
          <br />
          But who will dare to know that what kind of engineer I am going to be
          in 5 years?
        </p>
      </div>
    </div>
  )
}

export default About
