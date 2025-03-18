import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import BookingsPage from "./pages/BookingsPage/BookingsPage";

import "../src/App.scss";

function App() {
  return (
    <>
      <Router>
        <div className="main__container">
          <Routes>
            <Route path="/" element={<Navigate to="/bookings" />} />
            <Route path="/bookings" element={<BookingsPage />} />
            <Route
              path="/bookings/:id"
              element={<>ToDo:BookingsDetailsPage</>}
            />
            {/* <Route
              path="/bookings/:id/edit"
              element={<>ToDo:EditBookingsPage</>}
            /> nice to have */}
            <Route path="/bookings/add" element={<>ToDo:AddBookingsPage</>} />
            <Route path="/about" element={<>ToDo:AboutPage</>} />

            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
