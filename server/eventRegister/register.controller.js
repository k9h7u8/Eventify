const EventRegister = require('./register.model');

const createAndSave = async (req, res, next) => {
    const registerDetails = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        year: req.body.year,
        branch: req.body.branch,
        section: req.body.section,
    }
    const register = new EventRegister(registerDetails);
    const registerObject = await register.save().then((data) => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    });
}

module.exports = {
    createAndSave
};