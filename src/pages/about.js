import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return(
        <div>
            <h1>Sobre</h1>
            <p>Descrição da pessoa. <Link to="/contact">Entre em contato</Link></p>
        </div>
    )
}

export default AboutPage