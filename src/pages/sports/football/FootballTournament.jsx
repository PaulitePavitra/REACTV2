import '../../../styles/footballindex.css'
import CookieManager from '../../../utils/CookieManager'

const FootballTournament = () => {
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
        <h1 className="main-title">FOOTBALL TOURNAMENTS</h1>
        <p className="subtitle">International and Domestic Competitions</p>
      </header>

      <main className="content">
        <section className="card">
          <h2>Major Tournaments</h2>
          <ul>
            <li><b>FIFA World Cup:</b> International tournament held every 4 years</li>
            <li><b>UEFA Champions League:</b> Annual club competition in Europe</li>
            <li><b>UEFA Europa League:</b> Secondary European club competition</li>
            <li><b>Copa America:</b> International tournament for South American teams</li>
            <li><b>AFC Asian Cup:</b> International tournament for Asian teams</li>
            <li><b>African Cup of Nations:</b> International tournament for African teams</li>
            <li><b>FIFA Club World Cup:</b> Annual competition between club champions</li>
            <li><b>Confederations Cup:</b> International tournament with continental champions</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default FootballTournament
