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
    getAdmin
}