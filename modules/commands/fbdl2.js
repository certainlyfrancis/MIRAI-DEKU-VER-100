const axios = require("axios");

module.exports.config = {
  name: 'fbdl',
  version: '1.0.0',
  hasPermission: 0,
  credits: 'kira',// palitan mo nalang kasi nigga ka.
  usePrefix: false,
  description: 'Download and send a Facebook video',
  commandCategory: 'Utility',
  usages: 'fbdl [video URL]',
  cooldowns: 3,
};

module.exports.run = async function ({ api, args, event }) {
  if (!args[0]) {
    return api.sendMessage("Missing URL", event.threadID);
  }

  try {
    const videoUrl = args[0];


    const apiUrl = `https://alln1.gay-api.repl.co/api/fbdl?url=${encodeURIComponent(videoUrl)}`;


    api.sendMessage('☑ | Downloading, please wait...', event.threadID);


    const response = await axios.get(apiUrl, { responseType: 'stream' });

    // Check if the response status is OK (200)
    if (response.status === 200) {
      const videoStream = response.data;


      api.sendMessage(
        {
          attachment: videoStream,
        },
        event.threadID
      );
    } else {
      api.sendMessage("Error downloading video.", event.threadID);
    }
  } catch (error) {
    console.error('Error downloading video:', error.message);
    api.sendMessage("Error downloading video.", event.threadID);
  }
};