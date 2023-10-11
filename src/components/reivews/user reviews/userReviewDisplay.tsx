import ReviewData from '@/shared/reviewData';
import UserReview from './userReview';
import { useState } from 'react'

interface Props {
    reviewData: ReviewData[]
}

const userReviewDisplay = ({reviewData}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNextClick = (direction: string) => {
    if (direction === 'next') {
        if (activeIndex < reviewData.length - 1) {
            setActiveIndex(activeIndex + 1);
          } else {
            setActiveIndex(0);
          }
      } 
    else if (direction === 'previous') {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
          } else {
            setActiveIndex(reviewData.length - 1);
          }
      } 
  };

  return (
    <div className='user-reviews'>
        <UserReview 
            reviewer={reviewData[activeIndex].Reviewer}
            review={reviewData[activeIndex].Review}
        />
        <div className='button-row'>
            <button className='btn-prev' onClick={()=>handleNextClick("previous")}>Back</button>
            <button className='btn-next' onClick={()=>handleNextClick("next")}>Next</button>
        </div>
    </div>
  )
}

export default userReviewDisplay