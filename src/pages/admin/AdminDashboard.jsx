import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LogOut,
  Search,
  Trash2,
  Heart,
  Mail,
  Globe2,
} from "lucide-react";

import { getLetters } from "../../services/letterService";
import { deleteLetter } from "../../services/adminService";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [letters, setLetters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    const loadLetters = async () => {
      try {
        setLoading(true);

        const data = await getLetters();

        setLetters(data);
        setError("");
      } catch (err) {
        console.error(err);
        setError("Unable to load letters.");
      } finally {
        setLoading(false);
      }
    };

    loadLetters();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("cr7_admin_token");
    navigate("/admin/login", { replace: true });
  };

  const handleDelete = async (letter) => {
    const confirmed = window.confirm(
      `Delete the letter from ${letter.nickname || "Anonymous Fan"}?`
    );

    if (!confirmed) return;

    try {
      setDeletingId(letter._id);

      await deleteLetter(letter._id);

      setLetters((currentLetters) =>
        currentLetters.filter(
          (currentLetter) =>
            currentLetter._id !== letter._id
        )
      );
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setDeletingId(null);
    }
  };

  const filteredLetters = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return letters;

    return letters.filter((letter) => {
      return (
        letter.nickname?.toLowerCase().includes(query) ||
        letter.country?.toLowerCase().includes(query) ||
        letter.message?.toLowerCase().includes(query)
      );
    });
  }, [letters, search]);

  const totalLikes = letters.reduce(
    (total, letter) => total + (letter.likes || 0),
    0
  );

  const totalCountries = new Set(
    letters
      .map((letter) => letter.country?.trim())
      .filter(Boolean)
  ).size;

  const stats = [
    {
      label: "Total Letters",
      value: letters.length,
      icon: Mail,
    },
    {
      label: "Countries",
      value: totalCountries,
      icon: Globe2,
    },
    {
      label: "Total Likes",
      value: totalLikes,
      icon: Heart,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[6px] text-yellow-500">
              Admin
            </p>

            <h1 className="mt-2 text-2xl font-black sm:text-3xl">
              Letters to CR7
            </h1>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400 transition hover:border-yellow-500/50 hover:text-yellow-500"
          >
            <LogOut size={17} />
            <span className="hidden sm:inline">
              Logout
            </span>
          </button>
        </div>
      </header>

      <div className="mx-auto w-full max-w-7xl px-6 py-10">
        {/* Dashboard title */}
        <div>
          <p className="text-sm text-gray-500">
            Community Management
          </p>

          <h2 className="mt-2 text-3xl font-black md:text-5xl">
            Fan Letters
          </h2>

          <p className="mt-3 max-w-xl text-gray-400">
            Review and manage messages submitted by
            Ronaldo fans around the world.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-zinc-950 p-6"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    {stat.label}
                  </p>

                  <Icon
                    size={20}
                    className="text-yellow-500"
                  />
                </div>

                <p className="mt-5 text-4xl font-black">
                  {loading ? "—" : stat.value}
                </p>
              </div>
            );
          })}
        </div>

        {/* Search */}
        <div className="mt-10 flex items-center rounded-2xl border border-white/10 bg-zinc-950 px-4">
          <Search
            size={20}
            className="shrink-0 text-gray-500"
          />

          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search nickname, country or message..."
            className="w-full bg-transparent px-4 py-4 text-white outline-none placeholder:text-gray-600"
          />
        </div>

        {/* Error */}
        {error && (
          <div className="mt-8 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-red-400">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-24">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent" />
          </div>
        )}

        {/* Letters */}
        {!loading && !error && (
          <div className="mt-8 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Showing {filteredLetters.length} of{" "}
                {letters.length} letters
              </p>
            </div>

            {filteredLetters.map((letter) => (
              <article
                key={letter._id}
                className="rounded-3xl border border-white/10 bg-zinc-950 p-6 transition hover:border-white/20"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-bold text-white">
                        {letter.nickname ||
                          "Anonymous Fan"}
                      </h3>

                      <span className="text-sm text-gray-600">
                        •
                      </span>

                      <span className="text-sm text-gray-400">
                        {letter.country ||
                          "🌍 Somewhere on Earth"}
                      </span>
                    </div>

                    <p className="mt-4 whitespace-pre-wrap leading-7 text-gray-300">
                      {letter.message}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <Heart size={15} />
                        {letter.likes || 0}
                      </span>

                      {letter.createdAt && (
                        <span>
                          {new Date(
                            letter.createdAt
                          ).toLocaleDateString(
                            undefined,
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleDelete(letter)
                    }
                    disabled={
                      deletingId === letter._id
                    }
                    className="flex shrink-0 items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Trash2 size={16} />

                    {deletingId === letter._id
                      ? "Deleting..."
                      : "Delete"}
                  </button>
                </div>
              </article>
            ))}

            {filteredLetters.length === 0 && (
              <div className="rounded-3xl border border-white/10 py-20 text-center">
                <Mail
                  size={32}
                  className="mx-auto text-gray-700"
                />

                <p className="mt-4 text-gray-500">
                  No letters found.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default AdminDashboard;