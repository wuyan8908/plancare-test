import React, { useEffect, useState } from "react";
import axios from "axios";

const CarsTable = () => {
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchCars = async (make: string = "") => {
    try {
      const response = await axios.get(
        `http://localhost:5128/api/cars${make ? `?make=${make}` : ""}`
      );
      setCars(response.data);
    } catch (error) {
      console.error("Error fetching cars:", error);
    }
  };

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    console.log("searchQuery", searchQuery);
    setSearchQuery(query);
    await fetchCars(query);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold mb-4">Cars List</h1>
        <input
          type="text"
          placeholder="Search by make"
          value={searchQuery}
          onChange={handleSearch}
          className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-500"
        />
      </div>
      <table className="min-w-full border border-gray-300 rounded-md shadow-lg text-center">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Make</th>
            <th className="py-2 px-4 border-b">Model</th>
            <th className="py-2 px-4 border-b">Registration Expiry</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{car.id}</td>
              <td className="py-2 px-4 border-b">{car.make}</td>
              <td className="py-2 px-4 border-b">{car.model}</td>
              <td className="py-2 px-4 border-b">
                {new Date(car.registrationExpiry).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CarsTable;
