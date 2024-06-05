import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Attrazioni from "./pages/Attrazioni.jsx";
import './index.css'
import './Global.css'
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact  />} />
          <Route path="/attrazioni" element={<Attrazioni />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
