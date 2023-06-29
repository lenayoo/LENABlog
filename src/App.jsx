import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './NavBar'
import TodayWord from './pages/TodayWord'
import Home from './pages/home'
import About from './pages/About'
import Blog from './pages/Blog'
import Til from './pages/Til'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/TIL" element={<Til />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/todayWord" element={<TodayWord />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
