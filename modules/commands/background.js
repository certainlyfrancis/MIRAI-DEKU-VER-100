module.exports.config = {
  name: "background",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thanh dz mod by Granger",
  description: "Random background :))",
  commandCategory: "random-img",
  usages: "background",
  cooldowns: 3
};

module.exports.run = async ({ api, event }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://api-jrt.j-jrt-official.repl.co/background.php').then(res => {
  let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
  let callback = function () {
          api.sendMessage({
            attachment: fs.createReadStream(__dirname + `/cache/background.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/background.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/background.${ext}`)).on("close", callback);
      })
  }