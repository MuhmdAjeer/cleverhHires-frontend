import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

const JobDetilsSkeleton = () => {
  return (
    <div className="skeleton_wrapper">

    <div className="jd_container">
      <div className="jd_top">

      <div className="jd_top_left">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
      </div>
      <div className="jd_top_right">

      <SkeletonElement type="thumbnail" />

      </div>
      </div>

    
      <div className="jd_mid">
      <SkeletonElement type="title" />
        

        <div className="jd_details">
          <span></span>

        <SkeletonElement type="text" />

        </div>


        <div className="jd_details">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        </div>

        <div className="jd_details">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />

        </div>
        
        <SkeletonElement type="title" />

        <div className="skills">
          

        </div>
        <SkeletonElement type="title" />

        <SkeletonElement type="text" />
      </div>
  </div>
    </div>
  )
}

export default JobDetilsSkeleton