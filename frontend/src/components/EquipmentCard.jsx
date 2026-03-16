import { useNavigate } from "react-router-dom";

const EquipmentCard = ({ equipment }) => {

  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl">

      <img
        src={equipment.image}
        alt={equipment.name}
        className="h-48 mx-auto object-contain"
      />

      <h3 className="text-xl font-semibold mt-4">
        {equipment.name}
      </h3>

      <p className="text-gray-600 mt-2">
        {equipment.description}
      </p>

      <p className="text-primary font-bold mt-3">
        ₹{equipment.pricePerDay} / day
      </p>

      <button
        onClick={() => navigate(`/rent/${equipment._id}`)}
        className="mt-4 bg-primary text-white px-6 py-2 rounded-xl"
      >
        Rent Now
      </button>

    </div>
  );
};

export default EquipmentCard;