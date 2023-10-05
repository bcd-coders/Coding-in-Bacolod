import Navbar from './components/navbar'
import Reviews from './components/reviews'
import AboutUs from './components/aboutus'
import allReviewData from './allReviewsData'

function App() {
  return (
   <div>
    <Navbar/>
    <AboutUs/>
    {allReviewData.map(review=>(
      <Reviews 
        title={review.title}
        address={review.address}
        image={review.image}
        reviewSummary=''
        reviewData={review.reviewData}
      />
    ))}
   </div>
  )
}

export default App
