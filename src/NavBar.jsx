import './App.css'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <ul className="header__nav">
        <li className="header__li">
          <Link to="/">Home</Link>
        </li>
        <li className="header__li">
          <Link to="/about">About</Link>
        </li>
        <li className="header__li">
          <Link to="/til">TIL</Link>
        </li>
        <li className="header__li">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="header__li">
          <Link to="/todayWord">Today Word</Link>
        </li>
        <li className="header__li">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </>
  )
}

export default NavBar
