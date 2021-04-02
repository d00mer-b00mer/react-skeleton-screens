import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElem from './SkeletonElem'

const SkeletonArticle = ({ theme }) => {
    const themeClass = theme || 'light'
    return ( 
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className="skeleton-article">
                <SkeletonElem type="title" />
                <SkeletonElem type="text" />
                <SkeletonElem type="text" />
                <SkeletonElem type="text" />
                <SkeletonElem type="text" />
            </div>
            <Shimmer />
        </div>
    );
}
 
export default SkeletonArticle;