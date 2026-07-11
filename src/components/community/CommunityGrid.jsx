import CommunityCard from "./CommunityCard";

const CommunityGrid = ({ members }) => {
  if (members.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-white/10 py-20 text-center">
        <h3 className="text-2xl font-bold text-white">
          No community messages yet
        </h3>

        <p className="mt-4 text-gray-400">
          Be the first fan to share a message with Cristiano Ronaldo.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {members.map((member) => (
        <CommunityCard
          key={member.id}
          member={member}
        />
      ))}
    </div>
  );
};

export default CommunityGrid;