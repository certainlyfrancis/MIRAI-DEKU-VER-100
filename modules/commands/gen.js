const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports.config = {
  name: "gen",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "kshitiz",// api credit deku// converted to botpack by plutoo0_0oo
  description: "<prompt> -<number of images to show>",
  usePrefix: true,
  commandCategory: "AI",
  cooldowns: 5
  },

  module.exports.run = async function ({ api, event, args }) {

    const [prompt, numberOfImages] = args.join(' ').split('-').map(arg => arg.trim());


    const numImagesToShow = numberOfImages ? parseInt(numberOfImages) : 5;


    const apiUrl = `https://free-api.ainz-sama101.repl.co/others/genimg?prompt=${encodeURIComponent(prompt)}`;
    const response = await axios.get(apiUrl);


    const images = response.data.result.slice(0, numImagesToShow);


    const cacheFolder = 'cache';
    if (!fs.existsSync(cacheFolder)) {
      fs.mkdirSync(cacheFolder);
    }


    const imgData = [];
    for (let index = 0; index < images.length; index++) {
      const image = images[index];
      const imageName = `image_${index + 1}.jpg`;
      const imagePath = path.join(cacheFolder, imageName);

      try {

        const imageResponse = await axios.get(image, { responseType: 'arraybuffer' });


        await fs.writeFile(imagePath, Buffer.from(imageResponse.data, 'binary'));


        imgData.push(imagePath);
      } catch (error) {
        console.error("Error downloading image:", error);
      }
    }


    api.sendMessage({
      attachment: imgData.map(imgPath => fs.createReadStream(imgPath)),
      body: numImagesToShow + ' image results💫👇 ' + prompt
    }, event.threadID, (err) => {
      if (err) console.error("Error sending images:", err);


      imgData.forEach(imgPath => {
        fs.unlinkSync(imgPath);
      });
    });
  }