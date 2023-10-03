import Navbar from './components/navbar'
import Reviews from './components/reviews'

function App() {
  return (
   <div>
    <Navbar/>
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
