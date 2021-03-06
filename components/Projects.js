import React from "react"
import { projectData } from "../constants/constants"
import {SectionTitle, SectionText, SectionSubText, GridSection2} from '../styles/Section.module.css'
import {Grid2, grid, card} from '../styles/Project.module.css'

const Projects = () => {
    return (
        <div >
            <div className={SectionTitle}>
                <h1>Projects</h1>
            </div>
            <div className={Grid2}>
                {projectData.map((p,i) => {
                    return (
                        <div className={card}>
                            <img style={{width:'100%'}} src={p.image} />
                            <div>
                                <h2>{p.title}</h2>
                                <p>{p.description}</p>    
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects


