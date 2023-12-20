module.exports.config = {
  name: "clear",
  version: "1.0.0",
  hasPermission: 0,
  credits: "Réynél", 
  description: "unsent the message sent by the bot",
  commandCategory: "admin",
  usages: "[clear]",
  cooldowns: 10,
};

module.exports.run = async function ({ api, event }) {

  const unsendBotMessages = async () => {
    const threadID = event.threadID;

    const botMessages = await api.getThreadHistory(threadID, 60); // Adjust the limit as needed (60 = 60 messages)

    const botSentMessages = botMessages.filter(message => message.senderID === api.getCurrentUserID());

    for (const message of botSentMessages) {
      await api.unsendMessage(message.messageID);
    }
  };

  await unsendBotMessages();
};