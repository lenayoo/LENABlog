import { useState } from 'react'
import NavBar from '../NavBar'
import './style.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function TiL() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [tilInput, setTilInput] = useState('')

  const inputChangeHandler = (e) => {
    console.log(e.target.value)
    setTilInput(e.target.value)
  }

  const submitHandler = () => {
    
  }

  return (
    <div className="page-body til">
      <div className="page-header">
        <NavBar />
      </div>
      <h1>Til</h1>
      <form className="til-form" onSubmit={submitHandler}>
        <label>Date</label>
        <DatePicker
          className="til-date"
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
        />
        <label className="til-label">What I did for today</label>
        <input
          className="til-input"
          value={tilInput}
          onChange={inputChangeHandler}
        />
        <button type="submit">save</button>
      </form>
      <div className="underline"></div>
    </div>
  )
}

export default TiL
