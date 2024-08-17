import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Integrations from "./pages/Integrations";
import "./App.css";

function App() {
  return (
    <Router className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/integrations" element={<Integrations />} />
        </Routes>
      
    </Router>
  );
}

export default App;
