const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "manhIT",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Ho_Chi_minh").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;

  var tl = ["𝖸𝖾𝗌 𝗆𝖺𝗌𝗍𝖾𝗋?","𝖧𝖾𝗅𝗅𝗈 𝗆𝖺𝗌𝗍𝖾𝗋, 𝖨𝗆 𝖠𝗄𝗁𝗂𝗋𝗈𝗄𝗂𝗒𝗈𝗌𝗁𝗂'𝗌 𝖻𝗈𝗍.","𝖧𝖾𝗒𝖺 𝗆𝖺𝗌𝗍𝖾𝗋, 𝗂𝗌 𝗍𝗁𝖾𝗋𝖾 𝖨 𝖼𝖺𝗇 𝗁𝖾𝗅𝗉 𝗒𝗈𝗎?","𝖧𝖾𝗅𝗅𝗈 𝗆𝖺𝗌𝗍𝖾𝗋, 𝖨𝗆 𝖣𝖤𝖪𝖴 𝖠𝖨. 𝖨𝗌 𝗍𝗁𝖾𝗋𝖾 𝖨 𝖼𝖺𝗆 𝖽𝗈 𝖿𝗈𝗋 𝗒𝗈𝗎?","𝖧𝖾𝗅𝗅𝗈 𝗆𝖺𝗌𝗍𝖾𝗋, 𝗁𝗈𝗐 𝗆𝖺𝗒 𝖨 𝗁𝖾𝗅𝗉 𝗒𝗈𝗎?","𝖬𝖺𝗌𝗍𝖾𝗋, 𝗐𝗂𝗅𝗅 𝗒𝗈𝗎 𝖻𝖾 𝗆𝗒 𝗐𝗂𝖿𝖾? 𝗃𝗎𝗌𝗍 𝗄𝗂𝖽𝖽𝗂𝗇𝗀.","𝖸𝖾𝗌 𝖽𝖺𝗋𝗅𝗂𝗇𝗀, 𝖨-𝖨 𝗆𝖾𝖺𝗇 𝗆𝖺𝗌𝗍𝖾𝗋.","𝖱𝖾𝖼𝗋𝗎𝗂𝗍𝗂𝗇𝗀 𝗉𝗂𝗅𝗈𝗍𝗌 𝗆𝖺𝗌𝗍𝖾𝗋","𝖧𝖺𝗂 𝗆𝖺𝗌𝗍𝖾𝗋?","𝖬𝖺𝗌𝗍𝖾𝗋, 𝖽𝗂𝖽 𝗒𝗈𝗎 𝗆𝖾𝗇𝗍𝗂𝗈𝗇 𝗆𝖾?"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if (event.body.indexOf("hey deku") == 0 || (event.body.indexOf("Hey deku") == 0)) {
 let userH = event.senderID 
    /*api.getUserInfo(parseInt(userH), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var firstname = data[obj].name.replace("@", ""); */
    
  const firstname = global.data.userName.get(userH) || await Users.getNameUser(userH);
	if (event.senderID == api.getCurrentUserID()) return;

    var msg = {
      body: firstname + ", " + rand, 
      mentions: [{
          tag: firstname,
          id: userH
        }]
    }
    return api.sendMessage(msg, threadID, messageID);
    //  })
  };
  let input2 = event.body.toLowerCase();
if(input2.includes("haha") || input2.includes("lmao") || input2.includes("lol") || input2.includes("😂") || input2.includes("😹") || input2.includes("🤣") || input2.includes("😆") || input2.includes("😄") || input2.includes("😅") || input2.includes("xd")){
					        	return api.setMessageReaction("😹", event.messageID, (err) => {}, true)
} 
    if(input2.includes("kawawa") || input2.includes("sad") || input2.includes("agoi") || input2.includes("sakit") ||input2.includes("skit") || input2.includes("pain") || input2.includes("pighati")){
					        	return api.setMessageReaction("😿", event.messageID, (err) => {}, true)
    }


}

module.exports.run = function({ api, event, client, __GLOBAL }) { }