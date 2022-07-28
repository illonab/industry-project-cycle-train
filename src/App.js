import axios from "axios";
import "./App.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
