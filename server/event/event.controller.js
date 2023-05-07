const Event = require('./event.model');

const createAndSave = async (req, res, next) => {
    const eventDetails = {
        eventName: req.body.eventName,
        description: req.body.description,
        image: req.body.image,
        date: req.body.date,
        time: req.body.time,
        venue: req.body.venue,
    }
    const event = new Event(eventDetails);
    const eventObject = await event.save().then((data) => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    });
}

const getAll = async (req, res) => {
    const eventObject = await Event.find().then((data) => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    });
}

const getById = async (req, res) => {
    const eventObject = await Event.findById(req.params.eventId).then((data) => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    });
}

const update = async (req, res) => {
    const eventDetails = {
        eventName: req.body.eventName,
        description: req.body.description,
        image: req.body.image,
        date: req.body.date,
        time: req.body.time,
        venue: req.body.venue,
    }
    const eventObject = await Event.findByIdAndUpdate(req.params.eventId, {
        $set: eventDetails
    }, {
        new: true,
        useFindAndModify: false
    }).then((data) => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    });
}

module.exports = {
    createAndSave,
    getAll,
    getById,
    update
}