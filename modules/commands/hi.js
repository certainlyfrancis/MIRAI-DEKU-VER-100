module.exports.config = {
  name: "hi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Sam",
  description: "hi gửi sticker",
  commandCategory: "QTV BOX",
  usages: "[text]",
  cooldowns: 5
}

module.exports.handleEvent = async ({ event, api, Users }) => {
  let KEY = [ 
    "hello",
    "hi",
    "hello po",
    "hi po",
    "hiii",
    "helloo",
    "loe",
    "low",
    "lo",
    "hey",
    "heyy",
    "loe po",
    "low po",
    "hai",
    "chào",
    "chao",
    "hí",
    "híí",
    "hì",
    "hìì",
    "lô",
    "helo",
    "hê nhô",
    "yo",
    "wazzup",
    "wassup",
    "hey",
    "halloo",
    "hola"
  ];
  let thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["hi"] == "undefined", thread["hi"] == false) return
  else {
  if (KEY.includes(event.body.toLowerCase()) !== false) {
    let data = [
      "422812141688367", "1775288509378520", "476426593020937", "476420733021523", "147663618749235", "466041158097347", "1528732074026137", "147663618749235", "476426753020921", "529233794205649", "1330360453820546"
    ];
    let sticker = data[Math.floor(Math.random() * data.length)];
let juswa = ["have you eaten?", "what are you doing?", "how are you senpai?", "I'm a chat bot nice to meet you", "I'm updating my commands, what are you doing?", "Can you interact with me using sim command?","You're so beautiful/handsome binibini/ginoo", "I love you mwa */kiss your forehead.","are you bored? talk to my admin", "how are you my dear", "eat some sweets", "are you ok?", "be safe", ""];
 let juswa1 = juswa[Math.floor(Math.random() * juswa.length)];

    let moment = require("moment-timezone");
    let hours = moment.tz('Asia/Manila').format('HHmm');
    let session = (
    hours > 0001 && hours <= 400 ? "bright morning" : 
    hours > 401 && hours <= 700 ? "morning" :
    hours > 701 && hours <= 1000 ? "morning" :
    hours > 1001 && hours <= 1100 ? "morning" : 
    hours > 1100 && hours <= 1500 ? "afternoon" : 
    hours > 1501 && hours <= 1800 ? "evening" : 
    hours > 1801 && hours <= 2100 ? "evening" : 
    hours > 2101 && hours <= 2400 ? "late night and advance sleepwel" : 
    "error");
    let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    let msg = {body: `👋 | 𝖧𝖾𝗅𝗅𝗈 𝗍𝗁𝖾𝗋𝖾 𝗆𝖺𝗌𝗍𝖾𝗋 ${name}, 𝗁𝖺𝗏𝖾 𝗀𝗈𝗈𝖽 𝖺𝗇𝖽 𝖺 𝗉𝗅𝖾𝖺𝗌𝖺𝗇𝗍 ${session} 𝗍𝗈 𝗒𝗈𝗎 𝗆𝖺𝗌𝗍𝖾𝗋, ${juswa1}`, mentions}
    api.sendMessage(msg, event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: sticker}, event.threadID);
      }, 100)
    }, event.messageID)
  }
  }
}

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
		"successText": `${this.config.name} thành công`,
	},
	"en": {
		"on": "on",
		"off": "off",
		"successText": `${this.config.name} success!`,
	}
}

module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
	if (typeof data["hi"] == "undefined" || data["hi"] == true) data["hi"] = false;
	else data["hi"] = true;
	await Threads.setData(threadID, {
		data
	});
	global.data.threadData.set(threadID, data);
	return api.sendMessage(`${(data["hi"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}