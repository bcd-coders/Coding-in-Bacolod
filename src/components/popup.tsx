import '@/style.css'
import '@/reviewData'
import ReviewData from '@/reviewData';

interface Props {
  trigger: boolean;
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>;
  reviewData: ReviewData[]
}

const popup = ({trigger, setTrigger, reviewData}: Props) => {
  return (trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={()=> setTrigger(false)}>close</button>
        {reviewData.map(review => (
          <div>
            <h1>{review.Reviewer}</h1>
            <p>{review.Review}</p>
          </div>
        ))}
      </div>
    </div>
  ) : "" ;
}

export default popup