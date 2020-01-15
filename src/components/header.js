import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

export default function Header() {
    return (
        <header className={headerStyles.header}>
            <h1 >
                <Link className={headerStyles.title} to="/">
                    Vitor Vicente
                </Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link 
                            className={headerStyles.navItem} 
                            to="/"
                            activeClassName={headerStyles.activeNavItem}>Home</Link>
                    </li>
                    <li>
                        <Link 
                            className={headerStyles.navItem} 
                            to="/blog"
                            activeClassName={headerStyles.activeNavItem}>Blog</Link>
                    </li>
                    <li>
                        <Link 
                            className={headerStyles.navItem} 
                            to="/about"
                            activeClassName={headerStyles.activeNavItem}>Sobre</Link>
                    </li>
                    <li>
                        <Link 
                            className={headerStyles.navItem} 
                            to="/contact"
                            activeClassName={headerStyles.activeNavItem}>Contato</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
