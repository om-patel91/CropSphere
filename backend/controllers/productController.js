import Product from "../models/product.js"

// @desc   Get All Products
// @route  GET /api/products
export const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
}

// @desc   Get Single Product
// @route  GET /api/products/:id
export const getProductById = async (req,res) =>{
    const product = await Product.findById(req.params.id);
    
    if(product){
        res.json(product);
    }else{
        res.status(404).json({message: "Product not found"});
    }
};

//@desc Create Product(Admin)
//@route POST /api/products
export const createProduct = async (req,res) => {
    const {name, description, price, category, stock, image} = req.body;

    const product = new Product({
        name,
        description,
        price,
        category,
        stock,
        image,
        createdBy: req.user._id,
    })

    const createdProduct = await product.save();

    res.status(201).json(createdProduct);
}

//@desc Update Product(Admin)
//@route PUT /api/products/:id
export const updateProduct = async (req,res) =>{
   const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  product.name = req.body.name || product.name;
  product.description = req.body.description || product.description;
  product.price = req.body.price || product.price;
  product.category = req.body.category || product.category;
  product.stock = req.body.stock || product.stock;
  product.image = req.body.image || product.image;

  const updatedProduct = await product.save();

  res.json(updateProduct);
}

//@desc Delete Product(Admin)
//@route DELETE /api/products/:id
export const deleteProduct = async (req,res) => {
    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(404).json({message: "Product not found"});
    }

    await product.deleteOne();

    res.json({message: "Product removed"});
}
