import '@/style.css'
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { FaPesoSign } from 'react-icons/fa6';

interface Props {
    title: string
    address: string
    image: string
}

const reviews = ({title, address, image}: Props) => {
  return (
    <div className="review-container">
        <div className="review-image">
            <img src={image} alt="image-placeholder" />
        </div>
        <div className="review-summary">
            <h1>{title}</h1>
            <div className="utility-summary">
                <span><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></span>
                <span>3 reviews</span>
                <span><FaPesoSign /><FaPesoSign /></span>
            </div>
            <p>{address}</p>
            <div className="review-preview">

            </div>
            <button className="rev-btn">See More</button>
        </div>
    </div>
  )
}

export default reviews