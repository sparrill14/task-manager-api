const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'parrsm18@wfu.edu',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'parrsm18@wfu.edu',
        subject: 'Sorry to see you go',
        text: `Sorry to see you go ${name}, is there a reason why you canceled you're account?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}