import React from "react"
import { Link } from 'gatsby'

const IndexPage = () => {
    return(
        <div>
            <h1>Olá!</h1>
            <h2>Eu sou o Vitor, um desenvolvedor front-end vivendo na linda Capão Redondo.</h2>
            <p>Precisa de um desenvolvedor? <Link to="/contact">Entre em contato</Link></p>
        </div>
    )
}

export default IndexPage
