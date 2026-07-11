import { useState } from "react";

import Hero from "../components/hero/Hero";
import Journey from "../components/journey/Journey";
import Gallery from "../components/gallery/Gallery";
import Legacy from "../components/legacy/Legacy";
import Letters from "../components/letters/Letters";
import Footer from "../components/footer/Footer";
import Intro from "../components/intro/Intro";

const Home = () => {
  const [letters, setLetters] = useState([]);

  const addLetter = (newLetter) => {
    setLetters((prevLetters) => [newLetter, ...prevLetters]);
  };

  return (
    <>
      <Hero />
      <Intro />
      <Journey />
      <Gallery />
      <Legacy />

      <Letters
        letters={letters}
        onAddLetter={addLetter}
      />

      <Footer />
    </>
  );
};

export default Home;