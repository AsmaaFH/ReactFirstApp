import {  NavLink } from "react-router-dom";

const Navbar = props => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand" href="#">Navbar</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <NavLink className="nav-link" to="/">Home</NavLink> |{" "}
          <NavLink className="nav-link" to="/about">About</NavLink>
          <NavLink className="nav-link" to="/login">Login</NavLink>
          <NavLink className="nav-link" to="/card">Card</NavLink>
          <NavLink className="nav-link" to="/admin">Admin</NavLink>
          <NavLink className="nav-link" to="/manu">Menu</NavLink>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar;