import React from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer.jsx'

import { Outlet } from 'react-router-dom'

export default function Mainlayout(props) {
  console.log(props);
  return (
<>
<Navbar lenght={props}/>
<Outlet/>
<Footer/>
</>
 )
}
