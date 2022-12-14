const keys = require('../config/keys');

const accountSid = keys.accountTwilio; 
const authToken = keys.tokenTwilio;
const phoneFrom = keys.phoneFromTwilio;
const client = require('twilio')(accountSid, authToken); 
 
const sendWhatapp = (body,phone) => {

client.messages 
      .create({ 
         body, 
         from: `whatsapp:${phoneFrom}`,       
         to: `whatsapp:${phone}` 
       }) 
      .then(message => console.log(message.sid)) 
      .done();
    
}
module.exports = sendWhatapp