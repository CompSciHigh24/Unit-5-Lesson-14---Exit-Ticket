const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});


app.use(express.json())

async function startServer(){
    await mongoose.connect("mongodb+srv://SE12:CSH2025@cluster0.xfcbvkb.mongodb.net/potions?retryWrites=true&w=majority&appName=Cluster0")
    app.listen(3000, ()=>{
      console.log("Server is running")
    })
  }

startServer()


const potionSchema = new mongoose.Schema({
    label: { type: String, required: true },
    effect: { type: String },
    ingredients: { type: String },
    color: { type: String },
    isExplosive: { type: Boolean },
});

const Potion = mongoose.model("Potion", potionSchema, "Potions")

// Create a dynamic route handler that updates a specific potion's color based on its label [2 pts]
// e.g. /update/polyjuice will update the color of the polyjuice potion to pearly white
// e.g. /update/amortentia will update the color of the Amortentia potion to golden purple

