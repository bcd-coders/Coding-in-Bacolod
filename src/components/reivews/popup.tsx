/* eslint-disable react-hooks/rules-of-hooks */
import './reviews.css'
import '@/shared/reviewData'
import ReviewData from '@/shared/reviewData';
import ReivewHeader from './reivew_header';
import UserReviewDisplay from './user reviews/userReviewDisplay';
import ImgCarousel from './imgcarousel';
import {RiBusFill} from 'react-icons/ri';
import {TbPointFilled} from 'react-icons/tb';
import {AiOutlineCloseSquare} from 'react-icons/ai'

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
  jeeps: any[]
}

const popup = ({ trigger, setTrigger, reviewData, title, address, wifiRating, price, rating, jeeps }: Props) => {


  return (trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-container">
          <ImgCarousel />
          <div className="popup-summary">
            <ReivewHeader
              trigger={trigger}
              title={title}
              address={address}
              wifiRating={wifiRating}
              price={price}
              rating={rating}
            />
            <div className="jeep-container">
              <div className="jeep-title">
                <h3>Jeepney Routes </h3><RiBusFill font-size="18px" color="#304B0B" />
              </div>
                <div className="jeep-list">
                  {jeeps.map((jeepneys, index) =>(index < jeeps.length-1) ? (
                    <div className='jeep-items'>
                      <p>{jeepneys.jeep}</p><TbPointFilled />
                    </div>
                  ): 
                    <div className='jeep-items'>
                      <p>{jeepneys.jeep}</p>
                    </div>
                  )}
              </div>
            </div>
          </div>
        </div>
        <button className="close-btn" onClick={() => setTrigger(false)}><AiOutlineCloseSquare /></button>
        <UserReviewDisplay reviewData={reviewData} />
      </div>
    </div>
  ) : "";
}

export default popup