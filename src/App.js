import { Footer } from "./Components/footer/Footer";
import { Header } from "./Components/header/Header";
import { HeroArea } from "./Components/heroarea/HeroArea";
import { useState } from "react";
import { Details } from "./Components/addDetails/details";
import './App.css';

function App() {

  const [heroComponent, setHeroComponent] = useState("default");

  const handleContinue = () => {
    setHeroComponent("another"); //interactivity
  };

  return (
    <div>
      <Header />

      {heroComponent === "default" ? (
        <HeroArea onContinue={handleContinue} />
      ) : (
        <Details />
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




