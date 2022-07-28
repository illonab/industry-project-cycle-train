import axios from "axios";
import "./App.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
