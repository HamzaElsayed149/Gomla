import React from 'react'
import { NavLink } from 'react-router-dom'
import BrandLogo from './gomla-high-resolution-logo-white-on-transparent-background.png'
export default function Navbar(props) {
  let CartNum =props.lenght.CartItems
  console.log(CartNum.length);
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <NavLink className="navbar-brand" to='/'>
      <img className='BrandLogo' src={BrandLogo} alt="" />
    </NavLink>
  
         <div className='d-flex position-relative'>
         <NavLink className="nav-link active pt-1 px-4  position-relative" to='cart'><i className="fa-solid fa-cart-shopping text-white fs-3"></i></NavLink>
          <p className='position-absolute CartNum'>{CartNum.length}</p>
         </div>
  </div>
</nav> )
}
