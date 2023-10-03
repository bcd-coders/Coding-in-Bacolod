import Navbar from './components/navbar'
import Reviews from './components/reviews'
import AboutUs from './components/aboutus'

function App() {
  return (
   <div>
    <Navbar/>
    <AboutUs/>
    <Reviews 
        title="Arendo" 
        address="Gf - 9 Roli's Arcade, La Salle Avenue" 
        image="https://picsum.photos/350/300"
    />
    <Reviews 
        title="RTC Coworking" 
        address="2nd F, Perpetual Bldg corner Henaez & Jovita St." 
        image="https://picsum.photos/350/301"
    />
   </div>
  )
}

export default App
