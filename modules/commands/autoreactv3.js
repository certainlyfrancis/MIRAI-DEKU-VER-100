const fs = require("fs");
module.exports.config = {
        name: "autoreactv3",
  version: "1.0.0",
        hasPermssion: 0,
        credits: "Minami Tatsuo",
        description: "\u0041\u0075\u0074\u006f \u0072\u0065\u0061\u0063\u0074\u0069\u006f\u006e \u006d\u0061\u0064\u0065 \u0062\u0079 \u004d\u0069\u006e\u0061\u006d\u0069 \u0054\u0061\u0074\u0073\u0075\u006f",
        commandCategory: "no prefix",
        usages: "noprefix",
    cooldowns: 0,
};
 
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
 let haha = event.body.toLowerCase();
  if (this.config.credits != '\u004d\u0069\u006e\u0061\u006d\u0069 \u0054\u0061\u0074\u0073\u0075\u006f') {
        console.log('\x1b[33m[ WARN ]\x1b[37m » \u0043\u0072\u0065\u0064\u0069\u0074\u0073 \u0068\u0061\u0073 \u0062\u0065\u0065\u006e \u0063\u0068\u0061\u006e\u0067\u0065\u0064\u0021 \u0053\u0074\u006f\u0070 \u004e\u006f\u0077\u0021'+ global.config.BOTNAME + ' đổi credits modules "' + this.config.name + '"');
        return api.sendMessage('[ WARN ] \u0053\u0054\u004f\u0050 \u0043\u0048\u0041\u004e\u0047\u0049\u004e\u0047 \u0043\u0052\u0045\u0044\u0049\u0054\g \u0049\u0044\u0049\u004f\u0054 ' , event.threadID, event.messageID);
      }
  if (haha.includes("lol") || haha.includes("lmao") || haha.includes("haha") || haha.includes("xd") || haha.includes("puta") || haha.includes("gagu") || haha.includes("tanga") || haha.includes("tanginamo") || haha.includes("hayup") || haha.includes("bobo") || haha.includes("iyot") || haha.includes("ampt") || haha.includes("ampta") || haha.includes("gago")){
                 return api.setMessageReaction("😆", event.messageID, (err) => {}, true)
    api.markAsSeen(1, (err) => {});
  }
    if (haha.includes("aray") || haha.includes("hays") || haha.includes("sakit") || haha.includes("ouch") || haha.includes("hurt") || haha.includes("please") || haha.includes("😢") || haha.includes("😔") || haha.includes("🥺") || haha.includes("sad")){
      return  api.setMessageReaction("😢", event.messageID, (err) => {}, true);
}
  if (haha.includes("wow") || haha.includes("luh") || haha.includes("sheesh") || haha.includes("damn") || haha.includes("yes") || haha.includes("weh") || haha.includes("loh") || haha.includes("hala") || haha.includes("lah") || haha.includes("what") || haha.includes("omg")){
    return api.setMessageReaction("😮", event.messageID, (err) => {}, true)
        }
  if (haha.includes("nigga") || haha.includes("nigg")){
    api.setMessageReaction("🧐", event.messageID, (err) => {}, true)
    api.sendMessage("🧐 | 𝖧𝗆𝗆.. 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗐𝗁𝗒 𝖺𝗋𝖾 𝗒𝗈𝗎 𝗌𝖺𝗒𝗂𝗇𝗀 𝗍𝗁𝗈𝗌𝖾 𝗐𝗈𝗋𝖽𝗌? 𝗎𝗀𝗁 𝖨 𝗁𝖺𝗍𝖾 𝗋𝖺𝖼𝗂𝗌𝗍 𝗉𝖾𝗈𝗉𝗅𝖾 𝗅𝗂𝗄𝖾 𝗒𝗈𝗎.", event.threadID,event.messageID);
  }
 /* if (haha.includes("bot") || haha.includes("robot")){
    api.sendMessage("I'm here", event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: 377954575923640}, event.threadID);
      }, 100)
    }, event.messageID)
} */
  if (haha.includes("if there be no sunlight") || haha.includes("if there be no sunlight")){
    api.sendMessage("𝖨𝖿 𝖨 𝗅𝗈𝗌𝖾 𝗒𝗈𝗎 𝖻𝖺𝖻𝗒", event.threadID, event.messageID)
  }
  if (haha.includes("there be no clear skies") || haha.includes("there be no clear skies")){
    api.sendMessage("𝖨𝖿 𝖨 𝗅𝗈𝗌𝖾 𝗒𝗈𝗎 𝖻𝖺𝖻𝗒", event.threadID, event.messageID)
  }
if (haha.includes("just like the clouds") || haha.includes("just like the clouds")){
    api.sendMessage("𝗆𝗒 𝖾𝗒𝖾𝗌 𝗐𝗂𝗅𝗅 𝖽𝗈 𝗍𝗁𝖾 𝗌𝖺𝗆𝖾", event.threadID, event.messageID)
}
if (haha.includes("if you walk away") || haha.includes("if you walk away")){
    api.sendMessage("𝖤𝗏𝖾𝗋𝗒𝖽𝖺𝗒 𝗂𝗍 𝗐𝗂𝗅𝗅 𝗋𝖺𝗂𝗇", event.threadID, event.messageID)
}
  if (haha.includes("rain") || haha.includes("rain")){
    api.sendMessage("𝗋𝖺𝗂-𝖺-𝖺-𝖺𝗇", event.threadID, event.messageID)
      }
if (haha.includes("saan ka?") || haha.includes("saan?")){
    api.sendMessage("𝖬𝖺𝗌𝗍𝖾𝗋, 𝗆𝖺𝗒 𝖨 𝖺𝗌𝗄? 𝖨𝗌 𝗍𝗁𝖺𝗍 𝗊𝗎𝖾𝗌𝗍𝗂𝗈𝗇 𝖿𝗈𝗋 𝗆𝖾?", event.threadID, event.messageID)
      }
if (haha.includes("francis") || haha.includes("francis")){
    api.sendMessage("𝖬𝗒 𝗆𝖺𝗌𝗍𝖾𝗋 𝗂𝗌 𝖻𝗎𝗌𝗒, 𝗉𝗅𝖾𝖺𝗌𝖾 𝗌𝗍𝗈𝗉 𝗆𝖾𝗇𝗍𝗂𝗈𝗇 𝗁𝗂𝗆.", event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: 529233764205652}, event.threadID);
      }, 100)
    }, event.messageID)
      }
}
        module.exports.run = function({ api, event, client, __GLOBAL }) {
                                                                                                                                                                                                 }