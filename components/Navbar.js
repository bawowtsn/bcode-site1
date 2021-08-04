import React,{ useState, useEffect } from 'react'
import Link from 'next/link'
import { a, NavButton, NavLinks, ReactiveNavLinks, Logo, NavBarContainer, ReactiveNavContainer, dropdown, dropdownContent, navBarId } from '../styles/Navbar.module.css'


const Navbar = () => {
    const [nav, setNav] = useState ("false");
    const [isShrunk, setShrunk] = useState(false);

    const ReactiveNav = () => {
        setNav(!nav);
    };
    

    useEffect(() => {
        const handler = () => {
        setShrunk((isShrunk) => {
            if (
                !isShrunk && (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10)
            ) {
            return true;
            }

            if (
                isShrunk && document.body.scrollTop < 4 && document.documentElement.scrollTop < 4
            ) {
            return false;
            }

            return isShrunk;
        });
        };

        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);

        

    }, []);

    // return <Component isShrunk={isShrunk} />
    // };
    

    

    return (

        <div id={isShrunk ? navBarId : null} className={nav ? NavBarContainer : ReactiveNavContainer}>
            <a className={Logo} href='' > &#8492;&#10070;Code&#9854; </a>
            <nav className={nav ? NavLinks : ReactiveNavLinks}>
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
