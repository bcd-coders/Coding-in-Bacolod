import Navbar from './components/navbar'
import Reviews from './components/reviews'
import AboutUs from './components/aboutus'
import allReviewData from './allReviewsData'
import { SelectedPage } from "@/shared/types";
import { useEffect, useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.AboutUs
  );
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
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage} />
      <AboutUs
        setSelectedPage={setSelectedPage}
      />
      {allReviewData.map(review => (
        <Reviews
          title={review.title}
          address={review.address}
          image={review.image}
          reviewSummary=''
          rating={review.rating}
          reviewData={review.reviewData}
          setSelectedPage={setSelectedPage}
        />
      ))}
    </div>
  )
}

export default App
