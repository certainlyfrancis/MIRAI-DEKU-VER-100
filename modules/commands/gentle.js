module.exports.config = {
  name: "gentle",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Binee",
  description: "Gif TR",
  commandCategory: "Random-IMG",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function({ api, event }) {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  axios.get('https://apituandz1407.herokuapp.com/api/gai.php').then(res => {
  let ext = res.data.data.substring
  (res.data.data.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: ``,
            attachment: fs.createReadStream(__dirname + `/cache/cho.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/cho.${ext}`), event.messageID);
        };
        request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/cho.${ext}`)).on("close", callback);
      })
}