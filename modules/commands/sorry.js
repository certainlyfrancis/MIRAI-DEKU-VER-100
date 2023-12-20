module.exports.config = {
  name: "sorry",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "Réynél",
  description: "Continuously tag the person you tagged for 5 times\nYou can call that person's soul",
  commandCategory: "admin",
  usages: "[@mention]",
  cooldowns: 10,
  dependencies: {
    "fs-extra": "",
    "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("👋 | 𝖧𝗂 𝗅𝗈𝗏𝖾, 𝖺𝗋𝖾 𝗒𝗈𝗎 𝗆𝖺𝖽? ", event.threadID);
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("𝗌𝗈𝗋𝗋𝗒 𝗉𝗈 🥺🥺");
setTimeout(() => {a({body: "𝖨 𝗃𝗎𝗌𝗍 𝗐𝖺𝗇𝗍 𝗍𝗈 𝗍𝖾𝗅𝗅 𝗒𝗈𝗎 𝗈𝗇𝖾 𝗍𝗁𝗂𝗇𝗀, 𝖨 𝗅𝗈𝗏𝖾 𝗒𝗈𝗎 𝗌𝗈 𝗆𝗎𝖼𝗁" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "𝖾𝗏𝖾𝗇 𝗌𝗈𝗆𝖾𝗍𝗂𝗆𝖾𝗌 𝗐𝖾 𝖽𝗈𝗇'𝗍 𝗎𝗇𝖽𝖾𝗋𝗌𝗍𝖺𝗇𝖽 𝖾𝖺𝖼𝗁 𝗈𝗍𝗁𝖾𝗋" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "𝗅𝗈𝗏𝖾, 𝖨 𝗁𝗈𝗉𝖾 𝗒𝗈𝗎 𝗐𝗂𝗅𝗅 𝖿𝗈𝗋𝗀𝗂𝗏𝖾 𝗆𝖾" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: " 𝖸𝗈𝗎 𝗄𝗇𝗈𝗐 𝗅𝗈𝗏𝖾, 𝖨 𝖽𝗈𝗇'𝗍 𝗐𝖺𝗇𝗍 𝗍𝗈 𝗅𝗈𝗌𝖾 𝗒𝗈𝗎 𝖺𝗇𝗒𝗆𝗈𝗋𝖾" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "𝖨'𝗆 𝗌𝗈𝗋𝗋𝗒 𝗆𝗒 𝗅𝗈𝗏𝖾 𝖿𝗈𝗋 𝗐𝗁𝖺𝗍 𝖨 𝖽𝗂𝖽" + " " +  name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "𝗍𝗁𝖺𝗍 𝗐𝖾 𝗃𝗎𝗌𝗍 𝗆𝗂𝗌𝗎𝗇𝖽𝖾𝗋𝗌𝗍𝗈𝗈𝖽 𝗁𝖾𝗁𝖾" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "𝖨 𝗁𝗈𝗉𝖾 𝗐𝖾 𝖼𝖺𝗇 𝗀𝖾𝗍 𝖺𝗅𝗈𝗇𝗀 𝗉𝗅𝖾𝖺𝗌𝖾" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "𝖣𝗈𝗇'𝗍 𝖻𝖾 𝖺𝗇𝗀𝗋𝗒, 𝗅𝗈𝗏𝖾" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "𝖨'𝗆 𝗋𝖾𝖺𝗅𝗅𝗒 𝗌𝗈𝗋𝗋𝗒 🥺" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "𝗒𝗂𝖾𝖾 𝖽𝗈𝗇'𝗍 𝖻𝖾 𝖺𝗇𝗀𝗋𝗒 𝖺𝗇𝗒𝗆𝗈𝗋𝖾 𝗉𝗅𝖾𝖺𝗌𝖾 𝗅𝗈𝗏𝖾" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "𝖨'𝗅𝗅 𝗄𝗂𝗌𝗌 𝗒𝗈𝗎 𝗄𝗌𝗄𝗌𝗄𝗌" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "*/𝗄𝗂𝗌𝗌𝖾𝖽 𝗒𝗈𝗎𝗋 𝗍𝗁𝗂𝗀𝗁" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "*/𝗄𝗂𝗌𝗌𝖾𝖽 𝗒𝗈𝗎𝗋 𝖿𝗈𝗋𝖾𝗁𝖾𝖺𝖽" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "*/𝗄𝗂𝗌𝗌𝖾𝖽 𝗒𝗈𝗎𝗋 𝖼𝗁𝖾𝖾𝗄'𝗌" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "*/𝗄𝗂𝗌𝗌𝖾𝖽 𝗒𝗈𝗎𝗋 𝗅𝗂𝗉𝗌" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "𝗆𝗐𝖺𝖺𝖺𝖺𝗁𝗁𝗁" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "𝖫𝖾𝗍'𝗌 𝗀𝖾𝗍 𝖺𝗅𝗈𝗇𝗀 😚" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "𝗒𝗈𝗎'𝗋𝖾 𝗌𝗍𝗂𝗅𝗅 𝗆𝖺𝖽? 😭😭" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "𝖽𝗈𝗇'𝗍 𝗒𝗈𝗎 𝗅𝗈𝗏𝖾 𝗆𝖾? 🥺 " + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "𝖨'𝗅𝗅 𝖼𝗋𝗒 𝖺𝗅𝗅 𝗋𝗂𝗀𝗁𝗍 🥺" + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a("𝖨'𝗆 𝗃𝗎𝗌𝗍 𝗄𝗂𝖽𝖽𝗂𝗇𝗀 𝗆𝗒 𝗅𝗈𝗏𝖾, 𝖨'𝗆 𝗌𝗈𝗋𝗋𝗒 𝗉𝗅𝖾𝖺𝗌𝖾 🥺")} , 90000);
setTimeout(() => {a({body: "𝖨 𝗆𝗂𝗌𝗌 𝗒𝗈𝗎" + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: " 𝗉𝗅𝖾𝖺𝖺𝖺𝗌𝖾𝖾, 𝖨'𝗆 𝗌𝗈𝗋𝗋𝗒 𝗆𝗒 𝗅𝗈𝗏𝖾, 𝖨'𝗆 𝗋𝖾𝖺𝗅𝗅𝗒 𝗋𝖾𝖺𝗅𝗅𝗒 𝗌𝗈𝗋𝗋𝗒 🥺" + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: "𝖨 𝗅𝗈𝗏𝖾 𝗒𝗈𝗎𝗎𝗎𝗎𝗎𝗎𝗎 😽😽😽" + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a("𝖸𝗈𝗎'𝗋𝖾 𝗁𝖺𝗇𝖽𝗌𝗈𝗆𝖾 𝗆𝗒 𝗅𝗈𝗏𝖾 ^>^")} , 110000);



      }