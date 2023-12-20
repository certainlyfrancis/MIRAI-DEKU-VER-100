 module.exports.config = {
  name: "helpall",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "Réynél Eśquível",
  description: "Beginner's Guide To All Bot Commands",
  commandCategory: "Guide",
  usages: "helpall [listbox]",
  cooldowns: 7,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 500
  }
};

module.exports.languages = {
  //"vi": {
  //	"moduleInfo": "「 %1 」\n%2\n\n❯ Cách sử dụng: %3\n❯ Thuộc nhóm: %4\n❯ Thời gian chờ: %5 giây(s)\n❯ Quyền hạn: %6\n\n» Module code by %7 «",
  //	"helpList": '[ Hiện tại đang có %1 lệnh có thể sử dụng trên bot này, Sử dụng: "%2help nameCommand" để xem chi tiết cách sử dụng! ]"',
  //	"user": "Người dùng",
  //      "adminGroup": "Quản trị viên nhóm",
  //      "adminBot": "Quản trị viên bot"
//	},
  "en": {
    "moduleInfo": "「 %1 」\n%2\n\n❯ ᴜsᴀɢᴇ: %3\n❯ ᴄᴀᴛᴇɢᴏʀʏ: %4\n❯ ᴡᴀɪᴛɪɴɢ ᴛɪᴍᴇ: %5 sᴇᴄᴏɴᴅ(s)\n❯ ᴘᴇʀᴍɪssɪᴏɴ: %6\n\n» ᴍᴏᴅᴜʟᴇ ᴄᴏᴅᴇ ʙʏ %7 «",
    "helpList": '[ sᴇɴsᴇɪ, ᴛʜᴇʀᴇ ᴀʀᴇ %1 ᴄᴏᴍᴍᴀɴᴅs ᴏɴ ᴛʜɪs ʙᴏᴛ, ᴜsᴇ: "%2𝒉𝒆𝒍𝒑 ᴄᴏᴍᴍᴀɴᴅ ɴᴀᴍᴇ" ᴛᴏ ᴋɴᴏᴡ ʜᴏᴡ ᴛᴏ ᴜsᴇ! ]',
    "user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
  }
};

module.exports.handleEvent = function ({ api, event, getText }) {
  const { commands } = global.client;
  const { threadID, messageID, body } = event;

  if (!body || typeof body == "undefined" || body.indexOf("help") != 0) return;
  const splitBody = body.slice(body.indexOf("help")).trim().split(/\s+/);
  if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const command = commands.get(splitBody[1].toLowerCase());
  const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
}

module.exports. run = function({ api, event, args, getText }) {
  const { commands } = global.client;
  const { threadID, messageID } = event;
  const command = commands.get((args[0] || "").toLowerCase());
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
  const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

  if (!command) {
    const arrayInfo = [];
    const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 9999;
    //*số thứ tự 1 2 3.....cú pháp ${++i}*//
    let i = 0;
    let msg = "";

    for (var [name, value] of (commands)) {
      name += ``;
      arrayInfo.push(name);
    }

    arrayInfo.sort((a, b) => a.data - b.data);

    const startSlice = numberOfOnePage*page - numberOfOnePage;
    i = startSlice;
    const returnArray = arrayInfo.slice(startSlice, startSlice + numberOfOnePage);

    for (let item of returnArray) msg += `《 ${++i} 》${prefix}${item}\n`;


    const siu = `❁*°*•̩̩͙✩•̩̩͙*˚˚ ⟬🅕︎🅐︎🅑︎⟭ ˚˚*•̩̩͙✩•̩̩͙*˚*❁\n𒈔♛┈⛧┈┈•༶❁༶•┈┈⛧┈♛𒈔\n⫸＊*•̩̩͙✩•̩̩͙*˚  ˚*•̩̩͙✩•̩̩͙*˚ ˚*•̩̩͙✩•̩̩͙*˚＊⫷\n\n         𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗟𝗜𝗦𝗧𝗦`;

 const text = `\n[ 𝗡𝗢𝗧𝗘 ] 𝖳𝗁𝗂𝗌 𝗂𝗌 𝗍𝗁𝖾 𝗐𝗁𝗈𝗅𝖾 𝖼𝗈𝗆𝗆𝖺𝗇𝖽 𝗆𝖺𝖽𝖾 𝖻𝗒 𝖠𝗄𝗁𝗂𝗋𝗈𝗄𝗂𝗒𝗈𝗌𝗁𝗂 ( ғʀᴀɴᴄɪs ʟᴏʏᴅ ) 𝗌𝗈 𝖿𝖺𝗋. 𝖲𝗈 𝗉𝗅𝖾𝖺𝗌𝖾 𝖽𝗈𝗇𝗍 𝗌𝗉𝖺𝗆 𝗍𝗁𝗂𝗌 𝖻𝗈𝗍 𝗍𝗈 𝖺𝗏𝗈𝗂𝖽 𝗀𝖾𝗍𝗍𝗂𝗇𝗀 𝖽𝖾𝗍𝖾𝖼𝗍𝖾𝖽 𝖻𝗒 𝖬𝖾𝗍𝖺.`;

    return api.sendMessage(siu + "\n\n" + msg  + text, threadID, async (error, info) => {
      if (autoUnsend) {
        await new Promise(resolve => setTimeout(resolve, delayUnsend * 1000));
        return api.unsendMessage(info.messageID);
      } else return;
    }, event.messageID);
  }

  return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
};