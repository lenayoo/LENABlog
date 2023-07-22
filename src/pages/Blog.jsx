import { useState } from 'react'
import NavBar from '../NavBar'
import './style.css'

function Blog() {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState(null)
  const [content, setContent] = useState('')

  const titleChangeHandler = (e) => {
    console.log(e.target.value)
    setTitle(e.target.value)
  }

  const dateChangeHandler = (e) => {
    console.log(e.target.value)
    setDate(e.target.value)
  }

  const contentChangeHandler = (e) => {
    console.log(e.target.value)
    setContent(e.target.value)
  }

  return (
    <div className="page-body">
      <div className="page-header">
        <NavBar />
      </div>
      <h1>Blog</h1>
      <form className="blog-form">
        <label>Title</label>
        <input
          className="blog-title"
          name="title"
          value={title}
          onChange={titleChangeHandler}
        />
        <label htmlFor="date">Date</label>
        <input
          className="blog-date"
          type="date"
          name="date"
          value={date}
          onInput={dateChangeHandler}
        />
        <label>Content</label>
        <input
          className="blog-content"
          name="content"
          value={content}
          onChange={contentChangeHandler}
        />
        <button>저장하기</button>
      </form>
      <div className="underline"></div>
    </div>
  )
}

export default Blog
