import { useState } from 'react'
import '../../../styles/footballindex.css'
import CookieManager from '../../../utils/CookieManager'

const FootballPosition = () => {
  const [selectedPosition, setSelectedPosition] = useState(null)

  const positions = {
    defence: {
      title: 'Defence',
      subtitle: 'Player Roles and Responsibilities',
      description: 'Give a detailed description of various positions in defence.',
      content: [
        {
          title: 'Goalkeeper (GK)',
          description: 'Defends the goal and is the only player allowed to use hands within the penalty area.'
        },
        {
          title: 'Center Back',
          description: 'The primary defender in the center of the field who works to prevent opposition strikers from scoring.'
        },
        {
          title: 'Full Back (Left/Right)',
          description: 'Defensive players on the flanks who protect the wings and support attacking play down the sideline.'
        },
        {
          title: 'Wing Back',
          description: 'A hybrid position that combines defensive duties with attacking responsibilities on the flanks.'
        }
      ]
    },
    midfield: {
      title: 'Midfield',
      subtitle: 'Player Roles and Responsibilities',
      description: 'Give a detailed description of the positions in midfield.',
      content: [
        {
          title: 'Defensive Midfielder',
          description: 'Sits in front of the defense and breaks up opposition attacks, providing a shield for the back line.'
        },
        {
          title: 'Central Midfielder',
          description: 'The engine of the team, linking defense and attack with ball distribution and work rate.'
        },
        {
          title: 'Attacking Midfielder',
          description: 'Positioned ahead of the central midfielders, creating chances and supporting the forwards.'
        },
        {
          title: 'Winger',
          description: 'Plays on the flanks (left/right) and provides width and crosses into the box for strikers.'
        }
      ]
    },
    attack: {
      title: 'Attack',
      subtitle: 'Player Roles and Responsibilities',
      description: 'Give a detailed description of the positions in attack.',
      content: [
        {
          title: 'Striker / Forward',
          description: 'Primarily responsible for scoring goals. Works to create chances and finish with accuracy.'
        },
        {
          title: 'Second Striker',
          description: 'Positioned behind the main striker, linking play between midfield and attack.'
        },
        {
          title: 'Inside Forward',
          description: 'Plays in a narrow attacking position, cutting inside from the wing to create or score goals.'
        },
        {
          title: 'Winger',
          description: 'Plays wide and can be both attacking and defensive, providing crosses and carrying the ball forward.'
        }
      ]
    }
  }

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
        <h1 className="main-title">FOOTBALL POSITIONS</h1>
        <p className="subtitle">Player Roles and Responsibilities</p>
      </header>

      <main className="content">
        <div className="positions-grid">
          {['defence', 'midfield', 'attack'].map((pos) => (
            <div
              key={pos}
              className="position-card"
              onClick={() => setSelectedPosition(pos === selectedPosition ? null : pos)}
            >
              <div className="position-img">
                <img
                  src={
                    pos === 'defence'
                      ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQT7nweRKn-44vX2IaTwYkp-OgXCwIqO8oDQ&s'
                      : pos === 'midfield'
                      ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHnbLWra4Bt1NhUc08RF1CBraPxFitGsIl8A&s'
                      : 'data:image/jpeg;base64,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'
                  }
                  alt={positions[pos].title}
                />
              </div>
              <div className="position-info">
                <h3>{positions[pos].title}</h3>
                <p>{positions[pos].description}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedPosition && (
          <div className="position-details">
            <h2>{positions[selectedPosition].title} - Detailed Breakdown</h2>
            <div className="roles-container">
              {positions[selectedPosition].content.map((role, idx) => (
                <div key={idx} className="role-card">
                  <h3>{role.title}</h3>
                  <p>{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <style>{`
        .positions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          padding: 20px;
          margin: 20px 0;
        }

        .position-card {
          background: white;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: transform 0.3s;
        }

        .position-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.2);
        }

        .position-img {
          width: 100%;
          height: 200px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
        }

        .position-info {
          padding: 15px;
        }

        .position-info h3 {
          margin: 0 0 10px 0;
          color: #333;
        }

        .position-info p {
          margin: 0;
          color: #666;
          font-size: 14px;
        }

        .position-details {
          background: #f9f9f9;
          padding: 30px;
          border-radius: 10px;
          margin: 30px 20px;
        }

        .position-details h2 {
          color: #333;
          text-align: center;
          margin-bottom: 30px;
        }

        .roles-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

        .role-card {
          background: white;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #667eea;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .role-card h3 {
          margin: 0 0 10px 0;
          color: #333;
        }

        .role-card p {
          margin: 0;
          color: #666;
          line-height: 1.6;
        }
      `}</style>
    </div>
  )
}

export default FootballPosition
