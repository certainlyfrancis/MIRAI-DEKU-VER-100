const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot3",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Akhirokiyoshi",
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

  var tl = ["𝖤𝗐𝗐, 𝗆𝗒 𝗆𝖺𝗌𝗍𝖾𝗋 𝗂𝗌 𝖺 𝗁𝖾𝗇𝗍𝖺𝗂 𝗅𝗈𝗏𝖾𝗋 🤮","𝖬𝖺𝗌𝗍𝖾𝗋 𝗐𝗈𝗎𝗅𝖽 𝗒𝗈𝗎 𝗉𝗅𝖾𝖺𝗌𝖾 𝗌𝗍𝗈𝗉 𝗆𝗈𝖺𝗇𝗂𝗇𝗀?","𝖬𝖺𝗌𝗍𝖾𝗋, 𝖨𝗆 𝖻𝖾𝗀𝗀𝗂𝗇𝗀 𝗒𝗈𝗎. 𝖯𝗅𝖾𝖺𝗌𝖾 𝗌𝗍𝗈𝗉 𝗆𝗈𝖺𝗇𝗂𝗇𝗀.","𝖬𝖺𝗌𝗍𝖾𝗋, 𝖲𝗍𝗈𝗉 𝗆𝗈𝖺𝗇𝗂𝗇𝗀!!"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

  if (event.body.indexOf("ugh") == 0 || (event.body.indexOf("Ugh") == 0 )) {
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