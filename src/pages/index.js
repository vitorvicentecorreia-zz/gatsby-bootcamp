import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout.js'

const IndexPage = () => {
    return(
        <Layout>
            <h1>Olá!</h1>
            <h2>Eu sou o Vitor, um desenvolvedor front-end vivendo na linda Capão Redondo.</h2>
            <p>Precisa de um desenvolvedor? <Link to="/contact">Entre em contato</Link></p>
        </Layout>
    )
}

export default IndexPage
