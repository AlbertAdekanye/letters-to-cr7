const API_URL = "http://localhost:5000/api/v1/letters";

export const getLetters = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch letters.");
  }

  const data = await response.json();

  return data.data.letters;
};

export const createLetter = async (letter) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(letter),
  });

  if (!response.ok) {
    throw new Error("Failed to send letter.");
  }

  const data = await response.json();

  return data.data.letter;
};

export const likeLetter = async (id) => {
  const response = await fetch(
    `http://localhost:5000/api/v1/letters/${id}/like`,
    {
      method: "PATCH",
    }
  );

  if (!response.ok) {
    throw new Error("Unable to like letter.");
  }

  const data = await response.json();

  return data.data;
};