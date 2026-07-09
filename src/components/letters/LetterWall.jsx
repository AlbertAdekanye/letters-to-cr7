import LetterCard from "./LetterCard";

const letters = [
  {
    id: 1,
    country: "🇳🇬 Nigeria",
    message:
      "Thank you for teaching me that discipline beats talent when talent refuses to work.",
  },
  {
    id: 2,
    country: "🇵🇹 Portugal",
    message:
      "You made an entire nation believe that impossible dreams can come true.",
  },
  {
    id: 3,
    country: "🇧🇷 Brazil",
    message:
      "Football will remember your goals, but we will remember your mentality.",
  },
];

const LetterWall = () => {
  return (
    <>
      <h3 className="mb-12 text-center text-4xl font-bold text-white">
        Voices From Around the World
      </h3>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {letters.map((letter) => (
          <LetterCard
            key={letter.id}
            {...letter}
          />
        ))}
      </div>
    </>
  );
};

export default LetterWall;