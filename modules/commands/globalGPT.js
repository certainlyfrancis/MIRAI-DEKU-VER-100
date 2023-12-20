const axios = require("axios");

module.exports.config = {
  name: "globalgpt",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Cyril Matt O. Encenso", // Credits to Adonis Sanchez for the API and his the one who requested this command 😁 // Please don't change credits respect to my work
  description: "Global GPT",
  commandCategory: "AI",
  usages: ["gpt <question>"],
  cooldowns: 2,
};

module.exports.run = async function ({ api, event, args }) {
  let { messageID, threadID } = event;
  let tid = threadID,
    mid = messageID;
  const content = encodeURIComponent(args.join(" "));
  if (!args[0]) return api.sendMessage("Please, provide a query.", tid, mid);
  try {
    api.sendTypingIndicator(event.threadID, true);

    const res = await axios.get(`https://api.easy0.repl.co/v1/globalgpt?q=${content}`);
    const response = res.data.content;

    if (response) {
      const messageText = `📝 𝗚𝗹𝗼𝗯𝗮𝗹𝗚𝗣𝗧\n\n${response}`;
      api.setMessageReaction("✅️", event.messageID, (err) => {}, true);
      api.sendMessage(messageText, tid, mid);
    } else if (res.data.error) {
      api.sendMessage(`Error: ${res.data.error}`, tid, mid);
    } else {
      api.sendMessage("An unexpected error occurred.", tid, mid);
    }
  } catch (error) {
    console.error(error);
    api.sendMessage("An error occurred while fetching the data.", tid, mid);
  }
};
