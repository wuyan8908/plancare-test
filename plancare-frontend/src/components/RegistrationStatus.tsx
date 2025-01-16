import React, { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";

const RegistrationStatus: React.FC = () => {
  const [statuses, setStatuses] = useState<any[]>([]);

  useEffect(() => {
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("http://localhost:5128/carhub") // Backend SignalR hub
      .withAutomaticReconnect()
      .build();

    connection
      .start()
      .then(() => console.log("Connected to SignalR Hub"))
      .catch((error) => console.error("Error connecting to SignalR:", error));

    connection.on("ReceiveCarStatuses", (data: any) => {
      setStatuses(data);
    });

    return () => {
      connection.stop();
    };
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Car Registration Status</h1>
      <table className="min-w-full border border-gray-300 rounded-md shadow-lg text-center">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Make</th>
            <th className="py-2 px-4 border-b">Model</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {statuses.map((status) => (
            <tr key={status.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{status.id}</td>
              <td className="py-2 px-4 border-b">{status.make}</td>
              <td className="py-2 px-4 border-b">{status.model}</td>
              <td
                className={`py-2 px-4 border-b ${
                  status.isExpired ? "text-red-500" : "text-green-500"
                }`}
              >
                {status.isExpired ? "Expired" : "Valid"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegistrationStatus;
