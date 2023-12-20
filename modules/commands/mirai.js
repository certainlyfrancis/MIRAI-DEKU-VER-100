const axios = require('axios');

module.exports.config = {
  name: 'mirai',
  version: '1.1.0',
  hasPermssion: 0,
  credits: 'Yan Maglinte',
  description: 'Free AI Chatbot that can read images!',
  commandCategory: 'chatbots',
  usages: 'Ai [prompt]!',
  cooldowns: 0,
};

module.exports.run = async function({ api, event, args }) {
  const prompt = args.join(' ');
  const credits = this.config.credits;
  const main = 'https://main.yanmaglinte.repl.co/api/ai';
  const reply = await axios.post(main);
  const data = reply.data;
  const API = data.apis;

  if (!prompt) {
    return api.sendMessage('Hello 👋 How can I help you today?', event.threadID, event.messageID);
  }

  if (event.type === 'message_reply' && event.messageReply.attachments) {
    const attachment = event.messageReply.attachments[0];
    if (attachment.type === 'photo') {
      const image_url = attachment.url;

      try {
        const response = await axios.post(API + '/ocr', {
          prompt: prompt,
          credits: credits,
          image_url: image_url,
        });

        const data = response.data;
        const output = data.result;
        api.sendMessage(output, event.threadID, event.messageID);
      } catch (error) {
        console.error('Error:', error);
        api.sendMessage('⚠️ Something went wrong!', event.threadID, event.messageID);
      }
      return;
    }
  }

  try {
    const response = await axios.post(API + '/gpt', {
      prompt: prompt,
      credits: credits,
    });

    const data = response.data;
    const output = data.result;
    api.sendMessage(output, event.threadID, event.messageID);
  } catch (error) {
    console.error('Error:', error);
    api.sendMessage('⚠️ Something went wrong!', event.threadID, event.messageID);
  }
};