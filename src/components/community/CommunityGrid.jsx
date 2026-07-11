import CommunityCard from "./CommunityCard";

const CommunityGrid = ({ members }) => {
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