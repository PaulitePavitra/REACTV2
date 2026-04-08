import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Selection from './pages/Selection'
import Assessment from './pages/Assessment'
import Feedback from './pages/Feedback'
import FootballIndex from './pages/sports/FootballIndex'
import Cricket from './pages/sports/Cricket'
import Kabaddi from './pages/sports/Kabaddi'
import Formation from './pages/sports/football/Formation'
import FootballRules from './pages/sports/football/FootballRules'
import FootballPosition from './pages/sports/football/FootballPosition'
import FootballPlayer from './pages/sports/football/FootballPlayer'
import FootballLeague from './pages/sports/football/FootballLeague'
import FootballTournament from './pages/sports/football/FootballTournament'
import ClubsCountry from './pages/sports/ClubsCountry'
import CricketPlayer from './pages/sports/cricket/CricketPlayer'
import Bowler from './pages/sports/cricket/Bowler'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/selection" element={<ProtectedRoute element={<Selection />} />} />
        <Route path="/assessment" element={<ProtectedRoute element={<Assessment />} />} />
        <Route path="/feedback" element={<ProtectedRoute element={<Feedback />} />} />
        <Route path="/footballindex" element={<ProtectedRoute element={<FootballIndex />} />} />
        <Route path="/cricket" element={<ProtectedRoute element={<Cricket />} />} />
        <Route path="/kabaddi" element={<ProtectedRoute element={<Kabaddi />} />} />
        <Route path="/formation" element={<ProtectedRoute element={<Formation />} />} />
        <Route path="/footballrules" element={<ProtectedRoute element={<FootballRules />} />} />
        <Route path="/footballposition" element={<ProtectedRoute element={<FootballPosition />} />} />
        <Route path="/footballplayer" element={<ProtectedRoute element={<FootballPlayer />} />} />
        <Route path="/footballleague" element={<ProtectedRoute element={<FootballLeague />} />} />
        <Route path="/footballtournament" element={<ProtectedRoute element={<FootballTournament />} />} />
        <Route path="/clubscountry" element={<ProtectedRoute element={<ClubsCountry />} />} />
        <Route path="/cricketplayer" element={<ProtectedRoute element={<CricketPlayer />} />} />
        <Route path="/bowler" element={<ProtectedRoute element={<Bowler />} />} />
      </Routes>
    </Router>
  )
}

export default App
