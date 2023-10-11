/* eslint-disable react-hooks/rules-of-hooks */
import '@/style.css'
import '@/shared/reviewData'
import ReviewData from '@/shared/reviewData';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { imgs } from '@/shared/imgs'
import { useState } from 'react';
import ReivewHeader from './reivew_header';
import UserReviewDisplay from './user reviews/userReviewDisplay';

interface Props {
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  reviewData: ReviewData[]
  title: string
  address: string
  image: string
  wifiRating: string
  price: string
  reviewSummary: string
  rating: number
}

const popup = ({ trigger, setTrigger, reviewData, title, address, wifiRating, price, rating }: Props) => {
  const [currImg, setCurrImg] = useState(0)

  return (trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-container">
          <div className="popup-img" style={{ backgroundImage: `url(${imgs[currImg].image})` }}>
            <div
              className="left"
              onClick={() => {
                currImg > 0 && setCurrImg(currImg - 1);
              }}
            >
              <AiOutlineArrowLeft style={{ fontSize: 30 }} />
            </div>
            <div className="center">
            </div>
            <div
              className="right"
              onClick={() => {
                currImg < imgs.length - 1 && setCurrImg(currImg + 1);
              }}
            >
              <AiOutlineArrowRight style={{ fontSize: 30 }} />
            </div>
          </div>
          <div className="popup-summary">
            <ReivewHeader 
              title={title}
              address={address}
              wifiRating={wifiRating}
              price={price}
              rating={rating}
            />
          </div>
        </div>
        <button className="close-btn" onClick={() => setTrigger(false)}>close</button>
          <UserReviewDisplay reviewData={reviewData} />
      </div>
    </div>
  ) : "";
}

export default popup