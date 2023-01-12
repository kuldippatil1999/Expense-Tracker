const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/expensesTrackerApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected with mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.json());

const ProductSchema = new mongoose.Schema({
    title: {
    type: String,
    // required: [true, "Please Enter Expenses"],
  },
  amount: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Create Product 
const Product = new mongoose.model("Product", ProductSchema);

app.post("/api/v1/product/new", async (req, res) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
});

// Read Product

app.get("/api/v1/products",async(req,res)=>{
    const products=await Product.find();
    res.status(200).json(
      products
    
        
   )
})

//  Delete Product

app.delete("/api/v1/product/:id",async(req,res)=>{
    const product=await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            massage:"product not found"
        })
    }

    await product.remove();
    res.status(200).json({
        success:true,
        massage:"product is deleted successfully"
    })
})

app.listen(4500, () => {
    console.log("Server is Working http://localhost:4500");
  });