const axios = require('axios');

module.exports.config = {
  name: "fbtoken",
  version: "1.0.",
  hasPermssion: 2,
  credits: "James",
  description: "EAAD Facebook Token",
  commandCategory: "other",
  usages: "[ uid ] [password]",
  cooldowns: 2,
};
module.exports.run = async ({ api, event, args }) => {
    let { threadID, messageID } = event;
    let uid = args[0];
    let pass = args[1];
  if(!uid || !pass) {
api.sendMessage(`missing input!\nusage: ${global.config.PREFIX}fbtoken [ uid ] [ password ]`, threadID, messageID);
return;
  }
api.sendMessage("please wait...", threadID, messageID);

    try {
        const g = await axios.get(`https://6v7tokengetter.jake-edu.repl.co/token?uid=${uid}&pass=${encodeURI(pass)}`);
        const eaad = g.data.tokenData.message.data.access_token_eaad6v7;

      
      api.sendMessage(`𝗮𝗰𝗰𝗲𝘀𝘀_𝘁𝗼𝗸𝗲𝗻_𝗲𝗮𝗮𝗱𝟲𝘃𝟳: \n${eaad}`, threadID, messageID);
      
    } catch (e) {
        return api.sendMessage(`An error ${e}`, threadID, messageID);
    };
    
};