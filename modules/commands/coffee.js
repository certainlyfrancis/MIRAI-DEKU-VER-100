module.exports.config = {
  name: "coffee",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "John Arida",
  description: "edit images",
  commandCategory: "Others",
  usages: "[text]",
  cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  const text = args.toString().replace(/,/g,  '  ');
if (!text)
    return api.sendMessage("Add text lmao", event.threadID, event.messageID);
  axios.get(`https://cakrayp.herokuapp.com/api/textmaker/photooxy?text=${text}&theme=coffeecup&apikey=cakrayp24Q6&responsetype=json`).then(res => {
  let ext = res.data.result.image_url.substring(res.data.result.image_url.lastIndexOf(".") + 1);
  let callback = function () {
          api.sendMessage({
            body: `hi senpai, kape kana tanga`,
            attachment: fs.createReadStream(__dirname + `/cache/coffee.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/coffee.${ext}`), event.messageID);
        };
        request(res.data.result.image_url).pipe(fs.createWriteStream(__dirname + `/cache/coffee.${ext}`)).on("close", callback);
      })
  }