import React, { useState } from 'react'
import Logo from './header/Logo'
import Nav from './header/Nav'
import ButtonMob from './header/ButtonMob'

 function Header()  {
        let [ bgColor, setColor] = useState()
        
        let [ scrollValue, setScrollValue] = useState()
        
        function modifyColor() {

            setScrollValue(scrollValue = window.scrollY)

            if(scrollValue > 0) {
                setColor(bgColor = document.getElementById('header').style.backgroundColor='#1D3557')         
                                            
            } else if(scrollValue < 50) {
                    setColor(bgColor = document.getElementById('header').style.backgroundColor='')
                    
                }     
        }

        function handleBg() {
           window.addEventListener('scroll', modifyColor) 
        }

        return (
           
               <header id="header" onScroll={handleBg()} className="header"> 
                    <Logo/>
                    <Nav/>
                    <ButtonMob/>
                </header>    
        )
    
}

export default Header