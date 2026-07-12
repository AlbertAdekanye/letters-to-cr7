import { useEffect, useState } from "react";

import Hero from "../components/hero/Hero";
import Journey from "../components/journey/Journey";
import Gallery from "../components/gallery/Gallery";
import Legacy from "../components/legacy/Legacy";
import Letters from "../components/letters/Letters";
import Footer from "../components/footer/Footer";
import Intro from "../components/intro/Intro";

import {
  getLetters,
  createLetter,
  likeLetter,
} from "../services/letterService";

const Home = () => {
  const [letters, setLetters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Load letters when the app starts
  useEffect(() => {
    const loadLetters = async () => {
      try {
        const data = await getLetters();
        setLetters(data);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Unable to load letters.");
      } finally {
        setLoading(false);
      }
    };

    loadLetters();
  }, []);

  // Add a new letter
  const addLetter = async (newLetter) => {
    try {
      const savedLetter = await createLetter(newLetter);

      setLetters((prevLetters) => [
        savedLetter,
        ...prevLetters,
      ]);

      setError("");
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  // Like a letter
  const handleLikeLetter = async (id) => {
    try {
      const updatedLetter = await likeLetter(id);

      setLetters((prevLetters) =>
        prevLetters.map((letter) =>
          letter._id === updatedLetter._id
            ? updatedLetter
            : letter
        )
      );
    } catch (err) {
      console.error(err);
    }
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
        onLikeLetter={handleLikeLetter}
        loading={loading}
        error={error}
      />

      <Footer />
    </>
  );
};

export default Home;