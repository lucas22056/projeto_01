import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="pageContent backgroundFooter" >
                <div className="logoFooter">
                    <img src="img/logofooter.png" alt=""/>
                </div>
                <p className="textFooter">Copyright © Projeto fictício | Coach de Carreira. Todos os direitos reservados.<br/>
Rua tal Lugar, 000. Cj.: 000. Bairo Qualquer. São Paulo - SP. CEP: 00000-000.<br/> Tel.: (00) 00000-0000.
Mapa do Site | Política de Privacidade<br/>
Desenvolvido por Lucas C. Santos.</p>
            </div>
        )
    }
}
