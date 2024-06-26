import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";

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
          
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
