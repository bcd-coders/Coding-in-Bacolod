/* eslint-disable react-hooks/rules-of-hooks */
import '@/style.css'
import '@/shared/reviewData'
import ReviewData from '@/shared/reviewData';
import { FaStar } from 'react-icons/fa';
import { PiWifiMediumBold, PiWifiLowBold, PiWifiHighBold, PiImageSquare } from 'react-icons/pi'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { FaPesoSign } from 'react-icons/fa6';
import { imgs } from '@/shared/imgs'
import { useState } from 'react';


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



const popup = ({ trigger, setTrigger, reviewData, title, address, image, wifiRating, price, rating }: Props) => {

  const filledStars = Math.floor(rating);
  const starElements = [];
  for (let i = 0; i < 5; i++) {
    if (i <= filledStars)
      starElements.push(<FaStar color="#D6AA00" key={i} />);
    else
      starElements.push(<FaStar color="lightgray" key={i} />);
  }

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
            <div className="popup-head">
              <div className="review-title">
                <h1>{title}</h1>
                <div className='review-rating'>{starElements}</div>
              </div>
              <div className="utility-summary">
                <div>
                  <span>Price Range: </span>
                  {(() => {
                    const Price = +price;
                    if (Price <= 1) {
                      return (
                        <FaPesoSign size="15px" color="#304B0B" />

                      )
                    } else if (Price == 2) {
                      return (
                        <span>
                          <FaPesoSign size="15px" color="#304B0B" />
                          <FaPesoSign size="15px" color="#304B0B" />
                        </span>
                      )
                    } else {
                      return (
                        <span>
                          <FaPesoSign size="15px" color="#304B0B" />
                          <FaPesoSign size="15px" color="#304B0B" />
                          <FaPesoSign size="15px" color="#304B0B" />
                        </span>
                      )
                    }
                  })()}

                </div>
                <div>
                  <span>Wifi Strength: </span>
                  <span>
                    {(() => {
                      const Rating = +wifiRating;
                      if (Rating <= 2) {
                        return (
                          <PiWifiLowBold size="15px" color="red" />
                        )
                      } else if (Rating == 3) {
                        return (
                          <PiWifiMediumBold size="15px" color="orange" />
                        )
                      } else {
                        return (
                          <PiWifiHighBold size="15px" color="green" />
                        )
                      }
                    })()}
                  </span>
                </div>
              </div>
              <p>{address}</p>
            </div>

          </div>
        </div>
        <button className="close-btn" onClick={() => setTrigger(false)}>close</button>
        {reviewData.map(review => (
          <div>
            <h1>{review.Reviewer}</h1>
            <p>{review.Review}</p>
          </div>
        ))}
      </div>
    </div>
  ) : "";
}

export default popup