import React from "react"
import {SectionTitle, SectionText, SectionSubText} from '../styles/Section.module.css'
import {technologiesData} from '../constants/constants'


const Technologies = () => {
    return (
        <div style={{maxWidth:'1040px', margin:'auto'}}>
            <div className={SectionTitle}>
                <h1>Technologies</h1>
            </div>
            <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(100px, 1fr))', textAlign:'center'}}>
                {technologiesData.map((p, i) => {
                    return (
                        <div >
                            <img style={{height:'50px', width:'50px'}} src={p.image} />
                            <h3>{p.title}</h3>
                        </div>
                    );
                })
                }
                
                
            </div>
            
            
        </div>
    )
}

export default Technologies

