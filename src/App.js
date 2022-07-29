import "./App.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";
import Navigation from "./components/Navigation/Navigation";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./components/Navigation/Header/Header";
import Success from "./pages/Success/Success";
import { Link, routerProps } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
}

export default App;
