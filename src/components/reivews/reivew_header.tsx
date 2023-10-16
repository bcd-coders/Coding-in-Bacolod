import { PiWifiMediumBold, PiWifiLowBold, PiWifiHighBold } from 'react-icons/pi'
import { FaPesoSign } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';

interface Props {
    title: string
    address: string
    wifiRating: string
    price: string
    rating: number
}

const reivew_header = ({title, address, wifiRating, price, rating}:Props) => {
const filledStars = Math.floor(rating);

const starElements = [];
for (let i = 0; i < 5; i++) {
    if (i<filledStars)
    starElements.push(<FaStar color="#D6AA00" key={i} />);
    else
    starElements.push(<FaStar color="lightgray" key={i} />);
}

  return (
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
)
}

export default reivew_header