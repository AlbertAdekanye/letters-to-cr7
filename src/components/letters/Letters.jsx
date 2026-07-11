import LetterCounter from "./LetterCounter";
import LetterForm from "./LetterForm";
import LetterWall from "./LetterWall";

const Letters = ({ letters, onAddLetter }) => {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}\
        <div className="mb-20 text-center">
          <p className="mb-4 uppercase tracking-[8px] text-yellow-500">
            Letters
          </p>

          <h2 className="text-4xl font-black text-white md:text-6xl">
            Dear Cristiano
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Millions watched you play.
            Millions celebrated your victories.
            Millions cried after your defeats.
            If you could send Cristiano Ronaldo one message,
            what would you say?
          </p>
        </div>

        {/* Counter */}
        <LetterCounter count={letters.length} />

        {/* Form */}
        <div className="mt-16">
          <LetterForm onAddLetter={onAddLetter} />
        </div>

        {/* Letters */}
        <div className="mt-24">
          <LetterWall letters={letters} />
        </div>
      </div>
    </section>
  );
};

export default Letters;