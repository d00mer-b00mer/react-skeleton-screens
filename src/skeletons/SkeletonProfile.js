import React from 'react'
import SkeletonElem from './SkeletonElem'

const SkeletonProfile = ({ theme }) => {
    const themeClass = theme || 'light'
    return (  
        <div className="skeleton-wrapper">
            <div className={`skeleton-wrapper ${themeClass}`}>
                <div>
                    <SkeletonElem type="avatar" />
                </div>
                <div>
                    <SkeletonElem type="title" />
                    <SkeletonElem type="text" />
                    <SkeletonElem type="text" />
                </div>
            </div>
        </div>
    );
}
 
export default SkeletonProfile;