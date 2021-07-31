
import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: auto;
`;

export const Row = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: auto;
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    justify-content:center;
`;

export const FooterContainer = styled.div`
    width: 100%;
    background-color:none;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavBarContainer = styled.div `
        background-color: #f1f1f1;
        padding: 50px 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-evenly;
        align-items:center;
        zIndex:99;
`;

export const Logo = styled.a `
        font-size:35px;
        font-weight: bold;
        padding: 0px 0px;
        transition: 4s;
        color: blue;
`;

export const NavLinks = styled.nav `
        align-items:center;
        
        @media screen and (max-width: 768px) {
            display: none;
        }
`;



// export const NavRef = styled.a `
//         color: black;
//         textDecoration: none;
//         padding: 12px 16px;
// `


export const NavButton = styled.button `
        background-color:none;
        border: 2px solid black;
        border-radius: 4px;
        padding: 12px 16px;
        cursor: pointer;
`;

