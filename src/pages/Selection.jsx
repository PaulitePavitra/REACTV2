import '../styles/selection.css'
import CookieManager from '../utils/CookieManager'

const Selection = () => {
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
          <a href="/cricket" className="nav-btn">Cricket</a>
          <a href="/kabaddi" className="nav-btn">Kabaddi</a>
          <a href="/footballindex" className="nav-btn">Football</a>
          <a href="/" className="nav-btn">Home</a>
          <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
      </nav>

      <div className="background"></div>

      <div className="panel">
        <h1>Choose a Sport</h1>

        <div className="sports">
          <div className="sport-card">
            <a href="/cricket">
              <img src="https://images.news18.com/ibnlive/uploads/2019/05/1112.jpg" alt="Cricket" />
              <span>Cricket</span>
            </a>
          </div>

          <div className="sport-card">
            <a href="/footballindex">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQt8mBShW_px6jlv4gQCLQViVODJNlkzN4jQ&s" alt="Football" />
              <span>Football</span>
            </a>
          </div>

          <div className="sport-card">
            <a href="/kabaddi">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOp30Ovr7M30K2qgSVrbk6L2JiLv6ncelnDg&s" alt="Kabaddi" />
              <span>Kabaddi</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Selection
