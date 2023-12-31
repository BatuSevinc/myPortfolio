import { Link, NavLink } from "react-router-dom"
import './navbar.scss'
const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-dark text-center bg-dark p-md-5 p-1">
      <div id="navbarNav">
        <ul className="navbar-nav flex-column gap-5">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">Homepage</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/aboutMe">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/work">Work</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar