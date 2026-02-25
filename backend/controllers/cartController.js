import Cart from "../models/cart.js";

// @desc    Get user cart
// @route   GET /api/cart
export const getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    return res.json({ items: [] });
  }

  res.json(cart);
};

// @desc    Add item to cart
// @route   POST /api/cart
export const addToCart = async (req, res) => {
  const { productId, name, price, quantity } = req.body;

  let cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    cart = await Cart.create({
      user: req.user._id,
      items: [],
    });
  }

  const itemExists = cart.items.find(
    (item) => item.productId.toString() === productId
  );

  if (itemExists) {
    itemExists.quantity += quantity;
  } else {
    cart.items.push({ productId, name, price, quantity });
  }

  await cart.save();

  res.status(201).json(cart);
};

// @desc    Remove item
// @route   DELETE /api/cart/:id
export const removeFromCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    return res.status(404).json({ message: "Cart not found" });
  }

  cart.items = cart.items.filter(
    (item) => item._id.toString() !== req.params.id
  );

  await cart.save();

  res.json(cart);
};

// @desc    Update cart item quantity
// @route   PUT /api/cart/:id
export const updateCartItem = async (req, res) => {
  const { quantity } = req.body;

  const cart = await Cart.findOne({ user: req.user._id });

  if (!cart) {
    return res.status(404).json({ message: "Cart not found" });
  }

  const item = cart.items.find(
    (item) => item._id.toString() === req.params.id
  );

  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }

  if (quantity <= 0) {
    cart.items = cart.items.filter(
      (item) => item._id.toString() !== req.params.id
    );
  } else {
    item.quantity = quantity;
  }

  await cart.save();

  res.json(cart);
};