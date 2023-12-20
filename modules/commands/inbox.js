const axios = require('axios');

module.exports.config = {
  name: "inbox",
  version: "1.0.0",
  credits: "RICKCIEL",
  hasPermission: 0,
  usePrefix: true,
  description: "Fetch and display inbox messages.",
  commandCategory: "Utility",
  cooldowns: 5,
};

module.exports.run = async ({ api, event, args }) => {
  try {
    const emailAddress = args[0];
    const inboxResponse = await axios.get(`https://tempmail-api.codersensui.repl.co/api/getmessage/${emailAddress}`);
    const messages = inboxResponse.data.messages;

    if (!messages || messages.length === 0) {
      return api.sendMessage(`No messages found for ${emailAddress}.`, event.threadID);
    }

    let messageText = '📬 | 𝗜𝗡𝗕𝗢𝗫 𝗠𝗘𝗦𝗦𝗔𝗚𝗘: 📬 | \n\n';
    for (const message of messages) {
      messageText += `📩 | 𝗦𝗘𝗡𝗗𝗘𝗥: ${message.sender}\n`;
      messageText += `👀 | 𝗦𝗨𝗕𝗝𝗘𝗖𝗧: ${message.subject || '👉 | 𝖭𝖮 𝖲𝖴𝖡'}\n`;
      messageText += `📩 | 𝗠𝗘𝗦𝗦𝗔𝗚𝗘: ${message.message}\n\n`;
    }

    api.sendMessage(messageText, event.threadID);
  } catch (error) {
    console.error('Error fetching inbox:', error);
    api.sendMessage("❌ | 𝖦𝗈𝗆𝖾𝗇 𝗆𝖺𝗌𝗍𝖾𝗋, 𝗍𝗁𝖾𝗋𝖾'𝗌 𝖺𝗇 𝖾𝗋𝗋𝗈𝗋 𝗈𝖼𝖼𝗎𝗋𝖾𝖽 𝗐𝗁𝗂𝗅𝖾 𝖿𝖾𝗍𝖼𝗁𝗂𝗇𝗀 𝗍𝗁𝖾 𝗂𝗇𝖻𝗈𝗑.", event.threadID);
  }
};
