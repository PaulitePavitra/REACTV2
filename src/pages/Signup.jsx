import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CookieManager from '../utils/CookieManager'
import '../styles/signup.css'

const Signup = () => {
  const usernameInput = useRef(null)
  const emailInput = useRef(null)
  const passwordInput = useRef(null)
  const confirmPasswordInput = useRef(null)
  const ageInput = useRef(null)
  const sportsRadios = useRef([])
  const genderRadios = useRef([])
  const profileFileInput = useRef(null)
  const navigate = useNavigate()
  const cookieMgr = new CookieManager()

  const handleSignup = (e) => {
    e.preventDefault()

    const username = usernameInput.current.value.trim()
    const email = emailInput.current.value.trim()
    const password = passwordInput.current.value
    const confirmPassword = confirmPasswordInput.current.value
    const age = ageInput.current.value

    if (password !== confirmPassword) {
      alert('Passwords do not match!')
      return
    }

    // Set authentication cookies
    cookieMgr.setCookie('username', username, 7)
    cookieMgr.setCookie('lastLogin', new Date().toLocaleString(), 7)
    cookieMgr.setCookie('isLoggedIn', 'true', 7)

    alert('Account created successfully! Welcome to SportsVidya 🎉')
    navigate('/selection')
  }

  return (
    <div className="page-container">
      <div className="side-text">
        <h1>Your journey to greatness</h1>
      </div>

      <div className="center-wrapper">
        <h2 className="welcome">Welcome!!!</h2>

        <form className="form" onSubmit={handleSignup} id="signupForm">
          <div className="row">
            <input
              ref={usernameInput}
              id="username"
              type="text"
              placeholder="Username"
              className="input-box"
              required
            />
            <input
              ref={emailInput}
              id="email"
              type="email"
              placeholder="Email"
              className="input-box"
              required
            />
          </div>

          <div className="row">
            <input
              ref={passwordInput}
              id="password"
              type="password"
              placeholder="Password"
              className="input-box"
              required
            />
            <input
              ref={confirmPasswordInput}
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              className="input-box"
              required
            />
          </div>

          <div className="row">
            <div className="input-box select-box">Select Sport</div>
            <div className="options">
              <label>
                <input type="radio" name="sport" value="Cricket" required /> Cricket
              </label>
              <label>
                <input type="radio" name="sport" value="Football" /> Football
              </label>
              <label>
                <input type="radio" name="sport" value="Kabaddi" /> Kabaddi
              </label>
            </div>
          </div>

          <div className="row">
            <input
              ref={ageInput}
              id="age"
              type="number"
              placeholder="Age"
              className="input-box"
              min="1"
              max="100"
              required
            />
          </div>

          <div className="row">
            <div className="input-box select-box">Select Gender</div>
            <div className="options">
              <label>
                <input type="radio" name="gender" value="Male" required /> Male
              </label>
              <label>
                <input type="radio" name="gender" value="Female" /> Female
              </label>
              <label>
                <input type="radio" name="gender" value="Other" /> Other
              </label>
            </div>
          </div>

          <div className="row">
            <input
              ref={profileFileInput}
              id="profileFile"
              type="file"
              placeholder="Upload Profile Photo or Document"
              className="input-box"
              accept=".jpg,.jpeg,.png,.pdf,.doc,.docx,.txt"
            />
          </div>

          <div className="row">
            <span className="arrow">→</span>
            <button type="submit" className="signup-btn">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
