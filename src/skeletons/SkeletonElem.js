import React from 'react'
import './skeleton.css'

const SkeletonElem = ({ type }) => {
    
    return (
        <div className={`skeleton ${type}`}>

        </div>
    )
}

export default SkeletonElem