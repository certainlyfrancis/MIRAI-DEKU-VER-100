module.exports.config = {
  name: "car",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Joshua Sy",
  description: "random color",
  commandCategory: "Other",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    const res = await axios.get(`https://api.popcat.xyz/car`);
    var data = res.data.image;
    var title = res.data.title;
    var msg = [];
    let a = `${res.data.image}`;

    let imgs1 = (await axios.get(`${a}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.png", Buffer.from(imgs1, "utf-8"));

    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img1.png"));
    return api.sendMessage({body:`${title}`,attachment: allimage
    }, event.threadID, event.messageID);
}