const axios = require('axios');

module.exports.config = {
  name: 'akhiro',
  version: '1.0.0',
  hasPermission: 0,
  credits: 'August Quinn',
  description: 'An Ai Chatgpt',
  commandCategory: '...',
  usages: '/akhiro [query]',
  cooldowns: 5,
};

module.exports.run = async function ({ api, args, event }) {
  try {
    const text = args.join(' ');

    if (!text) {
      api.sendMessage('Please provide some questions for Akhiro.', event.threadID, event.messageID);
      return;
    }

    const apiUrl = 'https://chatgpt.august-api.repl.co/response';
    const response = await axios.post(apiUrl, { prompt: text });

    if (response.data && response.data.answer) {
      const answer = response.data.answer.trim();
      api.sendMessage(`𝗔𝗞𝗛𝗜𝗥𝗢 𝗔𝗜 🤖\n\n${answer}\n\nᴍᴀᴅᴇ ʙʏ: ғʀᴀɴᴄɪs ʟᴏʏᴅ ᴍ. ʀᴀᴠᴀʟ (ᴍᴏᴅɪғɪᴇᴅ)\nʟɪɴᴋ: https://www.facebook.com/Raval.FrancisLoyd`, event.threadID, event.messageID);
    } else {
      api.sendMessage('An error occurred to the command. Please try again later.', event.threadID, event.messageID);
    }
  } catch (error) {
    console.error('Error in Akhiro command:', error);
    api.sendMessage('An error occurred to the command. Please try again later.', event.threadID, event.messageID);
  }
};