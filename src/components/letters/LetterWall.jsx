import { useState, useEffect } from "react";
import LetterCard from "./LetterCard";
import LetterStats from "./LetterStats";
import FeaturedLetters from "./FeaturedLetters";

const LETTERS_PER_PAGE = 9;

const LetterWall = ({
  letters,
  onLikeLetter,
}) => {
  const [visibleLetters, setVisibleLetters] =
    useState(LETTERS_PER_PAGE);

  const [search, setSearch] = useState("");

  const [country, setCountry] = useState("All");

  // Reset when new letters arrive
  useEffect(() => {
    setVisibleLetters(LETTERS_PER_PAGE);
  }, [letters]);

  // Build country list automatically
  const countries = [
    "All",
    ...new Set(letters.map((letter) => letter.country)),
  ];

  // Filter letters
  const filteredLetters = letters.filter((letter) => {
    const matchesSearch =
      letter.nickname
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      letter.message
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCountry =
      country === "All" ||
      letter.country === country;

    return matchesSearch && matchesCountry;
  });

  const displayedLetters = filteredLetters.slice(
    0,
    visibleLetters
  );

  // Statistics
  const totalLikes = letters.reduce(
    (total, letter) => total + (letter.likes || 0),
    0
  );

  const totalCountries = new Set(
    letters.map((letter) => letter.country)
  ).size;

  const showing = displayedLetters.length;

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
          Every message shared here is a tribute from fans whose
          lives have been inspired by Cristiano Ronaldo.
        </p>
      </div>

      {/* Live Statistics */}
      <LetterStats
        totalLetters={letters.length}
        totalLikes={totalLikes}
        totalCountries={totalCountries}
        showing={showing}
      />

      {/* Featured Letters */}
      <FeaturedLetters letters={letters} />

      {/* Search & Filter */}
      <div className="mb-16 grid gap-6 md:grid-cols-2">
        {/* Search */}
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="🔍 Search by name or message..."
          className="w-full rounded-2xl border border-white/10 bg-zinc-900 px-6 py-4 text-white placeholder:text-gray-500 focus:border-yellow-500 focus:outline-none"
        />

        {/* Country Filter */}
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full rounded-2xl border border-white/10 bg-zinc-900 px-6 py-4 text-white focus:border-yellow-500 focus:outline-none"
        >
          {countries.map((countryName) => (
            <option
              key={countryName}
              value={countryName}
            >
              {countryName}
            </option>
          ))}
        </select>
      </div>

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
      ) : displayedLetters.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-white/10 bg-zinc-900 px-8 py-16 text-center md:px-12">
          <div className="mb-6 text-6xl">🔍</div>

          <h3 className="text-3xl font-bold text-white">
            No Matching Letters
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-400">
            We couldn't find any letters matching your search
            or selected country. Try different keywords or
            clear the filters.
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

          {visibleLetters < filteredLetters.length && (
            <div className="mt-16 flex justify-center">
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