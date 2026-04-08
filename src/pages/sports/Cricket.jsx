import '../../styles/cricket.css'
import CookieManager from '../../utils/CookieManager'

const Cricket = () => {
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
          <a href="/cricket" className="nav-btn active">Cricket</a>
          <a href="/kabaddi" className="nav-btn">Kabaddi</a>
          <a href="/" className="nav-btn">Home</a>
          <button className="logout-btn" onClick={logout}>Logout</button>
        </div>
      </nav>

      <header className="hero">
        <h1 className="main-title">CRICKET</h1>
        <p className="subtitle">Rules • Field • Tournaments • Famous Players</p>

        <div className="media-section">
          <h3>Watch: Introduction to Cricket</h3>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/NZGLHdcw2RM"
            title="Cricket Introduction Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        <div className="media-section">
          <h3>Listen: Cricket Stadium Atmosphere</h3>
          <audio controls>
            <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </header>

      <main className="content">
        <section className="card">
          <h2>Rules & Regulations of Cricket</h2>
          <ul>
            <li>Cricket is played between <b>two teams of 11 players</b> each.</li>
            <li>The match is played on an <b>oval or circular field</b> with a rectangular pitch at the center.</li>
            <li>The pitch is <b>22 yards (20.12 m)</b> long and <b>10 feet (3.05 m)</b> wide.</li>
            <li>Each team takes turns to <b>bat</b> and <b>bowl</b>.</li>
            <li>A match is divided into <b>overs</b>, each consisting of <b>6 legal deliveries</b>.</li>
            <li>Runs are scored by running between the wickets, hitting boundaries (4 runs), or hitting the ball over the boundary (6 runs).</li>
            <li>Common match formats include Test Cricket, ODI, and T20 Cricket.</li>
            <li>The team scoring the <b>most runs</b> wins the match.</li>
          </ul>
        </section>

        <section className="card">
          <h2>Cricket Field – Positions & Dimensions</h2>
          <div className="field-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoRx-rF1qv_4fs0t2XjRjpcImLwF0l_EcN0g&s"
              alt="Cricket Field Positions Diagram"
            />
          </div>
          <ul>
            <li>The ground is oval or circular in shape.</li>
            <li>The pitch is in the center, 22 yards long.</li>
            <li>Key fielding positions include: Slip, Gully, Cover, Mid-off, Mid-on, Square leg, Fine leg, etc.</li>
          </ul>
        </section>

        <section className="card">
          <h2>Famous Cricket Players</h2>
          <ul>
            <li>Virat Kohli</li>
            <li>MS Dhoni</li>
            <li>Sachin Tendulkar</li>
            <li>Rohit Sharma</li>
            <li>Steve Smith</li>
            <li>Kane Williamson</li>
          </ul>
          <a href="/cricketplayer" style={{ 
            display: 'inline-block',
            marginTop: '15px',
            padding: '10px 20px',
            backgroundColor: '#0066cc',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold'
          }}>Explore Famous Players →</a>
        </section>

        <section className="card">
          <h2>Cricket Bowlers - Types & Techniques</h2>
          <ul>
            <li><b>Fast Bowlers (Pacers):</b> Bowl at high speeds with pace and bounce</li>
            <li><b>Spin Bowlers:</b> Use rotation to make the ball deviate off the pitch</li>
            <li><b>Medium Pace:</b> Bowl at moderate speeds with good control</li>
            <li><b>Swing Bowlers:</b> Make the ball move through the air</li>
            <li><b>All-Rounders:</b> Skilled at both batting and bowling</li>
          </ul>
          <a href="/bowler" style={{ 
            display: 'inline-block',
            marginTop: '15px',
            padding: '10px 20px',
            backgroundColor: '#0066cc',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px',
            fontWeight: 'bold'
          }}>Learn About Bowler Types →</a>
        </section>
      </main>
    </div>
  )
}

export default Cricket
