import ReviewData from '@/shared/reviewData';
import UserReview from './userReview';
import { useState } from 'react'
import RowSelector from './rowSelector';

interface Props {
    reviewData: ReviewData[]
}

const userReviewDisplay = ({reviewData}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="user-review-box">
      <UserReview 
          reviewer={reviewData[activeIndex].Reviewer}
          review={reviewData[activeIndex].Review}
      />
      <RowSelector 
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        Data={reviewData}
      />
    </div>
  )
}

export default userReviewDisplay