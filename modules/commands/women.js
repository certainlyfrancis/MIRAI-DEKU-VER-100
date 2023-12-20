const fs = require("fs");
module.exports.config = {
	name: "womenhahaha",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Joshua Sy", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("babae")==0 || (event.body.indexOf("eabab")==0 || (event.body.indexOf("women")==0 || (event.body.indexOf("Women")==0)))) {
		var msg = {
				body: "𝗪𝗢𝗠𝗘𝗡 ☕",
				attachment: fs.createReadStream(__dirname + `/noprefix/women.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
