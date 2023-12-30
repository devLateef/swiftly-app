const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    name: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
},
{
    timestamp: true
});

const orderCollection = mongoose.model('Order', orderSchema);

module.exports = orderCollection;