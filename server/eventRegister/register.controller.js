const EventRegister = require('./register.model');
const sendEmail = require('../utils/sendMail');
const service = require('../service/eventServices');

const createAndSave = async (req, res, next) => {
    const registerDetails = {
        event_id: req.params.eventId,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        year: req.body.year,
        branch: req.body.branch,
        section: req.body.section,
    }
    const register = new EventRegister(registerDetails);
    const registerObject = await register.save().then(async (data) => {
        res.send(data);
        const details = await service.getEvent(data.event_id);
        const NumberRegister = await service.updateEvent(data.event_id, details.noOfRegistration);
        sendEmail(data.email, details.eventName, details.description, details.date, details.time, details.venue);
    }).catch(err => {
        console.log(err);
    });
}

const getById = async (req, res) => {
    const eventObject = await EventRegister.find({ event_id: req.params.eventId }).then((data) => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    });
}

const branchDetails = async (req, res) => {
    try {
        const eventRegisterData = await EventRegister.find({ event_id: req.params.eventId });

        const branchCounts = {};
        eventRegisterData.forEach((doc) => {
            const branch = doc.branch;
            if (branchCounts[branch]) {
                branchCounts[branch] += 1;
            } else {
                branchCounts[branch] = 1;
            }
        });

        res.send(branchCounts);
    } catch (error) {
        console.log(error);
    }
}

const yearDetails = async (req, res) => {
    try {
        const eventRegisterData = await EventRegister.find({ event_id: req.params.eventId });

        const yearCounts = {};
        eventRegisterData.forEach((doc) => {
            const year = doc.year;
            if (yearCounts[year]) {
                yearCounts[year] += 1;
            } else {
                yearCounts[year] = 1;
            }
        });

        res.send(yearCounts);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createAndSave,
    getById,
    branchDetails,
    yearDetails
};