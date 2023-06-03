const Feedback = require('./feedback.model');

const createAndSave = async (req, res, next) => {
    const feedbackDetails = {
        rating: req.body.rating,
        description: req.body.description,
        email: req.body.email
    }
    const feedback = new Feedback(feedbackDetails);
    const feedbackObject = await feedback.save().then((data) => {
        res.send(data);
    }).catch(err => {
        console.log(err);
    });
}

module.exports = {
    createAndSave
};