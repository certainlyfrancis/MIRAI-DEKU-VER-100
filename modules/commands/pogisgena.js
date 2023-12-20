const fs = require("fs");
module.exports.config = {
	name: "pogi",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "sus",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("onepepte")==0 || event.body.indexOf("Onepepte")==0 || event.body.indexOf("wampipti")==0 || event.body.indexOf("Wampipti")==0 || event.body.indexOf("pogi")==0 || event.body.indexOf("Pogi")==0) {
		var msg = {
				body: "𝗣𝗢𝗚𝗜 𝗦𝗜𝗚𝗘 𝗡𝗔 💸",
				attachment: fs.createReadStream(__dirname + `/noprefix/pogisgena.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😏", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }