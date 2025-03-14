import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <div className="main__container">
          <Routes>
            <Route path="/" element={<Navigate to="/warehouses" />} />
            <Route path="/warehouses" element={<>ToDo:EditInventoryPage</>} />
            <Route
              path="/warehouses/:id"
              element={<>ToDo:EditInventoryPage</>}
            />
            <Route
              path="/warehouses/:id/edit"
              element={<>ToDo:EditInventoryPage</>}
            />
            <Route
              path="/warehouses/add"
              element={<>ToDo:EditInventoryPage</>}
            />
            <Route path="/inventory" element={<>ToDo:EditInventoryPage</>} />
            <Route
              path="/inventory/:id"
              element={<>ToDo:EditInventoryPage</>}
            />
            <Route
              path="/inventory/:id/edit"
              element={<>ToDo:EditInventoryPage</>}
            />
            <Route
              path="/inventory/add"
              element={<>ToDo:EditInventoryPage</>}
            />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
