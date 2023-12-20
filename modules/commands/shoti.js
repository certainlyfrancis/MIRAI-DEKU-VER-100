module.exports.config = {
  name: "shoti",
  version: "1",
  hasPermssion: 0,
  credits: "Ralph", 
  description: "Shoti vietnamese",
  commandCategory: "media",
  cooldowns: 5
};
module.exports.run = async ({ api, event,}) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");

  api.sendMessage(`⏱️ | Video is sending please wait.`, event.threadID, event.messageID);
axios.get('https://jeka-api.luabot24.repl.co/tiktok/?apikey=geloo').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
  let callback = function () {
          api.sendMessage({
                                                body: `vietnamese girl gyatt`,
            attachment: fs.createReadStream(__dirname + `/cache/tiktok.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tiktok.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/tiktok.${ext}`)).on("close", callback);
      }) .catch(err => {
                     api.sendMessage("api error status: 200", event.threadID, event.messageID);
    api.setMessageReaction("😢", event.messageID, (err) => {}, true);
                  })     
}