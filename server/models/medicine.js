const mongoose = require('mongoose');
const {Schema} = mongoose;

const medicineSchema = new Schema({
    hospital:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'hospital'
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    quantity: {
        type: Number,
        required: true
    },
});

const Medicine = mongoose.model("Medicine", medicineSchema);
module.exports = Medicine;
