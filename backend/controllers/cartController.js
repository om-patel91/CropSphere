import Cart from "../models/cart.js";
import Product from "../models/product.js"

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
  try {
    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    let cart = await Cart.findOne({ user: req.user._id });

    if (!cart) {
      cart = await Cart.create({
        user: req.user._id,
        items: [],
      });
    }

    const existingItem = cart.items.find(
      (item) => item.product.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        product: productId,
        quantity,
      });
    }

    await cart.save();

    res.status(200).json(cart);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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