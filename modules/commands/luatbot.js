const fs = require("fs");
module.exports.config = {
	name: "botrule",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Siegfried Sama", 
	description: "no prefix",
	commandCategory: "No command marks needed",
	usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("about")==0 || (event.body.indexOf("About")==0 || (event.body.indexOf("rule")==0 || (event.body.indexOf("Rule")==0)))) {
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Manila").format("HH:mm:ss || D/MM/YYYY");
		var msg = {
				body: "Take Note to Beginner Users Who Are New to Using This Chatbot\n❯ SourceCode ChatBot Made By Miraiteam & mod by Siegfried Sama\n❯ Users Avoid Spam Bot More than 20 Times/Day If Spam Bot 20 Times/Day Same"
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}