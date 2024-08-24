import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("jwt");
      if (token) {
        try {
          const response = await fetch("/api/verify-token", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await response.json();

          if (!response.ok || !data.valid) {
            localStorage.removeItem("jwt");
            navigate("/signin");
          } else {
            setLoading(false);
          }
        } catch (error) {
          localStorage.removeItem("jwt");
          navigate("/signin");
        }
      } else {
        navigate("/signin");
      }
    };

    checkAuth();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>; // Or any loading indicator you prefer
  }

  return children;
};

export default ProtectedRoute;
