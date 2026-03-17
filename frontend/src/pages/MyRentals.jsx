import { useEffect, useState } from "react";
import API from "../api/axios";

const MyRentals = () => {

  const [rentals, setRentals] = useState([]);

  const fetchMyRentals = async () => {
    try {
      const { data } = await API.get("/rentals/my");
      setRentals(data);
    } catch (error) {
      console.log(error.response?.data);
    }
  };

  useEffect(() => {
    fetchMyRentals();
  }, []);

  return (
    <div className="min-h-screen bg-white py-24 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-primary mb-10">
          🚜 My Rentals
        </h1>

        {rentals.length === 0 ? (
          <p className="text-gray-500">No rentals yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">

            {rentals.map((r) => (

              <div
                key={r._id}
                className="bg-gray-50 p-6 rounded-2xl shadow"
              >

                <img
                  src={r.equipment?.image}
                  alt={r.equipment?.name}
                  className="h-40 mx-auto object-contain"
                />

                <h3 className="text-xl font-semibold mt-4">
                  {r.equipment?.name}
                </h3>

                <p className="text-gray-600 mt-2">
                  ₹{r.equipment?.pricePerDay} / day
                </p>

                <p className="mt-3">
                  📅 {r.startDate?.slice(0,10)} → {r.endDate?.slice(0,10)}
                </p>

                <p className={`mt-2 font-semibold ${
                  r.status === "approved"
                    ? "text-green-600"
                    : r.status === "completed"
                    ? "text-blue-600"
                    : "text-yellow-600"
                }`}>
                  Status: {r.status}
                </p>

              </div>

            ))}

          </div>
        )}

      </div>

    </div>
  );
};

export default MyRentals;