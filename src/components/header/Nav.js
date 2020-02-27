import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'



export default class Nav extends Component {
 
    render() {
        return (
            <nav className="nav">
                <ul className="nav-area">
                    <li><AnchorLink href="#sobre">Sobre</AnchorLink></li>
                    <li><AnchorLink href="#servicos">Serviços</AnchorLink></li>
                    <li><AnchorLink href="#depoimentos">Depoimentos</AnchorLink></li>
                    <li><AnchorLink href="#blog">Blog</AnchorLink></li>
                    <li><AnchorLink href="#contato">Contato</AnchorLink></li>
                    
                </ul>     
            </nav>
        )
    }
}
