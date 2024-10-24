import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { lazy } from "react";

//my components
import NavBar from "./components/NavBar";

//my pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services" element={<Services />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
