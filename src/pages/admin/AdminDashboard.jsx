const AdminDashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("cr7_admin_token");
    window.location.href = "/admin/login";
  };

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[6px] text-yellow-500">
              Admin
            </p>

            <h1 className="mt-3 text-4xl font-black">
              Letters to CR7 Dashboard
            </h1>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-full border border-white/10 px-6 py-3 text-sm text-gray-300 transition hover:border-yellow-500 hover:text-yellow-500"
          >
            Logout
          </button>
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;