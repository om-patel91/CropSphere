import RentalBooking from "../models/rentalBooking.js";
import Equipment from "../models/equipment.js";

export const createRental = async (req, res) => {
  try {
    const { equipmentId, startDate, endDate } = req.body;

    const equipment = await Equipment.findById(equipmentId);

    const days =
      (new Date(endDate) - new Date(startDate)) /
      (1000 * 60 * 60 * 24) +
      1;

    const totalPrice = days * equipment.pricePerDay;

    const booking = await RentalBooking.create({
      user: req.user._id,
      equipment: equipmentId,
      startDate,
      endDate,
      totalPrice,
    });

    res.status(201).json(booking);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyRentals = async (req, res) => {
  const rentals = await RentalBooking.find({ user: req.user._id })
    .populate("equipment");

  res.json(rentals);
};

// Get all rentals (admin)
export const getAllRentals = async (req, res) => {
  try {

    const rentals = await RentalBooking.find()
      .populate("user", "name email")
      .populate("equipment", "name");

    res.json(rentals);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Update rental status
export const updateRentalStatus = async (req, res) => {
  try {

    const { status } = req.body;

    const rental = await RentalBooking.findById(req.params.id);

    if (!rental) {
      return res.status(404).json({ message: "Rental not found" });
    }

    rental.status = status;

    await rental.save();

    res.json(rental);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};