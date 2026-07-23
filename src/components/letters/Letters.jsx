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
      <section className="relative overflow-hidden bg-black py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center">
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
      <section className="relative overflow-hidden bg-black py-28">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <div className="mb-6 text-6xl">⚠️</div>

          <h2 className="text-3xl font-bold text-white">
            Unable to Load Letters
          </h2>

          <p className="mt-4 text-gray-400">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      {/* Golden Glow */}
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Header */}
        <div className="mb-24 w-full max-w-4xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[10px] text-yellow-500">
            Community
          </p>

          <h2 className="text-5xl font-black leading-tight text-white md:text-7xl">
            Letters To
            <br />
            Cristiano Ronaldo
          </h2>

          <div className="mx-auto my-8 h-[2px] w-28 bg-yellow-500" />

          <p className="mx-auto max-w-3xl text-lg leading-9 text-gray-400">
            Football gave us unforgettable memories.
            This is your chance to give something back.
            Leave a message for the man who inspired millions.
          </p>
        </div>

        {/* Form */}
        <div className="my-24 w-full max-w-6xl">
          <LetterForm onAddLetter={onAddLetter} />
        </div>

        {/* Letter Wall */}
        <div className="mt-32 w-full max-w-6xl">
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