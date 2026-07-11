import CommunityHeader from "./CommunityHeader";
import CommunityGrid from "./CommunityGrid";

const members = [
  {
    id: 1,
    name: "Albert",
    country: "🇳🇬 Nigeria",
    favoriteMoment: "The Bicycle Kick",
    message:
      "Ronaldo taught me that discipline and consistency can change your life.",
  },
  {
    id: 2,
    name: "Miguel",
    country: "🇵🇹 Portugal",
    favoriteMoment: "Euro 2016",
    message:
      "Watching him lift Portugal's first major trophy is something I'll never forget.",
  },
  {
    id: 3,
    name: "Lucas",
    country: "🇧🇷 Brazil",
    favoriteMoment: "La Décima",
    message:
      "His hunger to win inspired me to always push beyond my limits.",
  },
  {
    id: 4,
    name: "Emma",
    country: "🇬🇧 United Kingdom",
    favoriteMoment: "Manchester United Debut",
    message:
      "From his first match, I knew football was witnessing something special.",
  },
  {
    id: 5,
    name: "Aarav",
    country: "🇮🇳 India",
    favoriteMoment: "SIIUU Celebration",
    message:
      "Every goal celebration reminds me to enjoy success after hard work.",
  },
  {
    id: 6,
    name: "Sofia",
    country: "🇪🇸 Spain",
    favoriteMoment: "450 Real Madrid Goals",
    message:
      "Records may be broken one day, but the inspiration he gave millions will last forever.",
  },
];

const Community = () => {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <CommunityHeader />
        <CommunityGrid members={members} />
      </div>
    </section>
  );
};

export default Community;