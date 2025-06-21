import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PriceList from "./pages/PriceList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price-list" element={<PriceList />} />
      </Routes>
    </Router>
  );
}

export default App;
