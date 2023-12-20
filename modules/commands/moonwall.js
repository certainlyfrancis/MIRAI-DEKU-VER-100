module.exports.config = {
  name: "moonwall",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Rishad",
  description: "Generate moon image based on your information",
  usePrefix: true,
  usages: "moonwall name | day | month | year",
  commandCategory: "canvas",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const axios = global.nodemodule["axios"];

  try {
    const input = args.join(" ").split(" | ");

    if (input.length !== 4) {
      return api.sendMessage('Invalid format. Please use: /moonwall name | day | month | year', event.threadID);
    }

    const [name, day, month, year] = input;

    const API = `https://for-devs.rishadapis.repl.co/api/moon?name=${encodeURIComponent(name)}&day;=${encodeURIComponent(day)}&month;=${encodeURIComponent(month)}&year;=${encodeURIComponent(year)}&apikey=fuck`;

    const response = await axios.get(API, {
      responseType: 'stream',
      headers: {
        'Content-Type': 'image/png'
      }
    });

    const responseBody = `✅ | 𝗜𝗠𝗔𝗚𝗘 𝗚𝗘𝗡𝗘𝗥𝗔𝗧𝗘𝗗\n❓ | 𝗡𝗔𝗠𝗘: ${name}\n❓ | 𝗗𝗔𝗬: ${day}\n❓ | 𝗠𝗢𝗡𝗧𝗛: ${month}\n❓ | 𝗬𝗘𝗔𝗥: ${year}`;

    api.sendMessage({
      body: responseBody,
      attachment: response.data,
    }, event.threadID);
  } catch (error) {
    console.error(error);
    api.sendMessage('An error occurred while processing the moonwall API', event.threadID);
  }
};