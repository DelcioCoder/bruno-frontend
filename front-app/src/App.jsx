import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//my components
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
