const fs = require("fs");
module.exports.config = {
	name: "birthday",
    version: "1.0.0",
	hasPermssion: 0,
	credits: "Siegfried Sama", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Happy Birthday")==0 || (event.body.indexOf("happy birthday")==0 || (event.body.indexOf("Happy bday")==0 || (event.body.indexOf("happy bday")==0 || (event.body.indexOf("hbd")==0 || (event.body.indexOf("Hbd")==0)))))) {
		var msg = {
				body: "HAPPY BIRTHDAY from Siegfried Bot and your Family, may you have the best day ever!",
				attachment: fs.createReadStream(__dirname + `/noprefix/birthday.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}