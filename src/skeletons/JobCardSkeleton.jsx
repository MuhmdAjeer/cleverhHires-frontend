import React from 'react'
import SkeletonElement from './SkeletonElement'
import './skeleton.scss'
import Shimmer from './Shimmer'

const JobCardSkeleton = () => {
    return (
                <div className="skeleton_wrapper">

                <div className="card_continer">
                    <div className="left">

                        <div className="top_left">
                            {/* <img src="../google.png" alt="" /> */}
                            <SkeletonElement  type="thumbnail" />
                            <div className="top_left_details">
                                <SkeletonElement type="text" />
                                <SkeletonElement type="text" />
                                <SkeletonElement type="text" />

                            </div>
                        </div>

                        <div className="center_left">
                            {/* <div className="employment_card"> */}
                                <SkeletonElement type="badge" />
                            {/* </div> */}
                            {/* <div className="employment_card"> */}
                                <SkeletonElement type="badge" />
                            {/* </div> */}
                            {/* <div className="employment_card"> */}
                                <SkeletonElement type="badge" />

                            {/* </div> */}
                            <SkeletonElement type="text" />
                        </div>
                    </div>
                    <div className="right">

                    </div>

                </div>
                </div>

    )
}

export default JobCardSkeleton