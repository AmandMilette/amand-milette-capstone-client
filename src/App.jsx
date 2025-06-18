import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import AddBookingsPage from "./pages/AddBookingsPage/AddBookingsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import "../src/App.scss";

function App() {
  return (
    <>
      <Router>
        <div className="main__container">
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate to="/services" />} />
            <Route path="/services" element={<ServicesPage />} />

            <Route path="/services/book" element={<AddBookingsPage />} />
            <Route path="/about" element={<AboutPage />} />

            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
