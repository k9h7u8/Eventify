const jwt = require('jsonwebtoken');
const Event = require('./event.model');
const admin = require('../service/find')

const createAndSave = async (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const adminDetails = await admin.getAdmin(decoded.id);
    console.log(adminDetails);
    const eventDetails = {
        admin_id: decoded.id,
        category: adminDetails.society_name,
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

const getByAdminId = async (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const eventObject = await Event.find({ admin_id: decoded.id }).then((data) => {
        console.log(data)
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

const deleteEvent = async (req, res) => {
    const eventObject = await Event.findById(req.params.eventId).remove().then((data) => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    });
}

module.exports = {
    createAndSave,
    getAll,
    getById,
    getByAdminId,
    update,
    deleteEvent
}