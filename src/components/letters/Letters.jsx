import LetterForm from "./LetterForm";
import LetterWall from "./LetterWall";

const Letters = () => {
  return (
    <section className="bg-black py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="mb-24 text-center">

          <p className="mb-4 uppercase tracking-[10px] text-yellow-500">
            Letters
          </p>

          <h2 className="text-5xl font-black text-white md:text-7xl">
            A Letter To Cristiano
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Every football fan carries a memory.
            Every supporter has words they never had the chance to say.
            If you could send Cristiano Ronaldo one letter, what would you write?
          </p>

        </div>

        <LetterForm />

        <div className="mt-32">
          <LetterWall />
        </div>

      </div>
    </section>
  );
};

export default Letters;