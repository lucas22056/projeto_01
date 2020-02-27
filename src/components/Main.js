import React, { Component } from 'react'
import MainSlide from './main/MainSlide'
import Sobre from './main/Sobre'
import Servicos from './main/Servicos'
import Depoimentos from './main/Depoimentos'
import Articles from './main/Articles'
import Contato from './main/Contato'

export default class Main extends Component {
    render() {
        return (
            <div className="main">
                <MainSlide />
                <Sobre/>
                <Servicos/>
                <Depoimentos/>
                <Articles/>
                <Contato/>
            </div>
        )
    }
}
