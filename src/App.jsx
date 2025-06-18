import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import AddBookingsPage from "./pages/AddBookingsPage/AddBookingsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import "../src/App.scss";
import ServicesPage from "./pages/ServicesPage/ServicesPage";

function App() {
  return (
    <>
      <Router>
        <div className="main__container">
          <NavBar />
          <Routes>
            <Route path="/" element={<Navigate to="/services" />} />
            <Route path="/services" element={<ServicesPage />} />

            <Route path="/bookings/add" element={<AddBookingsPage />} />
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
