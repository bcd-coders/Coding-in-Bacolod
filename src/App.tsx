import Navbar from './components/navbar'
import Reviews from './components/reivews/reviews'
import AboutUs from './components/aboutus'
import allReviewData from './shared/allReviewsData'
import { SelectedPage } from "@/shared/types";
import { useEffect, useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.AboutUs);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.AboutUs);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <AboutUs
        setSelectedPage={setSelectedPage}
      />
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} 
      />
      {allReviewData.map(review => (
        <Reviews
          title={review.title}
          address={review.address}
          image={review.image}
          wifiRating={review.wifiRating}
          price={review.price}
          reviewSummary=''
          rating={review.rating}
          reviewData={review.reviewData}
          jeeps={review.jeeps}
          setSelectedPage={setSelectedPage}
        />
      ))}
    </div>
  )
}

export default App
