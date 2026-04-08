import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/footballindex.css'
import CookieManager from '../../utils/CookieManager'

const FootballIndex = () => {
  const navigate = useNavigate()

  const logout = () => {
    const cookieMgr = new CookieManager()
    cookieMgr.deleteCookie('isLoggedIn')
    cookieMgr.deleteCookie('username')
    cookieMgr.deleteCookie('lastLogin')
    navigate('/')
  }

  return (
    <div>
      <nav className="navbar">
        <div className="nav-left">
          <span className="logo">SportsVidya</span>
        </div>

        <div className="nav-right">
          <a href="/footballindex" className="nav-btn active">Football</a>
          <a href="/selection" className="nav-btn">Navigation</a>
          <a href="/cricket" className="nav-btn">Cricket</a>
          <a href="/kabaddi" className="nav-btn">Kabaddi</a>
          <a href="/" className="nav-btn">Home</a>
          <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
      </nav>

      <div className="app">
        <div className="header">
          <span className="bar"></span>
          <h2 id="pageTitle">Football</h2>
        </div>

        <div className="grid">
          <div className="card tall">
            <a href="/formation" className="card-overlay"></a>
            <span className="plus">+</span>
            <p>Formations</p>
          </div>

          <div className="card">
            <a href="/footballrules" className="card-overlay"></a>
            <span className="plus">+</span>
            <p>RuleBook</p>
          </div>

          <div className="card">
            <a href="/footballposition" className="card-overlay"></a>
            <span className="plus">+</span>
            <p>Positions</p>
          </div>

          <div className="card">
            <a href="/footballplayer" className="card-overlay"></a>
            <span className="plus">+</span>
            <p>Famous<br />Players</p>
          </div>

          <div className="card">
            <a href="/footballleague" className="card-overlay"></a>
            <span className="plus">+</span>
            <p>Leagues</p>
          </div>

          <div className="card">
            <a href="/footballtournament" className="card-overlay"></a>
            <span className="plus">+</span>
            <p>Tournaments</p>
          </div>

          <div className="card">
            <a href="/clubscountry" className="card-overlay"></a>
            <span className="plus">+</span>
            <p>Clubs and<br />Countries</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FootballIndex
