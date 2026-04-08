import { useState } from 'react'
import '../../../styles/cricket.css'
import CookieManager from '../../../utils/CookieManager'

const CricketPlayer = () => {
  const [selectedPlayer, setSelectedPlayer] = useState('sachin')

  const logout = () => {
    const cookieMgr = new CookieManager()
    cookieMgr.deleteCookie('isLoggedIn')
    cookieMgr.deleteCookie('username')
    cookieMgr.deleteCookie('lastLogin')
    window.location.href = '/'
  }

  const players = {
    sachin: {
      name: 'Sachin Tendulkar',
      bio: 'Regarded as one of the greatest cricketers of all time, Sachin Tendulkar has "God of Cricket" as his epithet in India. He holds several world records and is the all-time highest run-scorer in international cricket. Tendulkar has won multiple accolades including the Wisden World Cricketer of the Year award, the most Player of the Match awards, is the only batsman to score 100 international centuries, and was ranked 2nd greatest Test batsman after Don Bradman by Wisden. He has played in 664 international matches and scored 34,357 runs. He was named in Wisden\'s 150th anniversary Test World XI and the post-WWII specialist batsman XI alongside Viv Richards.'
    },
    virat: {
      name: 'Virat Kohli',
      bio: 'Known as the "King", "Chase Master", and "Run Machine", Virat Kohli is a prolific right-handed batter and occasional right-arm medium pace bowler. He is the leading run-scorer in One Day International cricket and holds the most centuries in ODIs with over 84+ centuries across all formats. Kohli is the second-most centuries scored in international cricket history and is the leading run-scorer in the Indian Premier League. He is the most successful Test captain of India with the most wins and won three consecutive Test maces. Only Kohli has achieved 900+ rating points in all three international cricket formats simultaneously. He was ranked #1 in ODI ranking in 2013, #1 in T20I in 2015, and #1 in Test in 2018. Kohli was the first player to accumulate 20,000 runs in a decade and was nominated as Cricketer of the Decade 2011-2020. He has won 10 ICC Awards (the most awarded player) and was named ODI Player of the Year four times (2012, 2017, 2018, 2023) and Cricketer of the Year twice (2017, 2018). He became the first player to win all three major ICC awards in the same year (2018) and received the ICC Spirit of Cricket Award in 2019. He was named Wisden Leading Cricketer in the World for three consecutive years.'
    },
    dhoni: {
      name: 'MS Dhoni',
      bio: 'MS Dhoni is a prolific right-handed batter and wicket-keeper, regarded as one of the greatest wicket-keeper batsmen in cricket history. He is a prolific captain and is the only captain to have won 2007 ICC World Twenty20, 2011 Cricket World Cup, and 2013 ICC Champions Trophy - the only captain to win three different limited overs ICC tournaments. He was a title-winning squad member of the 2018 team. As a batter, he has accumulated 17,266 international runs with over 10,000 runs in ODI at an average of 50+. Dhoni won the Major Dhyan Chand Khel Ratna Award in 2008 and received the Padma Shri in 2009 and Padma Bhushan in 2018. He was inducted into the ICC Cricket Hall of Fame in June 2025.'
    },
    ponting: {
      name: 'Ricky Ponting',
      bio: 'Ricky Ponting is regarded as one of the greatest all-time batsmen and is the most successful captain in international cricket history. He has led Australia to 220 victories in 324 matches, achieving a win rate of 67.91% - the most victories by any captain in Men\'s Cricket. Ponting won the 2003 and 2007 Cricket World Cups as captain and won the 2006 and 2009 Champions Trophies. He was also a member of the 1999 Cricket World Cup winning Australian team. Ponting is Australia\'s leading run-scorer in both Test and ODI cricket. He was named Cricketer of the Decade 2000 and featured in the Best Ashes XI selected in 2017. Ponting was inducted into the ICC Hall of Fame in July 2018 and is recognized as one of cricket\'s all-time greats.'
    },
    abd: {
      name: 'AB de Villiers',
      bio: 'Known as "Mr. 360", AB de Villiers is recognized as an innovative and destructive batsman. He is famous for his unorthodox shots, particularly playing shots behind the wicket-keeper. De Villiers has accumulated 8,000+ runs in both Test and ODI cricket with a batting average over 50 in both formats. He holds the record for the fastest ODI 50 (16 balls), fastest ODI century (31 balls), and fastest ODI 150 (62 balls). His aggressive yet precise batting style revolutionized modern cricket, and he remains one of the most exciting batsmen to watch. De Villiers was inducted into the ICC Hall of Fame in October 2024, becoming the 8th South African to receive this honor.'
    },
    kallis: {
      name: 'Jacques Kallis',
      bio: 'Jacques Kallis is a versatile all-rounder, skilled at both batting and bowling. He is known for his consistency and dedication to the game, contributing significantly with bat and ball throughout his career. Kallis featured in the prestigious Wisden All-time Test XI, recognizing his place among the greatest Test cricketers ever. His all-round abilities and technical proficiency made him one of cricket\'s most complete players. Kallis played for South Africa and was a reliable performer in Test cricket across two decades, combining defensive batting with steady bowling performances.'
    },
    gayle: {
      name: 'Chris Gayle',
      bio: 'Chris Gayle is a West Indian opening batsman known for his explosive batting in limited overs cricket, particularly in Twenty20 tournaments. Gayle revolutionized T20 cricket with his aggressive approach and mammoth sixes. He is the leading run-scorer in T20 International cricket and holds the record for the highest individual T20I score. In Indian Premier League, Gayle has been one of the most explosive and entertaining batsmen, consistently scoring big runs. His physical presence at the crease and explosive batting style have made him a fan favorite across the world. Gayle has played international cricket for the West Indies across all formats with particular success in the shortest format.'
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
        <h1 className="main-title">FAMOUS CRICKET PLAYERS</h1>
        <p className="subtitle">Legendary Cricketers</p>
      </header>

      <main className="content" style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        {/* Left Panel - Radio Buttons */}
        <div style={{ flex: '0 0 250px', backgroundColor: '#f8f9fa', padding: '20px', borderRadius: '8px', height: 'fit-content' }}>
          <h2 style={{ marginTop: 0, marginBottom: '15px', color: '#0066cc', fontSize: '18px' }}>Famous Players</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {Object.entries(players).map(([key, value]) => (
              <label key={key} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', padding: '8px', borderRadius: '4px', backgroundColor: selectedPlayer === key ? '#e0e7ff' : 'transparent', transition: 'background-color 0.2s' }}>
                <input
                  type="radio"
                  name="player"
                  value={key}
                  checked={selectedPlayer === key}
                  onChange={(e) => setSelectedPlayer(e.target.value)}
                  style={{ marginRight: '10px', cursor: 'pointer' }}
                />
                <span style={{ fontSize: '14px', color: '#333', fontWeight: selectedPlayer === key ? 'bold' : 'normal' }}>{value.name}</span>
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
            <a href="/bowler" style={{
              display: 'block',
              padding: '8px 12px',
              backgroundColor: '#e67e22',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              textAlign: 'center',
              fontSize: '14px',
              fontWeight: 'bold'
            }}>View Bowler Types →</a>
          </div>
        </div>

        {/* Right Panel - Card Display with Image */}
        <div style={{ flex: 1 }}>
          <div className="card" style={{ backgroundColor: '#f8f9fa', padding: '25px', borderRadius: '8px', border: '1px solid #dee2e6' }}>
            {/* Image in upper half */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px', maxHeight: '300px', overflow: 'hidden', borderRadius: '8px' }}>
              
            </div>
            
            {/* Text content in lower half */}
            <h2 style={{ color: '#0066cc', marginTop: 0, marginBottom: '15px', fontSize: '24px', textAlign: 'center' }}>
              {players[selectedPlayer].name}
            </h2>
            <p style={{ lineHeight: '1.8', marginBottom: '0', color: '#333', fontSize: '15px' }}>
              {players[selectedPlayer].bio}
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CricketPlayer