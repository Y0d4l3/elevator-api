var port = process.env.PORT || 3000;
const express = require('express')
const mongoose = require('mongoose')
const app = express()
mongoose.connect('mongodb://localhost/TestDatabase')
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
    const accelerometerData = await accelerometerDataClass.find()
    res.status(201).json(accelerometerData)
})

app.listen(port)