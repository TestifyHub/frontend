import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Toast.css";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/Header";
import LoHeader from "./components/LoHeader";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Integrations from "./pages/Integrations";
import AOS from "aos";
import "aos/dist/aos.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-sine",
    });
  }, []);

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

          if (response.ok && data.valid) {
            setAuth(true);
          } else {
            setAuth(false);
           
          }
        } catch (error) {
          setAuth(false);
         
        }
      } else {
        setAuth(false);
      }
    };

    checkAuth();
  }, [navigate]);

  return (
    
      <>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
        
        <div className="flex flex-col min-h-screen overflow-hidden">
          
          {auth ? <LoHeader /> : <Header />}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <Footer />
          </div>
        </div>
      </>
    
  );
}

export default App;
