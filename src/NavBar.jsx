import './App.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <ul className="header__nav">
        <li className="header__li">
          <Link to="/" className="header__li-text">
            Home
          </Link>
        </li>
        <li className="header__li">
          <Link to="/about" className="header__li-text">
            About
          </Link>
        </li>
        <li className="header__li">
          <Link to="/til" className="header__li-text">
            TIL
          </Link>
        </li>
        <li className="header__li">
          <Link to="/blog" className="header__li-text">
            Blog
          </Link>
        </li>
        <li className="header__li">
          <Link to="/todayWord" className="header__li-text">
            Today Word
          </Link>
        </li>
        <li className="header__li">
          <Link to="/contact" className="header__li-text">
            Contact
          </Link>
        </li>
      </ul>
    </>
  )
}

export default NavBar
