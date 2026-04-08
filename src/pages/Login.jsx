import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CookieManager from '../utils/CookieManager'
import '../styles/login.css'

const Login = () => {
  const usernameInput = useRef(null)
  const passwordInput = useRef(null)
  const [consentVisible, setConsentVisible] = useState(false)
  const navigate = useNavigate()
  const cookieMgr = useRef(new CookieManager()).current

  const handleLogin = (e) => {
    e.preventDefault()
    const username = usernameInput.current.value.trim()
    const password = passwordInput.current.value.trim()

    if (!username) {
      alert('Please enter your username')
      return
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters')
      return
    }

    // Set authentication cookies
    cookieMgr.setCookie('username', username, 7)
    cookieMgr.setCookie('lastLogin', new Date().toLocaleString(), 7)
    cookieMgr.setCookie('isLoggedIn', 'true', 7)

    alert(`Login successful! Welcome ${username} 🎉`)
    navigate('/selection')
  }

  const togglePassword = () => {
    const pass = passwordInput.current
    pass.type = pass.type === 'password' ? 'text' : 'password'
  }

  return (
    <div className="login-body">
      <div className="login-box">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              ref={usernameInput}
              id="username"
              type="text"
              placeholder="Username"
              required
            />
          </div>

          <div className="input-group">
            <input
              ref={passwordInput}
              id="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="back-link">
          <a href="/">← Back to Home</a>
        </p>
      </div>

      {consentVisible && (
        <div>
          <div className="cookie-overlay show"></div>
          <div className="cookie-banner show">
            <div className="cookie-content">
              <div className="cookie-text">
                <strong>🍪 Cookie Consent</strong>
                We use cookies to enhance your experience.
              </div>
              <div className="cookie-buttons">
                <button className="cookie-btn cookie-btn-accept">Accept</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Login
