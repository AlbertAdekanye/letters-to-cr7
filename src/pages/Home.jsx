import Hero from "../components/hero/Hero";
import Journey from "../components/journey/Journey";
import Gallery from "../components/gallery/Gallery";
import Legacy from "../components/legacy/Legacy";
import Letters from "../components/letters/Letters";
import Community from "../components/community/Community";
import Footer from "../components/footer/Footer";
import Intro from "../components/intro/Intro";

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Journey />
      <Gallery />
      <Legacy />
      <Letters />
      <Community />
      <Footer />
    </>
  );
};

export default Home;