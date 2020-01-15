import React from 'react'

import Header from './header.js'
import Footer from './footer.js'

import '../styles/index.scss'


export default function Layout(props) {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}
