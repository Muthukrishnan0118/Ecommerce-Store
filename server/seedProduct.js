require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

const products = [
  {
    name: "iPhone 15 Pro",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
    brand: "Apple",
    category: "Smartphone",
    description: "Latest Apple flagship smartphone.",
    price: 129999,
    countInStock: 15,
    rating: 4.8,
  },
  {
    name: "Samsung Galaxy S25",
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
    brand: "Samsung",
    category: "Smartphone",
    description: "Premium Android smartphone.",
    price: 99999,
    countInStock: 20,
    rating: 4.7,
  },
  {
    name: "MacBook Air M4",
    image:
      "https://cdn2.vox-cdn.com/uploads/chorus_asset/file/7390261/vpavic_161031_1256_0264.0.jpg",
    brand: "Apple",
    category: "Laptop",
    description: "Lightweight laptop with M4 chip.",
    price: 149999,
    countInStock: 10,
    rating: 4.9,
  },
  {
    name: "Dell XPS 15",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    brand: "Dell",
    category: "Laptop",
    description: "Powerful laptop for professionals.",
    price: 119999,
    countInStock: 8,
    rating: 4.6,
  },
  {
    name: "Sony WH-1000XM5",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    brand: "Sony",
    category: "Headphones",
    description: "Industry-leading noise cancellation.",
    price: 29999,
    countInStock: 30,
    rating: 4.8,
  },
  {
    name: "AirPods Pro 2",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46",
    brand: "Apple",
    category: "Earbuds",
    description: "Premium wireless earbuds.",
    price: 24999,
    countInStock: 25,
    rating: 4.7,
  },
  {
    name: "Apple Watch Series 10",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d",
    brand: "Apple",
    category: "Wearable",
    description: "Advanced smartwatch with health tracking.",
    price: 45999,
    countInStock: 25,
    rating: 4.7,
  },
  {
    name: "Samsung Galaxy Watch 7",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    brand: "Samsung",
    category: "Wearable",
    description: "Smartwatch with fitness tracking.",
    price: 32999,
    countInStock: 20,
    rating: 4.5,
  },
  {
    name: "iPad Air",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
    brand: "Apple",
    category: "Tablet",
    description: "Powerful tablet for work and creativity.",
    price: 69999,
    countInStock: 18,
    rating: 4.8,
  },
  {
    name: "Amazon Kindle Paperwhite",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136",
    brand: "Amazon",
    category: "E-Reader",
    description: "Read books anywhere.",
    price: 14999,
    countInStock: 40,
    rating: 4.6,
  },
  {
    name: "Canon EOS R10",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    brand: "Canon",
    category: "Camera",
    description: "Mirrorless camera for creators.",
    price: 89999,
    countInStock: 12,
    rating: 4.7,
  },
  {
    name: "PlayStation 5",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    brand: "Sony",
    category: "Gaming",
    description: "Next-generation gaming console.",
    price: 54999,
    countInStock: 14,
    rating: 4.9,
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("Connected to:", mongoose.connection.db.databaseName);

    await Product.deleteMany();

    const result = await Product.insertMany(products);

    console.log("Inserted:", result.length);

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
