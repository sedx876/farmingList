import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'




const Navbar = () => {

  return(

  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarColor01">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <NavLink className="nav-link" exact activeClassName="active" to='/farminglist'>FarmingList</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" exact activeClassName="active" to='/farminglist/new'>New Item</NavLink>
      </li>
    </ul>
  </div>
</nav>) 
}



export default Navbar