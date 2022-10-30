import React from 'react'
import './Navbar.css'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
function Navbar() {
  return (
    <nav class="Navbar__navbar">
      <div class="Navbar__container">
        <h1 class="Navbar__logo">Finanta</h1>
        <ul class="Navbar__ul">
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <DropdownButton id="dropdown-basic-button" title="Calculate">
          <Dropdown.Item className='drop__items' href="/carLoan">Car Loan</Dropdown.Item>
          <Dropdown.Item className='drop__items' href="#/action-2">Gadgets EMI</Dropdown.Item>
          <Dropdown.Item className='drop__items' href="#/action-3">Housing Loan</Dropdown.Item>
        </DropdownButton>
          <li><a href="/dashboard">Dashboard</a></li>
		    <li><a href="/login">Login</a></li> 
        </ul>
      </div>
    </nav>
  


  )
}

export default Navbar