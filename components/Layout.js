import React from 'react'
import { Container } from './StyleComponents'
import Navbar from './Navbar'
import Footer from './Footer'



const Layout = ({children}) => {
    return (
        <Container>
            <Navbar/>
                <main>
                    {children}
                </main>
            <Footer/>
        </Container>
    )
}

export default Layout
