import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout.js'

const AboutPage = () => {
    return(
        <Layout>
            <h1>Sobre</h1>
            <p>Descrição da pessoa. <Link to="/contact">Entre em contato</Link></p>
        </Layout>
    )
}

export default AboutPage