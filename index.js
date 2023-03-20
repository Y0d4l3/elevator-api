const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }
mongoose.connect(process.env.MONGODB_URI)
    .then(()=>console.log('Connected to database'))
    .catch((error)=>console.error("Error:", error))


const accelerometerDataSchema = mongoose.Schema({
    xValue: {type: Number, required: true},
    yValue: {type: Number, required: true},
    zValue: {type: Number, required: true},
    date: {type:Date, default: Date.now}
})
const accelerometerDataClass = mongoose.model("accelerometerData", accelerometerDataSchema)

app.post('/accelerometerData', async function(req, res) {
    try {
        console.log(req.json)
        const accelerometerDataInstance = new accelerometerDataClass({
            xValue: req.query.xValue,
            yValue: req.query.yValue,
            zValue: req.query.zValue
        })
        const saveResult = await accelerometerDataInstance.save()
        res.status(201).json(saveResult)
    } catch(error) {
        res.status(500).json(error)
    }
})

app.get('/accelerometerData', async function(req,res) {
    try {
        const accelerometerData = await accelerometerDataClass.find()
        res.status(201).json(accelerometerData)
    } catch(error) {
        res.status(500).json(error)
    }
})
