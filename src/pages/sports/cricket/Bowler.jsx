import { useState } from 'react'
import '../../../styles/cricket.css'
import CookieManager from '../../../utils/CookieManager'

const Bowler = () => {
  const [selectedType, setSelectedType] = useState('offspin')

  const logout = () => {
    const cookieMgr = new CookieManager()
    cookieMgr.deleteCookie('isLoggedIn')
    cookieMgr.deleteCookie('username')
    cookieMgr.deleteCookie('lastLogin')
    window.location.href = '/'
  }

  const bowlerTypes = {
    offspin: {
      name: 'Off Spinner',
      description: 'An offspinner in cricket is a finger-spin bowler (usually right-arm) who imparts a clockwise spin on the ball, causing it to turn away from a right-handed batsman (an "off break"), towards the slip cordon, using their index finger and wrist action to generate turn off the pitch. Off-spinners are particularly effective on turning pitches and can control the line and length well. They rely on subtle variations and changes in pace to deceive batsmen.',
      examples: 'R. Ashwin, Muttiah Muralitharan'
    },
    legspin: {
      name: 'Leg Spinner',
      description: 'Legspin is a challenging wrist-spin bowling art in cricket where a right-arm bowler imparts spin from the leg side, causing the ball to break towards the batsman (from the bowler\'s right to left for a right-hander) after bouncing. Leg-spinners use wrist action and finger flicks to generate revolutions on the ball, creating unpredictable variations. The challenge lies in maintaining consistency while generating significant spin and deviation.',
      examples: 'Shane Warne, Anil Kumble'
    },
    orthodox: {
      name: 'Left-arm Orthodox',
      description: 'Left-arm orthodox spin bowlers generally attempt to drift the ball in the air into a right-handed batsman, and then turn it away from the batsman towards off-stump upon landing on the pitch. The drift and turn are attacking techniques. These bowlers use their fingers to generate spin and can be particularly effective in coloured-ball cricket through the air. They create awkward angles for right-handed batsmen and provide balance to team strategies.',
      examples: 'Ravindra Jadeja'
    },
    fast: {
      name: 'Fast Pacer',
      description: 'Fast bowlers, also known as pacers, bowl at very high speeds, typically between 85-100+ mph or more. They rely on pace and bounce to trouble batsmen. In addition to delivering the ball at speed, this type of bowler may also use seam bowling techniques to create movement off the pitch, or swing bowling to move the ball through the air. Different fast bowlers employ different approaches - some focus purely on speed, while others use movement variations.',
      examples: 'Brett Lee, Shoaib Akhtar'
    },
    swing: {
      name: 'Swing Bowler',
      description: 'A swing bowler in cricket uses aerodynamic principles to make the ball curve in the air, deceiving batsmen, by exploiting the difference in smoothness between the ball\'s two sides. The ball is polished on one side and allowed to deteriorate on the other, creating air movement that causes the trajectory to curve. This technique requires excellent skills and understanding of how to maintain the ball\'s condition. Swing bowlers can be devastating in overcast conditions and during early stages of an innings.',
      examples: 'Bhuvneshwar Kumar, James Anderson'
    },
    allrounder: {
      name: 'All-Rounder',
      description: 'In cricket, an all-rounder is a player skilled at both batting and bowling, providing flexibility and extra options for their team. All-rounders can bowl various types - some are batsmen who bowl occasional overs, while others are bowlers who can bat solidly. They add depth to the team\'s batting lineup and provide additional bowling options. Great all-rounders are invaluable in limited-overs cricket where they can contribute in multiple ways throughout the match.',
      examples: 'Kapil Dev, Jacques Kallis, Dwayne Bravo'
    }
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
        <h1 className="main-title">CRICKET BOWLERS</h1>
        <p className="subtitle">Master Bowlers of Cricket</p>
      </header>

      <main className="content" style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        {/* Left Panel - Radio Buttons */}
        <div style={{ flex: '0 0 250px', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', height: 'fit-content' }}>
          <h2 style={{ marginTop: 0, marginBottom: '15px', color: '#0066cc', fontSize: '18px' }}>Types of Bowlers</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {Object.entries(bowlerTypes).map(([key, value]) => (
              <label key={key} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '8px', borderRadius: '4px', backgroundColor: selectedType === key ? '#e0e7ff' : 'transparent', transition: 'background-color 0.2s' }}>
                <input
                  type="radio"
                  name="bowlerType"
                  value={key}
                  checked={selectedType === key}
                  onChange={(e) => setSelectedType(e.target.value)}
                  style={{ marginRight: '10px', cursor: 'pointer' }}
                />
                <span style={{ fontSize: '14px', color: '#333', fontWeight: selectedType === key ? 'bold' : 'normal' }}>{value.name}</span>
              </label>
            ))}
          </div>

          {/* Navigation Links */}
          <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #ddd' }}>
            <a href="/cricket" style={{
              display: 'block',
              marginBottom: '10px',
              padding: '8px 12px',
              backgroundColor: '#0066cc',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>← Back to Cricket</a>
            <a href="/cricketplayer" style={{
              display: 'block',
              padding: '8px 12px',
              backgroundColor: '#28a745',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>View Famous Players →</a>
          </div>
        </div>

        {/* Right Panel - Card Display */}
        <div style={{ flex: 1 }}>
          <div className="card" style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', border: '1px solid #dee2e6' }}>
            {/* Image in upper half */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', maxHeight: '300px', overflow: 'hidden', borderRadius: '8px' }}>
              
            </div>

            {/* Text content in lower half */}
            <h2 style={{ color: '#0066cc', marginTop: 0, marginBottom: '15px', fontSize: '24px', textAlign: 'center' }}>
              {bowlerTypes[selectedType].name}
            </h2>
            <p style={{ lineHeight: '1.7', marginBottom: '15px', color: '#333', fontSize: '15px' }}>
              {bowlerTypes[selectedType].description}
            </p>
            <p style={{ fontWeight: 'bold', marginBottom: '0', color: '#0066cc', fontSize: '14px' }}>
              <b>Examples:</b> {bowlerTypes[selectedType].examples}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Bowler