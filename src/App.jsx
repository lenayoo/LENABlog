import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <div className="body">
        <div className="header">
          <div className="header__logo">
            <h1>LENA Blog.</h1>
          </div>
          <ul className="header__nav">
            <li>About</li>
            <li>TIL</li>
            <li>Blog</li>
            <li>Today`s word</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="main">
          Hello I am Lena. I am Junior React Developer. Currently I reside in
          Tokyo Japan. Thank you for visiting me.
        </div>
        <div className="footer">All rights reserved by &copy;LENA</div>
      </div>
    </>
  )
}

export default App
