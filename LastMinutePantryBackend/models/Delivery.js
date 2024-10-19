const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const deliverySchema = new mongoose.Schema({
    deliveryId: { type: Number }, // Auto-incremented deliveryId
    address: { type: String, required: true },
    postalCode: { type: String, required: true },
    date: { type: Date, default: Date.now },
    deliveryNote: { type: String } // Optional delivery note
});

// Auto-increment deliveryId
deliverySchema.plugin(AutoIncrement, { inc_field: 'deliveryId' });

module.exports = mongoose.model('Delivery', deliverySchema);
