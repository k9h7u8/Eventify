const Event = require('../event/event.model');
const Admin = require('../user-admin/user-admin.model');


const getEvent = async (id) => {
    resultObject = await Event.findById(id).then((data) => {
        return data;
    }).catch((error) => {
        return error;
    });
    return resultObject;
}

const findAndUpdateEvent = async (eventId) => {
    // const resultObject = await Event.findOneAndUpdate(eventId,
    //     { $inc: { noRegister: 1 } }, {
    //     new: true,
    //     useFindAndModify: false
    // }).then((data) => {
    //     return data;
    // }).catch(err => {
    //     console.log(err);
    // });
    // return resultObject;
    try {
        const event = await Event.findById(eventId);
        if (event) {
            event.noOfRegistration = event.noOfRegistration ? event.noOfRegistration + 1 : 1;
            const resultObject = await event.save();
            return resultObject;
        } else {
            return null
        }
    } catch (err) {
        console.log(err);
        throw err;
    }
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
    findAndUpdateEvent
}