import LetterCard from "./LetterCard";

const LetterWall = ({ letters }) => {
  return (
    <section>
      <div className="mb-12 text-center">

        <p className="uppercase tracking-[8px] text-yellow-500">
          Community
        </p>

        <h2 className="mt-4 text-4xl font-black text-white">
          Voices From Around The World
        </h2>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {letters.map((letter) => (
          <LetterCard
            key={letter.id}
            letter={letter}
          />
        ))}
      </div>
    </section>
  );
};

export default LetterWall;