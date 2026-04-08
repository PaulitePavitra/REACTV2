import '../../../styles/footballindex.css'
import CookieManager from '../../../utils/CookieManager'

const FootballRules = () => {
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

      <header className="hero">
        <h1 className="main-title">FOOTBALL RULES</h1>
        <p className="subtitle">Laws of the Game</p>
      </header>

      <main className="content">
        <section className="card">
          <h2>Laws of Football</h2>
          <ul>
            <li>The field is between 100-130 yards long and 50-100 yards wide.</li>
            <li>Each team has 11 players on the field.</li>
            <li>A match consists of two halves of 45 minutes each.</li>
            <li>The ball is spherical with a circumference of 27-28 inches.</li>
            <li>A goal is scored when the entire ball crosses the goal line (except from a throw-in).</li>
            <li>Offside: A player is in an offside position if they are nearer to the opponent's goal line than both the ball and two opponents.</li>
            <li>Fouls include pushing, tripping, striking, holding, spitting, and dangerous play.</li>
            <li>Yellow card: Caution for misconduct.</li>
            <li>Red card: Dismissal from the game.</li>
            <li>Common fouls result in direct free kicks or penalty kicks.</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default FootballRules
