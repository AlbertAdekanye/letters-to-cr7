export const getLikedLetters = () => {
  const liked = localStorage.getItem("likedLetters");

  return liked ? JSON.parse(liked) : [];
};

export const hasLikedLetter = (id) => {
  return getLikedLetters().includes(id);
};

export const saveLikedLetter = (id) => {
  const liked = getLikedLetters();

  if (!liked.includes(id)) {
    liked.push(id);

    localStorage.setItem(
      "likedLetters",
      JSON.stringify(liked)
    );
  }
};