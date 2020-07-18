import "./Nav.css"
import React from 'react'
import { Link } from 'react-router-dom'
export default props =>
    <aside className='menu-area'>
        <nav className="menu">
            <Link to="/">
                <i className="fa fa-home"> Início</i>
            </Link>
            <Link to="/livros">
                <i className="fa fa-users"> Livros</i>
            </Link>
        </nav>
    </aside>