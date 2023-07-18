import { useState } from 'react'
import NavBar from '../NavBar'
import './style.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function TiL() {
  const [newData, setNewData] = useState({ selectedDate: null, tilInput: '' })
  const [tilLog, setTilLog] = useState([])

  const inputChangeHandler = (e) => {
    const { value } = e.target
    setNewData({ ...newData, tilInput: value })
  }

  const dateChangeHandler = (date) => {
    console.log(date)
    setNewData({ ...newData, selectedDate: date })
  }

  const submitHandler = (event) => {
    alert('data is saved')
    event.preventDefault()
    // 추가적인 처리 로직을 작성하면 됩니다.
    setTilLog((prevData) => [
      ...prevData,
      {
        selectedDate: newData.selectedDate,
        tilInput: newData.tilInput,
      },
    ])
    setNewData({ selectedDate: '', tilInput: '' })
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
          name="date"
          className="til-date"
          selected={newData.selectedDate}
          onChange={dateChangeHandler}
        />
        <label className="til-label">What I did for today</label>
        <input
          name="input"
          className="til-input"
          value={newData.tilInput}
          onChange={inputChangeHandler}
        />
        <button type="submit">save</button>
      </form>
      <div className="underline"></div>
      <ul className="til-logs">
        {tilLog.map((log, index) => (
          <li key={index}>
            <h3>
              {log.selectedDate ? log.selectedDate.toString() : 'No Date'}
            </h3>
            <p>{log.tilInput}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TiL
