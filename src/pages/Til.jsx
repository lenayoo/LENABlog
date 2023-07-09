import NavBar from '../NavBar'
import './style.css'

function TiL() {
  return (
    <div className="page-body">
      <div className="page-header">
        <NavBar />
      </div>
      <h1>Til</h1>
      <form className="til-form">
        <label className="til-label">Date</label>
        <input className="til-input" />
        <label className="til-label">What I did for today</label>
        <input className="til-input" />
        <button type="submit">save</button>
      </form>
      <div className="underline"></div>
    </div>
  )
}

export default TiL
