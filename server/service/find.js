const Event = require('../event/event.model');

const getEvent = async (id) => {
    resultObject = await Event.findById(id).then((data) => {
        return data;
    }).catch((error) => {
        return error;
    });
    return resultObject;
}

module.exports = {
    getEvent
}