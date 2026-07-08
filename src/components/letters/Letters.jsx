import LetterForm from "./LetterForm";
import LetterWall from "./LetterWall";

const Letters = () => {
  return (
    <section className="min-h-screen bg-black py-24">
      <LetterForm />
      <LetterWall />
    </section>
  );
};

export default Letters;