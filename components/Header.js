import React from 'react'
import {SectionTitle, GridSection2, LeftSection} from '../styles/Section.module.css'

const Header = () => {
    return (
            <div  style={{backgroundColor:'blueviolet', marginTop:'150px', paddingTop:'20px'}}>
                <div className={SectionTitle}>
                    <h1>Welcome</h1>
                </div>
                <div className={GridSection2}>
                    <div className={LeftSection}>
                        <h2>I'm</h2>
                        <br/>
                        <h2>Emmanuel Eyitsede</h2>
                        <ul>
                            <li>Self Thought Developer</li>
                            <li>Mechanical Engineer</li>
                        </ul>
                    </div>
                    <div className={LeftSection}>
                        <button>Hire Me</button>
                    </div>
                </div>
            </div>        
    )
}

export default Header
