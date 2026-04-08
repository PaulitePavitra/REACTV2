import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CookieManager from '../utils/CookieManager'
import '../styles/index.css'

const Home = () => {
  const [user, setUser] = useState('Guest')
  const [message, setMessage] = useState('')
  const [consentVisible, setConsentVisible] = useState(false)
  const navigate = useNavigate()
  const cookieMgr = useRef(new CookieManager()).current

  useEffect(() => {
    if (cookieMgr.cookieExists('username')) {
      const username = cookieMgr.getCookie('username')
      setUser(username)
      setMessage(`Welcome back, ${username}! ⚽🏏🏀`)
    } else {
      setMessage('Welcome to SportsVidya! ⚽🏏🏀')
    }

    if (!cookieMgr.cookieExists('cookieConsent')) {
      setConsentVisible(true)
    }
  }, [cookieMgr])

  const onAcceptCookies = () => {
    cookieMgr.setCookie('cookieConsent', 'accepted', 365)
    setConsentVisible(false)
  }

  const onRejectCookies = () => {
    cookieMgr.setCookie('cookieConsent', 'rejected', 365)
    cookieMgr.deleteCookie('username')
    setConsentVisible(false)
  }

  const onChangeSubtitle = () => {
    setMessage('Let the Game Begin!')
  }

  return (
    <div className="home-page">
      <h1 className="title">SportsVidya</h1>
      <h1 className="subtitle" onClick={onChangeSubtitle}>{message}</h1>

      <div className="button-container">
        <a href="/login" className="box">Login</a>
        <a href="/signup" className="box signup">Don't have an account? Make One</a>
      </div>

      <p id="msg">Logged in as: <strong>{user}</strong></p>

      <div className="bottom-left-buttons">
        <a href="/assessment" className="corner-btn">Assessment</a>
        <a href="/feedback" className="corner-btn">Feedback</a>
      </div>

      {consentVisible && (
        <div>
          <div className="cookie-overlay show"></div>
          <div className="cookie-banner show">
            <button className="cookie-close" onClick={onRejectCookies}>✕</button>
            <div className="cookie-content">
              <div className="cookie-text">
                <strong>🍪 Cookie Consent</strong>
                We use cookies to enhance your experience and store your preferences. By accepting, you allow us to remember your login information and improve your experience on SportsVidya.
              </div>
              <div className="cookie-buttons">
                <button className="cookie-btn cookie-btn-reject" onClick={onRejectCookies}>Reject</button>
                <button className="cookie-btn cookie-btn-accept" onClick={onAcceptCookies}>Accept</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
