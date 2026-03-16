import { useEffect, useState } from "react";
import API from "../api/axios";
import EquipmentCard from "../components/EquipmentCard";

const Equipments = () => {

  const [equipments, setEquipments] = useState([]);

  useEffect(() => {

    const fetchEquipments = async () => {
      const { data } = await API.get("/equipments");
      setEquipments(data);
    };

    fetchEquipments();

  }, []);

  return (
    <div className="min-h-screen bg-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-primary mb-12">
          🚜 Equipment Rentals
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {equipments.map((equipment) => (
            <EquipmentCard key={equipment._id} equipment={equipment} />
          ))}

        </div>

      </div>

    </div>
  );
};

export default Equipments;