import LetterCounter from "./LetterCounter";
import LetterForm from "./LetterForm";
import LetterWall from "./LetterWall";

const Letters = ({
  letters,
  onAddLetter,
  onLikeLetter,
  loading,
  error,
}) => {
  if (loading) {
    return (
      <section className="bg-black py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mx-auto mb-8 h-12 w-12 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent" />

          <h2 className="text-3xl font-bold text-white">
            Loading Letters...
          </h2>

          <p className="mt-4 text-gray-400">
            Fetching messages from Ronaldo fans around the world...
          </p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-black py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mb-6 text-6xl">
            ⚠️
          </div>

          <h2 className="text-3xl font-bold text-white">
            Unable to Load Letters
          </h2>

          <p className="mt-4 text-gray-400">
            {error}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
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

        {/* Letter Wall */}
        <div className="mt-24">
          <LetterWall
            letters={letters}
            onLikeLetter={onLikeLetter}
          />
        </div>

      </div>
    </section>
  );
};

export default Letters;