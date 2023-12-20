const fs = require("fs");
module.exports.config = {
	name: "sad",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "John Lester", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("sakit") || react.includes("Sakit") || react.includes("saket") || react.includes("Saket") || react.includes("peyn") || react.includes("Peyn") || react.includes("Pain") || react.includes("mamatay") || react.includes("Mamatay") || react.includes("ayaw ko na") || react.includes("Ayaw ko na") || react.includes("saktan") || react.includes("Saktan") || react.includes("Sasaktan") || react.includes("sasaktan") || react.includes("sad") || react.includes("Sad") || react.includes("malungkot") || react.includes("Malungkot") || react.includes("😥") || react.includes("😰") || react.includes("😨") || react.includes("😢") || react.includes(":(") || react.includes("😔") || react.includes("😞") || react.includes("depress") || react.includes("stress") || react.includes("Stress") || react.includes("Depress") || react.includes("depression") || react.includes("Depression") || react.includes("kalungkutan") || react.includes("Kalungkutan") || react.includes("😭")) {
		var msg = {
				body: "𝖣𝖺𝗋𝗅𝗂𝗇𝗀, 𝗐𝗁𝗒 𝖺𝗋𝖾 𝗒𝗈𝗎 𝗌𝖺𝖽?, 𝖣𝗈𝖾𝗌 𝖺𝗇𝗒𝗈𝗇𝖾 𝗁𝗎𝗋𝗍 𝗒𝗈𝗎𝗋 𝖿𝖾𝖾𝗅𝗂𝗇𝗀𝗌?, 𝖣𝗈𝗇𝗍 𝗐𝗈𝗋𝗋𝗒 𝖨𝗆 𝖺𝗅𝗐𝖺𝗒𝗌 𝗁𝖾𝗋𝖾 𝖿𝗈𝗋 𝗒𝗈𝗎 𝖾𝗏𝖾𝗇 𝗒𝗈𝗎 𝖺𝗋𝖾 𝗌𝖺𝖽. 𝖮𝗁 𝖼𝗈𝗆𝖾 𝗁𝖾𝗋𝖾 𝗅𝖾𝗆𝗆𝖾 𝗁𝗎𝗀 𝗒𝗈𝗎. 𝖨 𝗁𝗈𝗉𝖾 𝗒𝗈𝗎 𝗐𝗂𝗅𝗅 𝖿𝖾𝖾𝗅𝗂𝗇𝗀 𝖻𝖾𝗍𝗍𝖾𝗋 𝗍𝗈𝖽𝖺𝗒. 𝖣𝗈𝗇𝗍 𝖻𝖾 𝗌𝖺𝖽 𝗂𝗆 𝖺𝗅𝗐𝖺𝗒𝗌 𝗁𝖾𝗋𝖾 𝖿𝗈𝗋 𝗒𝗈𝗎 𝖽𝖺𝗋𝗅𝗂𝗇𝗀 🥰\n*/𝗄𝗂𝗌𝗌𝖾𝖽 𝗒𝗈𝗎𝗋 𝖿𝗈𝗋𝖾𝗁𝖾𝖺𝖽."
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😢", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }