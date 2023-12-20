module.exports.config = {
  name: "fbdl",
  version: "1.0.2",
  hasPermssion: 0,
  credits: "Réynél",
  description: "Fb Vid Downloader",
  commandCategory: "downloader",
  usages: "[fbvideo link]",
  cooldowns: 2,
};

module.exports.run = async function ({ api, event, args }) {
  const axios = require('axios');
const fs = require('fs-extra');
  let link = args.join(" ");

  if (!args[0]) {
    api.sendMessage("ℹ️ | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝗉𝗅𝖾𝖺𝗌𝖾 𝗉𝗎𝗍 𝖺 𝗏𝖺𝗅𝗂𝖽 𝖿𝖻 𝗏𝗂𝖽𝖾𝗈 𝗅𝗂𝗇𝗄", event.threadID, event.messageID);
    return;
  }

  api.sendMessage("📥 | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝖨'𝗆 𝖽𝗈𝗐𝗇𝗅𝗈𝖺𝖽𝗂𝗇𝗀 𝗏𝗂𝖽𝖾𝗈, 𝗉𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍...", event.threadID, event.messageID);

  try {
    let path = __dirname + `/cache/fbVID.mp4`;

    const aa = await axios.get(`https://api.samirthakuri.repl.co/api/videofb?url=${encodeURI(link)}`);

    const vid = (await axios.get(aa.data.video, { responseType: "arraybuffer", })).data;

    fs.writeFileSync(path, Buffer.from(vid, 'utf-8'));

    api.sendMessage({
      body: `✅ | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝖽𝗈𝗐𝗇𝗅𝗈𝖺𝖽𝖾𝖽 𝗍𝗁𝖾 𝗏𝗂𝖽𝖾𝗈 𝗌𝗎𝖼𝖼𝖾𝗌𝗌𝖿𝗎𝗅𝗅𝗒`,
      attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);

  } catch (e) {
     api.sendMessage(`${e}`, event.threadID, event.messageID);
  };

};