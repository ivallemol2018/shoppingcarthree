const { createTransport } = require('nodemailer')
const keys = require('../config/keys');

const path = require("path")
const ejs = require('ejs')

const hostSMTP = keys.hostSMTP
const portSMTP = keys.portSMTP
const userSMTP = keys.userSTMP
const passwordSMTP  = keys.passwordSTMP
const toMail = keys.toMail

const transporter = createTransport({
    host: hostSMTP,
    port: portSMTP,
    auth: {
        user: userSMTP,
        pass: passwordSMTP
    }
})

const sendEmail = (register) =>{

    const data = `Se registro un nuevo usuario ${register.username}`

    const template = path.join(__dirname,'..','/utils/email.template.ejs')

    ejs.renderFile(template, { data })
        .then(body => {
            transporter.sendMail({
                from: 'no-reply@shoppingcarthree.herokuapp.com',
                to: [toMail],
                subject: 'Nuevo registro',
                html: body
            })
                .then(r => console.log(r))
                .catch(e => console.log('error:', e))
        })
}

module.exports = sendEmail