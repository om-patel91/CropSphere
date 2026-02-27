import mongoose from "mongoose";
import Order from "../models/order.js";
import Cart from "../models/cart.js";


export const createOrder = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.user._id })
      .populate("items.product");

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const orderItems = cart.items.map((item) => ({
      product: item.product._id,   // NOW SAFE
      name: item.product.name,
      price: item.product.price,
      image: item.product.image,
      quantity: item.quantity,
    }));

    const totalAmount = orderItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const order = await Order.create({
      user: req.user._id,
      orderItems,
      totalAmount,
    });

    // Clear cart after order
    cart.items = [];
    await cart.save();
    console.log(cart.items);
    res.status(201).json(order);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyOrders = async (req, res) => {
    const orders = await Order.find({user: req.user._id});
    res.json(orders);
}

export const getAllOrders = async (req, res) => {
    const orders = await Order.find().populate("user","name email");
    res.json(orders);
}