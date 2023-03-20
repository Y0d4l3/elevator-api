var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var accelerometerDataSchema = Schema({
    xValue: {type: Number, required: true},
    yValue: {type: Number, required: true},
    zValue: {type: Number, required: true},
    date: {type:Date, default: Date.now}
})

module.exports = mongoose.model('AccelerometerData', accelerometerDataSchema);