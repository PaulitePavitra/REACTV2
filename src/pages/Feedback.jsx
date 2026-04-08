import { useState } from 'react'
import '../styles/feedback.css'
import CookieManager from '../utils/CookieManager'

const Feedback = () => {
  const [ratings, setRatings] = useState({ q1: '', q2: '', q3: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleRatingChange = (question, value) => {
    setRatings(prev => ({ ...prev, [question]: value }))
  }

  const showRating = () => {
    const count = Object.values(ratings).filter(v => v).length
    return count
  }

  const validateFeedback = (e) => {
    e.preventDefault()

    if (!ratings.q1 || !ratings.q2 || !ratings.q3) {
      alert('Please answer all rating questions before submitting.')
      return
    }

    const avg = (parseInt(ratings.q1) + parseInt(ratings.q2) + parseInt(ratings.q3)) / 3
    alert(`Thank you for your feedback! ⭐\nYour average rating: ${avg.toFixed(2)}`)
    setSubmitted(true)
  }

  const logout = () => {
    const cookieMgr = new CookieManager()
    cookieMgr.deleteCookie('isLoggedIn')
    cookieMgr.deleteCookie('username')
    cookieMgr.deleteCookie('lastLogin')
    window.location.href = '/'
  }

  return (
    <div>
      <nav className="navbar">
        <div className="nav-left">
          <span className="logo">SportsVidya</span>
        </div>

        <div className="nav-right">
          <a href="/selection" className="nav-btn">Navigation</a>
          <a href="/cricket" className="nav-btn">Cricket</a>
          <a href="/kabaddi" className="nav-btn">Kabaddi</a>
          <a href="/footballindex" className="nav-btn">Football</a>
          <a href="/" className="nav-btn">Home</a>
          <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
      </nav>

      <div className="feedback-container">
        <h4 className="section-title">FEEDBACK</h4>
        <h2 className="main-title">
          On the basis of your experience kindly rate us on the basis of 1–5
        </h2>

        <p id="ratingCount">You have answered {showRating()} rating questions</p>

        <form className="feedback-form" onSubmit={validateFeedback}>
          <div className="feedback-row">
            <p>Did you find our website helpful?</p>
            <div className="options">
              <label><input type="radio" name="q1" value="1" onChange={(e) => handleRatingChange('q1', e.target.value)} /> 1</label>
              <label><input type="radio" name="q1" value="2" onChange={(e) => handleRatingChange('q1', e.target.value)} /> 2</label>
              <label><input type="radio" name="q1" value="3" onChange={(e) => handleRatingChange('q1', e.target.value)} /> 3</label>
              <label><input type="radio" name="q1" value="4" onChange={(e) => handleRatingChange('q1', e.target.value)} /> 4</label>
              <label><input type="radio" name="q1" value="5" onChange={(e) => handleRatingChange('q1', e.target.value)} /> 5</label>
            </div>
          </div>

          <div className="feedback-row">
            <p>How likely are you to recommend this website to a friend?</p>
            <div className="options">
              <label><input type="radio" name="q2" value="1" onChange={(e) => handleRatingChange('q2', e.target.value)} /> 1</label>
              <label><input type="radio" name="q2" value="2" onChange={(e) => handleRatingChange('q2', e.target.value)} /> 2</label>
              <label><input type="radio" name="q2" value="3" onChange={(e) => handleRatingChange('q2', e.target.value)} /> 3</label>
              <label><input type="radio" name="q2" value="4" onChange={(e) => handleRatingChange('q2', e.target.value)} /> 4</label>
              <label><input type="radio" name="q2" value="5" onChange={(e) => handleRatingChange('q2', e.target.value)} /> 5</label>
            </div>
          </div>

          <div className="feedback-row">
            <p>Was it easy to find what you were looking for?</p>
            <div className="options">
              <label><input type="radio" name="q3" value="1" onChange={(e) => handleRatingChange('q3', e.target.value)} /> 1</label>
              <label><input type="radio" name="q3" value="2" onChange={(e) => handleRatingChange('q3', e.target.value)} /> 2</label>
              <label><input type="radio" name="q3" value="3" onChange={(e) => handleRatingChange('q3', e.target.value)} /> 3</label>
              <label><input type="radio" name="q3" value="4" onChange={(e) => handleRatingChange('q3', e.target.value)} /> 4</label>
              <label><input type="radio" name="q3" value="5" onChange={(e) => handleRatingChange('q3', e.target.value)} /> 5</label>
            </div>
          </div>

          <div className="feedback-row">
            <p>Is there any information you were looking for that was missing?</p>
            <textarea placeholder="Write your answer here..."></textarea>
          </div>

          <div className="feedback-row">
            <p>Any suggestions on how we can improve?</p>
            <textarea placeholder="Write your suggestions here..."></textarea>
          </div>

          <div className="submit-container">
            <button type="submit" className="submit-btn">Submit Feedback</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Feedback
