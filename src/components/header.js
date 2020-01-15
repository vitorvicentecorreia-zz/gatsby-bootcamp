import React from 'react'
import { Link } from 'gatsby'

export default function Header() {
    return (
        <div>
            <h1>Vitor Vicente</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/blog">Blog</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
                <li>
                    <Link to="/contact">Contato</Link>
                </li>
            </ul>
        </div>
    )
}
