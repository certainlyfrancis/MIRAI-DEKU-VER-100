module.exports.config = {
    name: "biblesearch",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Réynél",
    description: "Search for bible verse.",
    commandCategory: "bible",
    usages: "[John 3:16]",
    cooldowns: 2,
};
module.exports.run = async function({ api, event, args }) {
const axios = require("axios");
let { messageID, threadID, senderID, body } = event;
const responce = args.join(" ");
if (!args[0]) return api.sendMessage("❎ | 𝖲𝖾𝗂𝗌𝗁𝗈̄, 𝗍𝗁𝖺𝗍 𝗂𝗌 𝖺 𝗐𝗋𝗈𝗇𝗀 𝖿𝗈𝗋𝗆𝖺𝗍 𝗈𝖿 𝗍𝗁𝖾 𝖼𝗈𝗆𝗆𝖺𝗇𝖽.. \n"+global.config.PREFIX+this.config.name+" "+this.config.usages, threadID, messageID);
try {
api.sendMessage("🔍 | 𝖲𝖾𝗂𝗌𝗁𝗈̄, 𝖨'𝗆 𝗌𝖾𝖺𝗋𝖼𝗁𝗂𝗇𝗀 𝖿𝗈𝗋 "+responce, threadID, messageID);
const res = await axios.get(`https://bible-api.com/${responce}?translation=kjv`);
var bible = res.data.reference;
var bible2 = res.data.text;
var bible3 = res.data.error;
api.sendMessage("𝗩𝗲𝗿𝘀𝗲: "+bible+"\n\n"+bible2, threadID , messageID);
} catch (error) {
api.sendMessage("❎ | 𝖦𝗈𝗆𝖾𝗇𝗇𝖺𝗌𝖺𝗂 𝖲𝖾𝗂𝗌𝗁𝗈̄, 𝖻𝗎𝗍 𝖺𝗇 𝖾𝗋𝗋𝗈𝗋 𝗈𝖼𝖼𝗎𝗋𝗋𝖾𝖽 𝗐𝗁𝗂𝗅𝖾 𝗆𝖺𝗄𝗂𝗇𝗀 𝗍𝗁𝖾 𝖠𝖯𝖨 𝗋𝖾𝗊𝗎𝖾𝗌𝗍.", threadID , messageID);
}
};