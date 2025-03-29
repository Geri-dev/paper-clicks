import { Footer } from "./Components/footer/Footer";
import { Header } from "./Components/header/Header";
import { HeroArea } from "./Components/heroarea/HeroArea";
import { useState } from "react";
import { Details } from "./Components/addDetails/details";
import './App.css';

function App() {

  const [heroComponent, setHeroComponent] = useState("default"); // hero area component state

  const [selectedTime, setSelectedTime] = useState(""); 

  // this function makes the switch from HeroArea to Details when "continue" is clicked
  const handleContinue = () => {
    setHeroComponent("next-hero"); 
  };

  

  return (
    <div>
      <Header />


      {/* Conditional rendering based on hero area component state */}
      {heroComponent === "default" ? (
        <HeroArea onContinue={handleContinue} selectedTime={selectedTime} setSelectedTime={setSelectedTime} />
      ) : (
        <Details selectedTime={selectedTime}/>
      )}

      <div class="footer-links">
        <p>Terms and Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
        <p>|</p>
        <p>California Privacy</p>
      </div>
      <Footer />
    </div>

  );
}

export default App;




