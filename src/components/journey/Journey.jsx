import Chapter from "./Chapter";
import chapters from "../../data/chapters";

const Journey = () => {
  return (
    <>
      {chapters.map((chapter) => (
        <Chapter key={chapter.id} {...chapter} />
      ))}
    </>
  );
};

export default Journey