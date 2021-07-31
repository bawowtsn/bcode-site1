import React,{ useState } from 'react'
import Link from 'next/link'
import { a, NavButton, NavLinks, ReactiveNavLinks, Logo, NavBarContainer, ReactiveNavContainer } from '../styles/Navbar.module.css'

const Navbar = () => {
    const [nav, setNav] = useState ("false");
    
    
    const ReactiveNav = () => {
        setNav(!nav);
    };
    
    return (

        <div className={nav ? NavBarContainer : ReactiveNavContainer}>
            <a className={Logo} href='' > &#8492;&#10070;Code&#9854; </a>
            <nav className={nav ? NavLinks : ReactiveNavLinks}>
                <Link href="/" className={Logo}> Tester</Link>
                 <a href='' className={a} >Technologies</a> 
                 <a href='' className={a} >Projects</a> 
                 <a className={a} >Timeline</a> 
            </nav>
            <button className={NavButton} onClick={ReactiveNav}>&#9776;</button>

        </div>

    )
}

// style={{backgroundColor:"green"}} 

 

// const navStyles = {
//     navbar: {
//         backgroundColor: '#f1f1f1',
//         padding: '50px 10px',
//         display:'flex',
//         alignItems:'center',
//         // justifyContent:'center',
//         width:'100%',
//         zIndex:'99',
//         '& span': {
//             color: 'blue',
//             textDecoration: 'none',
//             padding: '12px 16px',
//         },
//         '& nav': {
//             color: 'black',
//             textDecoration: 'none',
//             padding: '12px 16px',
//             justifyContent:'center',
//         },
//     },

//     a: {
//         color: 'blue',
//         textDecoration: 'none',
//         padding: '12px 16px',
//     },
    
//     logo: {
//         justifyContent:'flex-start',
//         fontSize:'35px',
//         fontWeight: 'bold',
//         padding: '12px 16px',
//         transition: '4s',

//     },
// }

export default Navbar
