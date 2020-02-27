import React, { Component } from 'react'

export default class Sobre extends Component {
    render() {
        return (
            <div id="sobre" className="pageContent">
                <div className="perfilContent container">
                    <div className="perfilImgWrapper">
                        <img src="img/perfilFoto.jpg"/>
                    </div>
                    
                    <div className="perfilContentWrapper ">
                        <div className="perfilTitle">
                            <h1>Quem Sou</h1>
                        </div>
                        <div className="perfilDesc">
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                             Donec porttitor lacinia dictum. Fusce eu purus sollicitudin,
                              tristique orci non, maximus sapien. Cras mattis metus nisl,
                               quis maximus magna dictum non. Nam ac egestas eros.
                                Ut risus nulla, ornare ut consectetur eu, congue vel felis.<br/><br/>
                                 Proin eros odio, pellentesque nec volutpat id, ultrices venenatis mauris.
                                  Aenean non neque iaculis, vestibulum est non, aliquet eros
                                   Praesent porttitor est non velit commodo cursus.
                                    Sed gravida metus nec sagittis maximus.
                                    Proin eros odio, pellentesque nec volutpat id, ultrices venenatis mauris.
                                  Aenean non neque iaculis, vestibulum est non, aliquet eros
                                   Praesent porttitor est non velit commodo cursus.
                                    Sed gravida metus nec sagittis maximus.<br/><br/>
                                    Proin eros odio, pellentesque nec volutpat id, ultrices venenatis mauris.
                                  Aenean non neque iaculis, vestibulum est non, aliquet eros
                                   Praesent porttitor est non velit commodo cursus.
                                    Sed gravida metus nec sagittis maximus.
                            </p>
                        </div>
                    </div>
                </div>
            </div>           
        )
    }
}
