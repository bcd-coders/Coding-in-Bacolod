/* eslint-disable react-hooks/rules-of-hooks */
import './reviews.css'
import '@/shared/reviewData'
import ReviewData from '@/shared/reviewData';
import ReivewHeader from './reivew_header';
import UserReviewDisplay from './user reviews/userReviewDisplay';
import ImgCarousel from './imgcarousel';
import Jeepneys from '@/shared/jeepneys';

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
  jeepneys: Jeepneys[]
}

const popup = ({ jeepneys, trigger, setTrigger, reviewData, title, address, wifiRating, price, rating }: Props) => {


  return (trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-container">
          <ImgCarousel />
          <div className="popup-summary">
            <ReivewHeader
              jeepneys={jeepneys}
              trigger={trigger}
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