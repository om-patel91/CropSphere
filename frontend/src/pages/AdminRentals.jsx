import { useEffect, useState } from "react";
import API from "../api/axios";

const AdminRentals = () => {

  const [rentals, setRentals] = useState([]);

  const fetchRentals = async () => {
    const { data } = await API.get("/rentals");
    setRentals(data);
  };

  useEffect(() => {
    fetchRentals();
  }, []);

  const updateStatus = async (id, status) => {

  console.log("Updating rental:", id, status);

  await API.put(`/rentals/${id}/status`, { status });

  fetchRentals();

};

  return (
    <div className="min-h-screen bg-white py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-primary mb-10">
          Rental Management
        </h1>

        <table className="w-full border">

          <thead className="bg-gray-100">

            <tr>
              <th className="p-3">User</th>
              <th>Equipment</th>
              <th>Start</th>
              <th>End</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {rentals.map((r) => (

              <tr key={r._id} className="border-t text-center">

                <td>{r.user?.name}</td>
                <td>{r.equipment?.name}</td>
                <td>{r.startDate?.slice(0,10)}</td>
                <td>{r.endDate?.slice(0,10)}</td>
                <td>{r.status}</td>

                <td className="space-x-2">

                  <button
                    onClick={() => updateStatus(r._id, "approved")}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => updateStatus(r._id, "completed")}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Complete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default AdminRentals;