const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:5000";

const ADMIN_API = `${API_BASE_URL}/api/v1/admin`;

export const loginAdmin = async (credentials) => {
  const response = await fetch(`${ADMIN_API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Unable to log in."
    );
  }

  return data;
};

export const checkAdmin = async (token) => {
  const response = await fetch(`${ADMIN_API}/check`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Session expired."
    );
  }

  return data.data.admin;
};

export const deleteLetter = async (id) => {
  const token = localStorage.getItem("cr7_admin_token");

  if (!token) {
    throw new Error("You are not logged in.");
  }

  const response = await fetch(
    `${API_BASE_URL}/api/v1/letters/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    let message = "Unable to delete letter.";

    try {
      const data = await response.json();
      message = data.message || message;
    } catch {
      // Response may not contain JSON
    }

    throw new Error(message);
  }

  return true;
};