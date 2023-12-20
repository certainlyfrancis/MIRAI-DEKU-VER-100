const fs = require('fs');
const request = require('request');

module.exports.config = {
  name: "sendnoti5",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Clark",
  description: "Send notification messages to group chats",
  commandCategory: "announce",
  usages: "[message]",
  cooldowns: 5,
}

let atmDir = [];

const getAtm = (atm, body) => new Promise(async (resolve) => {
    let msg = {}, attachment = [];
    msg.body = body;
    for(let eachAtm of atm) {
        await new Promise(async (resolve) => {
            try {
                let response =  await request.get(eachAtm.url),
                    pathName = response.uri.pathname,
                    ext = pathName.substring(pathName.lastIndexOf(".") + 1),
                    path = __dirname + `/cache/${eachAtm.filename}.${ext}`
                response
                    .pipe(fs.createWriteStream(path))
                    .on("close", () => {
                        attachment.push(fs.createReadStream(path));
                        atmDir.push(path);
                        resolve();
                    })
            } catch(e) { console.log(e); }
        })
    }
    msg.attachment = attachment;
    resolve(msg);
})

module.exports.handleReply = async function ({ api, event, handleReply, Users, Threads }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Manila").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, body } = event;
    let name = await Users.getNameUser(senderID);
    switch (handleReply.type) {
        case "sendnoti5": {
            let text = `❂𝗨𝘀𝗲𝗿 𝗙𝗲𝗲𝗱𝗯𝗮𝗰𝗸 𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗲❂\n━━━━━━━━━━━━━━━━━━\n《𝗧𝗶𝗺𝗲》:\n${gio}\n\n《𝗥𝗲𝗽𝗹𝘆》:\n${body}\n\n《𝗡𝗮𝗺𝗲》:\n${name}\n\n《𝗚𝗿𝗼𝘂𝗽》:\n${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n━━━━━━━━━━━━━━━━━━\nℹ️ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗋𝖾𝗉𝗅𝗒 𝗍𝗁𝗂𝗌 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝗍𝗈 𝖼𝗈𝗇𝗍𝗂𝗇𝗎𝖾 𝖺𝗇𝗇𝗈𝗎𝗇𝖼𝗂𝗇𝗀 𝗂𝗇 𝗍𝗁𝖾 𝗀𝗋𝗈𝗎𝗉𝗌.`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `❂𝗨𝘀𝗲𝗿 𝗙𝗲𝗲𝗱𝗯𝗮𝗰𝗸 𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗲❂\n━━━━━━━━━━━━━━━━━━\n《𝗧𝗶𝗺𝗲》:\n${gio}\n\n《𝗥𝗲𝗽𝗹𝘆》:\n${body}\n\n《𝗡𝗮𝗺𝗲》:\n${name}\n\n《𝗚𝗿𝗼𝘂𝗽》:\n${(await Threads.getInfo(threadID)).threadName || "Unknow"}\n━━━━━━━━━━━━━━━━━━\nℹ️ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗋𝖾𝗉𝗅𝗒 𝗍𝗁𝗂𝗌 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝗍𝗈 𝖼𝗈𝗇𝗍𝗂𝗇𝗎𝖾 𝖺𝗇𝗇𝗈𝗎𝗇𝖼𝗂𝗇𝗀 𝗂𝗇 𝗍𝗁𝖾 𝗀𝗋𝗈𝗎𝗉𝗌.`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "reply",
                    messageID: info.messageID,
                    messID: messageID,
                    threadID
                })
            });
            break;
        }
        case "reply": {
            let text = `✿𝗠𝗲𝘀𝘀𝗮𝗴𝗲 𝗙𝗿𝗼𝗺 𝗔𝗱𝗺𝗶𝗻 𝗕𝗼𝘁✿\n━━━━━━━━━━━━━━━━━━\n《𝗧𝗶𝗺𝗲》:\n${gio}\n\n《𝗠𝗲𝘀𝘀𝗮𝗴𝗲》:\n${body}\n\n《𝗔𝗱𝗺𝗶𝗻 𝗡𝗮𝗺𝗲》:\n${name}\n━━━━━━━━━━━━━━━━━━\nℹ️ | 𝖱𝖾𝗉𝗅𝗒 𝗍𝗁𝗂𝗌 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝗂𝖿 𝗒𝗈𝗎 𝗐𝖺𝗇𝗍 𝗍𝗈 𝗋𝖾𝗌𝗉𝗈𝗇𝖽 𝗂𝗇 𝗍𝗁𝗂𝗌 𝖺𝗇𝗇𝗈𝗎𝗇𝖼𝖾\n━━━━━━━━━━━━━━━━━━`;
            if(event.attachments.length > 0) text = await getAtm(event.attachments, `✿𝗠𝗲𝘀𝘀𝗮𝗴𝗲 𝗙𝗿𝗼𝗺 𝗔𝗱𝗺𝗶𝗻 𝗕𝗼𝘁✿\n━━━━━━━━━━━━━━━━━━\n《𝗧𝗶𝗺𝗲》:\n${gio}\n\n《𝗠𝗲𝘀𝘀𝗮𝗴𝗲》:\n${body}\n\n《𝗔𝗱𝗺𝗶𝗻 𝗡𝗮𝗺𝗲》:\n${name}\n━━━━━━━━━━━━━━━━━━\nℹ️ | 𝖱𝖾𝗉𝗅𝗒 𝗍𝗁𝗂𝗌 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝗂𝖿 𝗒𝗈𝗎 𝗐𝖺𝗇𝗍 𝗍𝗈 𝗋𝖾𝗌𝗉𝗈𝗇𝖽 𝗂𝗇 𝗍𝗁𝗂𝗌 𝖺𝗇𝗇𝗈𝗎𝗇𝖼𝖾\n━━━━━━━━━━━━━━━━━━`);
            api.sendMessage(text, handleReply.threadID, (err, info) => {
                atmDir.forEach(each => fs.unlinkSync(each))
                atmDir = [];
                global.client.handleReply.push({
                    name: this.config.name,
                    type: "sendnoti5",
                    messageID: info.messageID,
                    threadID
                })
            }, handleReply.messID);
            break;
        }
    }
}

