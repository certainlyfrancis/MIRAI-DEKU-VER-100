const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports.config = {
  name: 'valorant',
  version: '1.0',
  hasPermission: 0,
  credits: 'Réynél',
  description: 'Random Valorant Video',
  commandCategory: 'entertainment',
  cooldowns: 2,
};

module.exports.run = async ({ api, event }) => {
  try {
    api.sendMessage('⏳ | 𝖨’𝗆 𝗌𝖾𝗇𝖽𝗂𝗇𝗀 𝗍𝗁𝖾 𝗏𝗂𝖽𝖾𝗈 𝗌𝖾𝗇𝗌𝖾𝗂, 𝗉𝗅𝖾𝖺𝗌𝖾 𝗐𝖺𝗂𝗍', event.threadID);

    const response = await axios.get('https://valo-api.yodi-iyods.repl.co/video/?apikey=valorant');
    const videoInfo = response.data;

    const videoUrl = videoInfo.url;

  
    const videoStreamResponse = await axios.get(videoUrl, { responseType: 'stream' });
    const videoData = videoStreamResponse.data;

    
    const tempFilePath = 'temp_video.mp4';
    const writeStream = fs.createWriteStream(tempFilePath);
    videoData.pipe(writeStream);

    writeStream.on('finish', () => {
      
      const message = {
        body: '✅ | 𝖲𝖾𝗇𝗌𝖾𝗂, 𝗁𝖾𝗋𝖾 𝗂𝗌 𝗒𝗈𝗎𝗋 𝗋𝖺𝗇𝖽𝗈𝗆 𝖵𝖺𝗅𝗈𝗋𝖺𝗇𝗍 𝗏𝗂𝖽𝖾𝗈:',
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
    api.sendMessage('❎ | 𝖦𝗈𝗆𝖾𝗇 𝗌𝖾𝗇𝗌𝖾𝗂, 𝖺𝗇 𝖾𝗋𝗋𝗈𝗋 𝗌𝖾𝗇𝖽𝗂𝗇𝗀 𝗍𝗁𝖾 𝗏𝗂𝖽𝖾𝗈.', event.threadID, event.messageID);
  }
};