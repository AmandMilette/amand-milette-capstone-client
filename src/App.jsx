import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <div className="main__container">
          <Routes>
            <Route path="/" element={<Navigate to="/bookings" />} />
            <Route path="/bookings" element={<>ToDo:BookingsPage</>} />
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
        <Footer />
      </Router>
    </>
  );
}

export default App;
