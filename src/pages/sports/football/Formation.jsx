import '../../../styles/formation.css'
import CookieManager from '../../../utils/CookieManager'

const Formation = () => {
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
          <a href="/footballindex" className="nav-btn">Football</a>
          <a href="/selection" className="nav-btn">Navigation</a>
          <a href="/cricket" className="nav-btn">Cricket</a>
          <a href="/kabaddi" className="nav-btn">Kabaddi</a>
          <a href="/" className="nav-btn">Home</a>
          <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
      </nav>

      <div className="formations-section">
        <h2>FORMATIONS</h2>

        <div className="formations-row">
          <details className="formation-card">
            <summary>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Association_football_4-3-3_formation.svg/500px-Association_football_4-3-3_formation.svg.png?_=20230427102452" alt="4-3-3" />
              <span className="pill">4-3-3</span>
            </summary>
            <div className="formation-info">
              <p>The 4-3-3 formation focuses on attacking width and high pressing. It allows wingers to stretch the defense while a three-man midfield controls possession and tempo. Ideal for aggressive, attacking teams.</p>
            </div>
          </details>

          <details className="formation-card">
            <summary>
              <img src="https://www.liveabout.com/thmb/OkNQcmomXYGQUjums5iQU5YMLyY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Association_football_4-4-2_formation.svg-588fcabc3df78caebc42395a.png" alt="4-4-2" />
              <span className="pill">4-4-2</span>
            </summary>
            <div className="formation-info">
              <p>The 4-4-2 is a classic balanced formation offering defensive stability and two strikers for direct attacking play. It works well for teams that prefer structure and quick transitions.</p>
            </div>
          </details>

          <details className="formation-card">
            <summary>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR33oAz7755ybPA5uoAkE_ifEo1ubZidWP4kQ&s" alt="4-2-3-1" />
              <span className="pill">4-2-3-1</span>
            </summary>
            <div className="formation-info">
              <p>The 4-2-3-1 provides excellent defensive cover with two holding midfielders while allowing creativity through three attacking midfielders behind a lone striker.</p>
            </div>
          </details>
        </div>
      </div>
    </div>
  )
}

export default Formation
