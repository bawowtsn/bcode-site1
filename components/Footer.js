import React from 'react'
import Link from 'next/link'
import { Logo, FooterContainer, NavLinks } from '../styles/Layout.module.css'
import {a, dropdown, dropdownContent} from '../styles/Navbar.module.css'


const Footer = () => {
    return (
        <div style={{paddingTop: '100px', margin: '0 auto', backgroundColor:'grey'}}>
           <div style={{display:'flex', justifyContent: 'center'}}>
                <a className={Logo} href='' > &#8492;&#10070;Code&#9854; </a>
           </div>
           <div className={FooterContainer}>
                <nav className={NavLinks}>
                    <Link href="/" className={Logo}> Tester</Link>
                    <a href='' className={a} >Technologies</a> 
                    <div className={dropdown}>
                        <a href='' >Projects</a>
                        <div className={dropdownContent}>
                            <a>Project-1</a>
                            <a>Project-2</a>
                            <a>Project-3</a>
                            <a>Project-4</a>
                        </div>
                    </div>
                    <a className={a} >Timeline</a> 
                </nav>      
            </div> 
            <p>Learning and building satisfactory web products day by day</p>  
        </div>
    )
}

export default Footer
