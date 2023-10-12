import { BsPersonCircle } from "react-icons/bs";

interface Props {
    reviewer: string
    review: string
}

const userReview = ({reviewer, review}: Props) => {
  return (
    <div className='user-review-container'>
      <div className="user-review-title">
        <div className="user-img"><BsPersonCircle /></div>
        <h1>{reviewer}</h1>
      </div>
      <p>{review}</p>
    </div>
  )
}

export default userReview