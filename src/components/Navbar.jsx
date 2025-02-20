import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Главная</Link>
                </li>
                <li>
                    <Link to="/application">Приложения</Link>
                </li>
                <li>
                    <Link to="/vidgets">Виджеты</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;