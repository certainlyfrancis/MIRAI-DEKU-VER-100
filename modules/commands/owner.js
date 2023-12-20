const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports.config = {
  name: 'owner',
  version: '1.0.0',
  hasPermssion: 0,
  credits: 'Rickciel',
  description: 'Display bot owner information',
  commandCategory: 'system',
  usages: '',
  cooldowns: 0
};

module.exports.run = async ({ api, event }) => {
  try {
    const ownerInfo = {
      name: `${global.config.BOTOWNER}`,
      gender: 'MALE',
      age: '15',
      height: 'sᴇᴄʀᴇᴛ',
      facebookLink: `${global.config.OWNERLINK}`,
      status: '𝖲𝗂𝗇𝗀𝗅𝖾'
    };

    const videoUrl =  
'https://drive.google.com/uc?export=download&id=1GWNddmlpnvhHWuSdbg3NiUwpd68wVBkX'; // Replace with your Google Drive videoid link https://drive.google.com/uc?export=download&id=here put your video id

    const tmpFolderPath = path.join(__dirname, 'tmp');

    if (!fs.existsSync(tmpFolderPath)) {
      fs.mkdirSync(tmpFolderPath);
    }

    const videoResponse = await axios.get(videoUrl, { responseType: 'arraybuffer' });
    const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

    fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

    const response = `
✧ 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 ✧\n
Name: ${ownerInfo.name}
Gender: ${ownerInfo.gender}
Age: ${ownerInfo.age}
Height: ${ownerInfo.height}
Facebook: ${ownerInfo.facebookLink}
Status: ${ownerInfo.status}
`;


    await api.sendMessage({
      body: response,
      attachment: fs.createReadStream(videoPath)
    }, event.threadID, event.messageID);

    if (event.body.toLowerCase().includes('ownerinfo')) {
      api.setMessageReaction('😽', event.messageID, (err) => {}, true);
    }
  } catch (error) {
    console.error('Error in ownerinfo command:', error);
    return api.sendMessage('An error occurred while processing the command.', event.threadID);
  }
};