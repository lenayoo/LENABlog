import { useState } from 'react'
import NavBar from '../NavBar'
import './style.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function TiL() {
  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <div className="page-body">
      <div className="page-header">
        <NavBar />
      </div>
      <h1>Til</h1>
      <form className="til-form">
        <label>Date</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
        <label className="til-label">What I did for today</label>
        <input className="til-input" />
        <button type="submit">save</button>
      </form>
      <div className="underline"></div>
    </div>
  )
}

export default TiL
