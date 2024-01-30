import './Procard.css'

import React from 'react'
import Procard from './Procard';
import ProjectCardData from './WorKCardData';

const Work = () => {
    return (
        <div className='work-container'>
            <h1 className='project-heading'>Projects</h1>
            <div className='project-container'>
                {ProjectCardData.map((val, ind) => {
                    return(
                        <Procard key={ind} imgsrc={val.imgsrc} title={val.title} text={val.text} view={val.view} />
                    )
                })}
            </div>
        </div>
    )
}

export default Work