import Chapter from "./Chapter";
import chapters from "../../data/chapters";

const Journey = () => {
  return (
    <section id="journey">
      {chapters.map((chapter) => (
        <Chapter
          key={chapter.id}
          {...chapter}
        />
      ))}
    </section>
  );
};

export default Journey;