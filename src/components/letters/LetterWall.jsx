import LetterCard from "./LetterCard";

const LetterWall = ({ letters }) => {
  if (letters.length === 0) {
    return (
      <section className="mt-24">
        <div className="text-center">
          <p className="uppercase tracking-[8px] text-yellow-500">
            Community
          </p>

          <h2 className="mt-4 text-4xl font-black text-white">
            Voices From Around The World
          </h2>
        </div>

        <div className="mt-12 rounded-3xl border border-dashed border-white/10 bg-zinc-900 p-12 text-center">
          <div className="mb-6 text-6xl">💌</div>

          <h3 className="text-3xl font-bold text-white">
            No Letters Yet
          </h3>

          <p className="mx-auto mt-4 max-w-lg text-gray-400">
            Be the first fan to leave a message for Cristiano Ronaldo.
            Your words could inspire thousands of people around the world.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-24">
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
          <LetterCard key={letter.id} letter={letter} />
        ))}
      </div>
    </section>
  );
};

export default LetterWall;