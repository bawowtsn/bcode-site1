import React from 'react'
import {SectionTitle} from '../styles/Section.module.css'
import {RightContainer, LeftContainer, Content, TimeLineRuler} from '../styles/Timeline.module.css'
import { TimeLineData } from '../constants/constants'

const Timeline = () => {
    return (
        <div style={{margin:'0 auto 100px'}}>
            <div className={SectionTitle}>
                <h1>Timeline</h1>
             </div>
             <div className={TimeLineRuler}>
                 {TimeLineData.map((d,i) => {
                     return (
                        // developed code for alternating classes with modulus and index value
                        <div className={(i%2) ? RightContainer  : LeftContainer}>
                            <div className={Content}>
                                <h2>{d.year}</h2>
                                <p>{d.text}</p>
                            </div>
                        </div>
                     )
                 })}
                </div>
        </div>
    )
}

export default Timeline
