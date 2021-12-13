exports.handler = function (context, event, callback) {
  console.log(event);  
 
  console.log(event.to);
  console.log(event.from);
  console.log(event.message);

  const client = context.getTwilioClient();
  
  client.messages
      .create({
        from: event.from,
        to: event.to,
        body: event.message,
      })
      .then((msg) => {  
          return callback(null, "Message sent!");        
      })
      .catch((err) => {
        return { success: false, error: err.message };
      });

};