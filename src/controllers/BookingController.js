const Booking = require('../models/Booking');

module.exports = {

    async store(req, res){
        const { user_id } = req.headers;

        const { spot_id } = req.params;

        const { date } = req.body;

        //Levando estes dados para nosso DB
        const booking = await Booking.create({
            user: user_id,
            spot: spot_id,
            date,
        });

        //Dar um populate em spot e user e depois executar
        await booking.populate('spot').populate('user').execPopulate();

        return res.json(booking);
    }

}