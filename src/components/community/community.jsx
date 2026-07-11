import CommunityHeader from "./CommunityHeader";
import CommunityGrid from "./CommunityGrid";

const Community = ({ letters }) => {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <CommunityHeader />

        <div className="mt-16">
          <CommunityGrid members={letters.slice(0, 6)} />
        </div>
      </div>
    </section>
  );
};

export default Community;