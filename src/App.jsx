import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import Features from "./pages/Features";
import Integrations from "./pages/Integrations";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/integrations" element={<Integrations />} />
          </Routes>
        </main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Footer />
          </div>
       
      </div>
    </Router>
  );
}

export default App;
