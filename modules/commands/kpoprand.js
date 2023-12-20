module.exports.config = {
  name: "kpoprand",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Ralph", 
  description: "Random Edits",
  commandCategory: "media",
  cooldowns: 5
};
module.exports.run = async ({ api, event,}) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");

  api.sendMessage(`⏱️ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗍𝗁𝖾 𝗏𝗂𝖽𝖾𝗈 𝗂𝗌 𝗌𝗍𝖺𝗋𝗍𝗂𝗇𝗀 𝗍𝗈 𝗌𝖾𝗇𝖽, 𝗉𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍...`, event.threadID, event.messageID);
axios.get('https://jeka-api.luabot24.repl.co/random/?apikey=ralph').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
  let callback = function () {
          api.sendMessage({
                                                body: `𝗛𝗘𝗥𝗘𝗦 𝗬𝗢𝗨𝗥 𝗩𝗜𝗗𝗘𝗢`,
            attachment: fs.createReadStream(__dirname + `/cache/random.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/random.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/random.${ext}`)).on("close", callback);
      }) .catch(err => {
                     api.sendMessage("❎ | 𝖬𝖺𝗌𝗍𝖾𝗋,𝗍𝗁𝖾 𝖺𝗉𝗂 𝗐𝖾𝗇𝗍 𝖽𝗈𝗐𝗇, 𝖾𝗋𝗋𝗈𝗋 𝗌𝗍𝖺𝗍𝗎𝗌: 200", event.threadID, event.messageID);
    api.setMessageReaction("😢", event.messageID, (err) => {}, true);
                  })     
}