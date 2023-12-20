const fs = require("fs");
module.exports.config = {
	name: "lc",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "John Arida", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("lc")==0 || (event.body.indexOf("lastchat")==0 || (event.body.indexOf("Last chat")==0 || (event.body.indexOf("last chat")==0)))) {
		var msg = {
				body: "╭────༺♡༻────╮\n         In Loving Memories\n          —𝐋𝐀𝐒𝐓 𝐂𝐇𝐀𝐓— ╰────༺♡༻────╯"
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
