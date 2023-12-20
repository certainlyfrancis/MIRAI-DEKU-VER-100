const axios = require('axios');
const fs = require('fs-extra');

module.exports.config = {
  name: "lyrics",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Rishad",
  description: "Fetch lyrics of a song",
  commandCategory: "media",
  usages: "lyrics song name",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  try {
    const query = args.join(" ");
    const response = await axios.get(`https://for-devs.rishadapis.repl.co/api/lyrics/get?apikey=fuck&query=${encodeURIComponent(query)}`);
    const data = response.data;

    const imageResponse = await axios.get(data.image, { responseType: 'arraybuffer' });
    fs.writeFileSync(__dirname + '/cache/lyrics.png', Buffer.from(imageResponse.data));

    const formattedResponse = `╭┉┉┅┉┅┄┄•◦ೋ•◦❥•◦ೋ\n  ⟬🅕︎🅐︎🅑︎⟭ 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗗𝗘𝗞𝗨\n•◦ೋ•◦❥•◦ೋ•┈┄┄┅┉┅┉╯\n❏ 𝗧𝗜𝗧𝗟𝗘: ${data.title}\n❏ 𝗔𝗥𝗧𝗜𝗦𝗧: ${data.artist}\n\n❏ 𝗟𝗬𝗥𝗜𝗖𝗦:\n\nฅ^•ﻌ•^ฅ❁❁☾︎sᴛᴀʀᴛ☽︎❁❁ฅ^•ﻌ•^ฅ\n${data.lyrics}\nฅ^•ﻌ•^ฅ❁❁☾︎ᴇɴᴅ☽︎❁❁ฅ^•ﻌ•^ฅ`;

    return api.sendMessage({
      body: formattedResponse,
      attachment: fs.createReadStream(__dirname + '/cache/lyrics.png')
    }, event.threadID);
  } catch (err) {
    console.error(err);
    return api.sendMessage('😞 | 𝖨𝗆 𝗌𝗈𝗋𝗋𝗒 𝗆𝖺𝗌𝗍𝖾𝗋, 𝖨 𝖼𝖺𝗇𝗍 𝗍𝗁𝖾 𝗅𝗒𝗋𝗂𝖼𝗌\n\n𝖲𝗒𝗌𝗍𝖾𝗆 𝖤𝗋𝗋𝗈𝗋, 𝖯𝗅𝖾𝖺𝗌𝖾 𝗍𝗋𝗒 𝖺𝗀𝖺𝗂𝗇.', event.threadID);
  }
};
