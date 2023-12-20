module.exports.config = {
	name: "baybayin",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Joshua Sy",
	description: "text to baybayin",
  usages: "[text]",
	commandCategory: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://api-baybayin-transliterator.vercel.app/?text=${juswa}`);
var a = res.data.baybay;
return api.sendMessage(`${a}`, event.threadID, event.messageID);
}