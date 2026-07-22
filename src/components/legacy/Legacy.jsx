import StatCard from "./StatCard";
import stats from "../../data/legacyData";

const Legacy = () => {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      {/* Golden Glow */}
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Heading */}
        <div className="mb-24 w-full max-w-4xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[10px] text-yellow-500">
            Legacy
          </p>

          <h2 className="text-5xl font-black leading-tight text-white md:text-7xl">
            More Than
            <br />
            Numbers
          </h2>

          <div className="mx-auto my-8 h-[2px] w-28 bg-yellow-500" />

          <p className="mx-auto max-w-3xl text-lg leading-9 text-gray-400">
            Behind every record is a lifetime of discipline,
            sacrifice, resilience, and an unwavering desire to
            become better every single day.
          </p>
        </div>

        {/* Stats */}
        <div className="grid w-full max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-3">
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