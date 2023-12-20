const fs = require("fs");
module.exports.config = {
	name: "handsome",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by akhiro", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "handsome",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("gwapo mo")==0 || event.body.indexOf("Gwapo mo")==0 || event.body.indexOf("ampogi")==0 || event.body.indexOf("Ampogi")==0 || event.body.indexOf("handsome")==0 || event.body.indexOf("Handsome")==0) {
		var msg = {
				body: "𝗛𝗔𝗡𝗗𝗦𝗢𝗠𝗘? 𝗧𝗦𝗞 🙄",
				attachment: fs.createReadStream(__dirname + `/noprefix/handsome.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😶", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }