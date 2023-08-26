const mongoose = require('mongoose');
const {Schema} = mongoose;

const hospitalSchema = Schema({
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
module.exports = Product;