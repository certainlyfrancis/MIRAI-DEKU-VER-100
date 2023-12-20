const axios = require("axios");
const fs = require("fs");

module.exports.config = {
  name: "militaryvid",
  usePrefix: true,
  description: "Random video of military",
  hasPermssion: 0,
  credits: "OPERATOR ISOY && Cyril Matt",
  commandCategory: "Media",
  usages: "",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event }) {
  try {
    const videoResponse = await axios.get('https://random-vid.adonis-jrsjrs.repl.co/random-military-video', {
      responseType: "arraybuffer",
    });

    fs.writeFileSync('cache/random-military.mp4', Buffer.from(videoResponse.data, "binary"));

    api.sendMessage({
      body: '𝗥𝗔𝗡𝗗𝗢𝗠 𝗠𝗜𝗟𝗜𝗧𝗔𝗥𝗬 𝗩𝗜𝗗𝗘𝗢',
      attachment: fs.createReadStream('cache/random-military.mp4'),
    }, event.threadID, event.messageID);

  } catch (error) {
    console.log(error);
  }
};
