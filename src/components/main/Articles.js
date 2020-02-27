import React, { Component } from 'react'

export default class Articles extends Component {
    render() {
        return (
            <div className="pageContent">
                <h1 className="titleArticleSection">Meu Blog</h1>
                <div className="articlesWrapper">

                    <div className="cardArticle">
                        <div className="imgContainer">
                            <img src="img/ban1.jpg"/>
                        </div>

                        <div className="articleContent">
                            <h2 className="titleArticle">Título Deste Artigo</h2>
                            <p>magna at metus congue auctor.
                                Vestibulum quis dictum metus.
                                 Mauris facilisis elementum arcu ut sollicitudin.
                                  Donec posuere, libero ac aliquet hendrerit,
                                   dui sapien commodo augue,
                                    eleifend vestibulum ex turpis sit amet ligula.
                                     In gravida at odio et viverra.
                                      Vi...</p>
                        </div>
                    </div>

                    <div className="cardArticle">
                        <div className="imgContainer">
                            <img src="img/ban2.jpg"/>
                        </div>

                        <div className="articleContent">
                            <h2 className="titleArticle">Título Deste Artigo</h2>
                            <p>magna at metus congue auctor.
                                Vestibulum quis dictum metus.
                                 Mauris facilisis elementum arcu ut sollicitudin.
                                  Donec posuere, libero ac aliquet hendrerit,
                                   dui sapien commodo augue,
                                    eleifend vestibulum ex turpis sit amet ligula.
                                     In gravida at odio et viverra.
                                     eleifend vestibulum ex turpis sit amet ligula.
                                     In gravida at odio et viverra.
                                     eleifend vestibulum ex turpis sit amet ligula.
                                     In gravida at odio et viverra.
                                     eleifend vestibulum ex turpis sit amet ligula.
                                     In gravida at odio et viverra.
                                      Vi...</p>
                        </div>
                    </div>

                    <div className="cardArticle">
                        <div className="imgContainer">
                            <img src="img/ban1.jpg"/>
                        </div>

                        <div className="articleContent">
                            <h2 className="titleArticle">Título Deste Artigo</h2>
                            <p>magna at metus congue auctor.
                                Vestibulum quis dictum metus.
                                 Mauris facilisis elementum arcu ut sollicitudin.
                                  Donec posuere, libero ac aliquet hendrerit,
                                   dui sapien commodo augue,
                                    eleifend vestibulum ex turpis sit amet ligula.
                                     In gravida at odio et viverra.
                                      Vi...</p>
                        </div>
                    </div>
                </div> {/*cardwrapper*/}
            </div>
        )
    }
}
