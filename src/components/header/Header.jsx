import React, { useState } from 'react';
import "./header.css";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

const Header = () => {
    const [Toggle, showMenu] = useState(false);

    return (
        <header className='header'>
            <nav className='nav container'>
                {/* Use Link instead of a href for internal navigation */}
                <Link to="/" className="nav_logo">Booking</Link>

                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <Link to="/" className="nav_link active-link">
                                <i className='uil uil-estate nav_icon'></i> Home
                            </Link>
                        </li>

                        <li className="nav_item">
                            <Link to="/about" className="nav_link">
                                <i className='uil uil-user nav_icon'></i> About
                            </Link>
                        </li>

                        <li className="nav_item">
                            <Link to="/booking" className="nav_link">
                                <i className='uil uil-truck nav_icon'></i> Booking
                            </Link>
                        </li>

                        <li className="nav_item">
                            <Link to="/review" className="nav_link">
                                <i className='uil uil-comment-notes nav_icon'></i> Review
                            </Link>
                        </li>

                        <li className="nav_item">
                            <a href="#" className="nav_link-login">
                                <i className='uil uil-user nav_icon-login'></i> Login
                            </a>
                        </li>
                    </ul>

                    <i className='uil uil-times nav_close' onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uli uil-align-alt"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;
