import quotesData from '../assets/quotes.json'
import NavBar from '../NavBar'
import './style.css'

function TodayWord() {
  const randomIndex = Math.floor(Math.random() * quotesData.quotes.length)
  const quote = quotesData.quotes[randomIndex].quote
  const author = quotesData.quotes[randomIndex].author

  return (
    <div className="page-body">
      <div className="page-header">
        <NavBar />
      </div>
      <h1>TodayWord</h1>
      <p>
        Sometimes, life gives you lemon. All you need to do is to make lemonade
        from that lemon.
      </p>
      <div className="todayword-quote">
        <h3>{quote}</h3>
        <p>{author}</p>
      </div>
    </div>
  )
}

export default TodayWord
