import '@/style.css'
import Popup from './popup'
import { FaStar } from 'react-icons/fa';
import { PiWifiMediumBold, PiWifiLowBold, PiWifiHighBold } from 'react-icons/pi'
import { FaPesoSign } from 'react-icons/fa6';
import ReviewData from '@/shared/reviewData';
import { useState } from 'react'
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";


interface Props {
    title: string
    address: string
    image: string
    wifiRating: string
    price: string
    reviewSummary: string
    rating: number
    reviewData: ReviewData[]
    setSelectedPage: (value: SelectedPage) => void;
}

const reviews = ({ setSelectedPage, title, address, image, reviewSummary, reviewData, wifiRating, price, rating }: Props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [reviewPopup, setReviewPopup] = useState<boolean>(false);

    const filledStars = Math.floor(rating);

    const starElements = [];
    for (let i = 0; i < 5; i++) {
        if (i<=filledStars)
        starElements.push(<FaStar color="#D6AA00" key={i} />);
        else
        starElements.push(<FaStar color="lightgray" key={i} />);
    }
    
    return (
        <section id="reviews">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Reviews)}>
                <div className="review-container">
                    <div className="review-image">
                        <img src={image} alt="image-placeholder" />
                    </div>
                    <div className="review-summary">
                        <div className="review-head">
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
                            <div className="review-preview">
                                <h3>Summary:</h3>
                                <p>{reviewSummary}</p>
                                {reviewPopup ? "" : <button className="rev-btn" onClick={() => setReviewPopup(true)}>See More</button>}
                            </div>
                        </div>
                        <Popup
                            trigger={reviewPopup}
                            setTrigger={setReviewPopup}
                            reviewData={reviewData}
                            image={image}
                            rating={rating}
                            price={price}
                            title={title}
                            address={address}
                            wifiRating={wifiRating}
                            reviewSummary={reviewSummary}
                        />
                </div>
            </motion.div>
        </section>
    )
}

export default reviews