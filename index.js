 
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});


app.use(express.json())

async function startServer(){
    await mongoose.connect("mongodb+srv://SE12:CSH2025@cluster0.xfcbvkb.mongodb.net/creatures?retryWrites=true&w=majority&appName=Cluster0")
    app.listen(3000, ()=>{
      console.log("Server is running")
    })
  }

startServer()


const creatureSchema = new mongoose.Schema({
    name: { type: String},
    endangered: { type: Boolean},
    dangerLevel: { type: Number},
    habitat: { type: String },
    hasFur: { type: Boolean},
});

const Creature = mongoose.model("Creature", creatureSchema, "Creatures")

app.post("/add/creature", async(req,res) =>{
    const newCreature = await new Creature({
      name: req.body.name,
      endangered: req.body.endangered,
      dangerLevel: req.body.dangerLevel,
      habitat: req.body.habitat,
      hasFur: req.body.hasFur
    }).save()

    res.json(newCreature)
  })

