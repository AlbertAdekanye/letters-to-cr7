import GalleryCard from "./GalleryCard";
import moments from "../../data/galleryData";

const Gallery = () => {
  return (
    <section className="bg-black py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-24 text-center">

          <p className="mb-4 uppercase tracking-[10px] text-yellow-500">
            Moments
          </p>

          <h2 className="text-5xl font-black text-white md:text-7xl">
            Moments That Defined Greatness
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Some victories fade with time.
            Some memories grow stronger with every generation.
            These are the moments that shaped a legacy.
          </p>

        </div>

        <div className="space-y-40">

          {moments.map((moment, index) => (
            <GalleryCard
              key={moment.id}
              {...moment}
              reverse={index % 2 !== 0}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Gallery;