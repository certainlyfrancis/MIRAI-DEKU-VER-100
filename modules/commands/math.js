const axios = require('axios');

module.exports.config = {
  name: "math",
  version: "1.0.0",
  credits: "Samir Œ",
  description: "Get math questions solved.",
  commandCategory: "Al",
  usages: "/math [prompt]",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const prompt = args.join(" ");

  if (!prompt) {
    return api.sendMessage("Please provide a question.", event.threadID, event.messageID);
  }

  try {
    const response = await axios.get(`https://bnw.samirzyx.repl.co/mathai?q=${encodeURI(prompt)}`);
    const mathai = response.data.data;

    const message = `Result: ${mathai}`;
    api.sendMessage(message, event.threadID, event.messageID);
  } catch (error) {
    console.error('[ERROR]', error);
    api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
};