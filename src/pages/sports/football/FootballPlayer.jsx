import { useState } from 'react'
import '../../../styles/footballindex.css'
import CookieManager from '../../../utils/CookieManager'

const FootballPlayer = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null)

  const players = [
    {
      name: 'Kevin De Bruyne',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/2021-12-07_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2723_by_Stepro_%28cropped%29.jpg/500px-2021-12-07_Fu%C3%9Fball%2C_M%C3%A4nner%2C_UEFA_Champions_League%2C_RB_Leipzig_-_Manchester_City_FC_1DX_2723_by_Stepro_%28cropped%29.jpg',
      info: 'Kevin De Bruyne is a Belgian professional footballer who plays as a midfielder for Serie A club Napoli and the Belgium national team. Widely regarded as one of the best players of his generation and one of the best players in Premier League history, De Bruyne has been described as a "complete" footballer. He is tied with Ferenc Puskás as the all-time leading European assist provider in international football (53). De Bruyne has been named in the UEFA Champions League Squad of the Season and IFFHS Men\'s World Team six times each, ESM Team of the Year and the FIFA FIFPRO World 11 five times each, the UEFA Team of the Year three times, and the France Football World XI and the Bundesliga Team of the Year once each.'
    },
    {
      name: 'Cristiano Ronaldo',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Cristiano_Ronaldo_2275_%28cropped%29.jpg/500px-Cristiano_Ronaldo_2275_%28cropped%29.jpg',
      info: 'Cristiano Ronaldo dos Santos Aveiro (born 5 February 1985) is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al-Nassr and the Portugal national team. Nicknamed CR7, he is widely regarded as one of the greatest players in history, and has won numerous individual accolades throughout his career, including five Ballon d\'Ors, a record three UEFA Men\'s Player of the Year Awards, four European Golden Shoes, and was named five times the world\'s best player by FIFA.'
    },
    {
      name: 'Lionel Messi',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Lionel_Messi_NE_Revolution_Inter_Miami_7.9.25-178.jpg/500px-Lionel_Messi_NE_Revolution_Inter_Miami_7.9.25-178.jpg',
      info: 'Lionel Andrés "Leo" Messi (born 24 June 1987) is an Argentine professional footballer who plays as a forward for and captains both Major League Soccer club Inter Miami and the Argentina national team. Widely regarded as one of the greatest players in history, Messi has set numerous records for individual accolades won throughout his professional footballing career, including eight Ballon d\'Ors, six European Golden Shoes, and eight times being named the world\'s best player by FIFA.'
    },
    {
      name: 'Erling Haaland',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Erling_Haaland_June_2025.jpg/500px-Erling_Haaland_June_2025.jpg',
      info: 'Erling Braut Haaland (born 21 July 2000) is a Norwegian professional footballer who plays as a striker for Premier League club Manchester City and the Norway national team. Considered one of the best players in the world, and the greatest Norwegian player ever, he is known for his speed, strength, positioning, and finishing inside the box.'
    },
    {
      name: 'Kylian Mbappe',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Kylian_Mbappe_celebrating_-_March_2018_%28cropped%29.jpg/330px-Kylian_Mbappe_celebrating_-_March_2018_%28cropped%29.jpg',
      info: 'Kylian Mbappé Lottin (born 20 December 1998) is a French professional footballer who plays as a forward for La Liga club Real Madrid and captains the France national team. He is widely regarded as one of the best players in the world, known for his pace, dribbling, and clinical finishing.'
    },
    {
      name: 'Neymar Junior',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Neymar_Jr._with_Al_Hilal%2C_3_October_2023_-_03_%28cropped%29.jpg',
      info: 'Neymar, is a Brazilian professional footballer who plays as an attacking midfielder or a forward for Campeonato Brasileiro Série A club Santos, which he captains, and the Brazil national team. Known for his dribbling, technical ability, playmaking, and finishing, he is widely regarded as one of the greatest players of all time.'
    }
  ]

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
        <h1 className="main-title">FAMOUS FOOTBALL PLAYERS</h1>
        <p className="subtitle">Greatest Players of All Time</p>
      </header>

      <main className="content">
        <section className="players-container">
          {players.map((player, index) => (
            <div
              key={index}
              className="player-card"
              onClick={() => setSelectedPlayer(player)}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-img">
                <img src={player.image} alt={`${player.name} FIFA Card`} />
              </div>
              <span className="name">{player.name}</span>
            </div>
          ))}
        </section>
      </main>

      {selectedPlayer && (
        <div className="modal" onClick={() => setSelectedPlayer(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedPlayer(null)}>×</button>
            <h2 className="modal-title">{selectedPlayer.name}</h2>
            <div className="modal-info">{selectedPlayer.info}</div>
          </div>
        </div>
      )}

      <style>{`
        .hero {
          min-height: 100vh;
          padding: 50px 60px;
          background: linear-gradient(rgba(0, 30, 15, 0.9), rgba(0, 30, 15, 0.9)), url("https://images.unsplash.com/photo-1508098682722-e99c43a406b2");
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .main-title {
          font-size: 48px;
          color: #00ff88;
          text-align: center;
          margin-bottom: 10px;
          letter-spacing: 2px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .subtitle {
          font-size: 20px;
          color: #00ffff;
          text-align: center;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        .content {
          background: #020d07;
          padding: 40px 20px;
        }

        .players-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 30px;
          padding: 20px;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .player-card {
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3);
          transition: transform 0.3s;
          background: white;
        }
        
        .player-card:hover {
          transform: scale(1.05);
        }
        
        .card-img {
          width: 100%;
          height: 300px;
          overflow: hidden;
        }
        
        .card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .name {
          display: block;
          padding: 15px;
          text-align: center;
          font-weight: bold;
          background-color: #1a1a1a;
          color: #ffffff;
        }
        
        .modal {
          display: block;
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0,0,0,0.4);
          padding: 20px;
        }
        
        .modal-content {
          background-color: white;
          margin: 5% auto;
          padding: 20px;
          border: 1px solid #888;
          max-width: 600px;
          border-radius: 10px;
          max-height: 80vh;
          overflow-y: auto;
        }
        
        .modal-close {
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
          cursor: pointer;
          background: none;
          border: none;
        }
        
        .modal-close:hover {
          color: black;
        }
        
        .modal-title {
          margin-top: 10px;
          color: #333;
        }
        
        .modal-info {
          color: #666;
          line-height: 1.6;
          margin-top: 10px;
        }
      `}</style>
    </div>
  )
}

export default FootballPlayer
