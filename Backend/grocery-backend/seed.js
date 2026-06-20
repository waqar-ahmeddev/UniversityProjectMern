// // Yeh script ek dafa chalana hai taake Product.jsx ke 8 hardcoded products
// // MongoDB database mein chale jayein. Isse hum frontend ko backend se connect kar sakein.

// require("dotenv").config();
// const mongoose = require("mongoose");
// const Product = require("./models/Product");

// const products = [
//   { name: "Organic Apples", category: "fruits", price: 320, image: "", stock: 50, description: "Fresh organic apples" },
//   { name: "Fresh Spinach", category: "veggies", price: 120, image: "", stock: 40, description: "Fresh organic spinach" },
//   { name: "Whole Milk 1L", category: "dairy", price: 180, image: "", stock: 30, description: "Whole milk 1 litre" },
//   { name: "Ripe Bananas", category: "fruits", price: 150, image: "", stock: 60, description: "Ripe bananas" },
//   { name: "Sourdough Bread", category: "bakery", price: 280, image: "", stock: 20, description: "Organic sourdough bread" },
//   { name: "Avocado", category: "fruits", price: 450, image: "", stock: 25, description: "Organic avocado" },
//   { name: "Cheddar Cheese", category: "dairy", price: 390, image: "", stock: 15, description: "Cheddar cheese block" },
//   { name: "Bell Pepper", category: "veggies", price: 190, image: "", stock: 35, description: "Organic bell pepper" },
// ];

// const seedDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("✅ MongoDB connected, seeding data...");

//     // Pehle purane products clear karo (taake duplicate na banein)
//     await Product.deleteMany({});
//     console.log("🗑️  Purane products delete kar diye");

//     // Naye products add karo
//     const created = await Product.insertMany(products);
//     console.log(`✅ ${created.length} products add ho gaye!`);

//     created.forEach((p) => {
//       console.log(`   - ${p.name} (id: ${p._id})`);
//     });

//     process.exit(0);
//   } catch (error) {
//     console.error("❌ Seeding failed:", error.message);
//     process.exit(1);
//   }
// };

// seedDB();
// Yeh script products ko database mein add karta hai (zyada variety ke saath, search test karne ke liye)

require("dotenv").config();
const mongoose = require("mongoose");
const Product = require("./models/Product");

const products = [
  // Fruits
  { name: "Organic Apples", category: "fruits", price: 320, image: "", stock: 50, description: "Fresh organic apples" },
  { name: "Ripe Bananas", category: "fruits", price: 150, image: "", stock: 60, description: "Ripe bananas" },
  { name: "Avocado", category: "fruits", price: 450, image: "", stock: 25, description: "Organic avocado" },
  { name: "Mango", category: "fruits", price: 280, image: "", stock: 40, description: "Sweet juicy mango" },
  { name: "Strawberries", category: "fruits", price: 350, image: "", stock: 20, description: "Fresh strawberries" },
  { name: "Orange", category: "fruits", price: 200, image: "", stock: 45, description: "Juicy oranges" },

  // Vegetables
  { name: "Fresh Spinach", category: "veggies", price: 120, image: "", stock: 40, description: "Fresh organic spinach" },
  { name: "Bell Pepper", category: "veggies", price: 190, image: "", stock: 35, description: "Organic bell pepper" },
  { name: "Carrot", category: "veggies", price: 100, image: "", stock: 55, description: "Fresh carrots" },
  { name: "Potato", category: "veggies", price: 80, image: "", stock: 100, description: "Farm fresh potatoes" },
  { name: "Tomato", category: "veggies", price: 130, image: "", stock: 60, description: "Ripe tomatoes" },
  { name: "Broccoli", category: "veggies", price: 220, image: "", stock: 30, description: "Fresh broccoli" },

  // Dairy
  { name: "Whole Milk 1L", category: "dairy", price: 180, image: "", stock: 30, description: "Whole milk 1 litre" },
  { name: "Cheddar Cheese", category: "dairy", price: 390, image: "", stock: 15, description: "Cheddar cheese block" },
  { name: "Greek Yogurt", category: "dairy", price: 250, image: "", stock: 25, description: "Creamy greek yogurt" },
  { name: "Butter", category: "dairy", price: 310, image: "", stock: 20, description: "Salted butter" },

  // Bakery
  { name: "Sourdough Bread", category: "bakery", price: 280, image: "", stock: 20, description: "Organic sourdough bread" },
  { name: "Croissant", category: "bakery", price: 150, image: "", stock: 25, description: "Buttery croissant" },
  { name: "Bagel", category: "bakery", price: 120, image: "", stock: 30, description: "Fresh bagels" },
  { name: "Muffin", category: "bakery", price: 160, image: "", stock: 22, description: "Blueberry muffin" },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected, seeding data...");

    await Product.deleteMany({});
    console.log("🗑️  Purane products delete kar diye");

    const created = await Product.insertMany(products);
    console.log(`✅ ${created.length} products add ho gaye!`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error.message);
    process.exit(1);
  }
};

seedDB();