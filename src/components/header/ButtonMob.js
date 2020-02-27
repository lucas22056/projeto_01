import React, { Component } from 'react'

export default class ButtonMob extends Component {

    constructor() {
        super() 
        this.state = {
            display: 'block'
        }
    }

    clickMe() {

        if(this.state.display === 'block') {
            this.setState({
                display: 'none'
            })
        } else {
            this.setState({
                display: 'block'
            })
         }
         document.querySelector(".nav").style.display = this.state.display
    }

    render() {
        return (
             <div className="buttonMob"  onClick={this.clickMe.bind(this)}>
                <img src="/img/botao.png" alt="Botão Mobile"></img>
            </div>
        )
    }
}
