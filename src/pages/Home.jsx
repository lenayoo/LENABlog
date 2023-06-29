import NavBar from '../NavBar'
import './../App.css'

function Home() {
  return (
    <>
      <div className="body">
        <div className="header">
          <div className="header__logo">
            <h1>LENA Blog.</h1>
          </div>
          <NavBar />
        </div>
        <div className="main">
          Hello I am Lena. I am Junior React Developer. Currently I reside in
          Tokyo Japan.
        </div>
        <div className="footer">All rights reserved by &copy;LENA</div>
      </div>
    </>
  )
}

export default Home
