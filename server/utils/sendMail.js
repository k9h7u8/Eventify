const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = (email, name, desc, date, time, venue) => {
        const msg = {
                to: email,
                from: process.env.MY_EMAIL, // Use the email address or domain you verified above
                subject: 'Congratulations you are successfully registered for the event 🎉',
                text: `Event Name: ${name},
                Description: ${desc},
                Date: ${date},
                Time: ${time},
                Venue: ${venue}`,
                html: `<strong> Event Name: ${name}<br>
                        Description: ${desc}<br>
                        Date: ${date}<br>
                        Time: ${time}<br>
                        Venue: ${venue}
                </strong>`,
        };

        sgMail
                .send(msg)
                .then(response => console.log("Email sent successfully"))
                .catch(error => console.log(error.message));

}

module.exports = sendMail;