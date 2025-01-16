import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CarsTable from "./components/CarsTable";
import RegistrationStatus from "./components/RegistrationStatus";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-blue-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between">
            <Link to="/" className="font-bold">
              PlanCare Code Test
            </Link>
            <div>
              <Link to="/" className="mx-2 hover:underline">
                Cars
              </Link>
              <Link to="/registration" className="mx-2 hover:underline">
                Registration Status
              </Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto py-8">
          <Routes>
            <Route path="/" element={<CarsTable />} />
            <Route path="/registration" element={<RegistrationStatus />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
