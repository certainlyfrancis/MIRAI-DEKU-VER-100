module.exports.config = {
  name: "playlyrics",
  version: "2.0.4",
  hasPermssion: 0,
  credits: "Réynél",
  description: "Play a song with lyrics",
  commandCategory: "media",
  usages: "[title]",
  cooldowns: 5,
  dependencies: {
    "fs-extra": "",
    "request": "",
    "axios": "",
    "ytdl-core": "",
    "yt-search": ""
  }
};

module.exports.run = async ({ api, event }) => {
  const axios = require("axios");
  const fs = require("fs-extra");
  const ytdl = require("ytdl-core");
  const request = require("request");
  const yts = require("yt-search");

  const input = event.body;
  const text = input.substring(12);
  const data = input.split(" ");

  if (data.length < 2) {
    return api.sendMessage("ℹ️ | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝗉𝗅𝖾𝖺𝗌𝖾 𝗉𝗎𝗍 𝖺 𝗌𝗈𝗇𝗀 𝗇𝖺𝗆𝖾", event.threadID);
  }

  data.shift();
  const song = data.join(" ");

  try {
    api.sendMessage(`🔍 | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝖨'𝗆 𝖿𝗂𝗇𝖽𝗂𝗇𝗀 𝗅𝗒𝗋𝗂𝖼𝗌 𝖿𝗈𝗋 《${song}》 𝖯𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍...`, event.threadID);

    const res = await axios.get(`https://api.heckerman06.repl.co/api/other/lyrics2?song=${encodeURIComponent(song)}`);
    const lyrics = res.data.lyrics || "Not found!";
    const title = res.data.title || "Not found!";
    const artist = res.data.artist || "Not found!";

    const searchResults = await yts(song);
    if (!searchResults.videos.length) {
      return api.sendMessage("❎ | 𝖦𝗈𝗆𝖾𝗇 𝗌𝖾𝗇𝗌𝖾𝗂, 𝖻𝗎𝗍 𝖺𝗇 𝖾𝗋𝗋𝗈𝗋 𝗁𝖺𝗌 𝗈𝖼𝖼𝗎𝗋𝗋𝖾𝖽", event.threadID, event.messageID);
    }

    const video = searchResults.videos[0];
    const videoUrl = video.url;

    const stream = ytdl(videoUrl, { filter: "audioonly" });

    const fileName = `${event.senderID}.mp3`;
    const filePath = __dirname + `/cache/${fileName}`;

    stream.pipe(fs.createWriteStream(filePath));

    stream.on('response', () => {
      console.info('《 DOWNLOADER 》', 'Starting download now!');
    });

    stream.on('info', (info) => {
      console.info('《 DOWNLOADER 》', `Downloading ${info.videoDetails.title} by ${info.videoDetails.author.name}`);
    });

    stream.on('end', () => {
      console.info('《 DOWNLOADER 》 Downloaded');

      if (fs.statSync(filePath).size > 26214400) {
        fs.unlinkSync(filePath);
        return api.sendMessage('❎ | 𝖦𝗈𝗆𝖾𝗇 𝗌𝖾𝗇𝗌𝖾𝗂, 𝖻𝗎𝗍 𝗍𝗁𝖾 𝖿𝗂𝗅𝖾 𝖼𝗈𝗎𝗅𝖽 𝗇𝗈𝗍 𝖻𝖾 𝗌𝖾𝗇𝗍 𝖻𝖾𝖼𝖺𝗎𝗌𝖾 𝗂𝗍 𝗂𝗌 𝗅𝖺𝗋𝗀𝖾𝗋 𝗍𝗁𝖺𝗇 𝟤𝟧𝖬𝖡.', event.threadID);
      }

      const message = {
        body: `✅ | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝗁𝖾𝗋𝖾'𝗌 𝗒𝗈𝗎𝗋 𝗆𝗎𝗌𝗂𝖼, 𝖾𝗇𝗃𝗈𝗒!\n╭┉┉┅┉┅┄┄•◦ೋ•◦❥•◦ೋ\n  ⟬🅕︎🅐︎🅑︎⟭ 𝗣𝗥𝗢𝗝𝗘𝗖𝗧 𝗗𝗘𝗞𝗨\n•◦ೋ•◦❥•◦ೋ•┈┄┄┅┉┅┉╯\n\n𝗧𝗶𝘁𝗹𝗲: ${title}\n𝗔𝗿𝘁𝗶𝘀𝘁: ${artist}\n\n𝗟𝘆𝗿𝗶𝗰𝘀: ${lyrics}`,
        attachment: fs.createReadStream(filePath)
      };

      api.sendMessage(message, event.threadID, () => {
        fs.unlinkSync(filePath);
      });
    });
  } catch (error) {
    console.error('《 ERROR 》', error);
    api.sendMessage('❎ | 𝖦𝗈𝗆𝖾𝗇 𝗌𝖾𝗇𝗌𝖾𝗂, 𝖻𝗎𝗍 𝖺𝗇 𝖾𝗋𝗋𝗈𝗋 𝗈𝖼𝖼𝗎𝗋𝗋𝖾𝖽 𝗐𝗁𝗂𝗅𝖾 𝗉𝗋𝗈𝖼𝖾𝗌𝗌𝗂𝗇𝗀 𝗍𝗁𝖾 𝖼𝗈𝗆𝗆𝖺𝗇𝖽.', event.threadID);
  }
};