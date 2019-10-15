const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    //Usuário que está relacionado com a reserva:
    user: {
        type: mongoose.Schema.Types.ObjectId,
        //Agora vamos declarar que nos referimos ao model -> User.js
        ref: 'User'
    },

    //Spot que está relacionado com a reserva:
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        //Agora vamos declarar que nos referimos ao model -> Spot.js
        ref: 'Spot'
    }
});

module.exports = mongoose.model('Booking', BookingSchema);