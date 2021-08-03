import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Container from '../styles/Layout.module.css'



const Layout = ({children}) => {
    return (
        <div className={Container}>
            <Navbar/>
                <main>
                    {children}
                </main>
            <Footer/>
        </div>
    )
}

export default Layout
