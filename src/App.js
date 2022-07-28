import "./App.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Results from "./components/Results/Results";
import Navigation from "./components/Navigation/Navigation";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
