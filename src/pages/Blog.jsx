import NavBar from '../NavBar'
import './style.css'

function Blog() {
  return (
    <div className="page-body">
      <div className="page-header">
        <NavBar />
      </div>
      <h1>Blog</h1>
      <form className="blog-form">
        <label>Title</label>
        <input className="blog-title" />
        <label>Date</label>
        <input className="blog-date" />
        <label>Content</label>
        <input className="blog-content" />
        <button>저장하기</button>
      </form>
      <div className="underline"></div>
    </div>
  )
}

export default Blog
