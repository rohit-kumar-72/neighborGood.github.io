import React from "react"
import "./heading.css"

const Heading = ({ title, color }) => {
    return (
        <>
            <div className='heading'>
                <h6 style={{ backgroundColor: color }}>{title}</h6>
            </div>
        </>
    )
}

export default Heading