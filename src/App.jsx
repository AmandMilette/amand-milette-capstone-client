import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
<<<<<<< HEAD

=======
import ServicesPage from "./pages/ServicesPage/ServicesPage";
>>>>>>> c56f9c2a0c38f3ca8172ba156d74405bd49f6277
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

<<<<<<< HEAD
            <Route path="/bookings/add" element={<AddBookingsPage />} />
=======
            <Route path="/services/book" element={<AddBookingsPage />} />
>>>>>>> c56f9c2a0c38f3ca8172ba156d74405bd49f6277
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
