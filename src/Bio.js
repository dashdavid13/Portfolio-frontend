import React from 'react'
import img from './info/img.jpg';

function Bio() {
    

    return(
        <div className="bio-div">
            <h1>David Medina</h1>
            <img className="img" src={img} alt="Pic"/>
            <p>Software engineer with experience in customer service, event planning, and management. Relentlessly pursuing my passion to create solutions and solve problems. Possessing strong skills in creativity, leadership, and strategic thinking to increase efficiency. Naturally hard-working and curious. </p>
        </div>
    )
}

export default Bio