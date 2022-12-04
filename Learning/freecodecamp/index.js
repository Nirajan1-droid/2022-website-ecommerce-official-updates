const accountSid = 'ACbf88048240aaef154dee187ef186d22f'; 
const authToken = 'e497bd4ce0e8dbd7e9bda9e617fb0b87'; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
    .list()
    //   .create({ 
    //      body: '+nodenodendoendoenodneondoeodneondoneodneondoendoeodn',  
    //      messagingServiceSid: 'MGec7a72be4871922f8c840255a108ca6f',      
    //      to: '+9779749411747' 
    //    }) 
      .then(messages => 
        console.log(`the most recent message is :${messages[0].body}`)
        .catch(err => console.error(err)));
        console.log('gathering your messgae log')