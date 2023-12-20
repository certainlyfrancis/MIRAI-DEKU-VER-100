const axios = require("axios");

const simStatus = {
  enabled: true,
};

module.exports.config = {
  name: "deku",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "KENLIEPLAYS",
  description: "Talk to sim",
  commandCategory: "sim",
  usages: "[ask]",
  cooldowns: 2,
};

module.exports.run = async function({ api, event, args }) {
  if (args[0] === 'off' && event.senderID === '100072565756983') {
    simStatus.enabled = false;
    return api.sendMessage('SIM COMMAND IS OFF', event.threadID, event.messageID);
  } else if (args[0] === 'on' && event.senderID === '100072565756983') {
    simStatus.enabled = true;
    return api.sendMessage('🟢SIM COMMAND IS NOW AVAILABLE!!', event.threadID, event.messageID);
  }

  if (!simStatus.enabled) {
    return api.sendMessage('🔴 SIM COMMAND IS CURRENTLY NOT AVAILABLE PLEASE TRY AGAIN LATER!!', event.threadID, event.messageID);
  }

  const content = encodeURIComponent(args.join(" "));
  if (!args[0]) return api.sendMessage("Please type a message...", event.threadID, event.messageID);
  try {
    const res = await axios.get(`https://simsimi.fun/api/v2/?mode=talk&lang=ph&message=${content}&filter=true`);
    const respond = res.data.success;
    if (res.data.error) {
      api.sendMessage(`Error: ${res.data.error}`, event.threadID, event.messageID);
    } else {
      api.sendMessage(respond, event.threadID, event.messageID);
    }
  } catch (error) {
    console.error(error);
    api.sendMessage("An error occurred while fetching the data.", event.threadID, event.messageID);
  }
};