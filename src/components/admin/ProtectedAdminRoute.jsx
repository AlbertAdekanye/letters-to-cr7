import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { checkAdmin } from "../../services/adminService";

const ProtectedAdminRoute = ({ children }) => {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const verifyAdmin = async () => {
      const token = localStorage.getItem(
        "cr7_admin_token"
      );

      if (!token) {
        setStatus("unauthorized");
        return;
      }

      try {
        await checkAdmin(token);
        setStatus("authorized");
      } catch {
        localStorage.removeItem(
          "cr7_admin_token"
        );

        setStatus("unauthorized");
      }
    };

    verifyAdmin();
  }, []);

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-yellow-500 border-t-transparent" />
      </div>
    );
  }

  if (status === "unauthorized") {
    return (
      <Navigate
        to="/admin/login"
        replace
      />
    );
  }

  return children;
};

export default ProtectedAdminRoute;