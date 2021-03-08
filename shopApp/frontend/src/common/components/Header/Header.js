import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { cartTabToggle } from '../../../state/cart/cartToggleReducer'
import ThemeToggle from './ThemeToggle'

const Header = ({ cartTabToggle }) => {
    return (
        <header>
            <div className="logo"><NavLink to="/">Musicant</NavLink></div>
            <div className="Navlinks">
                <ul>
                    <li>
                        <NavLink to="/">
                            <img src="/static/media/discover.png" /><span>Discover</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/artists">
                            <img src="/static/media/microphone.png" /><span>Artists</span>
                        </NavLink>
                    </li>
                    <li>
                        <div className="cart-toggle" onClick={cartTabToggle}>
                            <img src="/static/media/cart.png" /><span>My cart</span>
                        </div>
                    </li>
                </ul>
            </div>
            <ThemeToggle />
        </header>
    )
}

export default connect(null, { cartTabToggle })(Header)
