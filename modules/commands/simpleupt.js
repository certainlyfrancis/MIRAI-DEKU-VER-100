module.exports.config = {
	name: "uptt",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "simple upt",
	commandCategory: "...",
	cooldowns: 1,
  };
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
  const res = await api.getUserInfoV2(event.senderID);
var name = res.name; 
  return api.sendMessage(`Hello master ${name}, bot is running ${hours} hour(s) ${minutes} minute(s) ${seconds} second(s)`,event.threadID, event.messageID);
}