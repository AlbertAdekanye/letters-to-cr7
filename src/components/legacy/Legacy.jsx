import StatCard from "./StatCard";
import stats from "../../data/legacyData";

const Legacy = () => {
  return (
    <section className="bg-black py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-24 text-center">

          <p className="mb-4 uppercase tracking-[10px] text-yellow-500">
            Legacy
          </p>

          <h2 className="text-5xl font-black text-white md:text-7xl">
            More Than Numbers
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Behind every record is a lifetime of discipline,
            sacrifice, resilience, and an unwavering desire to become
            better every single day.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              {...stat}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Legacy;