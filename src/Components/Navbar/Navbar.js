import React from 'react'
import './Navbar.css'
import logo from './logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='p-3 mb-2 bg-dark text-white NAV navbar-expand-lg'>
            <div className='navbar d-flex justify-content-evenly'>
                <div className='logo'>
                    <img src={logo} alt='logo'/>
                </div>
                <div className='navtitle'>
                    <h1>The News Dispatch</h1>
                </div>
                <div className='navlog'>
                    
                </div>
            </div>
            <div className='navbar-menu'>
                <ul className='navbar-menu-list'>
                    <li className='nav-item'><Link className="txt nav-link"to="/">Home</Link></li>
                    <li className='nav-item'><Link className="txt nav-link"to="/business">business</Link></li>
                    <li className='nav-item'><Link className="txt nav-link"to="/entertainment">entertainment</Link></li>
                    <li className='nav-item'><Link className="txt nav-link"to="/politics">politics</Link></li>
                    <li className='nav-item'><Link className="txt nav-link"to="/health">health</Link></li>
                    <li className='nav-item'><Link className="txt nav-link"to="/science">science</Link></li>
                    <li className='nav-item'><Link className="txt nav-link"to="/sports">sports</Link></li>
                    <li className='nav-item'><Link className="txt nav-link"to="/technology">technology</Link></li>
                </ul>
            </div>
            {/* <div className='navbar-menu-mobile'>
                <ul className='navbar-width'>
                    <li>Home</li>
                    <li>business</li>
                    <li>entertainment</li>
                    <li>general</li>
                    <li>health</li>
                    <li>science</li>
                    <li>sports</li>
                    <li>technology</li>
                </ul>
            </div> */}

            <hr/>



        </div>
    )
}

export default Navbar