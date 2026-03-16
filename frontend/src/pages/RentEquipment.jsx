import { useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";

const RentEquipment = () => {

  const { id } = useParams();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleRental = async () => {

    await API.post("/rentals", {
      equipmentId: id,
      startDate,
      endDate
    });

    alert("Rental booked successfully!");

  };

  return (
    <div className="min-h-screen bg-white py-24 px-6">

      <div className="max-w-xl mx-auto bg-gray-50 p-10 rounded-2xl shadow">

        <h1 className="text-3xl font-bold text-primary mb-8">
          Rent Equipment
        </h1>

        <label className="block mb-2">
          Start Date
        </label>

        <input
          type="date"
          className="border p-3 w-full mb-6"
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label className="block mb-2">
          End Date
        </label>

        <input
          type="date"
          className="border p-3 w-full mb-6"
          onChange={(e) => setEndDate(e.target.value)}
        />

        <button
          onClick={handleRental}
          className="bg-primary text-white px-6 py-3 rounded-xl w-full"
        >
          Confirm Rental
        </button>

      </div>

    </div>
  );
};

export default RentEquipment;