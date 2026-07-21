import GalleryCard from "./GalleryCard";
import moments from "../../data/galleryData";

const Gallery = () => {
  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />

      {/* Golden Glow */}
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-24 max-w-4xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[10px] text-yellow-500">
            Moments
          </p>

          <h2 className="text-5xl font-black text-white md:text-7xl">
            Moments That
            <br />
            Defined Greatness
          </h2>

          <div className="mx-auto my-8 h-[2px] w-28 bg-yellow-500" />

          <p className="mx-auto max-w-3xl text-lg leading-9 text-gray-400">
            Some victories fade with time.
            Some memories grow stronger with every generation.
            These are the moments that shaped a legacy.
          </p>
        </div>

        {/* Gallery */}
        <div className="space-y-28">
          {moments.map((moment) => (
            <GalleryCard
              key={moment.id}
              {...moment}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;