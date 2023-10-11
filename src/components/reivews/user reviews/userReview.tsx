
interface Props {
    reviewer: string
    review: string
}

const userReview = ({reviewer, review}: Props) => {
  return (
    <div>
        <h1>{reviewer}</h1>
        <p>{review}</p>
    </div>
  )
}

export default userReview