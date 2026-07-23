import { useState, useEffect } from "react";
import LetterCard from "./LetterCard";
import LetterStats from "./LetterStats";

const LETTERS_PER_PAGE = 9;

const LetterWall = ({ letters, onLikeLetter }) => {
  const [visibleLetters, setVisibleLetters] =
    useState(LETTERS_PER_PAGE);

  useEffect(() => {
    setVisibleLetters(LETTERS_PER_PAGE);
  }, [letters]);

  const displayedLetters = letters.slice(
    0,
    visibleLetters
  );

  const totalLikes = letters.reduce(
    (total, letter) => total + (letter.likes || 0),
    0
  );

  const totalCountries = new Set(
    letters.map((letter) => letter.country)
  ).size;

  const showing = displayedLetters.length;

  return (
    <section
      id="letter-wall"
      className="w-full"
    >
      {/* Header */}
      <div className="mb-16 flex flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-[10px] text-yellow-500">
          Letter Wall
        </p>

        <h2 className="mt-5 text-5xl font-black text-white md:text-6xl">
          Messages From
          <br />
          Around The World
        </h2>

        <div className="my-8 h-[2px] w-24 bg-yellow-500" />

        <div className="max-w-3xl">
          <p className="text-center text-lg leading-9 text-gray-400">
            Every message shared here is a tribute from fans whose
            lives have been inspired by Cristiano Ronaldo.
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="mb-20">
        <LetterStats
          totalLetters={letters.length}
          totalLikes={totalLikes}
          totalCountries={totalCountries}
          showing={showing}
        />
      </div>

      {/* Letters */}
      {letters.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-white/10 bg-zinc-900 px-8 py-16 text-center md:px-12">
          <div className="mb-6 text-6xl">💌</div>

          <h3 className="text-3xl font-bold text-white">
            Your Letter Could Be The First
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-400">
            Every great story begins with a single voice.
            Be the first fan to leave a heartfelt message
            for Cristiano Ronaldo and start this wall of
            appreciation.
          </p>
        </div>
      ) : (
        <>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {displayedLetters.map((letter) => (
              <LetterCard
                key={letter._id}
                letter={letter}
                onLike={onLikeLetter}
              />
            ))}
          </div>

          {visibleLetters < letters.length && (
            <div className="mt-20 flex justify-center">
              <button
                onClick={() =>
                  setVisibleLetters(
                    (prev) => prev + LETTERS_PER_PAGE
                  )
                }
                className="rounded-full bg-yellow-500 px-8 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-400"
              >
                Load More Letters
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default LetterWall;