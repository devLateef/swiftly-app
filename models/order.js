const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
},
{
    timestamp: true
});

const productCollection = mongoose.model('Order', productSchema);

module.exports = productCollection;