import '@/style.css'
import Popup from './popup'
import { FaStar, FaStarHalf, FaWifi } from 'react-icons/fa';
import { FaPesoSign } from 'react-icons/fa6';
import ReviewData from '@/reviewData';
import { useState } from 'react'

interface Props {
    title: string
    address: string
    image: string
    reviewSummary: string
    reviewData: ReviewData[]
}

const reviews = ({title, address, image, reviewSummary, reviewData}: Props) => {
  const [reviewPopup, setReviewPopup] = useState<boolean>(false);

  return (
    <div className="review-container">
        <div className="review-image">
            <img src={image} alt="image-placeholder" />
        </div>
        <div className="review-summary">
            <div className="review-head">
                <div className="review-title">
                    <h1>{title}</h1>
                    <div className='review-rating'><FaStar color="#D6AA00" /><FaStar color="#D6AA00" /><FaStarHalf color="#D6AA00" /></div>
                </div>
                <div className="utility-summary">
                    <div>
                        <span>Price Range: </span>
                        <span><FaPesoSign size="15px" color="#304B0B" /></span>
                    </div>
                    <div>
                        <span>Wifi Strength: </span>
                        <span><FaWifi size="15px" color="green" /></span>
                    </div>
                </div>
                <p>{address}</p>
            </div>
            <div className="review-preview">
                <h3>Summary:</h3>
                <p>{reviewSummary}</p>
                { reviewPopup ? "" : <button className="rev-btn" onClick={() => setReviewPopup(true)}>See More</button> }
            </div>
        </div>
        <Popup 
            trigger={reviewPopup}
            setTrigger={setReviewPopup}
            reviewData={reviewData}
        />
    </div>
  )
}

export default reviews