import './reviews.css'
import Popup from './popup'
import ReviewData from '@/shared/reviewData';
import Jeepneys from '@/shared/jeepneys';
import { useState } from 'react'
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ReivewHeader from './reivew_header';


interface Props {
    title: string
    address: string
    image: string
    wifiRating: string
    price: string
    reviewSummary: string
    rating: number
    reviewData: ReviewData[]
    jeepneys:Jeepneys[]
    setSelectedPage: (value: SelectedPage) => void;
}

const reviews = ({ setSelectedPage, jeepneys, title, address, image, reviewSummary, reviewData, wifiRating, price, rating }: Props) => {
    const [reviewPopup, setReviewPopup] = useState<boolean>(false);

    return (
        <section id="reviews">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Reviews)}>
                <div className="review-container">
                    <div className="review-image">
                        <img src={image} alt="image-placeholder" />
                    </div>
                    <div className="review-summary">
                        <ReivewHeader 
                            trigger={reviewPopup}
                            jeepneys={jeepneys}
                            title={title}
                            address={address}
                            wifiRating={wifiRating}
                            price={price}
                            rating={rating}
                        />
                        <div className="review-preview">
                            <h3>Summary:</h3>
                            <p>{reviewSummary}</p>
                            {reviewPopup ? "" : <button className="rev-btn" onClick={() => setReviewPopup(true)}>See More</button>}
                        </div>
                    </div>
                    <Popup
                        trigger={reviewPopup}
                        jeepneys={jeepneys}
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