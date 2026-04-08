import '../../styles/kabaddi.css'
import CookieManager from '../../utils/CookieManager'

const Kabaddi = () => {
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
          <a href="/kabaddi" className="nav-btn active">Kabaddi</a>
          <a href="/" className="nav-btn">Home</a>
          <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
      </nav>

      <header className="hero">
        <h1 className="main-title">KABADDI</h1>
        <p className="subtitle">Rules • Court • Tournaments • Famous Players</p>
      </header>

      <main className="content">
        <section className="card">
          <h2>Rules & Regulations of Kabaddi</h2>
          <ul>
            <li>Kabaddi is played between <b>two teams of 7 players</b> each.</li>
            <li>The game is played on a <b>rectangular court</b> divided into two halves.</li>
            <li>Teams take turns to send a <b>raider</b> into the opponent's half.</li>
            <li>The raider must continuously chant <b>"Kabaddi"</b> while raiding.</li>
            <li>Points are scored when the raider tags defenders and returns safely.</li>
            <li>A raider is out if they stop chanting, are tackled, or step out of the boundary.</li>
            <li>Each match consists of <b>two halves of 20 minutes</b> (Pro Kabaddi).</li>
            <li>The team with the <b>most points</b> wins the match.</li>
          </ul>
        </section>

        <section className="card">
          <h2>Kabaddi Court – Dimensions & Lines</h2>
          <div className="court-image">
            <img
              src="https://cdn.shopify.com/s/files/1/0838/4063/1127/files/f42f9e8d-a055-412a-bebf-68b1d057eb0b.png "
              alt="Kabaddi Court Diagram"
            />
          </div>
          <ul>
            <li>The Kabaddi court is rectangular in shape.</li>
            <li><b>Men's Court Size:</b> 13 m × 10 m</li>
            <li><b>Women's Court Size:</b> 12 m × 8 m</li>
            <li>Important lines include Mid Line, Baulk Line, Bonus Line, and Lobbies.</li>
          </ul>
        </section>

        <section className="card">
          <h2>Famous Kabaddi Players</h2>
          <ul>
            <li>Anup Kumar</li>
            <li>Pardeep Narwal</li>
            <li>Rahul Chaudhari</li>
            <li>Deepika Kumari</li>
          </ul>
        </section>
      </main>
    </div>
  )
}

export default Kabaddi
