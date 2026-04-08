import { useState } from 'react'
import '../styles/assessment.css'
import CookieManager from '../utils/CookieManager'

const Assessment = () => {
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState({})

  const correctAnswers = {
    f1: '11',
    f2: '90 minutes',
    f3: 'Hand',
    f4: '1',
    f5: 'Penalty shootout',
    c1: '11',
    c2: '6',
    c3: '22 yards',
    c4: 'T20',
    c5: 'Wicket Keeper',
    k1: '7',
    k2: 'Kabaddi',
    k3: '40 mins',
    k4: 'Raider',
    k5: 'All defenders out'
  }

  const handleAnswerChange = (e) => {
    const { name, value } = e.target
    setAnswers(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    let correctCount = 0
    Object.keys(correctAnswers).forEach(key => {
      if (answers[key] === correctAnswers[key]) {
        correctCount++
      }
    })
    
    const totalQuestions = Object.keys(correctAnswers).length
    const percentage = Math.round((correctCount / totalQuestions) * 100)
    
    setScore({ correct: correctCount, total: totalQuestions, percentage })
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

      <div className="assessment">
        {submitted ? (
          <div style={{ 
            padding: '40px', 
            backgroundColor: '#f0f8ff', 
            borderRadius: '10px',
            marginTop: '20px'
          }}>
            <h1 style={{ color: '#0066cc', marginBottom: '10px', textAlign: 'center' }}>Assessment Results 📊</h1>
            <div style={{ 
              fontSize: '48px', 
              fontWeight: 'bold', 
              color: score.percentage >= 80 ? '#28a745' : score.percentage >= 60 ? '#ffc107' : '#dc3545',
              marginBottom: '15px',
              textAlign: 'center'
            }}>
              {score.percentage}%
            </div>
            <p style={{ fontSize: '18px', marginBottom: '30px', color: '#333', textAlign: 'center', fontWeight: 'bold' }}>
              Score: <strong>{score.correct} out of {score.total} questions</strong>
            </p>
            <p style={{ fontSize: '16px', marginBottom: '30px', color: '#333', textAlign: 'center' }}>
              {score.percentage >= 80 ? '🎉 Excellent! Keep it up!' : 
               score.percentage >= 60 ? '👍 Good! Review the material and try again.' :
               '📚 Keep learning and practice more!'}
            </p>

            {/* Answer Review Section */}
            <div style={{ marginTop: '40px' }}>
              <h2 style={{ color: '#0066cc', marginBottom: '20px', fontSize: '22px' }}>Answer Review</h2>
              
              <h3 style={{ color: '#333', marginTop: '25px', marginBottom: '15px', borderBottom: '2px solid #0066cc', paddingBottom: '10px' }}>Football Section</h3>
              {['f1', 'f2', 'f3', 'f4', 'f5'].map((key, idx) => (
                <div key={key} style={{ 
                  marginBottom: '20px', 
                  padding: '15px', 
                  backgroundColor: answers[key] === correctAnswers[key] ? '#d4edda' : '#f8d7da',
                  border: `2px solid ${answers[key] === correctAnswers[key] ? '#28a745' : '#dc3545'}`,
                  borderRadius: '5px'
                }}>
                  <p style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
                    Q{idx + 1}: {['How many players are on the field per team?', 'Duration of a standard football match?', 'Which part of the body cannot touch the ball?', 'How many referees are on the field?', 'What decides the winner if scores are tied?'][idx]}
                  </p>
                  <p style={{ margin: '5px 0', color: '#333' }}>
                    Your Answer: <span style={{ fontWeight: 'bold', color: answers[key] === correctAnswers[key] ? '#28a745' : '#dc3545' }}>{answers[key] || 'Not answered'}</span>
                  </p>
                  <p style={{ margin: '5px 0', color: '#333' }}>
                    Correct Answer: <span style={{ fontWeight: 'bold', color: '#28a745' }}>{correctAnswers[key]}</span>
                  </p>
                  {answers[key] === correctAnswers[key] ? <p style={{ margin: '5px 0', color: '#28a745', fontWeight: 'bold' }}>✓ Correct</p> : <p style={{ margin: '5px 0', color: '#dc3545', fontWeight: 'bold' }}>✗ Incorrect</p>}
                </div>
              ))}

              <h3 style={{ color: '#333', marginTop: '30px', marginBottom: '15px', borderBottom: '2px solid #0066cc', paddingBottom: '10px' }}>Cricket Section</h3>
              {['c1', 'c2', 'c3', 'c4', 'c5'].map((key, idx) => (
                <div key={key} style={{ 
                  marginBottom: '20px', 
                  padding: '15px', 
                  backgroundColor: answers[key] === correctAnswers[key] ? '#d4edda' : '#f8d7da',
                  border: `2px solid ${answers[key] === correctAnswers[key] ? '#28a745' : '#dc3545'}`,
                  borderRadius: '5px'
                }}>
                  <p style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
                    Q{idx + 1}: {['How many players are in a cricket team?', 'How many balls are in one over?', 'Length of a cricket pitch?', 'Which format has 20 overs per side?', 'Who stands behind the stumps?'][idx]}
                  </p>
                  <p style={{ margin: '5px 0', color: '#333' }}>
                    Your Answer: <span style={{ fontWeight: 'bold', color: answers[key] === correctAnswers[key] ? '#28a745' : '#dc3545' }}>{answers[key] || 'Not answered'}</span>
                  </p>
                  <p style={{ margin: '5px 0', color: '#333' }}>
                    Correct Answer: <span style={{ fontWeight: 'bold', color: '#28a745' }}>{correctAnswers[key]}</span>
                  </p>
                  {answers[key] === correctAnswers[key] ? <p style={{ margin: '5px 0', color: '#28a745', fontWeight: 'bold' }}>✓ Correct</p> : <p style={{ margin: '5px 0', color: '#dc3545', fontWeight: 'bold' }}>✗ Incorrect</p>}
                </div>
              ))}

              <h3 style={{ color: '#333', marginTop: '30px', marginBottom: '15px', borderBottom: '2px solid #0066cc', paddingBottom: '10px' }}>Kabaddi Section</h3>
              {['k1', 'k2', 'k3', 'k4', 'k5'].map((key, idx) => (
                <div key={key} style={{ 
                  marginBottom: '20px', 
                  padding: '15px', 
                  backgroundColor: answers[key] === correctAnswers[key] ? '#d4edda' : '#f8d7da',
                  border: `2px solid ${answers[key] === correctAnswers[key] ? '#28a745' : '#dc3545'}`,
                  borderRadius: '5px'
                }}>
                  <p style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: 'bold', color: '#333' }}>
                    Q{idx + 1}: {['How many players are on court per team?', 'What must a raider chant?', 'Match duration in Pro Kabaddi?', 'Bonus line is crossed by?', 'What is an All-Out?'][idx]}
                  </p>
                  <p style={{ margin: '5px 0', color: '#333' }}>
                    Your Answer: <span style={{ fontWeight: 'bold', color: answers[key] === correctAnswers[key] ? '#28a745' : '#dc3545' }}>{answers[key] || 'Not answered'}</span>
                  </p>
                  <p style={{ margin: '5px 0', color: '#333' }}>
                    Correct Answer: <span style={{ fontWeight: 'bold', color: '#28a745' }}>{correctAnswers[key]}</span>
                  </p>
                  {answers[key] === correctAnswers[key] ? <p style={{ margin: '5px 0', color: '#28a745', fontWeight: 'bold' }}>✓ Correct</p> : <p style={{ margin: '5px 0', color: '#dc3545', fontWeight: 'bold' }}>✗ Incorrect</p>}
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              <button 
                onClick={() => window.location.reload()} 
                style={{
                  backgroundColor: '#0066cc',
                  color: 'white',
                  border: 'none',
                  padding: '12px 30px',
                  fontSize: '16px',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
                Retake Assessment
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
          <h4 className="section-title">ASSESSMENT SECTION</h4>
          <h1 className="main-title">LET'S PUT OUR LEARNING TO WORK</h1>

          <div className="sport-block">
            <h2>Football</h2>
            <div className="question">
              <p>1. How many players are on the field per team?</p>
              <label><input type="radio" name="f1" value="9" onChange={handleAnswerChange} /> 9</label>
              <label><input type="radio" name="f1" value="10" onChange={handleAnswerChange} /> 10</label>
              <label><input type="radio" name="f1" value="11" onChange={handleAnswerChange} /> 11</label>
              <label><input type="radio" name="f1" value="12" onChange={handleAnswerChange} /> 12</label>
            </div>
            <div className="question">
              <p>2. Duration of a standard football match?</p>
              <label><input type="radio" name="f2" value="60 minutes" onChange={handleAnswerChange} /> 60 minutes</label>
              <label><input type="radio" name="f2" value="80 minutes" onChange={handleAnswerChange} /> 80 minutes</label>
              <label><input type="radio" name="f2" value="90 minutes" onChange={handleAnswerChange} /> 90 minutes</label>
              <label><input type="radio" name="f2" value="100 minutes" onChange={handleAnswerChange} /> 100 minutes</label>
            </div>
            <div className="question">
              <p>3. Which part of the body cannot touch the ball?</p>
              <label><input type="radio" name="f3" value="Head" onChange={handleAnswerChange} /> Head</label>
              <label><input type="radio" name="f3" value="Chest" onChange={handleAnswerChange} /> Chest</label>
              <label><input type="radio" name="f3" value="Hand" onChange={handleAnswerChange} /> Hand</label>
              <label><input type="radio" name="f3" value="Foot" onChange={handleAnswerChange} /> Foot</label>
            </div>
            <div className="question">
              <p>4. How many referees are on the field?</p>
              <label><input type="radio" name="f4" value="1" onChange={handleAnswerChange} /> 1</label>
              <label><input type="radio" name="f4" value="2" onChange={handleAnswerChange} /> 2</label>
              <label><input type="radio" name="f4" value="3" onChange={handleAnswerChange} /> 3</label>
              <label><input type="radio" name="f4" value="4" onChange={handleAnswerChange} /> 4</label>
            </div>
            <div className="question">
              <p>5. What decides the winner if scores are tied?</p>
              <label><input type="radio" name="f5" value="Toss" onChange={handleAnswerChange} /> Toss</label>
              <label><input type="radio" name="f5" value="Extra time" onChange={handleAnswerChange} /> Extra time</label>
              <label><input type="radio" name="f5" value="Penalty shootout" onChange={handleAnswerChange} /> Penalty shootout</label>
              <label><input type="radio" name="f5" value="Replay" onChange={handleAnswerChange} /> Replay</label>
            </div>
          </div>

          <div className="sport-block">
            <h2>Cricket</h2>
            <div className="question">
              <p>1. How many players are in a cricket team?</p>
              <label><input type="radio" name="c1" value="9" onChange={handleAnswerChange} /> 9</label>
              <label><input type="radio" name="c1" value="10" onChange={handleAnswerChange} /> 10</label>
              <label><input type="radio" name="c1" value="11" onChange={handleAnswerChange} /> 11</label>
              <label><input type="radio" name="c1" value="12" onChange={handleAnswerChange} /> 12</label>
            </div>
            <div className="question">
              <p>2. How many balls are in one over?</p>
              <label><input type="radio" name="c2" value="4" onChange={handleAnswerChange} /> 4</label>
              <label><input type="radio" name="c2" value="5" onChange={handleAnswerChange} /> 5</label>
              <label><input type="radio" name="c2" value="6" onChange={handleAnswerChange} /> 6</label>
              <label><input type="radio" name="c2" value="8" onChange={handleAnswerChange} /> 8</label>
            </div>
            <div className="question">
              <p>3. Length of a cricket pitch?</p>
              <label><input type="radio" name="c3" value="20 yards" onChange={handleAnswerChange} /> 20 yards</label>
              <label><input type="radio" name="c3" value="21 yards" onChange={handleAnswerChange} /> 21 yards</label>
              <label><input type="radio" name="c3" value="22 yards" onChange={handleAnswerChange} /> 22 yards</label>
              <label><input type="radio" name="c3" value="23 yards" onChange={handleAnswerChange} /> 23 yards</label>
            </div>
            <div className="question">
              <p>4. Which format has 20 overs per side?</p>
              <label><input type="radio" name="c4" value="Test" onChange={handleAnswerChange} /> Test</label>
              <label><input type="radio" name="c4" value="ODI" onChange={handleAnswerChange} /> ODI</label>
              <label><input type="radio" name="c4" value="T20" onChange={handleAnswerChange} /> T20</label>
              <label><input type="radio" name="c4" value="Hundred" onChange={handleAnswerChange} /> Hundred</label>
            </div>
            <div className="question">
              <p>5. Who stands behind the stumps?</p>
              <label><input type="radio" name="c5" value="Bowler" onChange={handleAnswerChange} /> Bowler</label>
              <label><input type="radio" name="c5" value="Slip" onChange={handleAnswerChange} /> Slip</label>
              <label><input type="radio" name="c5" value="Wicket Keeper" onChange={handleAnswerChange} /> Wicket Keeper</label>
              <label><input type="radio" name="c5" value="Umpire" onChange={handleAnswerChange} /> Umpire</label>
            </div>
          </div>

          <div className="sport-block">
            <h2>Kabaddi</h2>
            <div className="question">
              <p>1. How many players are on court per team?</p>
              <label><input type="radio" name="k1" value="5" onChange={handleAnswerChange} /> 5</label>
              <label><input type="radio" name="k1" value="6" onChange={handleAnswerChange} /> 6</label>
              <label><input type="radio" name="k1" value="7" onChange={handleAnswerChange} /> 7</label>
              <label><input type="radio" name="k1" value="8" onChange={handleAnswerChange} /> 8</label>
            </div>
            <div className="question">
              <p>2. What must a raider chant?</p>
              <label><input type="radio" name="k2" value="Ready" onChange={handleAnswerChange} /> Ready</label>
              <label><input type="radio" name="k2" value="Kabaddi" onChange={handleAnswerChange} /> Kabaddi</label>
              <label><input type="radio" name="k2" value="Go" onChange={handleAnswerChange} /> Go</label>
              <label><input type="radio" name="k2" value="Raid" onChange={handleAnswerChange} /> Raid</label>
            </div>
            <div className="question">
              <p>3. Match duration in Pro Kabaddi?</p>
              <label><input type="radio" name="k3" value="30 mins" onChange={handleAnswerChange} /> 30 mins</label>
              <label><input type="radio" name="k3" value="40 mins" onChange={handleAnswerChange} /> 40 mins</label>
              <label><input type="radio" name="k3" value="50 mins" onChange={handleAnswerChange} /> 50 mins</label>
              <label><input type="radio" name="k3" value="60 mins" onChange={handleAnswerChange} /> 60 mins</label>
            </div>
            <div className="question">
              <p>4. Bonus line is crossed by?</p>
              <label><input type="radio" name="k4" value="Defender" onChange={handleAnswerChange} /> Defender</label>
              <label><input type="radio" name="k4" value="Raider" onChange={handleAnswerChange} /> Raider</label>
              <label><input type="radio" name="k4" value="Referee" onChange={handleAnswerChange} /> Referee</label>
              <label><input type="radio" name="k4" value="Coach" onChange={handleAnswerChange} /> Coach</label>
            </div>
            <div className="question">
              <p>5. What is an All-Out?</p>
              <label><input type="radio" name="k5" value="All players scored" onChange={handleAnswerChange} /> All players scored</label>
              <label><input type="radio" name="k5" value="All defenders out" onChange={handleAnswerChange} /> All defenders out</label>
              <label><input type="radio" name="k5" value="All raiders out" onChange={handleAnswerChange} /> All raiders out</label>
              <label><input type="radio" name="k5" value="Match draw" onChange={handleAnswerChange} /> Match draw</label>
            </div>
          </div>

          <button type="submit" className="submit-btn">Submit Assessment</button>
        </form>
        )}
      </div>
    </div>
  )
}

export default Assessment
