import LetterCard from "./LetterCard";

const LetterWall = ({ letters }) => {
  return (
    <section className="mt-24">
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="uppercase tracking-[8px] text-yellow-500">
          Letter Wall
        </p>

        <h2 className="mt-4 text-4xl font-black text-white">
          Messages From Fans Around the World
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          Every message shared here is a tribute from fans whose lives have been
          inspired by Cristiano Ronaldo.
        </p>
      </div>

      {letters.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-white/10 bg-zinc-900 px-8 py-16 text-center md:px-12">
          <div className="mb-6 text-6xl">💌</div>

          <h3 className="text-3xl font-bold text-white">
            Your Letter Could Be The First
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-400">
            Every great story begins with a single voice. Be the first fan to
            leave a heartfelt message for Cristiano Ronaldo and start this wall
            of appreciation.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {letters.map((letter) => (
            <LetterCard
              key={letter.id}
              letter={letter}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default LetterWall;