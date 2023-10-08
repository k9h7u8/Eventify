const Event = require('../event/event.model');
const Admin = require('../admin/admin.model');


const getEvent = async (id) => {
    resultObject = await Event.findById(id).then((data) => {
        return data;
    }).catch((error) => {
        return error;
    });
    return resultObject;
}

const updateEvent = async (eventId, numberRegister) => {
    const resultObject = await Event.findOneAndUpdate(eventId,
        { $inc: { numberRegister: 1 } }, {
        new: true,
        useFindAndModify: false
    }).then((data) => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    });
    return resultObject;
}

const getAdmin = async (id) => {
    resultObject = await Admin.findById(id).then((data) => {
        return data;
    }).catch((error) => {
        return error;
    });
    return resultObject;
}

module.exports = {
    getEvent,
    getAdmin,
    updateEvent
}