module.exports.run = async function ({ api, event, args, Users }) {
    const moment = require("moment-timezone");
      var gio = moment.tz("Asia/Manila").format("DD/MM/YYYY - HH:mm:s");
    const { threadID, messageID, senderID, messageReply } = event;
    if (!args[0]) return api.sendMessage("ℹ️ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗄𝗂𝗇𝖽𝗅𝗒 𝗂𝗇𝗉𝗎𝗍 𝗌𝗈𝗆𝖾 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝗍𝗈 𝖺𝗇𝗇𝗈𝗎𝗇𝖼𝖾...", threadID);
    let allThread = global.data.allThreadID || [];
    let can = 0, canNot = 0;
    let text = `✿𝗠𝗲𝘀𝘀𝗮𝗴𝗲 𝗙𝗿𝗼𝗺 𝗔𝗱𝗺𝗶𝗻 𝗕𝗼𝘁✿\n━━━━━━━━━━━━━━━━━━\n\n《𝗧𝗶𝗺𝗲》:\n${gio}\n\n《𝗠𝗲𝘀𝘀𝗮𝗴𝗲》:\n${args.join(" ")}\n\n《𝗔𝗱𝗺𝗶𝗻 𝗡𝗮𝗺𝗲》:\n${await Users.getNameUser(senderID)} \n━━━━━━━━━━━━━━━━━━\nℹ️ | 𝖱𝖾𝗉𝗅𝗒 𝗍𝗁𝗂𝗌 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝗂𝖿 𝗒𝗈𝗎 𝗐𝖺𝗇𝗍 𝗍𝗈 𝗋𝖾𝗌𝗉𝗈𝗇𝖽 𝗂𝗇 𝗍𝗁𝗂𝗌 𝖺𝗇𝗇𝗈𝗎𝗇𝖼𝖾\n━━━━━━━━━━━━━━━━━━`;
    if(event.type == "message_reply") text = await getAtm(messageReply.attachments, `✿𝗠𝗲𝘀𝘀𝗮𝗴𝗲 𝗙𝗿𝗼𝗺 𝗔𝗱𝗺𝗶𝗻 𝗕𝗼𝘁✿\n━━━━━━━━━━━━━━━━━━\n\n《𝗧𝗶𝗺𝗲》:\n${gio}\n\n《𝗠𝗲𝘀𝘀𝗮𝗴𝗲》:\n${args.join(" ")}\n\n《𝗔𝗱𝗺𝗶𝗻 𝗡𝗮𝗺𝗲》:\n${await Users.getNameUser(senderID)} \n━━━━━━━━━━━━━━━━━━\nℹ️ | 𝖱𝖾𝗉𝗅𝗒 𝗍𝗁𝗂𝗌 𝗆𝖾𝗌𝗌𝖺𝗀𝖾 𝗂𝖿 𝗒𝗈𝗎 𝗐𝖺𝗇𝗍 𝗍𝗈 𝗋𝖾𝗌𝗉𝗈𝗇𝖽 𝗂𝗇 𝗍𝗁𝗂𝗌 𝖺𝗇𝗇𝗈𝗎𝗇𝖼𝖾\n━━━━━━━━━━━━━━━━━━`);
    await new Promise(resolve => {
        allThread.forEach((each) => {
            try {
                api.sendMessage(text, each, (err, info) => {
                    if(err) { canNot++; }
                    else {
                        can++;
                        atmDir.forEach(each => fs.unlinkSync(each))
                        atmDir = [];
                        global.client.handleReply.push({
                            name: this.config.name,
                            type: "sendnoti5",
                            messageID: info.messageID,
                            messID: messageID,
                            threadID
                        })
                        resolve();
                    }
                })
            } catch(e) { console.log(e) }
        })
    })
    api.sendMessage(`✅ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗌𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒 𝗌𝖾𝗇𝗍 𝗍𝗈 《${can}》 𝗀𝗋𝗈𝗎𝗉𝗌\n\n❎ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝖿𝖺𝗂𝗅𝖾𝖽 𝗍𝗈 𝗌𝖾𝗇𝖽 𝗍𝗈 《${canNot}》 𝗀𝗋𝗈𝗎𝗉`, threadID);
                }