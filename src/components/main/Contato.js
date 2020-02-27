import React, { Component } from 'react'

export default class Contato extends Component {
    render() {
        return (
            <div id="contato" className="pageContent background">
                <h1 className="titleContact">Envie sua Mensagem</h1>
                <div className="contactForm">
                    <form method="get">
                        <div className="formWrapper">

                            <div className="inputWrapper">
                                <input type="text" placeholder="Nome"/>
                                <input type="text" placeholder="Celular"/>
                            </div>

                            <div className="inputWrapper">
                                <input type="text" placeholder="E-mail"/>
                                <input type="text" placeholder="Assunto"/>
                            </div>             
                        </div>
                        <div className="mensagemInput">
                                <textarea placeholder="Mensagem"></textarea>
                        </div>
                        <div className="contactButton">
                            <input type="submit" name="Enviar Mensagem" placeholder="Enviar Mensagem"/>
                        </div>
                    </form>
                </div>
                
            </div>
        )
    }
}
