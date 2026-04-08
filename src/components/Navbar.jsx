import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
      <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Login</NavLink>
      <NavLink to="/signup" className={({ isActive }) => isActive ? 'active' : ''}>Signup</NavLink>
      <NavLink to="/assessment" className={({ isActive }) => isActive ? 'active' : ''}>Assessment</NavLink>
      <NavLink to="/feedback" className={({ isActive }) => isActive ? 'active' : ''}>Feedback</NavLink>
    </nav>
  )
}

export default Navbar
