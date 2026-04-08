import '../../styles/cricket.css'
import { useState } from 'react'
import CookieManager from '../../utils/CookieManager'

const ClubsCountry = () => {
  const [selectedType, setSelectedType] = useState('clubs')
  const [selectedItem, setSelectedItem] = useState('rm')

  const logout = () => {
    const cookieMgr = new CookieManager()
    cookieMgr.deleteCookie('isLoggedIn')
    cookieMgr.deleteCookie('username')
    cookieMgr.deleteCookie('lastLogin')
    window.location.href = '/'
  }

  const clubs = [
    {
      id: 'rm',
      name: 'Real Madrid',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
      info: 'Real Madrid is the most successful club in European football history. With 15 European Cup/Champions League titles, they are the all-time leaders. Domestically, they have won 36 La Liga titles and 20 Copa del Rey trophies. Real Madrid plays at the Santiago Bernabéu stadium and is based in Madrid, Spain.'
    },
    {
      id: 'barca',
      name: 'FC Barcelona',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
      info: 'FC Barcelona is one of the world\'s most decorated clubs with 28 La Liga titles and 32 Copa del Rey trophies. They have won 5 UEFA Champions League titles and are known for their possession-based tiki-taka style of football. Barcelona plays at Camp Nou and is based in Catalonia, Spain.'
    },
    {
      id: 'manu',
      name: 'Manchester United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg',
      info: 'Manchester United has won 20 English league titles, 13 FA Cups, and 6 League Cups. With 3 European Cup/Champions League titles, they are among Europe\'s most successful clubs. Based at Old Trafford in Manchester, England, they play an attacking style of football.'
    },
    {
      id: 'liverpool',
      name: 'Liverpool FC',
      logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg',
      info: 'Liverpool is a historic English club with 20 English league titles and 8 FA Cups. They have won 6 European Cup/Champions League titles, reflecting their continental dominance. Based at Anfield in Liverpool, England, they are known for their attacking football and passionate fan base.'
    },
    {
      id: 'chelsea',
      name: 'Chelsea FC',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg',
      info: 'Chelsea has won 6 Premier League titles, 8 FA Cups, and 5 League Cups. With 2 UEFA Champions League titles, they are among England\'s most successful modern clubs. Based at Stamford Bridge in London, Chelsea is known for consistent success in recent decades.'
    },
    {
      id: 'mancity',
      name: 'Manchester City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
      info: 'Manchester City has dominated English football recently, winning 10 Premier League titles in the last 15 years. With 1 UEFA Champions League title, they represent modern footballing excellence. Based at the Etihad Stadium in Manchester, they are known for possession-based attacking play.'
    },
    {
      id: 'bayern',
      name: 'Bayern Munich',
      logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/FC_Bayern_Munich_5_Stars.svg/960px-FC_Bayern_Munich_5_Stars.svg.png',
      info: 'Bayern Munich is the most successful club in German football with 34 Bundesliga titles and 21 DFB-Pokal trophies. They have won 6 European Cup/Champions League titles. Based in Munich, Bavaria, Bayern plays an attacking style and consistently dominates both domestic and European football.'
    },
    {
      id: 'acmilan',
      name: 'AC Milan',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_of_AC_Milan.svg',
      info: 'AC Milan has won 19 Serie A titles and 5 Coppa Italia trophies, establishing dominance in Italian football. With 7 European Cup/Champions League titles, AC Milan is among Europe\'s greatest clubs. Based in Milan, Italy, they are known for their elegant style of play.'
    }
  ]

  const countries = [
    {
      id: 'brazil',
      name: 'Brazil',
      flag: 'https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg',
      info: 'Brazil is a 5-time FIFA World Cup champion, the most successful nation in World Cup history. Known for their beautiful, attacking style of play called "Jogo Bonito", Brazil has produced legendary players like Pelé, Ronaldo, and Ronaldinho. They won their first World Cup in 1958 and their most recent in 2002.'
    },
    {
      id: 'germany',
      name: 'Germany',
      flag: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg',
      info: 'Germany is a 4-time FIFA World Cup champion, demonstrating consistent excellence in football. Known for their disciplined, tactical approach and strong work ethic, Germany has won World Cups in 1954, 1974, 1990, and 2014. They are also 3-time European Championship winners.'
    },
    {
      id: 'italy',
      name: 'Italy',
      flag: 'https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg',
      info: 'Italy is a 4-time FIFA World Cup champion known for their defensive strength and tactical discipline. They won World Cups in 1934, 1938, 1982, and 2006. Italy is also a 2-time European Championship winner and plays a methodical, defensive style of football that has proven very effective.'
    },
    {
      id: 'france',
      name: 'France',
      flag: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg',
      info: 'France is a 2-time FIFA World Cup champion (1998, 2018) and 2-time European Championship winner. Known for producing talented players and attacking football, France has emerged as a contemporary powerhouse. Recent success includes reaching the 2022 World Cup final with a young, dynamic squad.'
    },
    {
      id: 'spain',
      name: 'Spain',
      flag: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg',
      info: 'Spain dominated international football in the 2008-2012 period, winning 1 World Cup (2010) and 2 European Championships (2008, 2012). Known for their possession-based tiki-taka style of football, Spain revolutionized the beautiful game with technical excellence and creativity.'
    },
    {
      id: 'argentina',
      name: 'Argentina',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg',
      info: 'Argentina is a 2-time FIFA World Cup champion (1978, 1986) and 2-time Copa America winner (2021, 2024). The nation is famous for producing exceptional technical players like Diego Maradona and Lionel Messi, known for their flair and creativity on the pitch.'
    },
    {
      id: 'england',
      name: 'England',
      flag: 'https://upload.wikimedia.org/wikipedia/en/b/be/Flag_of_England.svg',
      info: 'England is the birthplace of modern football and a 1-time FIFA World Cup champion (1966). They are 1-time European Championship winner (2020). England has a rich footballing heritage and has consistently produced world-class players and competitive national teams.'
    },
    {
      id: 'netherlands',
      name: 'Netherlands',
      flag: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg',
      info: 'The Netherlands is a 3-time FIFA World Cup finalist (1974, 1978, 2010) and 1-time European Championship winner (1988). Known for their "Total Football" philosophy emphasizing creativity, fluidity, and versatility, they have significantly influenced how modern football is played.'
    }
  ]

  const items = selectedType === 'clubs' ? clubs : countries

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
        <h1 className="main-title">CLUBS & COUNTRIES</h1>
        <p className="subtitle">Elite Teams and Football Nations</p>
      </header>

      <main className="content">
        {/* Toggle Buttons */}
        <div className="type-selector">
          <button 
            className={`selector-btn ${selectedType === 'clubs' ? 'active' : ''}`}
            onClick={() => { setSelectedType('clubs'); setSelectedItem('rm'); }}
          >
            Football Clubs
          </button>
          <button 
            className={`selector-btn ${selectedType === 'countries' ? 'active' : ''}`}
            onClick={() => { setSelectedType('countries'); setSelectedItem('brazil'); }}
          >
            Nations
          </button>
        </div>

        {/* Logo/Flag Selection */}
        <div className="clubs-scroll-section">
          <h2>{selectedType === 'clubs' ? 'Select a Club' : 'Select a Country'}</h2>
          <div className="clubs-scroll-container">
            {items.map((item) => (
              <div key={item.id} className="club-logo-wrapper" onClick={() => setSelectedItem(item.id)}>
                <img 
                  src={item.logo || item.flag} 
                  alt={item.name}
                  className={`club-logo ${selectedItem === item.id ? 'selected' : ''}`}
                  title={item.name}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Cards with Logo/Flag and Info Side by Side */}
        <div className="clubs-cards-container">
          {items
            .filter(item => item.id === selectedItem)
            .map((item) => (
              <div key={item.id} className="club-card active">
                <div className="club-logo-container">
                  <img src={item.logo || item.flag} alt={item.name} className="club-card-logo" />
                </div>
                <div className="club-info-container">
                  <h1>{item.name}</h1>
                  <p>{item.info}</p>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  )
}

export default ClubsCountry
