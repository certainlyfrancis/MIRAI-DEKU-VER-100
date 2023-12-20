const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports.config = {
  name: 'farlight',
  version: '1.0',
  hasPermission: 0,
  credits: 'HVCKER',
  description: 'Random farlight Video',
  commandCategory: 'General',
  cooldowns: 2,
};

module.exports.run = async ({ api, event }) => {
  try {
    api.sendMessage('⏱️ | 𝖬𝖺𝗌𝗍𝖾𝗋, 𝗍𝗁𝖾 𝗏𝗂𝖽𝖾𝗈 𝗂𝗌 𝗉𝗋𝗈𝖼𝖾𝖾𝖽𝗂𝗇𝗀 𝗍𝗈 𝗌𝖾𝗇𝖽, 𝗉𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍...', event.threadID);

    const response = await axios.get('https://farlight.yodi-iyods.repl.co/farlight/?apikey=farlight');
    const videoInfo = response.data;

    const videoUrl = videoInfo.url;


    const videoStreamResponse = await axios.get(videoUrl, { responseType: 'stream' });
    const videoData = videoStreamResponse.data;


    const tempFilePath = '84.mp4';
    const writeStream = fs.createWriteStream(tempFilePath);
    videoData.pipe(writeStream);

    writeStream.on('finish', () => {

      const message = {
        body: '𝗘𝗡𝗝𝗢𝗬 𝗪𝗔𝗧𝗖𝗛𝗜𝗡𝗚 𝗙84 𝗩𝗜𝗗𝗘𝗢:',
        attachment: fs.createReadStream(tempFilePath),
      };

      api.sendMessage(message, event.threadID, () => {

        fs.unlink(tempFilePath, (err) => {
          if (err) {
            console.error('Error deleting temporary file:', err);
          }
        });
      });
    });
  } catch (error) {
    console.error('Error fetching or sending the video:', error);
    api.sendMessage('Error sending the video.', event.threadID, event.messageID);
  }
};