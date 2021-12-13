const fetch = require('node-fetch');

exports.handler = async function (context, event, callback) {
const client = context.getTwilioClient();
const hub = context.hubApiKey;
console.log(hub);


const contacts = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts?limit=10&archived=false&hapikey=${hub}&properties=phone`, {
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include'
});

const con = await contacts;
const contactos = await contacts.json();
console.log(JSON.stringify(contactos.results[3].properties.phone));


callback(null, contactos)

}
